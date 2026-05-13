'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users, Package, Layers, Shield,
  ArrowRight, CheckCircle2, AlertTriangle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const principles = [
  {
    number: '01',
    icon: Users,
    title: 'Domain Ownership',
    tagline: 'The team closest to the data owns it.',
    description: 'Data is owned, managed, and served by the domain team that generates it — not by a central data team. The logistics team owns logistics data. The sales team owns sales data. This aligns accountability with expertise.',
    benefits: [
      'Faster data changes without central team bottlenecks',
      'Higher data quality because owners understand the context',
      'Clear accountability for SLAs and schema evolution',
    ],
    challenges: 'Requires domain teams to take on data engineering capabilities — tooling and training investment needed.',
  },
  {
    number: '02',
    icon: Package,
    title: 'Data as a Product',
    tagline: 'Data outputs are first-class products.',
    description: 'Domain teams don\'t just expose data — they build data products with clear contracts, documentation, quality guarantees, and versioning. Consumers can discover and trust these products the same way they trust well-built software APIs.',
    benefits: [
      'Discoverable, trusted data assets across the organisation',
      'Stable interfaces that consumers can rely on',
      'Quality SLAs that align with business requirements',
    ],
    challenges: 'Shifts the mindset of data engineers from pipeline builders to product owners — a cultural change that takes time.',
  },
  {
    number: '03',
    icon: Layers,
    title: 'Self-Serve Data Infrastructure',
    tagline: 'Domain teams shouldn\'t need to be platform engineers.',
    description: 'A shared infrastructure platform provides the tooling domain teams need to build, deploy, monitor, and share data products — without requiring each team to build their own storage, compute, and governance stack from scratch.',
    benefits: [
      'Reduces infrastructure duplication across domain teams',
      'Lowers the barrier to entry for non-specialist teams',
      'Enables consistent operational standards across domains',
    ],
    challenges: 'The hardest principle to implement — requires significant investment in platform engineering upfront.',
  },
  {
    number: '04',
    icon: Shield,
    title: 'Federated Computational Governance',
    tagline: 'Global policies, local autonomy.',
    description: 'A global governance layer enforces organisation-wide policies — security, privacy, compliance, interoperability standards — automatically and programmatically. Domain teams operate freely within this envelope without being micromanaged.',
    benefits: [
      'Compliance and security enforced at scale without manual review',
      'Consistent data contracts and schemas across domains',
      'Audit trails and lineage maintained automatically',
    ],
    challenges: 'Encoding policies as code requires close collaboration between legal, security, and engineering teams.',
  },
];

const relatedArticles = [
  { href: '/data-mesh-idee-und-ursprung',              label: 'Data Mesh: Idea & Origin' },
  { href: '/datenprodukte-in-data-mesh-infrastruktur', label: 'Data Products in Data Mesh' },
  { href: '/data-mesh-vs-data-spaces-was-ist-der-unterschied', label: 'Data Mesh vs. Data Spaces' },
];

export default function DataMeshPrinzipienPage() {
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
            <span className="text-white/30 text-xs">7 min read</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            The Core Principles of{' '}
            <span className="gradient-text">Data Mesh</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/55 text-lg leading-relaxed mb-8"
          >
            Data Mesh rests on four interlocking principles. Understanding each one — and why it exists — is the foundation for knowing whether and how to implement it.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-4 text-xs text-white/35">
            <span>By Bastian Knaus, Co-Founder</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Enari</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Context */}
      <section className="bg-surface py-16">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 border border-enari-border">
            <p className="text-white/70 leading-relaxed">
              Each principle in Data Mesh addresses a specific failure mode of centralised data architectures. They are designed to work together — removing one breaks the system. A company that adopts domain ownership without self-serve infrastructure just creates decentralised chaos. A company that builds a self-serve platform without federated governance creates ungoverned sprawl. The four principles are interdependent by design.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Four Principles */}
      <section className="py-20 lg:py-28">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-10 space-y-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {principles.map(({ number, icon: Icon, title, tagline, description, benefits, challenges }) => (
            <motion.div
              key={number}
              variants={fadeUp}
              className="glass-card rounded-2xl p-8 border border-enari-border"
            >
              <div className="flex items-start gap-5 mb-6">
                <span className="text-5xl font-bold text-enari-warm/20 leading-none">{number}</span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-surface-elevated text-enari-warm">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-white font-bold text-xl">{title}</h2>
                  </div>
                  <p className="text-enari-warm/80 text-sm font-semibold">{tagline}</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed mb-6">{description}</p>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Benefits</p>
                  <ul className="space-y-2">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-white/55">
                        <CheckCircle2 size={12} className="text-enari-blue shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-4 border border-enari-border">
                  <p className="text-xs font-semibold text-enari-warm/70 uppercase tracking-widest mb-2">Watch out for</p>
                  <p className="text-white/50 text-xs leading-relaxed">{challenges}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
              Enari supports organisations in designing and implementing Data Mesh architectures — from domain ownership workshops to self-serve platform engineering and federated governance frameworks. <Link href="/#contact" className="text-enari-blue hover:text-white transition-colors">Talk to us about your data architecture →</Link>
            </p>
          </motion.div>
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
