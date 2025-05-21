
import React, { useEffect } from 'react';
import Header from '../assets/components/Header';
import HeroSection from '../assets/components/HeroSection';
import ServicesSection from '../assets/components/ServicesSection';
import AboutSection from '../assets/components/AboutSection';
import StatsSection from '../assets/components/StatsSection';
import TeamSection from '../assets/components/TeamSection';
import TestimonialsSection from '../assets/components/TestimonialsSection';
import ContactSection from '../assets/components/ContactSection';
import Footer from '../assets/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Belfort - Creative Digital Agency';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
