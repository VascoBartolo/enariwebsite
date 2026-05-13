import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-aeonik)', 'system-ui', 'sans-serif'],
        aeonik: ['var(--font-aeonik)', 'sans-serif'],
      },
      colors: {
        background: '#060608',
        surface: '#0D0D12',
        'surface-elevated': '#141420',
        'enari-blue': '#6EC6E8',
        'enari-warm': '#E0987A',
        'enari-red': '#E84040',
        'enari-border': 'rgba(255,255,255,0.07)',
      },
      keyframes: {
        glitch: {
          '0%':   { transform: 'translateX(0) skewX(0deg)',   opacity: '0' },
          '10%':  { transform: 'translateX(-4px) skewX(-2deg)', opacity: '0.5' },
          '20%':  { transform: 'translateX(4px) skewX(2deg)',  opacity: '0.8' },
          '30%':  { transform: 'translateX(-2px) skewX(-1deg)', opacity: '1' },
          '60%':  { transform: 'translateX(1px)',             opacity: '1' },
          '100%': { transform: 'translateX(0) skewX(0deg)',   opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        bounceArrow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        revealUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        glitch:       'glitch 0.45s ease forwards',
        fadeInUp:     'fadeInUp 0.6s ease forwards',
        bounceArrow:  'bounceArrow 2s ease-in-out infinite',
        shimmer:      'shimmer 3s linear infinite',
        revealUp:     'revealUp 0.7s ease forwards',
        scaleIn:      'scaleIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
};

export default config;
