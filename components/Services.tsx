import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { PawPrint, Home, Pill, HeartHandshake, Puzzle, Stethoscope } from 'lucide-react';
import Modal from './Modal';

interface Service {
  title: string;
  icon: React.ElementType;
  description: string;
  details: string[];
}

const services: Service[] = [
  { 
    title: 'Paseos personalizados', 
    icon: PawPrint,
    description: "Cada perro es un mundo, y sus paseos también deberían serlo. Ofrecemos paseos adaptados a la energía, edad y necesidades de tu compañero, desde caminatas tranquilas para los más mayores hasta rutas estimulantes para los más activos. Siempre individuales para garantizar atención plena.",
    details: [
      "Rutas seguras y variadas.",
      "Foco en socialización controlada (si se desea).",
      "Refuerzo de buenos hábitos de paseo.",
      "Reporte post-paseo con fotos y resumen."
    ]
  },
  { 
    title: 'Guardería diurna', 
    icon: Home,
    description: "¿Tu compañero pasa mucho tiempo solo en casa? Nuestra guardería diurna es el lugar perfecto para que socialice, juegue y gaste energía en un entorno seguro y supervisado. Un día lleno de diversión y cuidados mientras estás en el trabajo.",
    details: [
      "Grupos de juego reducidos y compatibles.",
      "Zonas de descanso y relax.",
      "Actividades estimulantes y juegos supervisados.",
      "Comunicación constante con fotos y videos."
    ]
  },
  { 
    title: 'Hotel para perros', 
    icon: HeartHandshake,
    description: "Cuando te vas de viaje, tu perro también merece unas vacaciones. Nuestro servicio de hotel ofrece un ambiente familiar y libre de jaulas, donde tu compañero se sentirá como en casa. Cuidado, mimos y diversión las 24 horas del día.",
    details: [
      "Alojamiento en un hogar, no en una instalación.",
      "Rutinas diarias mantenidas (paseos, comidas).",
      "Juegos, socialización y mucho cariño.",
      "Actualizaciones diarias para tu tranquilidad."
    ]
  },
  { 
    title: 'Administración de medicamentos', 
    icon: Pill,
    description: "La salud de tu compañero es nuestra prioridad. Contamos con la experiencia y la delicadeza necesarias para administrar todo tipo de medicamentos, ya sean orales, inyectables o tópicos, siguiendo estrictamente las pautas de tu veterinario.",
    details: [
      "Personal con experiencia en administración de medicación.",
      "Seguimiento riguroso de horarios y dosis.",
      "Manejo de animales con necesidades especiales.",
      "Coordinación directa con tu clínica veterinaria si es necesario."
    ]
  },
  { 
    title: 'Visitas al veterinario', 
    icon: Stethoscope,
    description: "Sabemos que la logística de una visita al veterinario puede ser complicada. Ofrecemos un servicio de acompañamiento para llevar a tu compañero a sus citas, ya sean revisiones de rutina, vacunaciones o consultas específicas, garantizando un transporte seguro y un manejo tranquilo.",
    details: [
      "Transporte seguro y adaptado.",
      "Acompañamiento durante toda la consulta.",
      "Recogida de informes y recetas.",
      "Comunicación detallada de las indicaciones del veterinario."
    ]
  },
  { 
    title: 'Juegos cognitivos', 
    icon: Puzzle,
    description: "Un cuerpo sano necesita una mente activa. A través de juegos de olfato, puzles y ejercicios de obediencia, estimulamos la mente de tu perro, ayudando a prevenir problemas de comportamiento, reducir la ansiedad y fortalecer vuestro vínculo. ¡La diversión inteligente!",
    details: [
      "Sesiones personalizadas al nivel del animal.",
      "Uso de juguetes interactivos y puzles.",
      "Ejercicios para mejorar la concentración y el autocontrol.",
      "Fomento de la resolución de problemas."
    ]
  },
];

const ServiceCard: React.FC<{ service: Service; delay: number; onClick: () => void }> = ({ service, delay, onClick }) => {
  const [ref, isInView] = useInView<HTMLButtonElement>({ threshold: 0.1, triggerOnce: true });
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`bg-white/5 backdrop-blur-md border border-white/10 p-8 text-center transition-all duration-700 ease-out group hover:-translate-y-2 hover:shadow-2xl hover:bg-white/10 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
      aria-haspopup="dialog"
    >
      <service.icon className="mx-auto h-12 w-12 text-brand-accent mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
      <h3 className="text-xl font-libre-baskerville font-semibold text-brand-light">{service.title}</h3>
    </button>
  );
};

const Services: React.FC = () => {
  const [titleRef, titleInView] = useInView<HTMLHeadingElement>({ threshold: 0.5, triggerOnce: true });
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section id="servicios" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h2 
              ref={titleRef}
              className={`text-4xl md:text-6xl font-playfair text-center mb-20 transition-opacity duration-1000 ${titleInView ? 'opacity-100' : 'opacity-0'}`}>
              Cuidado Integral y Personalizado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} delay={index * 150} onClick={() => handleOpenModal(service)} />
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={handleCloseModal}
          title={selectedService.title}
        >
          <p>{selectedService.description}</p>
          <ul className="list-disc list-inside space-y-2 mt-4 pl-2">
            {selectedService.details.map(detail => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="text-center mt-8">
            <a href="#contacto" onClick={handleCloseModal} className="bg-brand-accent text-brand-dark px-8 py-3 text-base font-bold tracking-wider hover:bg-brand-light transition-all duration-300 active:scale-95 transform hover:scale-105">
              Consultar Disponibilidad
            </a>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Services;