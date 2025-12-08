import React from 'react';
import { useInView } from '../hooks/useInView';

import { Mail } from 'lucide-react';
import { MAILTO_ADDRESS, MAILTO_SUBJECT, MAILTO_BODY_TEMPLATE } from '../constants/contact';

const Contact: React.FC = () => {
  const [titleRef, titleInView] = useInView<HTMLHeadingElement>({ threshold: 0.2, triggerOnce: true });

  const handleSendEmail = () => {
    const subject = MAILTO_SUBJECT || 'Consulta acompañamiento duelo animal';
    const body = MAILTO_BODY_TEMPLATE || 'Hola, quisiera información sobre el acompañamiento en duelo.';
    const mailto = `mailto:${MAILTO_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
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
            Completá el formulario o contactame directamente por WhatsApp.
            <span className="block mt-2">Estoy para ayudarte a vos y a tu compañero.</span>
          </p>
        </div>

        <div className="mt-8 max-w-2xl mx-auto text-left">
          <div className="my-4 p-6 rounded-lg bg-gradient-to-r from-brand-light to-brand-accent text-brand-dark shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <strong className="block">Enviame un mail y me pondre en contacto contigo.</strong>
              <span className="block text-sm mt-1">Si prefieres, usa el botón para abrir tu cliente de correo y mandar tu consulta sobre acompañamiento en duelo.</span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleSendEmail}
                className="bg-brand-dark text-brand-light px-4 py-2 rounded-md font-bold hover:opacity-90"
              >
                Enviar por email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;