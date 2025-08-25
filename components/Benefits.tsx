import React from 'react';
import { useInView } from '../hooks/useInView';
import { Phone, Calendar, Heart, PawPrint } from 'lucide-react';

const processSteps = [
  {
    icon: Phone,
    title: "Contacto Inicial",
    description: "Nos contás tus necesidades y las de tu compañero. Agendamos una primera visita sin compromiso para conocernos."
  },
  {
    icon: Calendar,
    title: "Plan Personalizado",
    description: "Diseñamos un plan de cuidado a medida, adaptado a la personalidad, rutina y necesidades específicas de tu animal."
  },
  {
    icon: Heart,
    title: "Inicio del Cuidado",
    description: "Comenzamos el servicio con profesionalidad y ternura, asegurando una transición suave y feliz para tu compañero."
  },
  {
    icon: PawPrint,
    title: "Seguimiento Continuo",
    description: "Mantenemos una comunicación fluida, con actualizaciones y fotos, para que siempre estés tranquilo y conectado."
  }
];

const ProcessStep: React.FC<{ step: typeof processSteps[0]; index: number; isInView: boolean }> = ({ step, index, isInView }) => {
  const Icon = step.icon;
  return (
    <div className="flex items-start space-x-6">
      <div className={`relative transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 200 + 500}ms` }}>
        <div className="w-16 h-16 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-brand-accent" strokeWidth={1.5}/>
        </div>
      </div>
      <div className={`pt-1 flex-1 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 200 + 600}ms` }}>
        <h3 className="text-2xl font-libre-baskerville mb-2 text-brand-light">{step.title}</h3>
        <p className="text-brand-light/70 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};


const Process: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });
  const [titleRef, titleInView] = useInView<HTMLHeadingElement>({ threshold: 0.5, triggerOnce: true });

  return (
    <section id="proceso" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-20">
            <p className="font-amatic text-5xl md:text-6xl uppercase mb-2 tracking-widest text-brand-accent">Nuestro Proceso</p>
            <h2 
                ref={titleRef}
                className={`text-4xl md:text-6xl font-playfair transition-opacity duration-1000 ${titleInView ? 'opacity-100' : 'opacity-0'}`}>
                Un Camino de Confianza
            </h2>
        </div>
        
        <div ref={ref} className="relative">
            {/* The connecting line */}
            <div className={`absolute left-8 top-0 w-0.5 bg-white/10 h-full transition-height duration-1000 ease-out ${isInView ? 'h-full' : 'h-0'}`} style={{transitionDelay: '200ms'}}></div>

            <div className="space-y-16">
                {processSteps.map((step, index) => (
                    <ProcessStep key={step.title} step={step} index={index} isInView={isInView} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;