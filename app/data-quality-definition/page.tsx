'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2, AlertTriangle, TrendingDown, BookOpen,
  Shield, Clock, Hash, GitMerge, ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const dimensions = [
  {
    icon: CheckCircle2,
    name: 'Correctness',
    description: 'Data accurately reflects the real-world entity or event it represents. Incorrect values in a product catalogue or customer record cascade into every system that depends on them.',
    example: 'A product listed with the wrong unit of measure creates ordering errors and financial discrepancies.',
  },
  {
    icon: GitMerge,
    name: 'Completeness',
    description: 'All required fields and records are present. Missing data creates blind spots in analysis, breaks automated workflows, and often indicates upstream capture failures.',
    example: 'A CRM with 30% of customer industry codes missing makes segment-based analytics unreliable.',
  },
  {
    icon: Clock,
    name: 'Timeliness',
    description: 'Data is available and current when it is needed. Stale data is especially dangerous in operational systems where decisions are made on a short time horizon.',
    example: 'Inventory levels updated once per day create stock-out risks in high-velocity warehouse operations.',
  },
  {
    icon: Hash,
    name: 'Uniqueness',
    description: 'Each real-world entity appears exactly once in the dataset. Duplicate records inflate metrics, confuse joins, and create inconsistent downstream views.',
    example: 'Duplicate customer records result in double-counting revenue and sending the same customer two invoices.',
  },
  {
    icon: Shield,
    name: 'Consistency',
    description: 'The same data looks the same across systems and over time. Inconsistent representations of the same value prevent reliable aggregation and comparison.',
    example: '"United Kingdom," "UK," and "Great Britain" refer to the same country but break country-level reports when not harmonised.',
  },
];

const damages = [
  { icon: TrendingDown, title: 'Distorted reporting',        body: 'KPI dashboards built on poor data report numbers that don\'t reflect reality. Leadership makes decisions based on a fiction.' },
  { icon: AlertTriangle, title: 'ML model degradation',      body: 'Machine learning models inherit the biases and errors of their training data. Garbage in, garbage out — at scale and at speed.' },
  { icon: AlertTriangle, title: 'Eroded trust',              body: 'Once teams stop trusting data, they revert to gut instinct or build parallel shadow reports. The data investment is effectively wasted.' },
  { icon: TrendingDown,  title: 'Compliance risk',           body: 'Many regulatory frameworks (GDPR, ISO standards, financial reporting) require demonstrable data quality controls.' },
];

const relatedArticles = [
  { href: '/etl-definition-and-overview',    label: 'ETL: Definition & Overview' },
  { href: '/data-products-in-data-mesh',     label: 'Data Products in Data Mesh' },
];

export default function DatenqualitatPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-enari-blue/4 rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <Badge variant="blue">Data Management</Badge>
            <span className="text-white/30 text-xs">6 min read</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Data Quality: Definition &{' '}
            <span className="gradient-text">What It Really Means</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/55 text-lg leading-relaxed mb-8"
          >
            Data quality is not about perfection — it's about fitness for purpose. A practical look at what data quality means, how to measure it, and why poor data is one of the most expensive problems in modern organisations.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-4 text-xs text-white/35">
            <span>By Bastian Knaus, Co-Founder</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Enari</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Definition */}
      <section className="bg-surface py-16 lg:py-20">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div
            variants={fadeUp}
            className="glass-card rounded-2xl p-8 border border-enari-blue/20 bg-enari-blue/5"
          >
            <div className="flex items-start gap-4">
              <BookOpen size={20} className="text-enari-blue shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest mb-3">Definition</p>
                <p className="text-white/80 leading-relaxed text-lg">
                  <strong className="text-white">Data quality</strong> refers to the degree to which data is fit for its intended use — whether that's powering a report, training a machine learning model, or driving an operational process. It is not an absolute standard but a contextual one.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <p className="text-white/55 leading-relaxed text-base mb-6">
              The same dataset can be high quality for one purpose and completely unsuitable for another. A phone number field that is populated but never validated may be acceptable for a marketing newsletter and completely useless for SMS delivery automation. Quality is always relative to use.
            </p>
            <p className="text-white/55 leading-relaxed text-base">
              This is why data quality frameworks focus on defining dimensions — measurable properties of data that determine its fitness for common use cases — rather than a single universal quality score.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 5 Dimensions */}
      <section className="py-20 lg:py-28">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Five dimensions of{' '}
              <span className="gradient-text">data quality</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Most quality frameworks converge on five core dimensions. Together they form a complete picture of whether data can be trusted for a given application.
            </p>
          </motion.div>

          <div className="space-y-5">
            {dimensions.map(({ icon: Icon, name, description, example }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="glass-card rounded-2xl p-7 border border-enari-border hover:border-enari-blue/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="p-2.5 rounded-xl bg-surface-elevated text-enari-blue shrink-0">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{name}</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-3">{description}</p>
                    <div className="bg-surface rounded-xl p-3 border border-enari-border">
                      <p className="text-xs text-white/35 font-semibold uppercase tracking-widest mb-1">Example</p>
                      <p className="text-white/50 text-xs leading-relaxed">{example}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ISO 8000 */}
      <section className="bg-surface py-16 lg:py-20">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6">
              ISO 8000: the international{' '}
              <span className="gradient-text">data quality standard</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-6">
              ISO 8000 is the international standard for data quality management. It defines requirements for the exchange, portability, and quality of master data — and is increasingly referenced in supply chain, healthcare, and government contexts where data passes between organisations.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Supply chains',         desc: 'Ensures product master data meets quality standards for cross-organisation exchange.' },
                { label: 'Healthcare data',        desc: 'Supports interoperability of clinical and patient data across providers.' },
                { label: 'Data exchange',          desc: 'Defines requirements for portable, trustworthy data assets transferred between systems.' },
                { label: 'Cross-org collaboration', desc: 'Sets a shared quality baseline for organisations collaborating on joint data products.' },
              ].map(({ label, desc }) => (
                <div key={label} className="glass-card rounded-xl p-5 border border-enari-border">
                  <p className="text-white font-semibold text-sm mb-1">{label}</p>
                  <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Cost of poor quality */}
      <section className="py-20 lg:py-28">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The real cost of{' '}
              <span className="gradient-text">bad data</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Gartner has estimated the average cost of poor data quality at $12.9 million per year for a typical organisation. The impact shows up in four main areas.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {damages.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-enari-border"
              >
                <Icon size={18} className="text-enari-warm mb-4" strokeWidth={1.5} />
                <h3 className="text-white font-bold mb-2 text-sm">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Causes + How Enari helps */}
      <section className="bg-surface py-16 lg:py-20">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-bold mb-6">Common causes</h2>
              <ul className="space-y-3">
                {[
                  'Manual data entry without validation',
                  'Missing or unenforced data standards',
                  'Fragmented processes across teams and systems',
                  'No ownership of data quality at the domain level',
                  'Legacy system migrations that carry forward historical errors',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <AlertTriangle size={13} className="text-enari-warm shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-bold mb-6">How Enari can help</h2>
              <ul className="space-y-3">
                {[
                  'Data quality assessments as part of every engagement',
                  'Data governance frameworks and ownership models',
                  'Pipeline validation and quality monitoring',
                  'Data cleaning and enrichment as part of data engineering',
                  'Analytics readiness reviews before AI/ML projects',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <CheckCircle2 size={13} className="text-enari-blue shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Related */}
      <section className="py-16">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="mb-8">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Related articles</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedArticles.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="glass-card rounded-xl p-5 border border-enari-border hover:border-enari-blue/30 transition-all duration-300 group flex items-center justify-between"
                >
                  <span className="text-white/60 group-hover:text-white text-sm transition-colors">{label}</span>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-enari-blue transition-colors" />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <ContactCta />
    </PageLayout>
  );
}
