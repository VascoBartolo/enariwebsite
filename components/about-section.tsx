'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Target, Zap, Users } from 'lucide-react';
import { fadeUp, fadeLeft, stagger, viewport } from '@/lib/motion';

const values = [
  {
    icon: Target,
    title: 'Precision First',
    desc: 'Every measurement, every line of code, every infrastructure decision is held to elite-grade standards.',
  },
  {
    icon: Zap,
    title: 'Speed to Insight',
    desc: 'Raw data becomes actionable intelligence within milliseconds — because every second matters in sport.',
  },
  {
    icon: Users,
    title: 'Long-term Partnership',
    desc: '72% of our clients stay with us for years. We grow with you, not just for you.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Aurora background */}
      <Image
        src="/images/background-aurora-2.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.12] pointer-events-none select-none"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/70 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-enari-warm/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — image + card overlay */}
          <motion.div
            className="relative"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-surface-elevated border border-enari-border">
              <Image
                src="/images/Picture1.png"
                alt="Enari technology"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 border border-enari-border hidden lg:block">
              <p className="text-4xl font-bold text-white">72%</p>
              <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">Long-term clients</p>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full flex-1 ${i < 7 ? 'bg-enari-blue' : 'bg-white/10'}`}
                  />
                ))}
              </div>
            </div>

            {/* Munich tag */}
            <div className="absolute top-5 left-5 glass-card rounded-full px-4 py-2 text-xs font-semibold text-white/60 border border-enari-border flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-enari-warm" />
              Munich, Germany
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            className="space-y-10"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div>
              <motion.div variants={fadeUp}>
                <Badge variant="warm" className="mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-enari-warm inline-block" />
                  Our Story
                </Badge>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold leading-tight">
                Where biology{' '}
                <span className="gradient-text">meets technology</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-white/50 text-base lg:text-lg leading-relaxed">
                Enari was founded at the intersection of sports science and engineering. We saw athletes being held back not by their potential, but by the tools available to measure and understand it.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-white/50 text-base leading-relaxed">
                Our team of biotech engineers, software developers, and sports scientists work together from our Munich base to build the infrastructure that turns human performance data into competitive advantage — for professional clubs, research institutions, and high-performance training centers worldwide.
              </motion.p>
            </div>

            {/* Values */}
            <motion.div variants={stagger} className="space-y-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="flex gap-4"
                >
                  <div className="mt-0.5 p-2.5 rounded-xl bg-surface-elevated border border-enari-border text-enari-blue shrink-0">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="text-sm text-white/40 leading-relaxed mt-0.5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
