
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
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const error = !email
    ? 'El email es obligatorio.'
    : !/^\S+@\S+\.\S+$/.test(email)
    ? 'Introduce un email válido.'
    : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleBlur = () => setTouched(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTouched(true);
    if (error) return;
    setLoading(true);
    try {
      // Open user's mail client with a prefilled message to subscribe to the newsletter
      const subject = 'Suscripción al newsletter';
      const body = `Hola Iliana,%0D%0A%0D%0AMe gustaría suscribirme al newsletter. Mi email es: ${encodeURIComponent(
        email
      )}%0D%0A%0D%0AGracias.`;
      // Use mailto to allow users to send from their email client
      window.location.href = `mailto:${MAILTO_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${body}`;
      setSuccess(true);
      setEmail('');
      setTouched(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full max-w-xs bg-white/10 p-4 rounded shadow-lg backdrop-blur"
      autoComplete="off"
    >
      {success && (
        <div className="text-green-600 bg-green-100 border border-green-300 rounded p-2 text-center animate-fade-in mb-2 text-xs">
          ¡Suscripción realizada! Revisa tu correo.
        </div>
      )}
      <label className="relative w-full">
        <span className="sr-only">Email</span>
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-accent"><Mail size={18} /></span>
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`pl-10 pr-3 py-2 rounded text-sm text-brand-dark bg-white/80 focus:outline-none focus:ring-2 focus:ring-brand-accent w-full border ${error && (touched || submitted) ? 'border-red-400' : 'border-white/10'} shadow-sm`}
          required
          aria-invalid={!!error}
          aria-describedby="newsletter-email-error"
          autoComplete="email"
        />
        {error && (touched || submitted) && (
          <span id="newsletter-email-error" className="text-xs text-red-500 mt-1 block animate-fade-in">{error}</span>
        )}
      </label>
      <button
        type="submit"
        className={`bg-brand-accent text-brand-dark font-bold px-4 py-2 rounded hover:bg-brand-light transition-colors mt-2 relative overflow-hidden ${loading ? 'opacity-60 pointer-events-none' : ''}`}
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2"><span className="animate-spin h-4 w-4 border-2 border-t-transparent border-brand-dark rounded-full"></span> Enviando...</span>
        ) : (
          'Suscribirse'
        )}
      </button>
    </form>
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