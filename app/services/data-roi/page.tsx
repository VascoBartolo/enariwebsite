'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  TrendingUp, Target, BarChart3, CheckCircle2, ArrowRight,
  Clock, Users, FileCheck, Lightbulb, ChevronDown, ChevronUp,
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from '@/lib/motion';

const steps = [
  {
    number: '01',
    title: 'Kickoff & Goal Clarification',
    description: 'We align on your business objectives, identify key stakeholders, and define the scope of the evaluation. A shared understanding of success is established from day one.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Discovery Workshop',
    description: 'A structured session to map your existing data landscape, infrastructure, and workflows. We identify gaps, risks, and hidden potential in your current setup.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Analysis & Action Planning',
    description: 'Our team runs parallel feasibility and profitability assessments. We calculate ROI ranges, identify implementation risks, and define a prioritised roadmap.',
    icon: BarChart3,
  },
  {
    number: '04',
    title: 'Decision Report',
    description: 'You receive a concise, executive-ready report with a clear Go / No-Go recommendation, cost-benefit analysis, and concrete next steps you can act on immediately.',
    icon: FileCheck,
  },
];

const tracks = [
  {
    label: 'Feasibility Track',
    accent: 'enari-blue',
    items: [
      'Problem definition & success metrics',
      'Data source & quality assessment',
      'Infrastructure & technology review',
      'Team capability evaluation',
      'Actionable recommendation',
    ],
  },
  {
    label: 'Profitability Track',
    accent: 'enari-warm',
    items: [
      'Project scope & resource estimation',
      'Budget modelling & investment plan',
      'Operating cost projection',
      'ROI calculation with scenarios',
      'Strategic recommendation',
    ],
  },
];

const whyEnari = [
  { icon: Users,       title: 'Founder experience',   body: 'Our team has built and shipped data products in production — not just consulted on them. We bring practical intuition, not just frameworks.' },
  { icon: Target,      title: 'Cross-industry neutrality', body: 'No vendor lock-in, no platform bias. We recommend what fits your context, not what maximises our margins.' },
  { icon: Clock,       title: 'Speed',                body: 'The full Pit Stop runs in days, not months. You get a decision-ready output before your next board meeting.' },
  { icon: CheckCircle2, title: 'Actionable output',   body: 'Every deliverable is designed for action. You leave with a report your team can execute on — not a deck that gathers dust.' },
];

const faqs = [
  {
    q: 'Who is the Data ROI Pit Stop for?',
    a: 'Any organisation considering a data initiative but uncertain about technical feasibility or economic value. Whether you\'re a startup evaluating your first warehouse or an enterprise revisiting a stalled BI project — the Pit Stop provides clarity fast.',
  },
  {
    q: 'How long does the process take?',
    a: 'The standard format runs over 5–7 business days from kickoff to final report delivery. For complex environments the timeline may extend slightly, but we always agree it upfront.',
  },
  {
    q: 'What do I receive at the end?',
    a: 'A structured decision report covering: executive summary, feasibility assessment, ROI scenarios, risk register, and a prioritised roadmap with next steps.',
  },
  {
    q: 'What is the starting price?',
    a: 'Pricing is scoped per engagement based on complexity. We offer a free 30-minute discovery call to assess fit and provide a fixed-fee quote before you commit.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-enari-border rounded-2xl p-6 cursor-pointer hover:border-enari-blue/30 transition-colors duration-300"
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex justify-between items-start gap-4">
        <p className="text-white font-semibold text-sm leading-relaxed">{q}</p>
        {open ? (
          <ChevronUp size={18} className="text-enari-blue shrink-0 mt-0.5" />
        ) : (
          <ChevronDown size={18} className="text-white/40 shrink-0 mt-0.5" />
        )}
      </div>
      {open && (
        <p className="text-white/50 text-sm leading-relaxed mt-4">{a}</p>
      )}
    </div>
  );
}

export default function DataRoiPage() {
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
              Consulting Format
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6"
          >
            Data ROI{' '}
            <span className="gradient-text">Pit Stop</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg lg:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Clarity before commitment. Evaluate the technical feasibility and economic value of your next data project — in days, not months.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-enari-blue transition-all duration-300 text-sm"
            >
              Start your Pit Stop <ArrowRight size={16} />
            </Link>
            <Link
              href="/services/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 border border-enari-border text-white/70 hover:text-white hover:border-enari-blue/40 rounded-full transition-all duration-300 text-sm font-semibold"
            >
              See case studies
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem statement */}
      <section className="bg-surface py-20 lg:py-28">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest mb-4">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Most data projects fail before they start
            </h2>
            <p className="text-white/50 leading-relaxed text-base lg:text-lg">
              Companies hesitate — or rush in — because they can't answer two fundamental questions: <em className="text-white/70">Can we actually build this?</em> and <em className="text-white/70">Is it worth the investment?</em> The Pit Stop answers both.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Investment uncertainty', body: 'No clear ROI model means budget approvals stall and initiatives lose momentum before they launch.' },
              { icon: Target,     title: 'Feasibility blind spots', body: 'Technical gaps in data quality, infrastructure, or team skills only surface after significant spend.' },
              { icon: Clock,      title: 'Slow decision cycles', body: 'Traditional consulting engagements take months to reach a recommendation you need this quarter.' },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-2xl p-7 border border-enari-border"
              >
                <div className="p-3 rounded-xl bg-surface-elevated text-enari-blue w-fit mb-5">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4-Step Process */}
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
              How it works
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl">
              Four steps to a{' '}
              <span className="gradient-text">confident decision</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <motion.div
                key={number}
                variants={fadeUp}
                className="glass-card rounded-2xl p-7 lg:p-9 border border-enari-border hover:border-enari-blue/30 transition-colors duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <span className="text-4xl font-bold text-enari-blue/20 group-hover:text-enari-blue/40 transition-colors duration-300 leading-none">
                    {number}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-surface-elevated text-enari-blue">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-white font-bold">{title}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Two Tracks */}
      <section className="bg-surface py-24 lg:py-32">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Two assessment tracks.{' '}
              <span className="gradient-text">One report.</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto leading-relaxed">
              Every Pit Stop runs both tracks simultaneously so you get a complete picture — what's possible, and what it's worth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {tracks.map(({ label, accent, items }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="glass-card rounded-2xl p-8 border border-enari-border"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 ${accent === 'enari-blue' ? 'bg-enari-blue/10 text-enari-blue border border-enari-blue/30' : 'bg-enari-warm/10 text-enari-warm border border-enari-warm/30'}`}>
                  {label}
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                      <CheckCircle2 size={15} className={accent === 'enari-blue' ? 'text-enari-blue shrink-0' : 'text-enari-warm shrink-0'} />
                      {item}
                    </li>
                  ))}
                </ul>
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
              Built for speed, designed for{' '}
              <span className="gradient-text">action</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyEnari.map(({ icon: Icon, title, body }) => (
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

      {/* FAQ */}
      <section className="bg-surface py-24 lg:py-32">
        <motion.div
          className="max-w-3xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently asked{' '}
              <span className="gradient-text">questions</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <ContactCta />
    </PageLayout>
  );
}
