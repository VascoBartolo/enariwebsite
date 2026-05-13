'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BarChart2, PieChart, LineChart, CheckCircle2, ArrowRight,
  Database, Layers, Users, Globe,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const steps = [
  {
    number: '01',
    title: 'Workshop & Data Assessment',
    description: 'We begin by understanding your business questions, KPIs, and existing data sources. A structured workshop maps your reporting landscape and identifies where current tools fall short.',
    icon: Users,
  },
  {
    number: '02',
    title: 'Data Analysis & Prototyping',
    description: 'Our analysts process your data, clean and enrich it, and build prototype dashboards. You see live visualisations of your own data within days — not mockups.',
    icon: BarChart2,
  },
  {
    number: '03',
    title: 'Dashboard & Report Rollout',
    description: 'Production-ready dashboards are deployed to your team with documentation, training, and a handover session. We remain available for iteration and expansion.',
    icon: Layers,
  },
];

const tools = [
  { name: 'Power BI', desc: 'Microsoft-native dashboards deeply integrated with Azure, Excel, and Teams.' },
  { name: 'Tableau',  desc: 'Best-in-class interactive visualisations for complex, multi-dimensional datasets.' },
  { name: 'Looker',   desc: 'LookML-driven governed analytics with strong data model version control.' },
  { name: 'Metabase', desc: 'Lightweight, open-source BI for teams that want fast self-service reporting.' },
];

const whyItems = [
  { icon: Users,    title: 'Industry experience',     body: 'We have delivered BI solutions across manufacturing, retail, logistics, and finance — bringing transferable patterns to every engagement.' },
  { icon: Globe,    title: 'Platform-agnostic',       body: 'We recommend and build on the tool that fits your context, not the one that benefits us commercially.' },
  { icon: Database, title: 'White-label delivery',    body: 'Need it branded for your team or clients? We deliver under your label with full documentation and handover.' },
  { icon: LineChart, title: 'From data to decision',  body: 'Every dashboard we deliver is connected to a real business question — not just a collection of charts.' },
];

const outcomes = [
  'Data assessment report documenting sources, quality, and gaps',
  'Prototype dashboards built on your actual data',
  'Production Power BI or Tableau reports',
  'KPI library with agreed definitions and refresh schedules',
  'Team training and self-service documentation',
];

export default function DatenanalysePage() {
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
              Data Analytics & BI
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6"
          >
            Turn raw data into{' '}
            <span className="gradient-text">clear decisions</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg lg:text-xl max-w-2xl leading-relaxed mb-10"
          >
            We help organisations move beyond spreadsheets — building scalable BI infrastructure, KPI dashboards, and data reporting that your whole team can act on.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-enari-blue transition-all duration-300 text-sm"
            >
              Start a project <ArrowRight size={16} />
            </Link>
            <Link
              href="/services/data-roi"
              className="inline-flex items-center gap-2 px-8 py-4 border border-enari-border text-white/70 hover:text-white hover:border-enari-blue/40 rounded-full transition-all duration-300 text-sm font-semibold"
            >
              Try the ROI Pit Stop first
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Why BI */}
      <section className="bg-surface py-20 lg:py-28">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUp}>
              <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest mb-4">Why it matters</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Collecting data is not enough.{' '}
                <span className="gradient-text">Using it is.</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                Most companies have more data than they can use. The bottleneck is not volume — it's the gap between raw numbers and the business insight that drives decisions. We close that gap.
              </p>
              <ul className="space-y-3">
                {[
                  'Reveal patterns hidden in operational data',
                  'Replace manual reporting with live dashboards',
                  'Align teams around shared, trusted KPIs',
                  'Enable faster, evidence-based decisions',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 size={15} className="text-enari-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-7 border border-enari-border">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">What you receive</p>
              <ul className="space-y-4">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <CheckCircle2 size={15} className="text-enari-blue shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
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
              Process
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              From messy data to{' '}
              <span className="gradient-text">live dashboards</span>
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

      {/* Tools */}
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
              Platform-agnostic.{' '}
              <span className="gradient-text">Best-fit delivery.</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto leading-relaxed">
              We work across the leading BI platforms and recommend the one that matches your existing stack, team skills, and budget.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map(({ name, desc }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-enari-border hover:border-enari-blue/30 transition-colors duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-elevated flex items-center justify-center text-enari-blue mx-auto mb-4">
                  <PieChart size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-2">{name}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
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
              Analytics built to{' '}
              <span className="gradient-text">last</span>
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
