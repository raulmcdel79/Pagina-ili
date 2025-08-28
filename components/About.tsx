import React from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="sobre-ili" ref={ref} className={`py-24 md:py-32 overflow-hidden`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className={`md:col-span-2 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <img 
          src="/imagenes/sobre-ili.png.jpg" 
          alt="Iliana Nicolón" 
          loading="lazy"
          className="w-full h-auto object-cover aspect-[4/5]"
        />
            </div>
            <div className={`md:col-span-3 transition-all duration-1000 ease-out delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <p className="font-amatic text-5xl md:text-6xl uppercase mb-2 tracking-widest text-brand-accent">Sobre Ili</p>
                <h2 className="text-4xl md:text-6xl font-playfair mb-6">Pasión y Profesionalismo</h2>
                <div className="space-y-4 text-brand-light/80 leading-relaxed font-source-serif">
                    <p>
                        Mi nombre es Iliana Nicolón, y mi vida siempre ha girado en torno al amor y el respeto por los animales. Con más de una década de experiencia en cuidado animal, fundé A.T.A.D. con una misión clara: ofrecer un servicio que va más allá de lo convencional, basado en la empatía, el conocimiento y un profundo entendimiento de las necesidades de cada compañero.
                    </p>
                    <p>
                        Soy técnica en etología y adiestramiento, y mi enfoque se centra en el refuerzo positivo y la creación de un vínculo de confianza. Para mí, cada animal es un individuo único, y mi objetivo es asegurar su bienestar físico y emocional mientras sus tutores no están.
                    </p>
                </div>
                <a href="#contacto" className="mt-8 inline-block text-brand-accent font-bold group">
                    <span>Hablemos</span>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-brand-accent"></span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;