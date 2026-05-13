import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { LoadingScreen } from '@/components/loading-screen';

const aeonik = localFont({
  src: [
    { path: '../public/fonts/Aeonik-Light.woff2',   weight: '300', style: 'normal' },
    { path: '../public/fonts/Aeonik-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Aeonik-Bold.woff2',    weight: '700', style: 'normal' },
  ],
  variable: '--font-aeonik',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Enari — Sport Biotech & Technology',
  description:
    'Pioneering sport biotech, software development, data infrastructure and cloud engineering for the next generation of athletes.',
  keywords: [
    'sport biotech', 'EIT wearable', 'athlete performance', 'muscle monitoring',
    'cloud infrastructure', 'data engineering', 'software development',
  ],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Enari — Sport Biotech & Technology',
    description: 'Engineering human performance through precision biotech and cutting-edge technology.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={aeonik.variable}>
      <body className="font-sans bg-background text-white antialiased overflow-x-hidden">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
