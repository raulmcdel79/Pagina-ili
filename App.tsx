import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TopBanner from './components/TopBanner';
import StatsStrip from './components/StatsStrip';
import Magazine from './components/Magazine';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Modal from './components/Modal';
import PrivacyPolicyContent from './components/legal/PrivacyPolicyContent';
import LegalNoticeContent from './components/legal/LegalNoticeContent';
import CookiesPolicyContent from './components/legal/CookiesPolicyContent';

import CookieConsent from './components/CookieConsent';
import DueloAnimal from './components/DueloAnimal';


const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [legalModal, setLegalModal] = useState<string | null>(null);
  // Reseñas visibles por defecto

  useEffect(() => {
    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        } else {
            setScrollProgress(0);
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenLegalModal = (modal: string) => setLegalModal(modal);
  const handleCloseLegalModal = () => setLegalModal(null);

  const getModalContent = () => {
    switch (legalModal) {
      case 'privacy':
        return <PrivacyPolicyContent />;
      case 'legal':
        return <LegalNoticeContent />;
      case 'cookies':
        return <CookiesPolicyContent />;
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (legalModal) {
      case 'privacy':
        return 'Política de Privacidad';
      case 'legal':
        return 'Aviso Legal';
      case 'cookies':
        return 'Política de Cookies';
      default:
        return '';
    }
  };

  return (
    <Router>
      <div className="antialiased font-lora text-brand-light/90 selection:bg-brand-accent selection:text-brand-dark">
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
        <TopBanner />
        <Header />
  <CookieConsent onOpenLegalModal={handleOpenLegalModal} />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                {/* Banner duelo animal */}
                <div className="w-full flex justify-center bg-brand-accent/90 py-4 px-2 md:px-0 shadow-lg animate-fade-in">
                  <a href="/duelo-animal" className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-brand-dark font-semibold text-lg md:text-xl hover:underline">
                    <span role="img" aria-label="huella">🐾</span>
                    <span>Acompañamiento en el duelo por la pérdida de tu animal</span>
                    <span className="hidden md:inline-block bg-brand-dark/10 rounded px-3 py-1 text-sm font-normal ml-2">Nuevo</span>
                  </a>
                </div>
                <StatsStrip />
                <Services />
                <Magazine />
                <Booking />
                <About />
                <Testimonials />
                <Community />
                <Contact />
              </>
            } />
            <Route path="/duelo-animal" element={<DueloAnimal />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer onOpenLegalModal={handleOpenLegalModal} />
        {legalModal && (
          <Modal isOpen={!!legalModal} onClose={handleCloseLegalModal} title={getModalTitle()}>
            {getModalContent()}
          </Modal>
        )}
      </div>
    </Router>
  );
};

export default App;