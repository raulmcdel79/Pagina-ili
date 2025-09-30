import React, { useState } from 'react';

const faqs = [
  {
    question: '¿Qué servicios ofrecéis para perros y gatos en Valencia?',
    answer: 'Ofrecemos residencia de día y noche, guardería, paseos personalizados, administración de medicamentos, visitas al veterinario y acompañamiento en el duelo animal. Todos los servicios se realizan en Valencia capital y alrededores.'
  },
  {
    question: '¿Cómo funciona la residencia de día y noche?',
    answer: 'Tu perro o gato se aloja en un entorno familiar, sin jaulas, con rutinas adaptadas y atención personalizada. Puedes reservar por horas, días o estancias largas.'
  },
  {
    question: '¿Los paseos son individuales o en grupo?',
    answer: 'Los paseos son siempre individuales, adaptados a la energía, edad y necesidades de cada animal. Así garantizamos seguridad y atención plena.'
  },
  {
    question: '¿Qué es el acompañamiento en el duelo animal?',
    answer: 'Es un servicio de apoyo emocional y orientación para tutores que han perdido a su animal. Está basado en la formación y metodología de Laura Vidal, referente nacional en duelo animal.'
  },
  {
    question: '¿Quién es Laura Vidal y por qué es un referente?',
    answer: 'Laura Vidal es pionera en el acompañamiento en duelo animal en España. Su enfoque ético y empático ha formado a profesionales en todo el país. Nuestro servicio sigue sus principios y formación.'
  },
  {
    question: '¿Cómo puedo reservar o pedir información?',
    answer: 'Puedes contactar a través del formulario de la web, por WhatsApp o teléfono. Te responderemos lo antes posible para resolver tus dudas y gestionar tu reserva.'
  },
  {
    question: '¿Qué garantías de seguridad y bienestar ofrecéis?',
    answer: 'Contamos con experiencia, referencias y formación específica. Cada animal recibe atención individual, seguimiento y comunicación constante con la familia.'
  }
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-brand-light/80 text-brand-dark">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">Preguntas frecuentes sobre nuestros servicios en Valencia</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-brand-dark/10 rounded-lg bg-white/80 shadow">
              <button
                className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-brand-accent"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
                onClick={() => toggle(idx)}
              >
                <span>{faq.question}</span>
                <span className={`ml-4 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-6 pb-4 text-base transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                role="region"
                aria-labelledby={`faq-header-${idx}`}
              >
                {openIndex === idx && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
