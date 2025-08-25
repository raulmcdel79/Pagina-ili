import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    quote: "Iliana es increíble. Mi perro, que es muy tímido, la adora. Confianza plena y profesionalidad absoluta.",
    author: "Ana G., Tutora de Rocky",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    quote: "El servicio de guardería es fantástico. Recibo fotos y actualizaciones durante el día, me da mucha tranquilidad.",
    author: "Carlos M., Tutor de Luna",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e"
  },
  {
    quote: "Nunca había visto a mi gato tan relajado con alguien que no fuera de la familia. A.T.A.D. es mi solución para los viajes.",
    author: "Laura P., Tutora de Miso",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

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
          className="relative h-64 md:h-56 overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out"
              style={{ 
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                opacity: index === currentIndex ? 1 : 0 
              }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <img src={testimonial.avatar} alt={testimonial.author} loading="lazy" className="w-20 h-20 rounded-full mb-6 border-4 border-white/10"/>
                <p className="text-xl md:text-2xl font-source-serif italic text-brand-light/90 leading-relaxed max-w-2xl">
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