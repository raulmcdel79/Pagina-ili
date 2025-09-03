import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    quote: ".",
    author: "Alba, Tutora de Puzzle (Acompañamiento en Duelo Animal)",
    avatar: "/imagenes/1.png"
  },
  {
    quote: ".",
    author: "Tatiana, Tutora de Luna",
    avatar: "/imagenes/2.png"
  },
  {
    quote: "Ili, mil gracias por la dedicatoria. Para mí ha sido un placer conocerte mejor y ver con qué amor has tratado a Bujo y cómo cuidas de todos los peluditos.",
    author: "Carmen, Tutora de Bujo",
    avatar: "/imagenes/3.png"
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

  // Measure current slide height and set container height to avoid clipping content/avatar
  const measureHeight = useCallback(() => {
    const el = slideRefs.current[currentIndex];
    if (el) {
      // Use scrollHeight to capture full content height
      const measured = el.scrollHeight;
      const min = 420; // sensible minimum height
      setContainerHeight(Math.max(measured, min));
    }
  }, [currentIndex]);

  useEffect(() => {
    measureHeight();
  }, [currentIndex, measureHeight]);

  useEffect(() => {
    const onResize = () => measureHeight();
    window.addEventListener('resize', onResize);
    // measure once after mount
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
                <img src={testimonial.avatar} alt={`Foto de ${testimonial.author}, tutor satisfecho`} loading="lazy" className="w-20 h-20 rounded-full mb-6 border-4 border-white/10"/>
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