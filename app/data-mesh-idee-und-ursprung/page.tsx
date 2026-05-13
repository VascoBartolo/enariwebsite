'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GitBranch, AlertTriangle, Lightbulb, Users,
  ArrowRight, CheckCircle2, Database,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const centralProblems = [
  {
    title: 'The central team bottleneck',
    body: 'As organisations add more data sources and more analytics consumers, a single central data team becomes the limiting factor. Every new requirement has to be queued, understood, and delivered by people who don\'t understand the domain as well as those who live in it.',
  },
  {
    title: 'Data quality and trust',
    body: 'When domain teams pass data to a central platform and lose ownership, quality inevitably degrades. The team that created the data is no longer responsible for how it\'s used or whether it\'s correct downstream.',
  },
  {
    title: 'Scalability limits',
    body: 'Monolithic data lakes and central warehouses that worked for 5 source systems and 20 analysts break down at 50 sources and 500 consumers. The architecture that worked at one scale becomes the ceiling at the next.',
  },
  {
    title: 'Insufficient domain empowerment',
    body: 'Business teams closest to the data — logistics, sales, manufacturing — have the deepest understanding of its meaning and quality. Centralised architectures systematically remove them from data stewardship.',
  },
];

const solutions = [
  { icon: Users,      label: 'Domain ownership',          body: 'Data is owned and operated by the domain team that generates it. The logistics team owns logistics data, the sales team owns sales data.' },
  { icon: GitBranch,  label: 'Data as a product',         body: 'Domain teams treat their data outputs as products — with quality SLAs, documentation, versioning, and user-facing interfaces.' },
  { icon: Lightbulb,  label: 'Self-serve infrastructure', body: 'A shared platform makes it easy for domain teams to publish, discover, and consume data products without central coordination.' },
  { icon: Database,   label: 'Federated governance',      body: 'Global policies (security, privacy, standards) are enforced automatically, while domain teams retain local autonomy.' },
];

const challenges = [
  { title: 'Coordination overhead',  body: 'With many independent domain teams, maintaining consistent standards and preventing duplication requires active governance investment.' },
  { title: 'Cultural change',        body: 'Developers and analysts who have always worked in central teams need to shift their mindset toward product thinking and domain ownership.' },
  { title: 'Implementation complexity', body: 'The self-serve infrastructure layer is non-trivial to build. Most organisations need specialist support to design and implement it correctly.' },
  { title: 'Consistent standards',   body: 'Balancing local autonomy with global interoperability is an ongoing design challenge — too much local freedom creates fragmentation.' },
];

const relatedArticles = [
  { href: '/data-mesh-prinzipien',                     label: 'The Core Principles of Data Mesh' },
  { href: '/datenprodukte-in-data-mesh-infrastruktur', label: 'Data Products in Data Mesh' },
  { href: '/data-mesh-vs-data-spaces-was-ist-der-unterschied', label: 'Data Mesh vs. Data Spaces' },
];

export default function DataMeshOriginPage() {
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
            <span className="text-white/30 text-xs">6 min read</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Data Mesh: Idea &{' '}
            <span className="gradient-text">Origin</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/55 text-lg leading-relaxed mb-8"
          >
            Where the Data Mesh concept came from, the architectural problems it was designed to solve, and why its ideas about ownership and product thinking remain as relevant as ever.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-4 text-xs text-white/35">
            <span>By Bastian Knaus, Co-Founder</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Enari</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Origin */}
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
            className="glass-card rounded-2xl p-8 border border-enari-warm/20 bg-enari-warm/5 mb-8"
          >
            <p className="text-xs font-semibold text-enari-warm uppercase tracking-widest mb-3">Origin</p>
            <p className="text-white/80 leading-relaxed">
              Data Mesh was introduced by <strong className="text-white">Zhamak Dehghani</strong>, then a principal technology consultant at Thoughtworks, in a 2019 article titled <em>"How to Move Beyond a Monolithic Data Lake to a Distributed Data Mesh."</em> Her thesis: the patterns that scaled microservice architectures in software engineering needed to be applied to the data domain.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-white/55 leading-relaxed mb-5">
              At the time, most large organisations were consolidating data into central data lakes or warehouses — the dominant paradigm promised a single source of truth. In practice, these architectures were struggling under the weight of scale: too many sources, too many consumers, and a central team that couldn't serve everyone well.
            </p>
            <p className="text-white/55 leading-relaxed">
              Dehghani drew a parallel to the earlier evolution in application architecture. Just as monolithic applications gave way to microservices — with autonomous teams owning independent services — she proposed that data architecture should undergo the same decentralisation. Domain teams should own their data, just as they own their services.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Problems with central architecture */}
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
              The problems with{' '}
              <span className="gradient-text">centralised data</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {centralProblems.map(({ title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-enari-border flex gap-4"
              >
                <AlertTriangle size={16} className="text-enari-warm shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="text-white font-bold mb-2 text-sm">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Four solutions */}
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
              The Data Mesh{' '}
              <span className="gradient-text">response</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Data Mesh addresses each of these problems with four interlocking principles. Each one is a response to a specific failure mode of centralised architectures.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {solutions.map(({ icon: Icon, label, body }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-enari-border hover:border-enari-warm/30 transition-colors duration-300"
              >
                <div className="p-2.5 rounded-xl bg-surface-elevated text-enari-warm w-fit mb-4">
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-2 text-sm">{label}</h3>
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
              Implementation{' '}
              <span className="gradient-text">challenges</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Data Mesh is not a technology — it's an organisational and architectural shift. That makes it powerful and difficult in equal measure.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {challenges.map(({ title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-xl p-6 border border-enari-border"
              >
                <h3 className="text-white font-bold mb-2 text-sm">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
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
