import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
        document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Parse href: could be '#id', '/path#id' or '/path'
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

    const doScrollTo = (id: string) => {
      if (!id) return;
      const targetElement = document.getElementById(id);
      if (!targetElement) return;
      const headerElement = document.querySelector('header');
      const headerOffsetRaw = headerElement ? headerElement.offsetHeight + 8 : 88;
      // IDs que queremos que queden más "pegados" al header
      const tightIds = ['servicios', 'sobre-ili'];
      const headerOffset = tightIds.includes(id) ? Math.max(8, headerOffsetRaw - 28) : headerOffsetRaw;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      // small highlight for feedback
      targetElement.classList.add('focus-target');
      setTimeout(() => targetElement.classList.remove('focus-target'), 1000);
    };

    // If we need to navigate to a different path first
    if (path !== location.pathname) {
      navigate(path);
      if (targetId) {
        // wait for navigation/render
        setTimeout(() => doScrollTo(targetId), 300);
      }
      return;
    }

    // Same path: just scroll
    if (targetId) {
      doScrollTo(targetId);
      return;
    }

    // Fallback: navigate to path
    navigate(path);
  };

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Revista T.E.O.', href: '#revista-cards' },
    { name: 'Duelo Animal', href: '/duelo-animal#duelo' },
    { name: 'Sobre mi', href: '#sobre-ili' },
    { name: 'Contacto', href: '#contact-header' },
  ];
  
  const NavLinksComponent: React.FC<{isMobile?: boolean}> = ({ isMobile = false }) => (
    <>
      {navLinks.map(link => (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className={isMobile
            ? "text-2xl font-playfair text-brand-light py-3 text-center hover:text-brand-accent transition-colors duration-300"
            : "text-brand-light/80 hover:text-brand-light transition-colors duration-300 relative group text-sm tracking-wider"
          }
        >
          {link.name}
          {!isMobile && <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-brand-light transition-all duration-300 group-hover:w-full"></span>}
        </a>
      ))}
    </>
  );

  return (
    <>
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-black/30 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          {/* Izquierda: Iliana Nicolón */}
          <div className="flex-1 flex justify-start">
            <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="text-2xl font-bold font-playfair tracking-wider text-brand-light">Iliana Nicolón</a>
          </div>
          {/* Centro: Botonera */}
          <nav className="hidden md:flex space-x-10 justify-center flex-1">
            <NavLinksComponent />
          </nav>
            {/* Derecha:A.T.A.D.centrado encima de la descripción dividida en dos líneas */}
            <div className="flex-1 flex flex-col items-end">
              <div className="flex flex-col items-center max-w-[140px] md:max-w-none">
                <span className="text-3xl font-bold font-playfair tracking-[0.2em] leading-none text-center">A.T.A.D.</span>
                <span className="block text-[10px] tracking-[0.1em] text-brand-light/80 uppercase leading-tight text-center break-words">
                  <span className="block">Asistenta de Tutores</span>
                  <span className="block">de Animales Domésticos</span>
                </span>
              </div>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-brand-light z-50 ml-4 mt-2" aria-label="Toggle menu">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
        </div>
      </header>
      <div className={`fixed inset-0 z-40 bg-brand-dark/90 backdrop-blur-2xl transition-opacity duration-500 ease-in-out flex items-center justify-center md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-6 text-center">
            <NavLinksComponent isMobile />
        </nav>
      </div>
    </>
  );
};

export default Header;