import React from 'react';
import { useInView } from '../hooks/useInView';

const dogImages = [
  '/imagenes/1.png',
  '/imagenes/2.png',
  '/imagenes/3.png',
  '/imagenes/4.png',
  '/imagenes/5.png',
  '/imagenes/6.png',
  '/imagenes/7.png',
  '/imagenes/8.png',
  '/imagenes/9.png',
  '/imagenes/10.png',
  '/imagenes/11.png',
  '/imagenes/12.png',
  '/imagenes/13.png',
  '/imagenes/14.png',
  '/imagenes/15.png',
  '/imagenes/16.png',
  '/imagenes/17.png',
  '/imagenes/18.png',
  '/imagenes/19.png',
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
                        <img src={src} alt={`Tutor o mascota ${index + 1} — comunidad ATA-D`} loading="lazy" className="h-20 w-20 rounded-full object-cover object-center border-4 border-white/10" />
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center shrink-0 [&_li]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                {dogImages.map((src, index) => (
                    <li key={`${src}-${index}-clone`} className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                        <img src={src} alt={`Tutor o mascota ${index + 1} — comunidad ATA-D`} loading="lazy" className="h-20 w-20 rounded-full object-cover object-center border-4 border-white/10" />
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Community;