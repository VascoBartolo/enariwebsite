'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three/webgpu';
import { Mesh } from 'three';

import {
  abs,
  bloom,
  float,
  mix,
  mod,
  mx_cell_noise_float,
  oneMinus,
  pass,
  screen,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  vec4,
} from 'three/tsl';

const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

extend(THREE as any);

// ─── Post Processing ──────────────────────────────────────────────────────────
const PostProcessing = ({
  strength = 1,
  threshold = 1,
}: {
  strength?: number;
  threshold?: number;
}) => {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef<any>({ value: 0 });

  const fx = useMemo(() => {
    const pp = new (THREE as any).PostProcessing(gl);
    const scenePass = pass(scene, camera);
    const sceneColor = scenePass.getTextureNode('output');
    const bloomPass = bloom(sceneColor, strength, 0.5, threshold);

    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    const uvY = uv().y;
    const scanLine = smoothstep(0, float(0.05), abs(uvY.sub(uScanProgress)));

    // Softer scan glow using the same dark teal family as your dots.
    const scanGlow = vec3(0.02, 0.298, 0.329).mul(0.18);
    const scanFactor = smoothstep(0.9, 1.0, oneMinus(scanLine));

    const withScan = mix(sceneColor, sceneColor.add(scanGlow), scanFactor);

    pp.outputNode = withScan.add(bloomPass);

    return pp;
  }, [camera, gl, scene, strength, threshold]);

  useFrame(({ clock }) => {
    progressRef.current.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;

    fx.renderAsync();
  }, 1);

  return null;
};

// ─── Scene ───────────────────────────────────────────────────────────────────
const WIDTH = 300;
const HEIGHT = 300;
const MODEL_SCALE = 0.4;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);

  const meshRef = useRef<Mesh>(null);
  const pointerTargetRef = useRef(new THREE.Vector2(0, 0));
  const pointerCurrentRef = useRef(new THREE.Vector2(0, 0));

  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) {
      setVisible(true);
      window.dispatchEvent(new CustomEvent('hero:ready'));
    }
  }, [rawMap, depthMap]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0, 0));
    const uProgress = uniform(0);
    const uHover = uniform(0);

    // Subtle depth/parallax effect on hover.
    const parallaxStrength = 0.018;

    const tDepthMap = texture(depthMap);

    const tMap = texture(
      rawMap,
      uv().add(
        uPointer
          .mul(tDepthMap.r)
          .mul(float(parallaxStrength).mul(uHover))
      )
    );

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));

    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

    /**
     * Original full dot animation logic:
     * The animated `uProgress` value scans through the depth map.
     * Dots appear only where the current depth value is close to uProgress.
     */
    const depth = tDepthMap.r;

    const flow = oneMinus(
      smoothstep(0, 0.02, abs(depth.sub(uProgress)))
    );

    /**
     * Your final dot mask colors.
     * Dark teal -> warm dark bronze/brown.
     */
    const gradientStart = vec3(0.020, 0.298, 0.329);
    const gradientEnd = vec3(0.431, 0.239, 0.035);

    const gradientFactor = smoothstep(
      0.0,
      1.0,
      uv().x.mul(0.5).add(oneMinus(uv().y).mul(0.5))
    );

    const dotGradient = mix(
      gradientStart,
      gradientEnd,
      gradientFactor
    ).mul(6.0);

    const mask = dot.mul(flow).mul(dotGradient);

    /**
     * Keep the current preferred screen blend logic.
     * This preserves the glowing dot style but uses your darker gradient mask.
     */
    const finalRGB = screen(tMap.rgb, mask);
    const final = vec4(finalRGB, tMap.a);

    const mat = new (THREE as any).MeshBasicNodeMaterial({
      colorNode: final,
      transparent: true,
      opacity: 0,
    });

    return {
      material: mat,
      uniforms: {
        uPointer,
        uProgress,
        uHover,
      },
    };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    /**
     * Original dot animation timing.
     * This drives the depth-scan flow across the model.
     */
    uniforms.uProgress.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;

    uniforms.uHover.value = THREE.MathUtils.lerp(
      uniforms.uHover.value,
      hovered ? 1 : 0,
      0.08
    );

    pointerCurrentRef.current.lerp(pointerTargetRef.current, 0.08);
    uniforms.uPointer.value.copy(pointerCurrentRef.current);

    if (meshRef.current) {
      const mat = (meshRef.current as any).material;

      if (mat?.opacity !== undefined) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, visible ? 1 : 0, 0.07);
      }

      /**
       * Subtle hover animation.
       * Reduced compared with the previous version so the motion does not feel too strong.
       */
      const hoverScale = hovered ? 1.012 : 1;

      meshRef.current.scale.x = THREE.MathUtils.lerp(
        meshRef.current.scale.x,
        w * MODEL_SCALE * hoverScale,
        0.06
      );

      meshRef.current.scale.y = THREE.MathUtils.lerp(
        meshRef.current.scale.y,
        h * MODEL_SCALE * hoverScale,
        0.06
      );

      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        pointerCurrentRef.current.x * 0.018 * uniforms.uHover.value,
        0.06
      );

      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -pointerCurrentRef.current.y * 0.018 * uniforms.uHover.value,
        0.06
      );
    }
  });

  const handlePointerMove = (event: any) => {
    event.stopPropagation();

    if (!event.uv) return;

    pointerTargetRef.current.set(
      (event.uv.x - 0.5) * 0.85,
      (event.uv.y - 0.5) * 0.85
    );
  };

  const handlePointerOut = () => {
    setHovered(false);
    pointerTargetRef.current.set(0, 0);
  };

  return (
    <mesh
      ref={meshRef}
      scale={[w * MODEL_SCALE, h * MODEL_SCALE, 1]}
      material={material}
      onPointerOver={() => setHovered(true)}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
    >
      <planeGeometry />
    </mesh>
  );
};

// ─── HeroFuturistic ──────────────────────────────────────────────────────────
export const HeroFuturistic = () => {
  const titleWords = 'Engineer Human Performance'.split(' ');
  const subtitle = 'Sport biotech meets cutting-edge technology.';

  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => {
        setVisibleWords((current) => current + 1);
      }, 600);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSubtitleVisible(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, [visibleWords, titleWords.length]);

  const scrollToNext = () => {
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-svh relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 52%, rgba(110,198,232,0.10) 0%, rgba(224,152,122,0.06) 58%, transparent 100%)',
        }}
      />

      {/* Text overlay */}
      <div className="h-svh uppercase items-center w-full absolute z-[60] pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight">
          <div className="flex flex-wrap gap-x-3 lg:gap-x-7 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? 'fade-in' : ''}
                style={{
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                }}
              >
                {index === titleWords.length - 1 ? (
                  <span className="text-enari-blue">{word}</span>
                ) : (
                  word
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs md:text-lg xl:text-xl 2xl:text-2xl mt-4 overflow-hidden text-white/60 font-light normal-case tracking-wide">
          <div
            className={subtitleVisible ? 'fade-in-subtitle' : ''}
            style={{
              animationDelay: `${
                titleWords.length * 0.13 + 0.2 + subtitleDelay
              }s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      {/* Scroll button
      <button
        className="explore-btn pointer-events-auto"
        style={{ animationDelay: '2.4s' }}
        onClick={scrollToNext}
      >
        Scroll to explore
        <span className="explore-arrow">
          <svg
            width="20"
            height="20"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5V17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M6 12L11 17L16 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button> */}

      <Canvas
        flat
        style={{ background: 'transparent' }}
        gl={async (props: any) => {
          const renderer = new (THREE as any).WebGPURenderer({
            ...props,
            alpha: true,
          });

          await renderer.init();
          renderer.setClearAlpha(0);

          return renderer;
        }}
      >
        <PostProcessing />
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroFuturistic;