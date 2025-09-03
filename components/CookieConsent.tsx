import React, { useEffect, useMemo, useState } from 'react';
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
const CONSENT_VERSION = 1;
// Si quieres que el banner vuelva a salir en cada visita cuando el usuario "rechaza",
// mantén esta constante a true. La AEPD permite no volver a mostrarlo si ya hay una decisión,
// pero tú has pedido re-preguntar hasta que acepten.
const RESURFACE_ON_REJECT = true;
// Renovación del consentimiento tras X meses (p. ej., 12 meses)
const RENEW_AFTER_MS = 1000 * 60 * 60 * 24 * 365; // 12 meses aprox

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
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  type StoredConsent =
    | string
    | {
        version: number;
        ts: number;
        decision: 'accepted' | 'rejected' | 'custom';
        categories: typeof prefs;
      };

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      setVisible(true);
      return;
    }

    let parsed: StoredConsent | null = null;
    try { parsed = JSON.parse(raw) as StoredConsent; } catch {
      // formatos antiguos 'accepted'/'rejected'
      if (raw === 'accepted') {
        parsed = {
          version: CONSENT_VERSION,
          ts: Date.now(),
          decision: 'accepted',
          categories: { necessary: true, preferences: true, statistics: true, marketing: true },
        };
      } else if (raw === 'rejected') {
        parsed = {
          version: CONSENT_VERSION,
          ts: Date.now(),
          decision: 'rejected',
          categories: { necessary: true, preferences: false, statistics: false, marketing: false },
        };
      }
    }

    if (!parsed) {
      setVisible(true);
      return;
    }

    const needsRenew = Date.now() - (parsed as any).ts > RENEW_AFTER_MS || (parsed as any).version !== CONSENT_VERSION;
    const decision = (parsed as any).decision;
    const categories = (parsed as any).categories as typeof prefs;
    setPrefs(categories);

    if (needsRenew || (RESURFACE_ON_REJECT && decision === 'rejected')) {
      setVisible(true);
      return;
    }

    // Cargar scripts según consentimiento guardado
    if (categories.statistics) {
      loadGoogleAnalytics(GOOGLE_ANALYTICS_ID);
    }
  }, []);

  const persist = (decision: 'accepted' | 'rejected' | 'custom', categories: typeof prefs) => {
    const payload = JSON.stringify({ version: CONSENT_VERSION, ts: Date.now(), decision, categories });
    localStorage.setItem(STORAGE_KEY, payload);
  };

  const acceptAll = () => {
    const categories = { necessary: true, preferences: true, statistics: true, marketing: true };
    setPrefs(categories);
    persist('accepted', categories);
    loadGoogleAnalytics(GOOGLE_ANALYTICS_ID);
    setVisible(false);
    setShowSettings(false);
  };

  const reject = () => {
    const categories = { necessary: true, preferences: false, statistics: false, marketing: false };
    setPrefs(categories);
    persist('rejected', categories);
    setVisible(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    persist('custom', prefs);
    if (prefs.statistics) {
      loadGoogleAnalytics(GOOGLE_ANALYTICS_ID);
    }
    setVisible(false);
    setShowSettings(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60]">
      <div className="mx-auto max-w-5xl m-4 rounded-xl bg-black/85 backdrop-blur text-brand-light shadow-xl border border-white/10">
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <p className="text-sm leading-relaxed">
                Usamos cookies propias y de terceros con fines técnicos, de preferencias, estadísticos y de marketing. Puedes
                aceptar todas, rechazarlas o configurar tus preferencias. Consulta la{' '}
                <button
                  className="underline underline-offset-4 hover:text-brand-accent"
                  onClick={() => onOpenLegalModal?.('cookies')}
                >
                  Política de Cookies
                </button>.
              </p>
              {showSettings && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-start gap-3 p-3 rounded border border-white/10 bg-white/5">
                    <input type="checkbox" checked disabled className="mt-1" />
                    <span className="text-sm">
                      <strong>Necesarias</strong>: imprescindibles para el funcionamiento básico del sitio.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded border border-white/10 bg-white/5">
                    <input type="checkbox" checked={prefs.preferences} onChange={(e) => setPrefs(v => ({...v, preferences: e.target.checked}))} className="mt-1" />
                    <span className="text-sm">
                      <strong>Preferencias</strong>: recuerdan opciones como idioma o región.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded border border-white/10 bg-white/5">
                    <input type="checkbox" checked={prefs.statistics} onChange={(e) => setPrefs(v => ({...v, statistics: e.target.checked}))} className="mt-1" />
                    <span className="text-sm">
                      <strong>Estadísticas</strong>: ayudan a comprender cómo interactúan los visitantes (Google Analytics anonimizado).
                    </span>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded border border-white/10 bg-white/5">
                    <input type="checkbox" checked={prefs.marketing} onChange={(e) => setPrefs(v => ({...v, marketing: e.target.checked}))} className="mt-1" />
                    <span className="text-sm">
                      <strong>Marketing</strong>: seguimiento para mostrar contenidos y promociones personalizadas.
                    </span>
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex gap-3 order-2 sm:order-1">
              <button onClick={reject} className="px-4 py-2 rounded border border-white/20 hover:bg-white/10 transition-colors text-sm">Rechazar</button>
              <button onClick={() => setShowSettings((s) => !s)} className="px-4 py-2 rounded border border-white/20 hover:bg-white/10 transition-colors text-sm">
                {showSettings ? 'Ocultar' : 'Configurar'}
              </button>
              {showSettings && (
                <button onClick={savePreferences} className="px-4 py-2 rounded bg-white/15 hover:bg-white/25 transition-colors text-sm">Guardar preferencias</button>
              )}
            </div>
            <div className="order-1 sm:order-2">
              <button onClick={acceptAll} className="px-4 py-2 rounded bg-brand-accent text-brand-dark font-semibold hover:opacity-90 transition-opacity text-sm">Aceptar todas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
