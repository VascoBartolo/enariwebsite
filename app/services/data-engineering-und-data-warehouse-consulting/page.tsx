'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Database, GitBranch, Workflow, CheckCircle2, ArrowRight,
  Server, Cloud, Layers, ShieldCheck,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const steps = [
  {
    number: '01',
    title: 'Architecture Workshop',
    description: 'We audit your existing data sources, pipelines, and storage. Together we define the target architecture — warehouse, lakehouse, or hybrid — based on your actual reporting and analytics needs.',
    icon: Workflow,
  },
  {
    number: '02',
    title: 'Pipeline & Warehouse Build',
    description: 'Our engineers implement ETL/ELT pipelines, configure transformations, set up your data warehouse, and integrate all relevant sources. Every step is documented and tested.',
    icon: GitBranch,
  },
  {
    number: '03',
    title: 'Testing, Monitoring & Rollout',
    description: 'We validate data quality, set up pipeline monitoring and alerting, run load tests, and hand over a production-ready system with runbook documentation and team training.',
    icon: ShieldCheck,
  },
];

const benefits = [
  { icon: Database,   title: 'Multi-source integration',     body: 'Connect databases, APIs, SaaS tools, IoT streams, and flat files into a unified, queryable layer.' },
  { icon: GitBranch,  title: 'Stable, tested pipelines',     body: 'Automated testing and monitoring at every stage of the pipeline — no silent failures, no stale data.' },
  { icon: Server,     title: 'Future-proof architecture',    body: 'We design for today\'s requirements while keeping migration paths open for the next phase of growth.' },
  { icon: Cloud,      title: 'Cloud, on-prem, or hybrid',    body: 'We work across cloud-native (AWS, Azure, GCP), on-premise, hybrid, and embedded deployment models.' },
];

const techStack = [
  'dbt', 'Apache Airflow', 'Spark', 'Kafka', 'Snowflake', 'BigQuery',
  'Redshift', 'Azure Synapse', 'PostgreSQL', 'DuckDB', 'Databricks', 'Fivetran',
];

const whyItems = [
  { icon: Layers,     title: 'Industry experience',   body: 'Data warehouses in manufacturing, retail, logistics, and sports — we bring cross-domain patterns to every engagement.' },
  { icon: ShieldCheck, title: 'White-label delivery', body: 'Full delivery under your brand with complete handover documentation and knowledge transfer.' },
  { icon: Cloud,      title: 'Platform-agnostic',     body: 'We select technologies based on your requirements and constraints, not our preferred stack.' },
  { icon: Database,   title: 'End-to-end ownership',  body: 'We don\'t hand off between architecture and implementation teams. One team owns it all, start to finish.' },
];

export default function DataEngineeringPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-enari-blue/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-enari-warm/4 rounded-full blur-[80px] pointer-events-none" />
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <Badge variant="blue">
              <span className="w-1.5 h-1.5 rounded-full bg-enari-blue inline-block" />
              Data Engineering
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6"
          >
            Build the data foundation{' '}
            <span className="gradient-text">everything depends on</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg lg:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Reliable ETL/ELT pipelines, scalable data warehouse architectures, and clean data models that make your analytics and AI actually work.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-enari-blue transition-all duration-300 text-sm"
            >
              Start a project <ArrowRight size={16} />
            </Link>
            <Link
              href="/etl-definition-und-uberblick"
              className="inline-flex items-center gap-2 px-8 py-4 border border-enari-border text-white/70 hover:text-white hover:border-enari-blue/40 rounded-full transition-all duration-300 text-sm font-semibold"
            >
              What is ETL? →
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="bg-surface py-20 lg:py-28">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest mb-4">The foundation</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Without strong data foundations,{' '}
              <span className="gradient-text">everything downstream breaks</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Analytics, AI, and reporting are only as reliable as the pipelines that feed them. Fragile pipelines and inconsistent data models create a compounding cost that grows with every new initiative you launch.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-enari-border hover:border-enari-blue/30 transition-colors duration-300"
              >
                <div className="p-2.5 rounded-xl bg-surface-elevated text-enari-blue w-fit mb-4">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-2 text-sm">{title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3-Step Process */}
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
              How we deliver
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Three steps to a{' '}
              <span className="gradient-text">production-ready platform</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <motion.div
                key={number}
                variants={fadeUp}
                className="glass-card rounded-2xl p-7 border border-enari-border hover:border-enari-blue/30 transition-colors duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-4 right-5 text-6xl font-bold text-white/[0.03] group-hover:text-enari-blue/[0.07] transition-colors duration-500 leading-none select-none">
                  {number}
                </div>
                <div className="p-2.5 rounded-xl bg-surface-elevated text-enari-blue w-fit mb-5">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech Stack */}
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
              Modern data stack,{' '}
              <span className="gradient-text">right-sized for you</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto leading-relaxed">
              We work with best-in-class open-source and cloud-native tools, selecting and combining them based on your team, budget, and scale.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm text-white/60 border border-enari-border rounded-full hover:border-enari-blue/40 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why Enari */}
      <section className="py-24 lg:py-32">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="mb-14">
            <Badge variant="warm" className="mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-enari-warm inline-block" />
              Why Enari
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Engineering you can{' '}
              <span className="gradient-text">build on</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-enari-border hover:border-enari-warm/30 transition-colors duration-300"
              >
                <div className="p-2.5 rounded-xl bg-surface-elevated text-enari-warm w-fit mb-4">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-2 text-sm">{title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <ContactCta />
    </PageLayout>
  );
}
