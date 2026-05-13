'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const footerLinks = {
  Company: [
    { label: 'About',        href: '/#about' },
    { label: 'Services',     href: '/#services' },
    { label: 'Case Studies', href: '/services/case-studies' },
    { label: 'Blog',         href: '/blog' },
    { label: 'Career',     href: '/career' },
    { label: 'Contact',      href: '/#contact' },
  ],
  Services: [
    { label: 'Data Analytics & BI',     href: '/services/enari-services-datenanalyse' },
    { label: 'Data Engineering',        href: '/services/data-engineering-und-data-warehouse-consulting' },
    { label: 'DevOps & Cloud',          href: '/services/devops-und-cloud-infrastruktur-consulting' },
    { label: 'AI & MLOps',              href: '/services/kuenstliche-intelligenz-und-mlops' },
    { label: 'Data ROI Pit Stop',       href: '/services/data-roi' },
  ],
};

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github,   href: 'https://github.com',   label: 'GitHub' },
  { icon: Twitter,  href: 'https://twitter.com',  label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-enari-border">
      {/* Main footer */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand column */}
          <motion.div variants={fadeUp} className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex mb-6">
              <Image
                src="/Enari_logo-removebg-preview.png"
                alt="Enari"
                width={100}
                height={34}
                className="invert brightness-200 h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Sport biotech, software development & cloud infrastructure for the next generation of athletes.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-enari-border flex items-center justify-center text-white/40 hover:text-white hover:border-enari-blue/40 transition-all duration-300"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <motion.div key={group} variants={fadeUp}>
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Stay Updated
            </p>
            <p className="text-sm text-white/40 mb-4 leading-relaxed">
              Research insights and product updates, once a month.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 bg-surface border border-enari-border rounded-xl px-3 py-2 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-enari-blue/50 transition-colors"
              />
              <button className="px-3 py-2 bg-enari-blue text-black text-xs font-bold rounded-xl hover:bg-enari-blue/80 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-enari-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Enari GmbH. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Imprint', 'Terms of Service'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-white/25 hover:text-white/50 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
