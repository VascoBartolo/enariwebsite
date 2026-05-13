import { Navbar }          from '@/components/navbar';
import { StatsSection }    from '@/components/stats-section';
import { ServicesSection } from '@/components/services-section';
import { AboutSection }    from '@/components/about-section';
import { ContactSection }  from '@/components/contact-section';
import { Footer }          from '@/components/footer';
import { HeroSection, TechnologySection } from '@/components/dynamic-sections';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TechnologySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
