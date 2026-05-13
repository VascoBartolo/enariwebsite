import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbopack: {
      // Force all 'three' imports to resolve to 'three/webgpu' so only
      // one Three.js instance exists on the page. Without this, the hero
      // (three/webgpu) and R3F (three) load two separate bundles, which
      // triggers "Multiple instances of Three.js" and causes WebGL context loss.
      resolveAlias: {
        three: 'three/webgpu',
      },
    },
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.postimg.cc' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
