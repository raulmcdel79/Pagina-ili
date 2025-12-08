import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Revista 1',
  image: '/imagenes/revista-1.png',
    link: 'https://heyzine.com/flip-book/65b63e29e5.html/',
  },
  {
    title: 'Revista 2',
  image: '/imagenes/revista-2.png',
    link: 'https://heyzine.com/flip-book/71923e55b6.html/',
  },
  {
    title: 'Revista 3',
  image: '/imagenes/revista-3.png',
    link: 'https://heyzine.com/flip-book/1b213e2e74.html/',
  },
];

const ArticleCard: React.FC<{ article: typeof articles[0]; delay: number; isInView: boolean }> = ({ article, delay, isInView }) => (
  <div
    className={`flex flex-col items-center bg-white/5 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ease-out hover:bg-white/10 hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${delay}ms`, maxWidth: '420px', margin: '0 auto' }}
  >
    <div className="w-full" style={{ aspectRatio: '4/5' }}>
      <img
        src={article.image}
        alt={`Portada ${article.title} — Revista T.E.O. de ATA-D`}
        className="w-full h-full object-cover object-center"
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          img.onerror = null;
          img.src = '/imagenes/revista-1.png';
        }}
        style={{ aspectRatio: '4/5', display: 'block' }}
      />
    </div>
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full block text-center bg-brand-accent text-brand-dark font-bold py-3 transition hover:bg-brand-light"
    >
      Sigue leyendo
    </a>
  </div>
);


const Magazine: React.FC = () => {
    useDocumentMeta(
      'Revista | Asistenta de Tutores de Animales Domésticos',
      'Artículos, novedades y recursos para tutores de animales domésticos. Descubre la revista de Ili con información útil y actualizada.'
    );
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
    const [titleRef, titleInView] = useInView<HTMLHeadingElement>({ threshold: 0.5, triggerOnce: true });

    return (
        <section id="revista" className="py-24 md:py-32 bg-brand-dark/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2
                        ref={titleRef}
                        className={`font-playfair transition-opacity duration-1000 flex flex-wrap justify-center items-baseline gap-x-3 ${titleInView ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <span className="font-amatic text-4xl md:text-5xl uppercase tracking-widest text-brand-accent">Nuestra Revista</span>
                        <span className="text-4xl md:text-6xl font-bold">T.E.O.</span>
                        <span className="text-xl md:text-2xl"> Transforma | Educa | Orienta.</span>
                    </h2>
                    </div>
                    {/* Anchor justo antes de las tarjetas para que el scroll vaya directamente a las portadas */}
                    <div id="revista-cards" aria-hidden="true" style={{ scrollMarginTop: 'var(--header-offset)' }} />
                    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {articles.map((article, index) => (
                        <ArticleCard key={article.title} article={article} delay={index * 150} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Magazine;