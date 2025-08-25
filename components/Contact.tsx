import React from 'react';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const [titleRef, titleInView] = useInView<HTMLHeadingElement>({ threshold: 0.2, triggerOnce: true });
  const [formRef, formInView] = useInView<HTMLFormElement>({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('¡Solicitud enviada! Nos pondremos en contacto pronto. (Esto es una demostración)');
  };

  return (
    <section 
      id="contacto" 
      className="relative py-24 md:py-40 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546238232-20216dec9f72?q=80&w=2784&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-brand-dark/75"></div>
      <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
        <div ref={titleRef}>
          <h2 className={`text-4xl md:text-6xl font-playfair text-brand-light font-bold transition-all duration-1000 ease-out ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            ¿Tenés alguna consulta?
          </h2>
          <p className={`mt-6 max-w-2xl mx-auto text-lg text-brand-light/70 leading-relaxed transition-all duration-1000 ease-out delay-200 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Completá el formulario o contactame directamente por WhatsApp. Estoy para ayudarte a vos y a tu compañero.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className={`mt-16 space-y-6 max-w-2xl mx-auto text-left transition-all duration-1000 delay-200 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Tu Nombre" required className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none transition-shadow placeholder:text-brand-light/40"/>
                <input type="email" placeholder="Tu Email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none transition-shadow placeholder:text-brand-light/40"/>
            </div>
            <textarea 
                rows={4} 
                placeholder="Tu mensaje..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:ring-2 focus:ring-brand-accent outline-none transition-shadow placeholder:text-brand-light/40"
            ></textarea>
            <div className="text-center pt-4">
                <button type="submit" className="bg-brand-light text-brand-dark px-10 py-3 text-base font-bold tracking-wider hover:bg-brand-accent transition-all duration-300 active:scale-95">
                    Enviar Mensaje
                </button>
            </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;