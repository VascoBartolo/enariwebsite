'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from '@/lib/motion';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@enari.com',
    href: 'mailto:contact@enari.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+49 89 3745 7632',
    href: 'tel:+4989374576320',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dieselstraße 28, 85748 Garching b. München',
    href: 'https://maps.google.com/?q=Dieselstraße+28+85748+Garching',
  },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-surface py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-enari-blue/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <Badge variant="blue" className="mb-5 mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-enari-blue inline-block" />
              Get in touch
            </Badge>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold">
            Let's build something{' '}
            <span className="gradient-text">exceptional</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-white/50 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Whether you're a sports organisation, research institution, or technology partner — we'd love to hear about your project.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="glass-card rounded-3xl p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center h-64 text-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                      className="w-14 h-14 rounded-full bg-enari-blue/10 border border-enari-blue/30 flex items-center justify-center"
                    >
                      <Send size={24} className="text-enari-blue" strokeWidth={1.5} />
                    </motion.div>
                    <div>
                      <p className="text-xl font-bold text-white">Message sent!</p>
                      <p className="text-white/40 text-sm mt-1">We'll get back to you within 24 hours.</p>
                    </div>
                    <button
                      className="text-xs text-white/40 hover:text-white/70 transition-colors mt-2"
                      onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2 block">Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-surface border border-enari-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-enari-blue/50 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2 block">Email</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-surface border border-enari-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-enari-blue/50 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2 block">Subject</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-surface border border-enari-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-enari-blue/50 transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2 block">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-surface border border-enari-border rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-enari-blue/50 transition-colors resize-none"
                        placeholder="Tell us about your project or question..."
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 text-sm font-bold">
                      <Send size={15} />
                      Send Message
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact info — 2 cols */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target={label === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
                variants={fadeRight}
                whileHover={{ x: 4, transition: { duration: 0.2, ease: 'easeOut' } }}
                className="glass-card rounded-2xl p-5 border border-enari-border hover:border-enari-blue/40 transition-colors duration-300 group flex gap-4 items-start"
              >
                <div className="p-2.5 rounded-xl bg-surface-elevated border border-enari-border text-enari-blue group-hover:bg-enari-blue/10 transition-colors shrink-0">
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-white/30 font-semibold uppercase tracking-widest">{label}</p>
                  <p className="text-sm text-white/70 group-hover:text-white transition-colors mt-0.5 leading-relaxed">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Contact person card */}
            <motion.div
              variants={fadeRight}
              className="glass-card rounded-2xl p-5 border border-enari-border mt-2"
            >
              <p className="text-xs text-white/30 font-semibold uppercase tracking-widest mb-3">Direct contact</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-enari-blue/40 to-enari-warm/40 border border-enari-border flex items-center justify-center text-white font-bold text-sm">
                  BK
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Bastian Knaus</p>
                  <p className="text-xs text-white/40">Co-Founder & COO</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
