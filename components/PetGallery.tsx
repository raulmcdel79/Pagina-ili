import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const petImages = [
  'https://images.unsplash.com/photo-1583337130417-2346a5be24c1?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1592194991823-235b432a7589?q=80&w=2787&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2824&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2865&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=2835&auto=format&fit=crop',
];

const PetGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % petImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + petImages.length) % petImages.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className={`py-24 md:py-32 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6 max-w-5xl text-center relative">
        <h2 className="text-4xl md:text-5xl font-playfair mb-16">Momentos Únicos</h2>
        <div className="relative h-96 overflow-hidden">
          {petImages.map((src, index) => (
            <div
              key={src}
              className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{ opacity: index === currentIndex ? 1 : 0 }}
            >
              <img src={src} alt={`Mascota ${index + 1}`} loading="lazy" className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 w-full flex justify-between items-center px-4 md:-px-8">
          <button onClick={prevSlide} className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors text-brand-light" aria-label="Previous image">
            <ArrowLeft size={24} />
          </button>
          <button onClick={nextSlide} className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors text-brand-light" aria-label="Next image">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PetGallery;