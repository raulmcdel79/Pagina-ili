import React from 'react';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    category: 'Cuidado y Bienestar',
    title: '5 señales de que tu perro te ama incondicionalmente',
    image: '/imagenes/1 revista.png.png',
  },
  {
    category: 'Entrevistas',
    title: 'Hablando con un etólogo: los mitos más comunes sobre gatos',
    image: '/imagenes/2 revista.png.png',
  },
  {
    category: 'Noticias',
    title: 'Nueva ley de protección animal: lo que todo tutor debe saber',
    image: '/imagenes/3 revista.png.png',
  },
];

const ArticleCard: React.FC<{ article: typeof articles[0]; delay: number; isInView: boolean }> = ({ article, delay, isInView }) => (
  <div 
    className={`bg-white/5 group border border-white/10 transition-all duration-700 ease-out hover:bg-white/10 hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="overflow-hidden">
        <img src={article.image} alt={article.title} loading="lazy" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
        <p className="text-sm text-brand-accent mb-2 tracking-wider uppercase">{article.category}</p>
        <h3 className="text-xl font-libre-baskerville text-brand-light mb-4 h-20">{article.title}</h3>
        <a href="#" className="font-bold text-brand-accent group-hover:text-brand-light transition-colors flex items-center">
            Leer más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
    </div>
  </div>
);


const Magazine: React.FC = () => {
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