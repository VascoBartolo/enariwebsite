'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { fadeUp, fadeLeft, stagger, viewport } from '@/lib/motion';

const features = [
  { title: 'Non-invasive EIT sensing', desc: 'Real-time electrical impedance tomography of muscle tissue — no needles, no discomfort.' },
  { title: '16-electrode array', desc: 'Dense sensor matrix captures spatial muscle activation maps with sub-millisecond latency.' },
  { title: '1 kHz sampling rate', desc: 'High-frequency acquisition catches every contraction phase for complete biomechanical analysis.' },
  { title: 'Wireless & wired I/O', desc: 'Bluetooth 5.0 for field use; USB-C for lab-grade, zero-latency streaming.' },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="relative bg-surface py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-enari-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-enari-warm/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — device image */}
          <motion.div
            className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-surface-elevated border border-enari-border"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <Image
              src="/images/Picture1.png"
              alt="EIT Assembly device"
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-enari-blue animate-pulse" />
              <span className="text-xs text-enari-blue font-semibold tracking-wider uppercase">Live preview</span>
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-white/30 font-mono">
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
                The EIT{' '}
                <span className="gradient-text">Assembly</span>
              </h2>
              <p className="mt-4 text-white/50 text-base lg:text-lg leading-relaxed">
                Electrical Impedance Tomography — reimagined as a precision wearable. The EIT Assembly gives athletes and sports scientists real-time, non-invasive muscle activity data that was previously impossible to capture in motion.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {features.map(({ title, desc }) => (
                <motion.div
                  key={title}
                  whileHover={{ x: 4, transition: { duration: 0.2, ease: 'easeOut' } }}
                  className="flex gap-4 p-4 rounded-xl border border-enari-border bg-surface hover:border-enari-blue/30 transition-colors duration-300"
                >
                  <CheckCircle2 size={18} className="text-enari-blue mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-xs text-white/40 leading-relaxed mt-0.5">{desc}</p>
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
