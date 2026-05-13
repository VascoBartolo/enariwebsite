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

// ─── note: `bloom` and `screen` are from 'three/tsl' in three@0.168
//     (`bloom` moved from examples/jsm in 0.169+; `blendScreen` was renamed to `screen`)

const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP   = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

extend(THREE as any);

// ─── Post Processing ──────────────────────────────────────────────────────────
const PostProcessing = ({
  strength  = 1,
  threshold = 1,
}: {
  strength?:  number;
  threshold?: number;
}) => {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef<any>({ value: 0 });

  const fx = useMemo(() => {
    const pp         = new (THREE as any).PostProcessing(gl);
    const scenePass  = pass(scene, camera);
    const sceneColor = scenePass.getTextureNode('output');
    const bloomPass  = bloom(sceneColor, strength, 0.5, threshold);

    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    // Scan line — use the uniform node directly (not .value) so it animates
    const uvY       = uv().y;
    const scanLine  = smoothstep(0, float(0.05), abs(uvY.sub(uScanProgress)));
    const scanGlow  = vec3(0.43, 0.78, 0.91).mul(0.25); // brand-blue, subtle
    const scanFactor = smoothstep(0.9, 1.0, oneMinus(scanLine));

    const withScan  = mix(sceneColor, sceneColor.add(scanGlow), scanFactor);
    pp.outputNode   = withScan.add(bloomPass);
    return pp;
  }, [camera, gl, scene, strength, threshold]);

  useFrame(({ clock }) => {
    progressRef.current.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    fx.renderAsync();
  }, 1);

  return null;
};

// ─── Scene ───────────────────────────────────────────────────────────────────
const WIDTH  = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef  = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) {
      setVisible(true);
      window.dispatchEvent(new CustomEvent('hero:ready'));
    }
  }, [rawMap, depthMap]);

  const { material, uniforms } = useMemo(() => {
    const uPointer  = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);
    // 0.04 = noticeable parallax (~4% UV shift per unit depth per NDC unit)
    const strength  = 0.04;

    const tDepthMap = texture(depthMap);
    const tMap      = texture(rawMap, uv().add(uPointer.mul(tDepthMap.r).mul(strength)));

    const aspect     = float(WIDTH).div(HEIGHT);
    const tUv        = vec2(uv().x.mul(aspect), uv().y);
    const tiling     = vec2(120.0);
    const tiledUv    = mod(tUv.mul(tiling), 2.0).sub(1.0);
    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));
    const dist       = float(tiledUv.length());
    const dot        = float(smoothstep(0.5, 0.49, dist)).mul(brightness);
    const flow       = oneMinus(smoothstep(0, 0.02, abs(tDepthMap.r.sub(uProgress))));

    // Single colour: brand-blue (R=0, G=4, B=8) → clean cyan-blue glow
    const mask     = dot.mul(flow).mul(vec3(0, 4, 8));
    const finalRGB = screen(tMap.rgb, mask);
    const final    = vec4(finalRGB, tMap.a);

    const mat = new (THREE as any).MeshBasicNodeMaterial({
      colorNode:   final,
      transparent: true,
      opacity:     0,
    });

    return { material: mat, uniforms: { uPointer, uProgress } };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  // Progress + fade — separate from pointer to match original's two-frame pattern
  useFrame(({ clock }) => {
    uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    if (meshRef.current) {
      const mat = (meshRef.current as any).material;
      if (mat?.opacity !== undefined) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, visible ? 1 : 0, 0.07);
      }
    }
  });

  // Pointer — assign by reference so the same Vector2 object R3F mutates
  // is what the uniform reads each frame
  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  return (
    <mesh ref={meshRef} scale={[w * 0.40, h * 0.40, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

// ─── HeroFuturistic ──────────────────────────────────────────────────────────
export const HeroFuturistic = () => {
  const titleWords  = 'Engineer Human Performance'.split(' ');
  const subtitle    = 'Sport biotech meets cutting-edge technology.';

  const [visibleWords,    setVisibleWords]    = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays,          setDelays]          = useState<number[]>([]);
  const [subtitleDelay,   setSubtitleDelay]   = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const t = setTimeout(() => setVisibleWords((v) => v + 1), 600);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, [visibleWords, titleWords.length]);

  const scrollToNext = () =>
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="h-svh relative">
      {/* Background gradient — matches gradient-text palette (#6EC6E8 → #E0987A) */}
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
            {titleWords.map((word, i) => (
              <div
                key={i}
                className={i < visibleWords ? 'fade-in' : ''}
                style={{
                  animationDelay: `${i * 0.13 + (delays[i] || 0)}s`,
                  opacity: i < visibleWords ? undefined : 0,
                }}
              >
                {i === titleWords.length - 1 ? (
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
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      {/* Scroll button */}
      <button
        className="explore-btn pointer-events-auto"
        style={{ animationDelay: '2.4s' }}
        onClick={scrollToNext}
      >
        Scroll to explore
        <span className="explore-arrow">
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6 12L11 17L16 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {/* WebGPU canvas — alpha: true + clearAlpha(0) so the gradient div shows through */}
      <Canvas
        flat
        style={{ background: 'transparent' }}
        gl={async (props: any) => {
          const renderer = new (THREE as any).WebGPURenderer({ ...props, alpha: true });
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
