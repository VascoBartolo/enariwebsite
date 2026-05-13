'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2, Cloud, CheckCircle2, ArrowRight,
  Users, Clock, MapPin, Briefcase, Zap, Heart,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const roles = [
  {
    icon: Code2,
    title: 'Software Developer',
    type: 'Full-time / Part-time',
    accent: 'enari-blue',
    summary: 'Work across cloud services and our sports/MedTech product — from backend APIs to embedded firmware and full-stack web applications.',
    required: [
      'German C1 or higher',
      'Python or Java (professional experience)',
      'REST API design and implementation',
      'Docker and containerisation',
    ],
    preferred: [
      'C++, C#, or ASP.NET',
      'React or similar frontend framework',
      'Kubernetes / Helm',
      'CI/CD pipelines',
      'Azure or AWS',
      'Terraform / Terragrunt',
      'ML or data engineering experience',
      'Databricks',
      'Microcontroller / embedded development',
      'Data Spaces',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Engineer',
    type: 'Full-time / Part-time',
    accent: 'enari-warm',
    summary: 'Design and operate cloud infrastructure for our consulting clients and internal product — with a focus on automation, scalability, and reliability.',
    required: [
      'German C1 or higher',
      'Infrastructure as Code with Terraform or Terragrunt',
      'CI/CD pipeline design and operation',
      'Azure or AWS (production experience)',
      'Docker and container orchestration',
    ],
    preferred: [
      'Kubernetes / Helm',
      'Python, .NET, Java, React, Spark, or SQL',
      'Data Spaces',
      'ML infrastructure or Databricks',
      'Microcontroller experience',
      'Monitoring and observability tooling',
    ],
  },
];

const benefits = [
  { icon: Zap,       title: 'High ownership',      body: 'Small team, big impact. Every person has direct influence on product and client decisions — no layers of approval.' },
  { icon: Clock,     title: 'Flexible hours',       body: 'We care about output, not face time. Remote work, flexible scheduling, and part-time options available.' },
  { icon: Users,     title: 'Family-like culture',  body: 'A young MedTech and AI company where everyone knows each other and collaboration is direct and genuine.' },
  { icon: Heart,     title: 'Varied work',          body: 'Alternate between cloud/data-science consulting work and our own hardware and software product development.' },
  { icon: MapPin,    title: 'Garching office',      body: 'Based in Garching b. München, close to the TU campus. Remote-first with occasional team days.' },
  { icon: Briefcase, title: 'Startup trajectory',   body: 'Join early and grow with the company. As we scale, roles and responsibilities evolve with you.' },
];

export default function CareerPage() {
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
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <Badge variant="warm">
              <span className="w-1.5 h-1.5 rounded-full bg-enari-warm inline-block" />
              Career
            </Badge>
            <span className="px-3 py-1 text-xs font-semibold text-white/50 border border-enari-border rounded-full">
              No open positions currently
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6"
          >
            Join our{' '}
            <span className="gradient-text">team</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg lg:text-xl max-w-2xl leading-relaxed mb-10"
          >
            All current positions are filled. But if you're a strong engineer who cares about data, AI, and sports technology — we want to hear from you. New roles emerge as we grow.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href="mailto:contact@enari.com?subject=Spontaneous Application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-enari-blue transition-all duration-300 text-sm"
            >
              Send a spontaneous application <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* What we build */}
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
              <p className="text-xs font-semibold text-enari-blue uppercase tracking-widest mb-4">What we do</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Two tracks,{' '}
                <span className="gradient-text">one team</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                At Enari, you work across two distinct areas. Our <strong className="text-white/80">consulting practice</strong> delivers data engineering, analytics, DevOps, and AI/MLOps projects for clients across industry. Our <strong className="text-white/80">product track</strong> builds the EIT wearable — a medical-grade muscle monitoring device for elite athletes — and its supporting software and cloud infrastructure.
              </p>
              <p className="text-white/50 leading-relaxed">
                This means no two weeks look the same. Consultants contribute to our own product, and product engineers work on client projects. The variety is intentional.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { label: 'Consulting', items: ['Data engineering & ETL', 'Analytics & BI', 'Cloud & DevOps', 'AI & MLOps'] },
                { label: 'Product',    items: ['EIT wearable firmware', 'Mobile & web apps', 'Cloud backend & APIs', 'Data platform'] },
              ].map(({ label, items }) => (
                <div key={label} className="glass-card rounded-2xl p-6 border border-enari-border">
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">{label}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="text-xs text-white/50 border border-enari-border rounded-full px-3 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Role profiles */}
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
              Role profiles
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              The profiles we{' '}
              <span className="gradient-text">look for</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {roles.map(({ icon: Icon, title, type, accent, summary, required, preferred }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="glass-card rounded-2xl p-8 border border-enari-border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-2.5 rounded-xl bg-surface-elevated ${accent === 'enari-blue' ? 'text-enari-blue' : 'text-enari-warm'}`}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{title}</h3>
                    <p className="text-white/35 text-xs mt-0.5">{type}</p>
                  </div>
                </div>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{summary}</p>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Required</p>
                    <ul className="space-y-2">
                      {required.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-white/60">
                          <CheckCircle2 size={12} className={`shrink-0 ${accent === 'enari-blue' ? 'text-enari-blue' : 'text-enari-warm'}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Nice to have</p>
                    <div className="flex flex-wrap gap-2">
                      {preferred.map((item) => (
                        <span key={item} className="text-xs text-white/40 border border-enari-border rounded-full px-2.5 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
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
              Working at Enari
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Why people{' '}
              <span className="gradient-text">join us</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, body }) => (
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

      {/* Apply CTA */}
      <section className="py-24 lg:py-32">
        <motion.div
          className="max-w-3xl mx-auto px-6 lg:px-10 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-5">
            Interested? Send us{' '}
            <span className="gradient-text">your profile</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 leading-relaxed mb-8 max-w-lg mx-auto">
            We review all applications and reply to every candidate. If there's a fit now or in the future, we'll reach out.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@enari.com?subject=Spontaneous Application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-enari-blue transition-all duration-300 text-sm"
            >
              Apply now <ArrowRight size={16} />
            </a>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 px-8 py-4 border border-enari-border text-white/70 hover:text-white hover:border-enari-blue/40 rounded-full transition-all duration-300 text-sm font-semibold"
            >
              Learn about Enari
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
