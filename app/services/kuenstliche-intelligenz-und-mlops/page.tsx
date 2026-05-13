'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain, Cpu, Zap, CheckCircle2, ArrowRight,
  RefreshCw, BarChart3, Shield, Layers,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const steps = [
  {
    number: '01',
    title: 'Workshop & AI Assessment',
    description: 'We evaluate your data quality, infrastructure readiness, and business use cases. We identify where AI creates measurable ROI — and where it doesn\'t — before any model is built.',
    icon: Brain,
  },
  {
    number: '02',
    title: 'Architecture Design & Model Development',
    description: 'From preprocessing pipelines and feature stores to model training workflows and experiment tracking with MLflow. We build to production standards, not demo quality.',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Deployment, Monitoring & Continuous Improvement',
    description: 'Models are deployed via CI/CD pipelines with automated retraining triggers, performance monitoring, drift detection, and A/B testing to maintain quality over time.',
    icon: RefreshCw,
  },
];

const benefits = [
  { icon: Zap,       title: 'Fast from prototype to production', body: 'We build models with deployment in mind from day one — not as an afterthought after months of research.' },
  { icon: RefreshCw, title: 'Retraining & drift management',     body: 'Automated monitoring and retraining pipelines keep your models accurate as data distributions shift over time.' },
  { icon: BarChart3, title: 'ROI-oriented solutions',            body: 'Every AI project is anchored to a business metric. We define success criteria before writing a single line of model code.' },
  { icon: Shield,    title: 'Current technology stack',         body: 'We work with the latest frameworks and best practices — not the tools that were popular five years ago.' },
];

const mlopsCapabilities = [
  'Feature engineering & feature stores',
  'Experiment tracking with MLflow',
  'Model versioning & registry',
  'Automated retraining pipelines',
  'Model serving & API deployment',
  'Data drift detection & alerting',
  'A/B testing & shadow deployment',
  'Cost optimisation for inference',
];

const techStack = ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'MLflow', 'Kubeflow', 'Ray', 'FastAPI', 'Docker', 'Kubernetes', 'Databricks', 'Azure ML'];

const whyItems = [
  { icon: Layers, title: 'Industry experience',   body: 'AI delivered in manufacturing, retail, and MedTech — we know what production ML problems actually look like.' },
  { icon: Shield, title: 'White-label delivery',  body: 'Full delivery under your brand with complete documentation and intellectual property transfer.' },
  { icon: Cpu,    title: 'Platform-agnostic',     body: 'We evaluate all major ML platforms and pick the one that fits your infrastructure and team skills.' },
  { icon: Brain,  title: 'End-to-end ownership',  body: 'One team from data assessment through deployment. No handoffs between data science and engineering teams.' },
];

export default function AIMLOpsPage() {
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
              AI & MLOps
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6"
          >
            AI that ships to{' '}
            <span className="gradient-text">production</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg lg:text-xl max-w-2xl leading-relaxed mb-10"
          >
            From prototype to deployed model to self-improving system — we build the data pipelines, ML infrastructure, and operational workflows that make AI deliver real business value.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            {['TensorFlow', 'PyTorch', 'MLflow'].map((t) => (
              <span key={t} className="px-3 py-1.5 text-xs font-semibold text-white/50 border border-enari-border rounded-full">
                {t}
              </span>
            ))}
          </motion.div>
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
              Validate ROI first →
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
            <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest mb-4">The gap</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Most AI projects never leave{' '}
              <span className="gradient-text">the notebook</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Building a model is only 20% of the work. The remaining 80% is the infrastructure, operational processes, and feedback loops that keep it reliable in production. We build that 80%.
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
              Delivery process
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              From idea to{' '}
              <span className="gradient-text">production ML</span>
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

      {/* MLOps capabilities + Tech */}
      <section className="bg-surface py-24 lg:py-32">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="grid lg:grid-cols-2 gap-14">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold mb-8">
                MLOps <span className="gradient-text">capabilities</span>
              </h2>
              <div className="space-y-3">
                {mlopsCapabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 size={15} className="text-enari-blue shrink-0" />
                    {cap}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold mb-8">
                Technology <span className="gradient-text">stack</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm text-white/60 border border-enari-border rounded-full hover:border-enari-blue/40 hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
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
              AI that keeps{' '}
              <span className="gradient-text">getting better</span>
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
