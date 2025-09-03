import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const rotatingWords = ['cuidado', 'amor', 'respeto', 'cariño'];
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const cta = ctaRef.current;
    if (!cta) return;
    
    const onMouseMove = (e: MouseEvent) => {
        const { currentTarget: el } = e;
        if (!el) return;
        const rect = (el as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (el as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (el as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    };
    
    cta.addEventListener('mousemove', onMouseMove);
    return () => cta.removeEventListener('mousemove', onMouseMove);

  }, []);

  return (
                <section 
                    className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: "url('/imagenes/foto-portada.png')" }}
                >
        <div className="absolute inset-0 bg-brand-dark/60"></div>
        <div className="relative z-10">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-[2.5rem] leading-tight sm:text-5xl md:text-7xl lg:text-8xl font-playfair text-brand-light font-bold drop-shadow-2xl">
                Dale a tu compañero el <br />
                <span className="inline-flex items-center justify-center flex-wrap">
                    <span className="text-brand-accent relative h-[1.25em] w-[5.2em] overflow-hidden text-center">
                        <span className="roller-words-container absolute left-0 top-0 w-full">
                            {rotatingWords.map(word => (
                                <div key={word} className="h-[1.25em] flex items-center justify-center">{word}</div>
                            ))}
                            <div className="h-[1.25em] flex items-center justify-center">{rotatingWords[0]}</div>
                        </span>
                    </span>
                    <span>&nbsp;que merece</span>
                </span>
            </h1>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a 
                href="#agenda" 
                ref={ctaRef}
                className="mt-12 inline-block bg-brand-light text-brand-dark px-10 py-4 text-lg font-bold tracking-wider relative group overflow-hidden transition-transform duration-300 ease-in-out active:scale-95 hover:scale-105"
            >
                <span className="absolute inset-0 bg-brand-accent transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10 group-hover:text-brand-dark transition-colors duration-300">Consultar Agenda</span>
            </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;