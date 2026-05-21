'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const stats = [
  { value: '95%',  label: 'Long-term client partnerships' },
  { value: '4',    label: 'Core technology domains' },
  { value: '100+', label: 'Athletes & teams worldwide' },
  { value: '24/7', label: 'Cloud uptime guarantee' },
];

export function StatsSection() {
  return (
    <section id="stats" className="relative border-y border-enari-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-14">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex flex-col items-center text-center lg:border-r lg:last:border-r-0 border-enari-border px-6"
            >
              <span className="text-4xl lg:text-5xl font-bold text-white mb-1">
                {value}
              </span>
              <span className="text-xs lg:text-sm text-white/40 font-medium uppercase tracking-widest mt-1">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
