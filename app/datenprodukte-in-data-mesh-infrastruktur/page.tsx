'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Package, Search, Lock, RefreshCw, Database,
  CheckCircle2, ArrowRight, Layers, Shield,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const characteristics = [
  { icon: Search,     title: 'Discoverable',    body: 'Every data product is registered in a catalog and can be found by any authorised consumer across the organisation, with clear metadata and descriptions.' },
  { icon: Lock,       title: 'Secure & governed', body: 'Access is controlled, usage is audited, and privacy policies are enforced — automatically and programmatically, not through manual review.' },
  { icon: CheckCircle2, title: 'High quality',  body: 'Quality SLAs are defined and monitored. Consumers know what freshness, completeness, and accuracy they can expect.' },
  { icon: Layers,     title: 'Self-describing', body: 'Schema, lineage, ownership, update frequency, and examples are all part of the data product interface — not tribal knowledge held by one person.' },
  { icon: Package,    title: 'Reusable',        body: 'Designed for multiple consumers with different needs. The same customer data product might serve marketing, finance, and operations teams.' },
  { icon: Shield,     title: 'Interoperable',   body: 'Follows organisation-wide standards for format, naming, and access — so it can be joined with data products from other domains without transformation gymnastics.' },
];

const vsTraditional = [
  { aspect: 'Ownership',       traditional: 'Centralised data team', product: 'Domain team that produces the data' },
  { aspect: 'Quality',         traditional: 'Best effort, often unknown', product: 'Explicit SLAs with monitoring' },
  { aspect: 'Discoverability', traditional: 'Tribal knowledge / documentation by exception', product: 'Catalog-registered with metadata' },
  { aspect: 'Interface',       traditional: 'SQL tables and ad-hoc schemas', product: 'Versioned, documented APIs and datasets' },
  { aspect: 'Consumer view',   traditional: 'Raw tables requiring downstream cleaning', product: 'Curated, validated, consumer-ready' },
];

const lifecycle = [
  { step: 'Creation',     desc: 'Domain team identifies a dataset that other teams need, defines its schema, quality standards, and access model.' },
  { step: 'Publication',  desc: 'The product is registered in the data catalog, documentation is written, and access policies are applied.' },
  { step: 'Maintenance',  desc: 'The domain team monitors pipeline health, responds to consumer feedback, and evolves the schema with backward compatibility.' },
  { step: 'Monitoring',   desc: 'Quality metrics, freshness, and consumer usage are tracked continuously. Alerts fire when SLAs are breached.' },
  { step: 'Iteration',    desc: 'New versions are released based on evolving consumer needs, with deprecation policies for old versions.' },
];

const technology = [
  { label: 'Data catalogs',       tools: 'Datahub, Amundsen, Atlan, dbt docs' },
  { label: 'Data platforms',      tools: 'Snowflake, BigQuery, Databricks, DeltaLake' },
  { label: 'Quality & governance', tools: 'Great Expectations, Soda, Monte Carlo' },
  { label: 'Pipelines',           tools: 'dbt, Airflow, Spark, Fivetran' },
];

const relatedArticles = [
  { href: '/data-mesh-prinzipien',   label: 'The Core Principles of Data Mesh' },
  { href: '/data-mesh-idee-und-ursprung', label: 'Data Mesh: Idea & Origin' },
  { href: '/etl-definition-und-uberblick', label: 'ETL: Definition & Overview' },
];

export default function DatenprodukteDataMeshPage() {
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
            <Badge variant="blue">Data Products</Badge>
            <span className="text-white/30 text-xs">8 min read</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Data Products in{' '}
            <span className="gradient-text">Data Mesh Infrastructure</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/55 text-lg leading-relaxed mb-8"
          >
            Data products are the central unit of value in a Data Mesh — not tables, not pipelines, not warehouses. Here's what they are, what makes a good one, and how they work in practice.
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
            className="glass-card rounded-2xl p-8 border border-enari-blue/20 bg-enari-blue/5 mb-8"
          >
            <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest mb-3">Definition</p>
            <p className="text-white/80 leading-relaxed text-lg">
              A <strong className="text-white">data product</strong> is a curated, governed, and user-oriented data asset — produced by a domain team, designed for external consumption, and managed like a software product with quality standards, documentation, and versioning.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-white/55 leading-relaxed mb-5">
              The shift from "data asset" to "data product" is more than semantic. Traditional data assets are byproducts of operational processes — stored because they exist, not because they've been designed for use. Data products are intentionally built for their consumers: with known schemas, quality guarantees, and interface contracts.
            </p>
            <p className="text-white/55 leading-relaxed">
              In a Data Mesh, data products are what domain teams expose to the rest of the organisation. The self-serve infrastructure makes them discoverable. Federated governance keeps them trustworthy. Domain ownership keeps them accurate.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Characteristics */}
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
              What makes a good{' '}
              <span className="gradient-text">data product?</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {characteristics.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-enari-border hover:border-enari-blue/30 transition-colors duration-300"
              >
                <div className="p-2.5 rounded-xl bg-surface-elevated text-enari-blue w-fit mb-4">
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-2 text-sm">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* vs traditional */}
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
              Data products vs.{' '}
              <span className="gradient-text">traditional data assets</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="glass-card rounded-2xl border border-enari-border overflow-hidden">
            <div className="grid grid-cols-3 bg-surface-elevated px-6 py-4">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">Aspect</p>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest">Traditional asset</p>
              <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest">Data product</p>
            </div>
            {vsTraditional.map(({ aspect, traditional, product }, i) => (
              <div
                key={aspect}
                className={`grid grid-cols-3 px-6 py-4 gap-4 ${i < vsTraditional.length - 1 ? 'border-b border-enari-border' : ''}`}
              >
                <p className="text-white/60 text-sm font-semibold">{aspect}</p>
                <p className="text-white/40 text-xs leading-relaxed">{traditional}</p>
                <p className="text-white/60 text-xs leading-relaxed">{product}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Lifecycle */}
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
              The data product{' '}
              <span className="gradient-text">lifecycle</span>
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-enari-blue/40 via-enari-blue/20 to-transparent" />
            <div className="space-y-6 pl-12">
              {lifecycle.map(({ step, desc }, i) => (
                <motion.div key={step} variants={fadeUp} className="relative">
                  <div className="absolute -left-12 top-1 w-5 h-5 rounded-full bg-surface-elevated border-2 border-enari-blue flex items-center justify-center">
                    <span className="text-[8px] font-bold text-enari-blue">{i + 1}</span>
                  </div>
                  <h3 className="text-white font-bold mb-1">{step}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technology */}
      <section className="bg-surface py-16 lg:py-20">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Technology ecosystem</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {technology.map(({ label, tools }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="glass-card rounded-xl p-5 border border-enari-border"
              >
                <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">{label}</p>
                <p className="text-white/60 text-sm">{tools}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-10">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Continue reading</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedArticles.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="glass-card rounded-xl p-5 border border-enari-border hover:border-enari-blue/30 transition-all duration-300 group flex items-center justify-between gap-3"
                >
                  <span className="text-white/60 group-hover:text-white text-sm transition-colors leading-snug">{label}</span>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-enari-blue transition-colors shrink-0" />
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
