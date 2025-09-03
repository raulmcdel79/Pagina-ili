import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  useDocumentMeta(
    'Sobre Ili | Asistente de Tutores de Animales Domésticos',
    'Conoce la misión, visión y valores de Ili, tu asistente para tutores de animales domésticos. Información, consejos y comunidad para el bienestar animal.'
  );
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2, triggerOnce: true });

  return (
  <section id="sobre-ili" ref={ref} className={`py-24 md:py-32 overflow-hidden`} style={{ background: '#dbc9c4' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className={`md:col-span-2 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img 
              src="/imagenes/sobre-ili.png" 
              alt="Iliana Nicolón" 
              loading="lazy"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div className={`md:col-span-3 transition-all duration-1000 ease-out delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="font-amatic text-5xl md:text-6xl uppercase mb-2 tracking-widest text-brand-accent">Sobre Ili</p>
            <h2 className="text-4xl md:text-6xl font-playfair mb-6">Pasión y Profesionalismo</h2>
            <div className="space-y-4 leading-relaxed font-source-serif" style={{ color: '#3d2c23' }}>
              <p>
                Mi nombre es Iliana y nací en Uruguay, donde estudié Enfermería y Comunicación Social, especializándome en Publicidad. Desde siempre, me ha fascinado el comportamiento humano en todas sus facetas. Mi naturaleza empática me lleva a estar siempre dispuesta a acompañar y apoyar a quienes se sienten solos o necesitan ser escuchados. Además, soy una amante de la naturaleza y los animales, y amo estar rodeada de ellos.
              </p>
              <p>
                Mi vida cambió con la llegada de mi perrihijo Teo. Aunque ya no está físicamente conmigo, sigue viviendo en mi corazón y alma. Teo me enseñó a luchar y a vivir plenamente cada segundo. Su partida fue un momento muy difícil, pero también me inspiró a formarme como Acompañante en el Duelo Animal (ADA) bajo la guía de mi mentora, Laura Vidal. Laura es un ser especial y único que me ha proporcionado las herramientas esenciales para ofrecer ayuda desde una perspectiva diferente, enseñándome a ver la vida con otros ojos y a no darle la espalda a la muerte.
              </p>
              <p>
                Hoy, estoy aquí para ofrecerte mi apoyo en uno de los momentos más difíciles: la pérdida de tu compañero animal. No importa si es un perro, gato, conejo, loro, ratón, lagartija o pez; lo verdaderamente importante es lo que sientes por ese ser con el que has compartido tu vida, tu tiempo y tu amor.
              </p>
              <p>
                Te ofrezco mi servicio personalizado de Acompañamiento en el Duelo Animal. Puedo cuidar de tu perro o gato a domicilio o en mi casa, con cuidados especializados y adaptados a las necesidades de cada animal. Esto incluye paseos, cuidados especiales, visitas al veterinario, guardería diurna, y también asesoramiento en nutrición canina o felina.
              </p>
              <p>
                Estoy aquí para ayudarte a cuidar y amar a tu mascota, brindándote el apoyo y la tranquilidad que necesitas.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center mt-8 gap-8">
              <img src="/imagenes/logo.png" alt="Logo de ATA-D (Asistente de Tutores de Animales Domésticos)" className="h-28" loading="lazy" />
              <img src="/imagenes/firma.png" alt="Firma manuscrita de Iliana Nicolón" className="h-40" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;