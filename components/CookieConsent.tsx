import React, { useEffect, useState } from 'react';
import { GOOGLE_ANALYTICS_ID } from '../analytics';

declare global {
  interface Window {
    GA_INITIALIZED?: boolean;
    dataLayer?: any[];
  }
}

interface CookieConsentProps {
  onOpenLegalModal?: (modal: string) => void;
}

const STORAGE_KEY = 'atad_cookie_consent';

const loadGoogleAnalytics = (gaId: string) => {
  if (!gaId || gaId === 'G-XXXXXXXXXX' || window.GA_INITIALIZED) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ (window.dataLayer as any).push(arguments); }
  // @ts-ignore
  gtag('js', new Date());
  // @ts-ignore
  gtag('config', gaId, { anonymize_ip: true });
  window.GA_INITIALIZED = true;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onOpenLegalModal }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem(STORAGE_KEY);
    if (status === 'accepted') {
      loadGoogleAnalytics(GOOGLE_ANALYTICS_ID);
    } else if (!status) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    loadGoogleAnalytics(GOOGLE_ANALYTICS_ID);
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60]">
      <div className="mx-auto max-w-5xl m-4 rounded-xl bg-black/80 backdrop-blur text-brand-light shadow-xl border border-white/10">
        <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:gap-6">
          <p className="text-sm leading-relaxed flex-1">
            Usamos cookies para mejorar tu experiencia y analizar el uso del sitio. Puedes aceptar o rechazar. 
            Lee nuestra{' '}
            <button
              className="underline underline-offset-4 hover:text-brand-accent"
              onClick={() => onOpenLegalModal?.('cookies')}
            >
              Política de Cookies
            </button>.
          </p>
          <div className="mt-4 sm:mt-0 flex gap-3 shrink-0">
            <button onClick={reject} className="px-4 py-2 rounded border border-white/20 hover:bg-white/10 transition-colors text-sm">Rechazar</button>
            <button onClick={accept} className="px-4 py-2 rounded bg-brand-accent text-brand-dark font-semibold hover:opacity-90 transition-opacity text-sm">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
