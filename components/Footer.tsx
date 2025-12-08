
import React, { useState } from 'react';
import { PHONE_TEL, MAILTO_ADDRESS } from '../constants/contact';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FooterProps {
  onOpenLegalModal: (modal: string) => void;
}

const Tiktok = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
  </svg>
);

function NewsletterForm() {
  const handleSendEmail = () => {
    const subject = 'Suscripción newsletter';
    const body = 'Hola Iliana,\n\nQuiero suscribirme a la newsletter y formar parte de la comunidad de bienestar animal.\n\nMuchas gracias.';
    const mailto = `mailto:${MAILTO_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="w-full max-w-xs">
      <div className="my-3 p-3 rounded-lg bg-gradient-to-r from-brand-accent to-brand-light text-brand-dark shadow-md flex items-center justify-between gap-4">
        <div>
          <strong className="block">Suscribte a nuestra newletter.</strong>
          <span className="block text-xs mt-1">Únete a nuestra comunidad de bienestar animal.</span>
        </div>
        <div>
          <button type="button" onClick={handleSendEmail} className="bg-brand-dark text-brand-light px-3 py-2 rounded-md font-semibold">Enviar email</button>
        </div>
      </div>
    </div>
  );
}

const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1, triggerOnce: true });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Reuse header behavior: href can be '#id' or '/path#id' or '/path'
    const isHashOnly = href.startsWith('#');
    const hasPath = href.startsWith('/');
    let path = '';
    let targetId = '';

    if (isHashOnly) {
      path = '/';
      targetId = href.substring(1);
    } else if (hasPath) {
      const [p, hash] = href.split('#');
      path = p || '/';
      targetId = hash || '';
    } else {
      path = href;
    }

    const doScroll = () => {
      if (!targetId) return;
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
  const headerElement = document.querySelector('header');
  const headerOffsetRaw = headerElement ? headerElement.offsetHeight + 8 : 88;
  const tightIds = ['servicios', 'sobre-ili'];
  const headerOffset = tightIds.includes(targetId) ? Math.max(8, headerOffsetRaw - 28) : headerOffsetRaw;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      targetElement.classList.add('focus-target');
      setTimeout(() => targetElement.classList.remove('focus-target'), 1000);
    };

    if (path !== window.location.pathname) {
      // navigate to new path and scroll after a short delay
      window.location.href = path + (targetId ? `#${targetId}` : '');
      setTimeout(doScroll, 500);
      return;
    }

    doScroll();
  };

  const navLinks = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Revista T.E.O.', href: '#revista-cards' },
  { name: 'Duelo Animal', href: '/duelo-animal#duelo' },
  { name: 'Sobre Ili', href: '#sobre-ili-header' },
    { name: 'Contacto', href: '#contact-header' },
  ];

  return (
    <footer ref={ref} className={`bg-black/20 text-brand-light/60 py-16 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        {/* Menu, Legal Links, and Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12 text-center sm:text-left items-start">
          <div>
            <h4 className="font-bold text-brand-light tracking-widest uppercase mb-4 text-sm">Menú</h4>
            <ul className="space-y-3 text-base">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)} 
                    className="hover:text-brand-light transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-light tracking-widest uppercase mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-base">
              <li><button onClick={() => onOpenLegalModal('privacy')} className="hover:text-brand-light transition-colors w-full text-center sm:text-left">Política de Privacidad</button></li>
              <li><button onClick={() => onOpenLegalModal('legal')} className="hover:text-brand-light transition-colors w-full text-center sm:text-left">Aviso Legal</button></li>
              <li><button onClick={() => onOpenLegalModal('cookies')} className="hover:text-brand-light transition-colors w-full text-center sm:text-left">Cookies</button></li>
              <li>
                <button
                  onClick={() => {
                    try {
                      // Borrar consentimiento para forzar reapertura del banner de cookies
                      localStorage.removeItem('atad_cookie_consent');
                      // Emitir un evento sencillo por si el componente escucha cambios de storage en el futuro
                      window.dispatchEvent(new StorageEvent('storage', { key: 'atad_cookie_consent' }));
                    } catch {}
                    // Desplazar un poco la pantalla y forzar re-render
                    window.scrollTo({ top: window.scrollY + 1 });
                  }}
                  className="hover:text-brand-light transition-colors w-full text-center sm:text-left"
                >
                  Preferencias de cookies
                </button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-end mt-8 sm:mt-0">
            <h4 className="font-bold text-brand-light tracking-widest uppercase mb-4 text-sm">Newsletter</h4>
            <NewsletterForm />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-white/10 max-w-lg mx-auto" />

        {/* Social Media */}
        <div className="py-10 text-center">
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/iliteo?igsh=MWp5d2tyYTFlM3dsNQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand-accent transition-colors"><Instagram /></a>
            <a href="https://www.facebook.com/share/17KMuSVEW9/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-brand-accent transition-colors"><Facebook /></a>
            <a href="https://www.tiktok.com/@iliteoanimalesdomesticos?_t=ZN-8zFwY0NVVZe&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-brand-accent transition-colors"><Tiktok /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-xs text-brand-light/70 text-center">
             <p className="mb-2">WhatsApp: <a href={`tel:${PHONE_TEL}`} className="hover:text-brand-light">{PHONE_TEL.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')}</a></p>
             <p>
                &copy; 2025 iliana nicolon fiol. Todos los derechos reservados.
                <br />
                <a
                  href="https://www.bufitimpulsa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-brand-light/70 hover:text-brand-light transition-colors"
                  aria-label="Abrir sitio de Bufit Impulsa en una nueva pestaña"
                >
                  Creado por Bufit Impulsa
                </a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;