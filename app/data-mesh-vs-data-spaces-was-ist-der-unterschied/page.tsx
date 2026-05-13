'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GitBranch, Globe, Shield, ArrowRight,
  CheckCircle2, XCircle, Building, Network,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const dataMeshPrinciples = [
  'Domain ownership — teams own the data they produce',
  'Data as a product — data is treated like a first-class product',
  'Self-serve data infrastructure',
  'Federated computational governance',
];

const dataSpacePrinciples = [
  'Data sovereignty — participants control their own data',
  'Interoperability — data can be exchanged across organisations',
  'Trust and security — verified identities and contractual access',
  'Shared governance — rules agreed across participants',
];

const similarities = [
  { title: 'Decentralisation',  body: 'Both push back against a central authority controlling all data. Autonomy at the edges is a shared design goal.' },
  { title: 'Data as a product', body: 'Both treat data as something to be curated, described, and made useful — not just stored and queried.' },
  { title: 'Governance',        body: 'Both require governance frameworks that balance local autonomy with shared standards.' },
];

const differences = [
  {
    aspect: 'Scope',
    mesh: 'Within a single organisation',
    spaces: 'Across multiple organisations and sectors',
  },
  {
    aspect: 'Primary goal',
    mesh: 'Scalable, domain-driven data architecture',
    spaces: 'Secure, sovereign cross-organisation data exchange',
  },
  {
    aspect: 'Governance model',
    mesh: 'Federated — domains set local rules within a global policy',
    spaces: 'Consortium-based — participants agree shared rules upfront',
  },
  {
    aspect: 'Infrastructure',
    mesh: 'Internal platforms, data catalogs, warehouses',
    spaces: 'Connectors, identity providers, policy enforcement points',
  },
  {
    aspect: 'Legal basis',
    mesh: 'Internal data ownership policies',
    spaces: 'Contracts, data sharing agreements, EU Data Act',
  },
];

const useCases = [
  { icon: Building, label: 'Use Data Mesh when…',  accent: 'enari-blue', cases: ['Your organisation is large enough that a central data team is a bottleneck', 'Multiple business domains have distinct data ownership and reporting needs', 'You want to improve data quality accountability without centralising control'] },
  { icon: Network,  label: 'Use Data Spaces when…', accent: 'enari-warm', cases: ['You need to share data with external partners, suppliers, or customers', 'You operate in a regulated sector with strict data sovereignty requirements', 'You\'re part of a cross-sector initiative (Gaia-X, mobility, health, energy)'] },
];

const relatedArticles = [
  { href: '/data-mesh-idee-und-ursprung',            label: 'Data Mesh: Idea & Origin' },
  { href: '/data-mesh-prinzipien',                   label: 'The Core Principles of Data Mesh' },
  { href: '/datenprodukte-in-data-mesh-infrastruktur', label: 'Data Products in Data Mesh' },
];

export default function DataMeshVsDataSpacesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-enari-warm/4 rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <Badge variant="warm">Architecture</Badge>
            <span className="text-white/30 text-xs">8 min read</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Data Mesh vs. Data Spaces:{' '}
            <span className="gradient-text">What's the Difference?</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/55 text-lg leading-relaxed mb-8"
          >
            Two architectural concepts that are often confused because they share vocabulary — but address fundamentally different problems at different scopes.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-4 text-xs text-white/35">
            <span>By Bastian Knaus, Co-Founder</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Enari</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick definitions */}
      <section className="bg-surface py-16 lg:py-20">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              className="glass-card rounded-2xl p-7 border border-enari-blue/20 bg-enari-blue/5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-surface-elevated text-enari-blue">
                  <GitBranch size={18} strokeWidth={1.5} />
                </div>
                <span className="text-enari-blue font-bold">Data Mesh</span>
              </div>
              <p className="text-white/70 leading-relaxed text-sm mb-5">
                A socio-technical approach to managing data <strong className="text-white">within an organisation</strong> by distributing ownership to domain teams and treating data as a product.
              </p>
              <ul className="space-y-2">
                {dataMeshPrinciples.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-white/50">
                    <CheckCircle2 size={12} className="text-enari-blue shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="glass-card rounded-2xl p-7 border border-enari-warm/20 bg-enari-warm/5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-surface-elevated text-enari-warm">
                  <Globe size={18} strokeWidth={1.5} />
                </div>
                <span className="text-enari-warm font-bold">Data Spaces</span>
              </div>
              <p className="text-white/70 leading-relaxed text-sm mb-5">
                An infrastructure concept for secure, sovereign data exchange <strong className="text-white">across organisations</strong> and sectors — often underpinned by initiatives like Gaia-X and the EU Data Act.
              </p>
              <ul className="space-y-2">
                {dataSpacePrinciples.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-white/50">
                    <CheckCircle2 size={12} className="text-enari-warm shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Similarities */}
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
              Where they{' '}
              <span className="gradient-text">overlap</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              The confusion is understandable. Both concepts share foundational principles that emerged from the same frustrations with centralised, monolithic data management.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {similarities.map(({ title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-enari-border"
              >
                <Shield size={16} className="text-enari-blue mb-4" strokeWidth={1.5} />
                <h3 className="text-white font-bold mb-2 text-sm">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Differences table */}
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
              Key{' '}
              <span className="gradient-text">differences</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="glass-card rounded-2xl border border-enari-border overflow-hidden">
            <div className="grid grid-cols-3 bg-surface-elevated px-6 py-4">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">Aspect</p>
              <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest">Data Mesh</p>
              <p className="text-xs font-semibold text-enari-warm uppercase tracking-widest">Data Spaces</p>
            </div>
            {differences.map(({ aspect, mesh, spaces }, i) => (
              <div
                key={aspect}
                className={`grid grid-cols-3 px-6 py-4 gap-4 ${i < differences.length - 1 ? 'border-b border-enari-border' : ''}`}
              >
                <p className="text-white/60 text-sm font-semibold">{aspect}</p>
                <p className="text-white/50 text-xs leading-relaxed">{mesh}</p>
                <p className="text-white/50 text-xs leading-relaxed">{spaces}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* When to use */}
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
              Which one do you{' '}
              <span className="gradient-text">need?</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map(({ icon: Icon, label, accent, cases }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="glass-card rounded-2xl p-7 border border-enari-border"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-surface-elevated ${accent === 'enari-blue' ? 'text-enari-blue' : 'text-enari-warm'}`}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <p className={`font-bold text-sm ${accent === 'enari-blue' ? 'text-enari-blue' : 'text-enari-warm'}`}>{label}</p>
                </div>
                <ul className="space-y-3">
                  {cases.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-white/60">
                      <CheckCircle2 size={13} className={`shrink-0 mt-0.5 ${accent === 'enari-blue' ? 'text-enari-blue' : 'text-enari-warm'}`} />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="mt-6 glass-card rounded-2xl p-6 border border-enari-border">
            <p className="text-white/60 text-sm leading-relaxed">
              <strong className="text-white">Can you use both?</strong> Yes — a large enterprise might adopt Data Mesh internally while also participating in industry Data Spaces for cross-sector data exchange. The two are complementary, not competing.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Related */}
      <section className="bg-surface py-16">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
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
