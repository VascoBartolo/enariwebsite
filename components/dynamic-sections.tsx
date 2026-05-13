'use client';

import dynamic from 'next/dynamic';

const HeroPlaceholder = () => (
  <section className="min-h-svh bg-background" />
);

// Dynamic imports with ssr: false must live inside a Client Component in Next.js 15
export const HeroSection = dynamic(
  () => import('@/components/hero-section'),
  { ssr: false, loading: HeroPlaceholder }
);

export const TechnologySection = dynamic(
  () => import('@/components/technology-section'),
  { ssr: false }
);
