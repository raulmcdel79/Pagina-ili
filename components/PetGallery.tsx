import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const petImages = [
  '/imagenes/FB_IMG_1706864235551 - copia.jpg',
  '/imagenes/IMG-20241222-WA0053 - copia.jpg',
  '/imagenes/IMG-20241231-WA0000 - copia.jpg',
  '/imagenes/IMG-20250325-WA0037 - copia.jpg',
  '/imagenes/IMG-20250329-WA0007 - copia.jpg',
  '/imagenes/IMG-20250329-WA0010 - copia.jpg',
  '/imagenes/IMG-20250421-WA0021 - copia.jpg',
  '/imagenes/IMG-20250512-WA0010 - copia.jpg',
  '/imagenes/IMG-20250527-WA0065 - copia.jpg',
  '/imagenes/IMG-20250529-WA0046 - copia.jpg',
  '/imagenes/IMG-20250810-WA0007.jpg',
  '/imagenes/IMG-20250820-WA0026.jpg',
  '/imagenes/IMG_20250401_102924 - copia.jpg',
  '/imagenes/IMG_20250606_180743 - copia.jpg',
  '/imagenes/IMG_20250607_134135 - copia.jpg',
  '/imagenes/IMG_20250607_134931 - copia.jpg',
  '/imagenes/IMG_20250626_201008 - copia.jpg',
  '/imagenes/IMG_20250719_154716 - copia.jpg',
  '/imagenes/IMG_20250722_212252 - copia.jpg',
  '/imagenes/IMG_20250820_144657.jpg',
  '/imagenes/IMG_20250821_104645.jpg',
  '/imagenes/trashed-1737544170-IMG_20241219_160158 - copia.jpg',
  '/imagenes/trashed-1755627700-IMG_20250718_231709 - copia.jpg',
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