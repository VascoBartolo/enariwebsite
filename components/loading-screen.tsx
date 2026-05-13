'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const handler = () => setDone(true);
    window.addEventListener('hero:ready', handler);
    const fallback = setTimeout(() => setDone(true), 10_000);
    return () => {
      window.removeEventListener('hero:ready', handler);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#060608] flex flex-col items-center justify-center gap-10 pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/Enari_logo.png"
              alt="Enari"
              width={120}
              height={40}
              priority
              className="invert brightness-200 h-9 w-auto"
            />
          </motion.div>

          {/* Shimmer bar */}
          <motion.div
            className="w-28 h-px bg-white/10 rounded-full overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <motion.div
              className="absolute inset-y-0 w-16 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent, #6EC6E8, #E0987A, transparent)',
              }}
              animate={{ x: [-64, 112] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: 'linear', repeatDelay: 0.1 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
