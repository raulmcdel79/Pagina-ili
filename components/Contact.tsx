import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { MAILTO_ADDRESS } from '../constants/contact';
import { Mail, User, MessageCircle } from 'lucide-react';
import PrivacyPolicyContent from './legal/PrivacyPolicyContent';

const initialState = { nombre: '', email: '', mensaje: '', hp: '', legal: false };

const Contact: React.FC = () => {
  const [titleRef, titleInView] = useInView<HTMLHeadingElement>({ threshold: 0.2, triggerOnce: true });
  const [formRef, formInView] = useInView<HTMLFormElement>({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState(initialState);
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const errors = {
    nombre: !form.nombre ? 'El nombre es obligatorio.' : '',
    email: !form.email
      ? 'El email es obligatorio.'
      : !/^\S+@\S+\.\S+$/.test(form.email)
      ? 'Introduce un email válido.'
      : '',
    mensaje: !form.mensaje ? 'El mensaje es obligatorio.' : '',
    legal: !form.legal ? 'Debes aceptar la política de privacidad.' : '',
  };

  const isValid = !errors.nombre && !errors.email && !errors.mensaje && !errors.legal && !form.hp;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTouched({ nombre: true, email: true, mensaje: true });
    if (!isValid) return;
    
    // No enviar si honeypot relleno
    if (form.hp) return;
    
    setLoading(true);
    setErrorMessage(null);
    
    try {
      // Construir el asunto y cuerpo del email
      const subject = 'Consulta desde A.T.A.D. - Asistente de Tutores de Animales Domésticos';
      const body = `Hola Iliana,%0D%0A%0D%0ATe contacto desde el formulario de A.T.A.D. con la siguiente consulta:%0D%0A%0D%0ANombre: ${encodeURIComponent(form.nombre)}%0D%0AEmail: ${encodeURIComponent(form.email)}%0D%0A%0D%0AMensaje:%0D%0A${encodeURIComponent(form.mensaje)}%0D%0A%0D%0AGracias.`;
      
      // Abrir el cliente de correo del usuario con los datos precargados
      window.location.href = `mailto:${MAILTO_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      setSuccess(true);
      setErrorMessage(null);
      setForm(initialState);
      setTouched({});
      setSubmitted(false);
    } catch (err) {
      console.error('Error al abrir el cliente de correo:', err);
      setErrorMessage('No se pudo abrir el cliente de correo. Por favor, contactame directamente por WhatsApp.');
    } finally {
      setLoading(false);
    }
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

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 max-w-2xl mx-auto text-left bg-white/10 p-8 rounded-xl shadow-lg backdrop-blur"
          autoComplete="off"
        >
          {success && (
            <div className="text-green-600 bg-green-100 border border-green-300 rounded p-3 text-center animate-fade-in mb-4">
              ¡Formulario completado! Se abrió tu cliente de correo. Revisa el email y envíalo cuando estés listo.
            </div>
          )}
          {errorMessage && (
            <div className="text-red-600 bg-red-100 border border-red-300 rounded p-3 text-center animate-fade-in mb-4">
              {errorMessage}
            </div>
          )}
          {/* Honeypot invisible para bots */}
          <input
            type="text"
            name="hp"
            value={form.hp}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            style={{ display: 'none' }}
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="relative w-full">
              <span className="sr-only">Nombre</span>
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-accent"><User size={20} /></span>
              <input
                type="text"
                name="nombre"
                placeholder="Tu Nombre"
                value={form.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-10 pr-4 py-3 bg-white/90 text-brand-dark border ${errors.nombre && (touched.nombre || submitted) ? 'border-red-400' : 'border-white/10'} focus:ring-2 focus:ring-brand-accent outline-none transition-shadow placeholder:text-brand-dark/60 rounded-lg shadow-sm`}
                required
                aria-invalid={!!errors.nombre}
                aria-describedby="nombre-error"
              />
              {errors.nombre && (touched.nombre || submitted) && (
                <span id="nombre-error" className="text-xs text-red-500 mt-1 block animate-fade-in">{errors.nombre}</span>
              )}
            </label>
            <label className="relative w-full">
              <span className="sr-only">Email</span>
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-accent"><Mail size={20} /></span>
              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-10 pr-4 py-3 bg-white/90 text-brand-dark border ${errors.email && (touched.email || submitted) ? 'border-red-400' : 'border-white/10'} focus:ring-2 focus:ring-brand-accent outline-none transition-shadow placeholder:text-brand-dark/60 rounded-lg shadow-sm`}
                required
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                autoComplete="email"
              />
              {errors.email && (touched.email || submitted) && (
                <span id="email-error" className="text-xs text-red-500 mt-1 block animate-fade-in">{errors.email}</span>
              )}
            </label>
          </div>
          <label className="relative w-full block">
            <span className="sr-only">Mensaje</span>
            <span className="absolute left-3 top-4 text-brand-accent"><MessageCircle size={20} /></span>
            <textarea
              name="mensaje"
              rows={4}
              placeholder="Tu mensaje..."
              value={form.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full pl-10 pr-4 py-3 bg-white/90 text-brand-dark border ${errors.mensaje && (touched.mensaje || submitted) ? 'border-red-400' : 'border-white/10'} focus:ring-2 focus:ring-brand-accent outline-none transition-shadow placeholder:text-brand-dark/60 rounded-lg shadow-sm`}
              required
              aria-invalid={!!errors.mensaje}
              aria-describedby="mensaje-error"
            ></textarea>
            {errors.mensaje && (touched.mensaje || submitted) && (
              <span id="mensaje-error" className="text-xs text-red-500 mt-1 block animate-fade-in">{errors.mensaje}</span>
            )}
          </label>
          <label className="flex items-center gap-2 text-sm mt-2">
            <input
              type="checkbox"
              name="legal"
              checked={form.legal}
              onChange={handleChange}
              className="accent-brand-accent w-4 h-4"
              required
            />
            <span>
              He leído y acepto la <span className="underline cursor-pointer hover:text-brand-accent" onClick={() => setShowPrivacy(!showPrivacy)}>política de privacidad</span> y el tratamiento de mis datos.
            </span>
          </label>
          {showPrivacy && (
            <div className="my-4 p-4 bg-white/80 rounded shadow animate-fade-in">
              <PrivacyPolicyContent />
              <button type="button" className="mt-2 text-xs underline text-brand-accent" onClick={() => setShowPrivacy(false)}>Cerrar</button>
            </div>
          )}
          {errors.legal && (touched.legal || submitted) && (
            <span className="text-xs text-red-500 mt-1 block animate-fade-in">{errors.legal}</span>
          )}
          <div className="text-center pt-4">
            <button
              type="submit"
              className={`bg-brand-light text-brand-dark px-10 py-3 text-base font-bold tracking-wider rounded-lg shadow hover:bg-brand-accent transition-all duration-300 active:scale-95 relative overflow-hidden ${loading ? 'opacity-60 pointer-events-none' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2"><span className="animate-spin h-5 w-5 border-2 border-t-transparent border-brand-dark rounded-full"></span> Enviando...</span>
              ) : (
                'Enviar Mensaje'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;