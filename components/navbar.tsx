'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Home, BarChart2, Database, Cloud, Brain, TrendingUp, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const serviceLinks = [
  { label: 'Data ROI Pit Stop',    href: '/services/data-roi',                                        icon: TrendingUp, desc: 'Fast feasibility & ROI evaluation' },
  { label: 'Data Analytics & BI',  href: '/services/data-analytics-and-bi',              icon: BarChart2,  desc: 'Dashboards, KPIs, reporting' },
  { label: 'Data Engineering',     href: '/services/data-engineering-and-data-warehouse', icon: Database,   desc: 'Pipelines, warehouses, ETL/ELT' },
  { label: 'DevOps & Cloud',       href: '/services/devops-and-cloud-infrastructure',     icon: Cloud,      desc: 'CI/CD, Kubernetes, Terraform' },
  { label: 'AI & MLOps',           href: '/services/ai-and-mlops',                        icon: Brain,      desc: 'Models, deployment, retraining' },
  { label: 'Case Studies',         href: '/services/case-studies',                                    icon: Award,      desc: 'Proven results in production' },
];

const topLinks = [
  { label: 'Blog',   href: '/blog' },
  { label: 'Career', href: '/career' },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Navbar() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="fixed top-0 left-0 right-0 z-[1000] bg-background/95 backdrop-blur-md border-b border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">

          {/* Logo → Home */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/Enari_logo-removebg-preview.png"
              alt="Enari"
              width={110}
              height={36}
              priority
              className="invert brightness-200 w-auto h-8 lg:h-9 transition-opacity duration-300 group-hover:opacity-70"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((o) => !o)}
                className={cn(
                  'flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300',
                  isActive('/services')
                    ? 'text-enari-blue bg-enari-blue/8'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                )}
              >
                Services
                <ChevronDown
                  size={14}
                  className={cn('transition-transform duration-300', servicesOpen && 'rotate-180')}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    key="dropdown"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2, ease }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#0D0D12] rounded-2xl border border-enari-border p-2 shadow-2xl shadow-black/80"
                  >
                    {serviceLinks.map(({ label, href, icon: Icon, desc }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setServicesOpen(false)}
                        className={cn(
                          'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 group',
                          pathname === href
                            ? 'bg-enari-blue/10 text-enari-blue'
                            : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                        )}
                      >
                        <div className={cn(
                          'p-1.5 rounded-lg shrink-0',
                          pathname === href ? 'bg-enari-blue/20 text-enari-blue' : 'bg-surface-elevated text-white/40 group-hover:text-enari-blue group-hover:bg-enari-blue/10'
                        )}>
                          <Icon size={13} strokeWidth={1.8} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold leading-none mb-0.5">{label}</p>
                          <p className="text-[11px] text-white/35">{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Top-level links */}
            {topLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300',
                  isActive(href)
                    ? 'text-enari-blue bg-enari-blue/8'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#contact"
              className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-enari-blue transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-[#060608]/97 backdrop-blur-xl flex flex-col md:hidden overflow-y-auto"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-enari-border shrink-0">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/Enari_logo-removebg-preview.png"
                  alt="Enari"
                  width={90}
                  height={30}
                  className="invert brightness-200 h-7 w-auto"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 px-6 py-8 space-y-1">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                <Home size={16} strokeWidth={1.5} />
                <span className="font-semibold">Home</span>
              </Link>

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServices((o) => !o)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  <span className="font-semibold">Services</span>
                  <ChevronDown
                    size={16}
                    className={cn('transition-transform duration-300', mobileServices && 'rotate-180')}
                  />
                </button>
                <AnimatePresence>
                  {mobileServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-1 pb-2 space-y-0.5">
                        {serviceLinks.map(({ label, href, icon: Icon }) => (
                          <Link
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className={cn(
                              'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors',
                              pathname === href
                                ? 'text-enari-blue bg-enari-blue/10'
                                : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                            )}
                          >
                            <Icon size={14} strokeWidth={1.5} className="shrink-0" />
                            {label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Top links */}
              {topLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'flex items-center px-4 py-3 rounded-xl font-semibold transition-colors',
                    pathname === href
                      ? 'text-enari-blue bg-enari-blue/10'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="px-6 pb-10 pt-4 border-t border-enari-border shrink-0">
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-6 py-4 bg-white text-black text-base font-bold rounded-full hover:bg-enari-blue transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
