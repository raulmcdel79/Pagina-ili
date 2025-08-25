import React from 'react';
import { useInView } from '../hooks/useInView';

const dogImages = [
  'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2824&auto=format&fit=crop', // Golden Retriever
  'https://images.unsplash.com/photo-1517423440428-a5a003da8b33?q=80&w=2788&auto=format&fit=crop', // Pug
  'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2788&auto=format&fit=crop', // French Bulldog
  'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=2835&auto=format&fit=crop', // Husky
  'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?q=80&w=2787&auto=format&fit=crop', // Corgi
  'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2874&auto=format&fit=crop', // Beagle
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2940&auto=format&fit=crop', // Two dogs playing
  'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=2788&auto=format&fit=crop', // Dog in a field
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2940&auto=format&fit=crop', // Weimaraner
  'https://images.unsplash.com/photo-1525253086316-d07e30448161?q=80&w=2874&auto=format&fit=crop', // Dog with glasses
  'https://images.unsplash.com/photo-1596492784533-2c70a2b59878?q=80&w=2787&auto=format=fit', // Small fluffy dog
  'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2940&auto=format=fit=crop', // Dog pile
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
                        <img src={src} alt={`Compañero ${index + 1}`} loading="lazy" className="h-20 w-20 rounded-full object-cover border-4 border-white/10" />
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center shrink-0 [&_li]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                {dogImages.map((src, index) => (
                    <li key={`${src}-${index}-clone`} className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                        <img src={src} alt={`Compañero ${index + 1}`} loading="lazy" className="h-20 w-20 rounded-full object-cover border-4 border-white/10" />
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Community;