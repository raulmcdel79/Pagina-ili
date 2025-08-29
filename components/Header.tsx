import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setTimeout(() => {
        const headerElement = document.querySelector('header');
        // Aumenta el offset para dejar más espacio arriba del título de la sección
        const headerOffset = (headerElement ? headerElement.offsetHeight : 80) + 24;
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
    { name: 'Blog', href: '/blog', isBlog: true },
    { name: 'Contacto', href: '#contacto' },
  ];
  
  const NavLinksComponent: React.FC<{isMobile?: boolean}> = ({ isMobile = false }) => (
    <>
      {navLinks.map(link => (
        link.isBlog ? (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => setIsMenuOpen(false)}
            className={isMobile
              ? "text-2xl font-playfair text-brand-light py-3 text-center hover:text-brand-accent transition-colors duration-300"
              : "text-brand-light/80 hover:text-brand-light transition-colors duration-300 relative group text-sm tracking-wider"
            }
          >
            {link.name}
            {!isMobile && <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-brand-light transition-all duration-300 group-hover:w-full"></span>}
          </Link>
        ) : (
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
        )
      ))}
    </>
  );

  return (
    <>
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-black/30 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          
          {/* Left Side */}
          <div className="flex-1 flex justify-start">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-2xl font-bold font-playfair tracking-wider text-brand-light">Iliana Nicolón</a>
          </div>
          
          {/* Center Logo (Desktop) */}
          <div className="hidden md:flex flex-col items-center">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-center">
              <span className="text-3xl font-bold font-playfair tracking-[0.2em]">A.T.A.D.</span>
              <span className="block text-[10px] tracking-[0.1em] text-brand-light/80 uppercase whitespace-nowrap">Asistente de Tutores de Animales Domésticos</span>
            </a>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-end items-center">
            <nav className="hidden md:flex space-x-10">
              <NavLinksComponent />
            </nav>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-brand-light z-50" aria-label="Toggle menu">
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