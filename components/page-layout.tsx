import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
