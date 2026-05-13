'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Download, RefreshCw, Upload, Database, ArrowRight,
  CheckCircle2, AlertTriangle, Zap, Layers,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const phases = [
  {
    icon: Download,
    label: 'Extract',
    color: 'enari-blue',
    description: 'Data is pulled from one or more source systems — databases, APIs, flat files, ERP/CRM platforms, IoT sensors, or external data providers. The goal is to capture raw data in its original form without losing fidelity.',
    examples: ['SQL databases (PostgreSQL, MySQL, MSSQL)', 'REST and GraphQL APIs', 'CSV, Excel, and JSON files', 'ERP systems (SAP, Oracle)', 'Streaming sources (Kafka, Kinesis)'],
  },
  {
    icon: RefreshCw,
    label: 'Transform',
    color: 'enari-warm',
    description: 'Raw data is cleaned, standardised, enriched, and structured into the target format. This is where business logic is applied — deduplication, type casting, joins, aggregations, and quality validation all happen here.',
    examples: ['Deduplication and null handling', 'Type casting and format normalisation', 'Business rule application', 'Joining and aggregating datasets', 'Enrichment from reference data'],
  },
  {
    icon: Upload,
    label: 'Load',
    color: 'enari-blue',
    description: 'Transformed data is written into the target system — typically a data warehouse, data lake, or analytical database. Loading can be full (replacing all data) or incremental (appending only new or changed records).',
    examples: ['Data warehouses (Snowflake, BigQuery, Redshift)', 'Cloud storage (S3, GCS, Azure Blob)', 'Analytical databases (DuckDB, ClickHouse)', 'BI tools via direct connectors'],
  },
];

const benefits = [
  { icon: CheckCircle2, title: 'Better data quality',     body: 'Validation and transformation rules applied consistently at ingestion prevent errors from propagating downstream.' },
  { icon: Zap,          title: 'Automation & reliability', body: 'Scheduled pipelines replace manual exports and uploads, eliminating human error and ensuring data freshness.' },
  { icon: Layers,       title: 'Scalability',              body: 'Well-architected ETL systems scale horizontally as data volume, source count, and query load increase.' },
  { icon: Database,     title: 'Analytics readiness',      body: 'A clean, consolidated warehouse is the prerequisite for accurate BI reports and reliable machine learning.' },
];

const challenges = [
  { title: 'Source diversity',       body: 'Different schemas, encodings, formats, and update frequencies across source systems require custom handling logic.' },
  { title: 'Volume and velocity',    body: 'High-frequency or high-volume sources require incremental strategies, partitioning, and parallel execution to stay current.' },
  { title: 'Data quality at source', body: 'ETL cannot fix problems that originate upstream — it can only surface and route around them. Source quality must be addressed at root.' },
  { title: 'Operational maintenance', body: 'Sources change. Schema drift, API version updates, and upstream system migrations break pipelines without ongoing monitoring.' },
];

const relatedArticles = [
  { href: '/datenqualitat-definition-was-ist-datenqualitat', label: 'Data Quality: Definition & What It Means' },
  { href: '/datenprodukte-in-data-mesh-infrastruktur',       label: 'Data Products in Data Mesh Infrastructure' },
];

export default function EtlPage() {
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
            <Badge variant="blue">Data Engineering</Badge>
            <span className="text-white/30 text-xs">7 min read</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            ETL: Definition and{' '}
            <span className="gradient-text">Overview</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/55 text-lg leading-relaxed mb-8"
          >
            Extract, Transform, Load is one of the most fundamental patterns in data engineering. Here's what each phase means, why it matters, and how to think about building reliable pipelines.
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
            <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest mb-3">Definition</p>
            <p className="text-white/80 leading-relaxed text-lg">
              <strong className="text-white">ETL</strong> — Extract, Transform, Load — is a data integration pattern that moves data from one or more source systems into a target system (such as a data warehouse), applying cleaning and transformation logic along the way.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8">
            <p className="text-white/55 leading-relaxed mb-5">
              ETL is the backbone of modern data infrastructure. Without it, organisations are left with raw data scattered across operational systems — valuable in isolation, but inaccessible for consolidated reporting, analytics, or AI workflows.
            </p>
            <p className="text-white/55 leading-relaxed">
              The closely related variant <strong className="text-white/80">ELT</strong> (Extract, Load, Transform) reverses the last two steps — loading raw data into the warehouse first and transforming it there using tools like dbt. ELT has become the dominant pattern for cloud-native architectures where compute is cheap and storage is abundant.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Three Phases */}
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
              The three{' '}
              <span className="gradient-text">ETL phases</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Each phase has distinct responsibilities and failure modes. Understanding them separately is key to designing pipelines that are maintainable, observable, and fault-tolerant.
            </p>
          </motion.div>

          <div className="space-y-6">
            {phases.map(({ icon: Icon, label, color, description, examples }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="glass-card rounded-2xl p-8 border border-enari-border hover:border-enari-blue/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 rounded-xl bg-surface-elevated ${color === 'enari-blue' ? 'text-enari-blue' : 'text-enari-warm'}`}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-bold text-xl">{label}</h3>
                </div>
                <p className="text-white/55 leading-relaxed mb-5">{description}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {examples.map((ex) => (
                    <div key={ex} className="flex items-center gap-2 text-xs text-white/40">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${color === 'enari-blue' ? 'bg-enari-blue' : 'bg-enari-warm'}`} />
                      {ex}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="bg-surface py-20 lg:py-28">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Benefits of{' '}
              <span className="gradient-text">well-built ETL</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-enari-border"
              >
                <Icon size={16} className="text-enari-blue mb-4" strokeWidth={1.5} />
                <h3 className="text-white font-bold mb-2 text-sm">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Challenges */}
      <section className="py-20 lg:py-28">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Common{' '}
              <span className="gradient-text">challenges</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {challenges.map(({ title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-xl p-6 border border-enari-border flex gap-4"
              >
                <AlertTriangle size={16} className="text-enari-warm shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="text-white font-bold mb-1 text-sm">{title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Enari + Related */}
      <section className="bg-surface py-16 lg:py-20">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 border border-enari-border mb-10">
            <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest mb-3">Working with Enari</p>
            <p className="text-white/60 leading-relaxed">
              Enari's data engineering service covers the full ETL/ELT lifecycle — from source system audit and pipeline design to testing, deployment, and operational monitoring. We work with dbt, Airflow, Spark, and the major cloud data warehouses. <Link href="/services/data-engineering-und-data-warehouse-consulting" className="text-enari-blue hover:text-white transition-colors">Learn more about our data engineering service →</Link>
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
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
