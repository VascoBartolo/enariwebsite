'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cloud, Terminal, Shield, CheckCircle2, ArrowRight,
  Cpu, RefreshCw, Activity, Server,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { ContactCta } from '@/components/contact-cta';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const steps = [
  {
    number: '01',
    title: 'Assessment & Architecture Design',
    description: 'We audit your existing infrastructure, CI/CD maturity, deployment processes, and monitoring coverage. We then design a target state architecture aligned with your team size, release cadence, and cloud strategy.',
    icon: Terminal,
  },
  {
    number: '02',
    title: 'Implementation & Migration',
    description: 'Our engineers implement Kubernetes clusters, Terraform modules, CI/CD pipelines, and observability tooling. Migrations are executed incrementally with rollback plans at every step.',
    icon: Cloud,
  },
  {
    number: '03',
    title: 'Monitoring, Testing & Continuous Improvement',
    description: 'We configure dashboards, alerts, SLOs, and runbooks. After handover, we provide an improvement backlog and optionally remain engaged for iteration sprints.',
    icon: Activity,
  },
];

const implementationAreas = [
  { title: 'Kubernetes & Container Orchestration', body: 'Cluster setup, Helm chart development, namespace policies, resource quotas, and cluster autoscaling on EKS, AKS, or GKE.' },
  { title: 'Infrastructure as Code',               body: 'Terraform and Terragrunt modules for reproducible, version-controlled infrastructure across AWS, Azure, and GCP.' },
  { title: 'CI/CD Pipelines',                      body: 'GitHub Actions, GitLab CI, or Azure DevOps pipelines with automated testing, security scanning, and environment promotion gates.' },
  { title: 'High Availability & Load Balancing',   body: 'Multi-region deployments, traffic management, blue/green and canary release strategies.' },
  { title: 'Monitoring & Observability',            body: 'Prometheus, Grafana, Loki, OpenTelemetry — full-stack observability with structured logging and distributed tracing.' },
  { title: 'Security & Compliance',                body: 'Secret management (Vault, AWS Secrets Manager), network policies, RBAC, and audit logging aligned with compliance requirements.' },
];

const cloudPlatforms = ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Terragrunt', 'Helm', 'Prometheus', 'Grafana', 'GitHub Actions', 'GitLab CI'];

const whyItems = [
  { icon: Server,    title: 'Industry experience',   body: 'Cloud infrastructure built for data-intensive workloads, regulated industries, and high-traffic production systems.' },
  { icon: Shield,    title: 'Security-first',        body: 'We build security into every layer — not as an afterthought, but as a design constraint from day one.' },
  { icon: Cloud,     title: 'Platform-agnostic',     body: 'We\'re certified on AWS, Azure, and GCP and recommend based on your existing commitments, not ours.' },
  { icon: RefreshCw, title: 'Continuous improvement', body: 'We design systems that improve over time, not ones that require replacement every two years.' },
];

export default function DevOpsPage() {
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
              DevOps & Cloud
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6"
          >
            Ship faster.{' '}
            <span className="gradient-text">Scale confidently.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg lg:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Modern cloud infrastructure, automated CI/CD, and Kubernetes-native deployment pipelines that let your engineering team move at the speed your business demands.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            {['Docker', 'Kubernetes', 'Terraform', 'Azure', 'AWS', 'GCP'].map((t) => (
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
              href="/services/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 border border-enari-border text-white/70 hover:text-white hover:border-enari-blue/40 rounded-full transition-all duration-300 text-sm font-semibold"
            >
              See case studies
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="bg-surface py-20 lg:py-28">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest mb-4">Why it matters</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Fast releases need{' '}
              <span className="gradient-text">stable infrastructure</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Modern software teams ship multiple times per week. Without automated pipelines, reliable infrastructure, and real-time observability, velocity creates fragility. We help you move fast without breaking things.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Cpu,       title: 'Eliminate manual operations', body: 'Replace manual deploys and configuration drift with fully automated, version-controlled infrastructure.' },
              { icon: Shield,    title: 'Build-in resilience',         body: 'High availability, automatic failover, and disaster recovery built into the architecture from the start.' },
              { icon: Activity,  title: 'Full observability',          body: 'Know what\'s happening across every service in real time — before your users notice a problem.' },
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
              From audit to{' '}
              <span className="gradient-text">production-ready</span>
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

      {/* Implementation areas */}
      <section className="bg-surface py-24 lg:py-32">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What we{' '}
              <span className="gradient-text">implement</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {implementationAreas.map(({ title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-enari-border hover:border-enari-blue/30 transition-colors duration-300"
              >
                <CheckCircle2 size={16} className="text-enari-blue mb-4" />
                <h3 className="text-white font-bold mb-2 text-sm">{title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech */}
      <section className="py-16">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
            {cloudPlatforms.map((tech) => (
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
      <section className="bg-surface py-24 lg:py-32">
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
              Infrastructure that{' '}
              <span className="gradient-text">earns trust</span>
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
