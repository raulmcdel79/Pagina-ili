import React from 'react';
import { useInView } from '../hooks/useInView';

const dogImages = [
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


const Community: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="comunidad" className="py-24 md:py-32 bg-brand-dark/30">
      <div ref={ref} className={`container mx-auto px-6 transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-center text-2xl font-libre-baskerville text-brand-light/80 mb-16">
          Conoce a algunos de los amigos que nos confían su cuidado
        </h2>
        
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear_gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
            <ul className="flex items-center justify-center shrink-0 [&_li]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]">
                {dogImages.map((src, index) => (
                    <li key={`${src}-${index}`} className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                        <img src={src} alt={`Compañero ${index + 1}`} loading="lazy" className="h-24 w-24 object-cover border-4 border-white/10" style={{ borderRadius: '0.5rem' }} />
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center shrink-0 [&_li]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                {dogImages.map((src, index) => (
                    <li key={`${src}-${index}-clone`} className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                        <img src={src} alt={`Compañero ${index + 1}`} loading="lazy" className="h-24 w-24 object-cover border-4 border-white/10" style={{ borderRadius: '0.5rem' }} />
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Community;