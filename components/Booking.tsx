import React from 'react';
import { useInView } from '../hooks/useInView';

const Booking: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="agenda" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`text-center transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#contacto" className="bg-brand-accent text-brand-dark px-10 py-4 text-lg font-bold tracking-wider hover:bg-brand-light transition-all duration-300 active:scale-95 transform hover:scale-105">
            Solicitar Reserva
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;