'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award, Users, ArrowRight, Brain, Camera,
  BarChart2, Database, Cloud, Cpu,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from '@/lib/motion';

const stats = [
  { value: '72%', label: 'of clients choose long-term collaboration' },
  { value: '4',   label: 'core service domains' },
  { value: '100%', label: 'ROI-focused delivery' },
];

const caseStudies = [
  {
    category: 'AI & MLOps',
    icon: Brain,
    accent: 'enari-blue',
    title: 'LLM-Based Master Data Optimisation',
    client: 'BayWa AG',
    summary:
      'BayWa needed to clean and standardise a large-scale master data estate that had accumulated inconsistencies across business units over years. Manual remediation was too slow and too expensive at scale.',
    challenge: 'Inconsistent product master data across thousands of SKUs, preventing reliable reporting and downstream automation.',
    solution: 'We developed a large language model pipeline to classify, deduplicate, and enrich master data records at scale — reducing manual effort by over 80%.',
    outcomes: [
      'Automated classification of product master records',
      '80%+ reduction in manual data cleaning effort',
      'Improved data consistency for downstream analytics',
      'Reusable pipeline integrated into existing ERP workflows',
    ],
  },
  {
    category: 'Computer Vision',
    icon: Camera,
    accent: 'enari-warm',
    title: 'Automated Image Analysis for Hybrid Materials',
    client: 'Industrial R&D',
    summary:
      'A research and development project requiring automated visual inspection of composite material samples. Manual inspection was a bottleneck in the quality control loop and introduced operator subjectivity.',
    challenge: 'High-volume visual inspection of hybrid materials with complex defect patterns that varied by material composition and process conditions.',
    solution: 'We trained a convolutional neural network on annotated sample images and deployed it as an inference API integrated with the existing quality management system.',
    outcomes: [
      'Automated defect detection with >95% accuracy',
      'Removed manual inspection bottleneck from production loop',
      'Consistent, reproducible quality grading',
      'Deployment via containerised API for easy integration',
    ],
  },
];

const servicePathways = [
  { icon: BarChart2, label: 'Data Analytics & BI',       href: '/services/enari-services-datenanalyse', accent: 'enari-blue' },
  { icon: Database,  label: 'Data Engineering',           href: '/services/data-engineering-und-data-warehouse-consulting', accent: 'enari-blue' },
  { icon: Cloud,     label: 'DevOps & Cloud Infrastructure', href: '/services/devops-und-cloud-infrastruktur-consulting', accent: 'enari-warm' },
  { icon: Cpu,       label: 'AI & MLOps',                 href: '/services/kuenstliche-intelligenz-und-mlops', accent: 'enari-warm' },
];

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-enari-blue/5 rounded-full blur-[120px] pointer-events-none" />
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <Badge variant="blue">
              <span className="w-1.5 h-1.5 rounded-full bg-enari-blue inline-block" />
              Case Studies
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6"
          >
            Proof in{' '}
            <span className="gradient-text">production</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg lg:text-xl max-w-2xl leading-relaxed mb-10"
          >
            We don't just consult — we build and ship. Here's a selection of projects that demonstrate our approach to data, AI, and engineering at real client scale.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-surface py-16">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="glass-card rounded-2xl p-8 border border-enari-border text-center"
              >
                <p className="text-5xl font-bold gradient-text mb-3">{value}</p>
                <p className="text-white/50 text-sm leading-relaxed">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section className="py-24 lg:py-32">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="mb-14">
            <Badge variant="blue" className="mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-enari-blue inline-block" />
              Project examples
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Real problems.{' '}
              <span className="gradient-text">Real results.</span>
            </h2>
          </motion.div>

          <div className="space-y-10">
            {caseStudies.map(({ category, icon: Icon, accent, title, client, summary, challenge, solution, outcomes }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-3xl p-8 lg:p-10 border border-enari-border"
              >
                <div className="grid lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`p-2.5 rounded-xl bg-surface-elevated w-fit ${accent === 'enari-blue' ? 'text-enari-blue' : 'text-enari-warm'}`}>
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <span className={`text-xs font-semibold uppercase tracking-widest ${accent === 'enari-blue' ? 'text-enari-blue' : 'text-enari-warm'}`}>
                        {category}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-white/40 text-sm mb-5">Client: {client}</p>
                    <p className="text-white/55 leading-relaxed mb-6">{summary}</p>

                    <div className="space-y-4">
                      <div className="glass-card rounded-xl p-4 border border-enari-border">
                        <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">Challenge</p>
                        <p className="text-white/60 text-sm leading-relaxed">{challenge}</p>
                      </div>
                      <div className="glass-card rounded-xl p-4 border border-enari-border">
                        <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">Solution</p>
                        <p className="text-white/60 text-sm leading-relaxed">{solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Outcomes</p>
                    <ul className="space-y-3">
                      {outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3 text-sm text-white/60">
                          <Award size={14} className={`shrink-0 mt-0.5 ${accent === 'enari-blue' ? 'text-enari-blue' : 'text-enari-warm'}`} />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Service pathways */}
      <section className="bg-surface py-24 lg:py-32">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore our{' '}
              <span className="gradient-text">service areas</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto leading-relaxed">
              Each case study above is underpinned by one or more of our core service disciplines. Dive into the details.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicePathways.map(({ icon: Icon, label, href, accent }) => (
              <motion.div key={label} variants={fadeUp}>
                <Link
                  href={href}
                  className="glass-card rounded-2xl p-6 border border-enari-border hover:border-enari-blue/30 transition-all duration-300 group flex flex-col gap-4"
                >
                  <div className={`p-2.5 rounded-xl bg-surface-elevated w-fit ${accent === 'enari-blue' ? 'text-enari-blue' : 'text-enari-warm'}`}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <p className="text-white font-semibold text-sm leading-snug">{label}</p>
                  <div className="flex items-center gap-1.5 text-xs text-white/40 group-hover:text-enari-blue transition-colors duration-300">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <Users size={32} className="text-enari-blue mx-auto mb-6" strokeWidth={1.5} />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-5">
            Have a challenge to describe?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 leading-relaxed mb-8 max-w-lg mx-auto">
            Tell us about your project and we'll come back with an honest assessment of how we can help — no obligation, no sales pitch.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-enari-blue transition-all duration-300 text-sm"
            >
              Describe your project <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <ContactCta />
    </PageLayout>
  );
}
