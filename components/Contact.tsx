import React from 'react';
import { useInView } from '../hooks/useInView';
import { MAILTO_ADDRESS } from '../constants/contact';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [titleRef, titleInView] = useInView<HTMLHeadingElement>({ threshold: 0.2, triggerOnce: true });

  const handleContactClick = () => {
    const subject = 'Consulta desde A.T.A.D. - Asistente de Tutores de Animales Domésticos';
    const body = `Hola Iliana,%0D%0A%0D%0ATe contacto desde A.T.A.D. con la siguiente consulta:%0D%0A%0D%0ANombre: %0D%0AEmail: %0D%0A%0D%0AMensaje:%0D%0A%0D%0A%0D%0AGracias.`;
    
    window.location.href = `mailto:${MAILTO_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section
      id="contacto"
      className="relative py-24 md:py-40 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546238232-20216dec9f72?q=80&w=2784&auto=format&fit=crop')", scrollMarginTop: 'var(--header-offset)' }}
    >
      <div className="absolute inset-0 bg-brand-dark/75"></div>
      <div className="relative z-30 container mx-auto px-6 max-w-3xl text-center">
        <div id="contact-header" aria-hidden="true" style={{ scrollMarginTop: 'var(--header-offset)' }} />
        <div ref={titleRef}>
          <h2 id="contact-title" className={`text-4xl md:text-6xl font-playfair text-brand-light font-bold transition-all duration-1000 ease-out ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            ¿Tenés alguna consulta?
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto text-lg text-brand-light/70 leading-relaxed transition-all duration-1000 ease-out delay-200 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Contactame directamente por email o WhatsApp.
            <span className="block mt-2">Estoy para ayudarte a vos y a tu compañero.</span>
          </p>
        </div>

        <div className={`mt-12 transition-all duration-1000 ease-out delay-300 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-3 bg-brand-light text-brand-dark px-10 py-4 text-lg font-bold tracking-wider rounded-lg shadow-xl hover:bg-brand-accent transition-all duration-300 active:scale-95 transform hover:scale-105"
          >
            <Mail size={24} />
            Enviar Email
          </button>
          
          <p className="mt-6 text-brand-light/60 text-sm">
            Al hacer clic se abrirá tu cliente de correo con un mensaje prellenado.
            <br />
            Completá tus datos y envialo cuando estés listo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;