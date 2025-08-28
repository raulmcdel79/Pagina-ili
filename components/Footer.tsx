import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
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


const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1, triggerOnce: true });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setTimeout(() => {
        const headerElement = document.querySelector('header');
        const headerOffset = headerElement ? headerElement.offsetHeight : 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Revista T.E.O.', href: '#revista' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Sobre Ili', href: '#sobre-ili' },
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
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-end mt-8 sm:mt-0">
            <h4 className="font-bold text-brand-light tracking-widest uppercase mb-4 text-sm">Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xs">
              <input
                type="email"
                placeholder="Tu email"
                className="rounded px-3 py-2 text-sm text-brand-dark bg-white/80 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                required
              />
              <button
                type="submit"
                className="bg-brand-accent text-brand-dark font-bold px-4 py-2 rounded hover:bg-brand-light transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-t border-white/10 max-w-lg mx-auto" />

        {/* Social Media */}
        <div className="py-10 text-center">
          <div className="flex justify-center space-x-6">
            <a href="#" aria-label="Instagram" className="hover:text-brand-accent transition-colors"><Instagram /></a>
            <a href="#" aria-label="Facebook" className="hover:text-brand-accent transition-colors"><Facebook /></a>
            <a href="#" aria-label="TikTok" className="hover:text-brand-accent transition-colors"><Tiktok /></a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-xs text-brand-light/70 text-center">
             <p className="mb-2">WhatsApp: <a href="tel:665149561" className="hover:text-brand-light">665 149 561</a></p>
             <p>
                &copy; 2025 iliana nicolon fiol. Todos los derechos reservados.
                <br />
                Creado por Bufit Impulsa.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;