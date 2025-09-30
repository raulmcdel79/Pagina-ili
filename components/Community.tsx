import React from 'react';
import { useInView } from '../hooks/useInView';

const dogImages = [
  '/imagenes/perro-paseo-valencia-1.png',
  '/imagenes/perro-guarderia-valencia-2.png',
  '/imagenes/gato-residencia-valencia-1.png',
  '/imagenes/gato-paseo-valencia-1.png',
  '/imagenes/perro-duelo-animal-valencia-1.png',
  '/imagenes/perro-hotel-valencia-1.png',
  '/imagenes/gato-guarderia-valencia-1.png',
  '/imagenes/perro-cuidados-especiales-valencia-1.png',
  '/imagenes/perro-paseo-valencia-2.png',
  '/imagenes/gato-cuidados-especiales-valencia-1.png',
  '/imagenes/perro-residencia-valencia-2.png',
  '/imagenes/perro-paseo-valencia-3.png',
  '/imagenes/gato-hotel-valencia-1.png',
  '/imagenes/perro-guarderia-valencia-3.png',
  '/imagenes/perro-duelo-animal-valencia-2.png',
  '/imagenes/gato-paseo-valencia-2.png',
  '/imagenes/perro-hotel-valencia-2.png',
  '/imagenes/perro-cuidados-especiales-valencia-2.png',
  '/imagenes/gato-residencia-valencia-2.png',
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
                        <img src={src} alt={
                          [
                            'Perro en paseo por Valencia',
                            'Perro en guardería en Valencia',
                            'Gato en residencia felina en Valencia',
                            'Gato en paseo por Valencia',
                            'Perro acompañado en duelo animal en Valencia',
                            'Perro en hotel canino en Valencia',
                            'Gato en guardería felina en Valencia',
                            'Perro con cuidados especiales en Valencia',
                            'Perro en paseo por Valencia',
                            'Gato con cuidados especiales en Valencia',
                            'Perro en residencia canina en Valencia',
                            'Perro en paseo por Valencia',
                            'Gato en hotel felino en Valencia',
                            'Perro en guardería en Valencia',
                            'Perro acompañado en duelo animal en Valencia',
                            'Gato en paseo por Valencia',
                            'Perro en hotel canino en Valencia',
                            'Perro con cuidados especiales en Valencia',
                            'Gato en residencia felina en Valencia',
                          ][index] || 'Mascota en ATA-D Valencia'
                        } loading="lazy" className="h-20 w-20 rounded-full object-cover object-center border-4 border-white/10" />
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