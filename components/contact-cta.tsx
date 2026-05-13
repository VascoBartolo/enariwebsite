'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/motion';

export function ContactCta() {
  return (
    <section className="relative bg-surface py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-enari-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-enari-warm/4 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold text-enari-blue uppercase tracking-widest mb-5"
        >
          Ready to start?
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Let's build something{' '}
          <span className="gradient-text">exceptional</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Tell us about your data challenge and we'll find the right solution together — fast, practical, and ROI-focused.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-enari-blue transition-all duration-300 text-sm"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-enari-border text-white/70 hover:text-white hover:border-enari-blue/40 rounded-full transition-all duration-300 text-sm font-semibold"
          >
            <Calendar size={16} /> Book a discovery call
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
