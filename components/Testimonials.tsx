import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    quote: "Iliana es maravillosa y tiene un corazón enorme. Me ayudó a superar el duelo por la pérdida de mi perro. Después de tres meses de profunda tristeza, encontré en ella un apoyo incondicional. Desde el primer momento, me sentí en un lugar seguro donde pude abrirme y ser comprendida como nunca antes. Iliana me dio herramientas y una nueva perspectiva sobre la muerte que me permitieron gestionar mejor mis emociones. Aunque el camino es largo, gracias a ella he salido del pozo en el que me encontraba.",
    author: "Alba, Tutora de Puzzle (Acompañamiento en Duelo Animal)",
    avatar: "/imagenes/puzzle.png"
  },
  {
    quote: "Iliana ha sido alguien muy especial para nuestra familia desde que llegamos a Valencia, cuidando de nuestra perrita Lunita con total amor y dedicación. Cada vez que Luna se queda con ella, la llena de amor, cuidados y mimos. Nosotros nos sentimos felices y tranquilos al recibir constantemente fotos y vídeos de lo bien que está. Estamos profundamente agradecidos por su increíble trabajo y por todo el cariño que le da.",
    author: "Tatiana, Tutora de Luna",
    avatar: "/imagenes/Luna.png"
  },
  {
    quote: "Ili, mil gracias por la dedicatoria. Para mí ha sido un placer conocerte mejor y ver con qué amor has tratado a Bujo y cómo cuidas de todos los peluditos.",
    author: "Carmen, Tutora de Bujo",
  avatar: "/imagenes/gato-residencia-valencia-1.png",
  alt: "Gato en residencia felina en Valencia"
  },
  {
    quote: "Iliana fue un apoyo fundamental en el momento más difícil. Nuestra perra de 14 años y medio sufría demencia y dolor. Estábamos agotados y no éramos conscientes de la gravedad de la situación. Gracias a la comprensión y la ayuda de Iliana, entendimos que lo más compasivo era dejarla ir. Su guía fue esencial para tomar la decisión correcta y siempre le estaremos agradecidos.",
    author: "Kathy, Tutora de Billy",
    avatar: "/imagenes/Billy.png"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const measureHeight = useCallback(() => {
    const el = slideRefs.current[currentIndex];
    if (el) {
      const measured = el.scrollHeight;
      const min = 420;
      setContainerHeight(Math.max(measured, min));
    }
  }, [currentIndex]);

  useEffect(() => {
    measureHeight();
  }, [currentIndex, measureHeight]);

  useEffect(() => {
    const onResize = () => measureHeight();
    window.addEventListener('resize', onResize);
    measureHeight();
    return () => window.removeEventListener('resize', onResize);
  }, [measureHeight]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      ref={ref} 
      className={`relative py-24 md:py-32 bg-cover bg-center transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=2788&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-brand-dark/70"></div>
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-playfair mb-16">Historias que nos inspiran</h2>
        <div 
          className="relative overflow-x-hidden overflow-y-visible cursor-grab active:cursor-grabbing"
          style={{ height: containerHeight ? `${containerHeight}px` : undefined }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              ref={(el) => (slideRefs.current[index] = el)}
              className="absolute top-0 left-0 w-full transition-all duration-700 ease-in-out"
              style={{ 
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                opacity: index === currentIndex ? 1 : 0 
              }}
            >
              <div className="flex flex-col items-center justify-center py-8 md:py-10">
                <img src={testimonial.avatar} alt={testimonial.alt || `Foto de ${testimonial.author}, tutor satisfecho`} loading="lazy" className="w-20 h-20 rounded-full mb-6 border-4 border-white/10"/>
                <p className="text-xl md:text-2xl font-source-serif italic text-brand-light/90 leading-relaxed max-w-3xl px-2 md:px-4">
                  "{testimonial.quote}"
                </p>
                <p className="mt-6 font-bold text-brand-accent tracking-widest text-sm uppercase">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute inset-y-0 w-full flex justify-between items-center px-4 md:-px-8">
            <button onClick={prevSlide} className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors" aria-label="Previous testimonial">
                <ArrowLeft size={24} />
            </button>
            <button onClick={nextSlide} className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors" aria-label="Next testimonial">
                <ArrowRight size={24} />
            </button>
        </div>

        <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-brand-light' : 'bg-brand-accent/40'}`}></button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;