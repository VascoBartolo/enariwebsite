'use client';

import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Center,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from '@react-three/drei';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { fadeUp, fadeLeft, stagger, viewport } from '@/lib/motion';
import * as THREE from 'three';

const features = [
  {
    title: 'Non-invasive EIT sensing',
    desc: 'Real-time electrical impedance tomography of muscle tissue — no needles, no discomfort.',
  },
  {
    title: '16-electrode array',
    desc: 'Dense sensor matrix captures spatial muscle activation maps with sub-millisecond latency.',
  },
  {
    title: '1 kHz sampling rate',
    desc: 'High-frequency acquisition catches every contraction phase for complete biomechanical analysis.',
  },
  {
    title: 'Wireless & wired I/O',
    desc: 'Bluetooth 5.0 for field use; USB-C for lab-grade, zero-latency streaming.',
  },
];

type GLTFResult = {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.Material>;
};

function EITAssemblyModel(props: any) {
  const groupRef = useRef<THREE.Group>(null);

  const { nodes } = useGLTF(
    '/scene_no_arm/scene_without_arm_darker_sleeve.gltf'
  ) as unknown as GLTFResult;

  const [scale, setScale] = useState(42);

  useEffect(() => {
    const updateScale = () => {
      setScale(window.innerWidth < 768 ? 25 : 42);
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const safeMaterials = useMemo(() => {
    return {
      board: new THREE.MeshStandardMaterial({
        color: '#17282d',
        roughness: 0.58,
        metalness: 0.18,
      }),
      darkBoard: new THREE.MeshStandardMaterial({
        color: '#0d171a',
        roughness: 0.62,
        metalness: 0.15,
      }),
      plastic: new THREE.MeshStandardMaterial({
        color: '#111316',
        roughness: 0.72,
        metalness: 0.08,
      }),
      mediumParts: new THREE.MeshStandardMaterial({
        color: '#29343a',
        roughness: 0.48,
        metalness: 0.28,
      }),
      smallParts: new THREE.MeshStandardMaterial({
        color: '#3d464b',
        roughness: 0.42,
        metalness: 0.35,
      }),
      chrome: new THREE.MeshStandardMaterial({
        color: '#b8b8b8',
        roughness: 0.22,
        metalness: 0.8,
      }),
      plug: new THREE.MeshStandardMaterial({
        color: '#241b14',
        roughness: 0.62,
        metalness: 0.12,
      }),
      band: new THREE.MeshStandardMaterial({
        color: '#2f2117',
        roughness: 0.7,
        metalness: 0.05,
      }),
    };
  }, []);

  useEffect(() => {
    return () => {
      Object.values(safeMaterials).forEach((material) => material.dispose());
    };
  }, [safeMaterials]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const elapsed = clock.getElapsedTime();

    groupRef.current.rotation.y = Math.sin(elapsed * 0.32) * 0.08;
    groupRef.current.position.y = Math.sin(elapsed * 0.75) * 0.035;
  });

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 6, 0, 0]}
      scale={scale}
    >
      {nodes.Assembly_bridge?.geometry && (
        <mesh
          geometry={nodes.Assembly_bridge.geometry}
          material={safeMaterials.mediumParts}
        />
      )}

      {nodes.Assembly_medium_parts?.geometry && (
        <mesh
          geometry={nodes.Assembly_medium_parts.geometry}
          material={safeMaterials.mediumParts}
        />
      )}

      {nodes.Assembly_PCB_EIT_Eval_Kit_10_with_Teensy?.geometry && (
        <mesh
          geometry={nodes.Assembly_PCB_EIT_Eval_Kit_10_with_Teensy.geometry}
          material={safeMaterials.board}
        />
      )}

      {nodes.Assembly_small_parts?.geometry && (
        <mesh
          geometry={nodes.Assembly_small_parts.geometry}
          material={safeMaterials.smallParts}
        />
      )}

      {nodes.Bolts?.geometry && (
        <mesh
          geometry={nodes.Bolts.geometry}
          material={safeMaterials.chrome}
        />
      )}

      {nodes.bottom_plate?.geometry && (
        <mesh
          geometry={nodes.bottom_plate.geometry}
          material={safeMaterials.plastic}
        />
      )}

      {nodes.top_plate?.geometry && (
        <mesh
          geometry={nodes.top_plate.geometry}
          material={safeMaterials.darkBoard}
        />
      )}

      {nodes.PLUG?.geometry && (
        <mesh
          geometry={nodes.PLUG.geometry}
          material={safeMaterials.plug}
        />
      )}

      {nodes.Tisue?.geometry && (
        <mesh
          geometry={nodes.Tisue.geometry}
          material={safeMaterials.band}
        />
      )}
    </group>
  );
}

function ModelFallback() {
  return (
    <mesh>
      <boxGeometry args={[1.4, 0.18, 0.9]} />
      <meshStandardMaterial color="#12343a" roughness={0.55} metalness={0.2} />
    </mesh>
  );
}

  type CameraSettings = {
    position: [number, number, number];
    fov: number;
  };

  const DESKTOP_CAMERA: CameraSettings = {
    position: [0, 0.8, 15],
    fov: 50,
  };

  const MOBILE_CAMERA: CameraSettings = {
    // Adjust these freely for mobile
    position: [6, 1.1, -5],
    fov: 58,
  };

  function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const update = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      update();
      window.addEventListener('resize', update);

      return () => {
        window.removeEventListener('resize', update);
      };
    }, [breakpoint]);

    return isMobile;
  }

function ProductModelViewer() {
  const isMobile = useIsMobile();
  const camera = isMobile ? MOBILE_CAMERA : DESKTOP_CAMERA;

  return (
    <Canvas
      className="absolute inset-0 z-[2]"
      dpr={isMobile ? [1, 1] : [1, 1.25]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: false,
      }}
      camera={{
        position: camera.position,
        fov: camera.fov,
      }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(0x000000, 0);
        scene.background = null;
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={camera.position}
        fov={camera.fov}
      />

      <ambientLight intensity={1.15} />
      <directionalLight position={[4, 5, 6]} intensity={2.0} />
      <directionalLight position={[-4, 2, -3]} intensity={0.65} />
      <pointLight position={[0, 3, 3]} intensity={0.75} color="#6EC6E8" />
      <pointLight position={[3, -2, 2]} intensity={0.55} color="#E0987A" />

      <Suspense fallback={<ModelFallback />}>
        <Center>
          <EITAssemblyModel />
        </Center>

        <Environment preset="city" resolution={isMobile ? 32 : 64} />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={isMobile ? 0.24 : 0.32}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.75}
      />
    </Canvas>
  );
}

useGLTF.preload('/scene_no_arm/scene_without_arm_darker_sleeve.gltf');

export default function TechnologySection() {
  return (
    <section
      id="technology"
      className="relative bg-surface py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-enari-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-enari-warm/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — 3D device model */}
          <motion.div
            className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-surface-elevated border border-enari-border"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Dark base */}
            <div className="absolute inset-0 z-0 bg-[#060608]" />

            {/* Hero-like radial gradient */}
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 75% 55% at 50% 52%, rgba(110,198,232,0.14) 0%, rgba(224,152,122,0.08) 48%, rgba(6,6,8,0.0) 72%)',
              }}
            />

            {/* Soft side glow */}
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(2,76,84,0.28) 0%, rgba(6,6,8,0.1) 45%, rgba(110,61,9,0.24) 100%)',
              }}
            />

            {/* Subtle noise / depth vignette */}
            <div
              className="absolute inset-0 z-[1] pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.18) 62%, rgba(0,0,0,0.55) 100%)',
              }}
            />

            <ProductModelViewer />

            <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
              <span className="w-2 h-2 rounded-full bg-enari-blue animate-pulse" />
              <span className="text-xs text-enari-blue font-semibold tracking-wider uppercase">
                Live preview
              </span>
            </div>

            <div className="absolute bottom-4 right-4 text-xs text-white/30 font-mono z-20">
              EIT Assembly v1.0
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <Badge variant="blue" className="mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-enari-blue inline-block" />
                Flagship Product
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                The EIT <span className="gradient-text">Assembly</span>
              </h2>

              <p className="mt-4 text-white/50 text-base lg:text-lg leading-relaxed">
                Electrical Impedance Tomography — reimagined as a precision
                wearable. The EIT Assembly gives athletes and sports scientists
                real-time, non-invasive muscle activity data that was previously
                impossible to capture in motion.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {features.map(({ title, desc }) => (
                <motion.div
                  key={title}
                  whileHover={{
                    x: 4,
                    transition: { duration: 0.2, ease: 'easeOut' },
                  }}
                  className="flex gap-4 p-4 rounded-xl border border-enari-border bg-surface hover:border-enari-blue/30 transition-colors duration-300"
                >
                  <CheckCircle2
                    size={18}
                    className="text-enari-blue mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />

                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-xs text-white/40 leading-relaxed mt-0.5">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-enari-blue transition-all duration-300"
              >
                Request a Demo
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-enari-border text-white text-sm font-medium rounded-full hover:border-enari-blue/50 transition-all duration-300"
              >
                View Specs
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}