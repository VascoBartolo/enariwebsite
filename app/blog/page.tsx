'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PageLayout } from '@/components/page-layout';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const articles = [
  {
    slug: '/data-quality-definition',
    category: 'Data Management',
    categoryVariant: 'blue' as const,
    title: 'Data Quality: Definition & What It Really Means',
    description: 'A practical definition of data quality, the five key dimensions, ISO 8000, and the real cost of poor data on reporting, AI, and strategic decisions.',
    author: 'Bastian Knaus',
    readTime: '6 min read',
  },
  {
    slug: '/etl-definition-and-overview',
    category: 'Data Engineering',
    categoryVariant: 'blue' as const,
    title: 'ETL: Definition and Overview',
    description: 'What Extract, Transform, Load means, how each phase works, which tools are used, and why ETL is the backbone of reliable analytics and data warehousing.',
    author: 'Bastian Knaus',
    readTime: '7 min read',
  },
  {
    slug: '/data-mesh-vs-data-spaces',
    category: 'Architecture',
    categoryVariant: 'warm' as const,
    title: 'Data Mesh vs. Data Spaces: What\'s the Difference?',
    description: 'Two concepts, one common confusion. We break down Data Mesh and Data Spaces — their definitions, principles, similarities, differences, and when to use each.',
    author: 'Bastian Knaus',
    readTime: '8 min read',
  },
  {
    slug: '/data-mesh-idea-and-origin',
    category: 'Architecture',
    categoryVariant: 'warm' as const,
    title: 'Data Mesh: Idea & Origin',
    description: 'Where Data Mesh came from, the limitations of centralised data platforms it was designed to address, and how Zhamak Dehghani\'s original thinking still applies today.',
    author: 'Bastian Knaus',
    readTime: '6 min read',
  },
  {
    slug: '/data-mesh-principles',
    category: 'Architecture',
    categoryVariant: 'warm' as const,
    title: 'The Core Principles of Data Mesh',
    description: 'Domain ownership, data as a product, self-serve infrastructure, and federated governance — a deep dive into the four pillars that define Data Mesh.',
    author: 'Bastian Knaus',
    readTime: '7 min read',
  },
  {
    slug: '/data-products-in-data-mesh',
    category: 'Data Products',
    categoryVariant: 'blue' as const,
    title: 'Data Products in Data Mesh Infrastructure',
    description: 'What data products are, how they differ from traditional data assets, their lifecycle inside a Data Mesh, and the technology needed to make them work at scale.',
    author: 'Bastian Knaus',
    readTime: '8 min read',
  },
];

export default function BlogPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-enari-blue/4 rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <Badge variant="blue">
              <span className="w-1.5 h-1.5 rounded-full bg-enari-blue inline-block" />
              Insights
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-2xl mb-6"
          >
            Enari{' '}
            <span className="gradient-text">Blog</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg max-w-xl leading-relaxed"
          >
            Practical guides on data engineering, analytics architecture, and the frameworks that help organisations work better with data.
          </motion.p>
        </motion.div>
      </section>

      {/* Articles grid */}
      <section className="py-16 lg:py-24">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(({ slug, category, categoryVariant, title, description, author, readTime }) => (
              <motion.div key={slug} variants={fadeUp}>
                <Link
                  href={slug}
                  className="glass-card rounded-2xl p-7 border border-enari-border hover:border-enari-blue/30 transition-all duration-300 group flex flex-col h-full"
                >
                  <Badge variant={categoryVariant} className="w-fit mb-5">
                    {category}
                  </Badge>
                  <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-enari-blue transition-colors duration-300">
                    {title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">{description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-white/30">
                      <span className="flex items-center gap-1.5">
                        <User size={11} /> {author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={11} /> {readTime}
                      </span>
                    </div>
                    <ArrowRight size={14} className="text-white/30 group-hover:text-enari-blue group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-20">
        <motion.div
          className="max-w-3xl mx-auto px-6 lg:px-10 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-5">
            Want to talk through a data challenge?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 mb-8 leading-relaxed">
            Our team is happy to discuss your specific situation and point you toward the right approach — no commitment required.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-enari-blue transition-all duration-300 text-sm"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
