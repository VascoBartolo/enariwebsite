'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Code2, Database, Cloud, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const services = [
  {
    icon: Activity,
    badge: 'Sport Biotech',
    title: 'EIT Wearable Technology',
    description:
      'Real-time muscle activity monitoring through Electrical Impedance Tomography. Non-invasive biosensing built for elite athletes and sports scientists demanding precision-grade biometrics.',
    features: ['16-electrode array', 'Real-time streaming', 'Wireless BT 5.0'],
    accent: 'text-enari-blue',
    border: 'hover:border-enari-blue/40',
    glow: 'group-hover:bg-enari-blue/5',
    badgeVariant: 'blue' as const,
    href: 'https://thonos.enari.com/',
    external: true,
  },
  {
    icon: Code2,
    badge: 'Software',
    title: 'Custom Software Development',
    description:
      'From embedded firmware to full-stack web applications. We build robust, scalable software solutions tailored to the specific demands of sport science and high-performance computing.',
    features: ['Embedded systems', 'Real-time processing', 'API integration'],
    accent: 'text-enari-warm',
    border: 'hover:border-enari-warm/40',
    glow: 'group-hover:bg-enari-warm/5',
    badgeVariant: 'warm' as const,
    href: '/services/ai-and-mlops',
    external: false,
  },
  {
    icon: Database,
    badge: 'Data Engineering',
    title: 'Data Structures & Analytics',
    description:
      'End-to-end data pipelines, centralized warehouses, and BI platforms that transform raw sensor data into actionable performance insights your team can act on immediately.',
    features: ['ETL pipelines', 'Data warehousing', 'BI dashboards'],
    accent: 'text-enari-blue',
    border: 'hover:border-enari-blue/40',
    glow: 'group-hover:bg-enari-blue/5',
    badgeVariant: 'blue' as const,
    href: '/services/data-engineering-and-data-warehouse',
    external: false,
  },
  {
    icon: Cloud,
    badge: 'Cloud & DevOps',
    title: 'Cloud Infrastructure',
    description:
      'Scalable, resilient cloud environments designed for high-frequency biomedical data. Automated CI/CD pipelines, Kubernetes orchestration, and infrastructure-as-code at every layer.',
    features: ['AWS / GCP / Azure', 'Kubernetes & Docker', 'IaC with Terraform'],
    accent: 'text-enari-warm',
    border: 'hover:border-enari-warm/40',
    glow: 'group-hover:bg-enari-warm/5',
    badgeVariant: 'warm' as const,
    href: '/services/devops-and-cloud-infrastructure',
    external: false,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-background py-24 lg:py-32">
      {/* Section header */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-10 mb-16 lg:mb-20"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeUp}>
          <Badge variant="blue" className="mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-enari-blue inline-block" />
            What We Build
          </Badge>
        </motion.div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-xl"
          >
            Four domains.{' '}
            <span className="gradient-text">One mission.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-base lg:text-lg max-w-sm leading-relaxed"
          >
            We combine sport science expertise with engineering excellence to eliminate the gap between ambition and execution.
          </motion.p>
        </div>
      </motion.div>

      {/* Service cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="grid md:grid-cols-2 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {services.map(({ icon: Icon, badge, title, description, features, accent, border, glow, badgeVariant, href, external }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.22, ease: 'easeOut' } }}
              className={`group relative glass-card rounded-2xl p-7 lg:p-9 border border-enari-border ${border} transition-colors duration-500 cursor-default`}
            >
              <div className={`absolute inset-0 rounded-2xl ${glow} transition-all duration-500`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-surface-elevated ${accent}`}>
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <Badge variant={badgeVariant}>{badge}</Badge>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-white/50 text-sm lg:text-base leading-relaxed mb-6">{description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {features.map((f) => (
                    <span key={f} className="text-xs text-white/40 border border-white/[0.08] rounded-full px-3 py-1">
                      {f}
                    </span>
                  ))}
                </div>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-semibold ${accent} opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0`}
                  >
                    Learn more <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link
                    href={href}
                    className={`flex items-center gap-2 text-sm font-semibold ${accent} opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0`}
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
