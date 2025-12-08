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
import About from './components/About';
import FAQAccordion from './components/FAQAccordion';
import Contact from './components/Contact';
import Modal from './components/Modal';
import WhatsAppInfo from './components/WhatsAppInfo';
import { WHATSAPP_NUMBER } from './constants/contact';
import PrivacyPolicyContent from './components/legal/PrivacyPolicyContent';
import LegalNoticeContent from './components/legal/LegalNoticeContent';
import CookiesPolicyContent from './components/legal/CookiesPolicyContent';

import CookieConsent from './components/CookieConsent';
import DueloAnimal from './components/DueloAnimal';


const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [legalModal, setLegalModal] = useState<string | null>(null);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
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
                  {/* Sección FAQ para SEO, al final de la home */}
                  <About />
                  <Community />
                  {process.env.VITE_SHOW_TESTIMONIALS !== 'false' && <Testimonials />}
                  <Contact />
              </>
            } />
            <Route path="/duelo-animal" element={<DueloAnimal />} />
          </Routes>
        </main>
        <Footer onOpenLegalModal={handleOpenLegalModal} />
        {legalModal && (
          <Modal isOpen={!!legalModal} onClose={handleCloseLegalModal} title={getModalTitle()}>
            {getModalContent()}
          </Modal>
        )}
        {/* Botón flotante de WhatsApp */}
        <button
          className="fixed bottom-6 right-6 z-[120] bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center gap-2 animate-fade-in"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
          aria-label="Pedir información por WhatsApp"
          onClick={() => setShowWhatsApp(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2.003c-5.52 0-9.997 4.477-9.997 9.997 0 1.762.464 3.482 1.345 4.995L2.04 22.003l5.16-1.35a9.97 9.97 0 0 0 4.84 1.24h.001c5.52 0 9.997-4.477 9.997-9.997 0-2.67-1.04-5.178-2.929-7.067A9.96 9.96 0 0 0 12.04 2.003Zm-.002 17.995a8.01 8.01 0 0 1-4.07-1.12l-.29-.17-3.06.8.82-2.98-.19-.3A7.97 7.97 0 0 1 4.04 12c0-4.41 3.59-8 8-8 2.13 0 4.13.83 5.63 2.34A7.95 7.95 0 0 1 20.04 12c0 4.41-3.59 8-8 8Zm4.42-5.61c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.28-.22.22-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.54.58.2 1.03.32 1.38.41.58.14 1.1.12 1.52.07.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/></svg>
          <span className="hidden md:inline font-semibold">WhatsApp</span>
        </button>
        <Modal isOpen={showWhatsApp} onClose={() => setShowWhatsApp(false)} title="Pedir información por WhatsApp">
          <WhatsAppInfo phone={WHATSAPP_NUMBER} />
        </Modal>
      </div>
    </Router>
  );
};

export default App;