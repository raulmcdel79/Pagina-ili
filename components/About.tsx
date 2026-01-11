import React, { useState } from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useInView } from '../hooks/useInView';
import Modal from './Modal';

const About: React.FC = () => {
  useDocumentMeta(
    'Sobre Ili | Asistente de Tutores de Animales Domésticos',
    'Conoce la misión, visión y valores de Ili, tu asistente para tutores de animales domésticos. Información, consejos y comunidad para el bienestar animal.'
  );
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2, triggerOnce: true });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const openImageModal = (src: string, title = '') => {
    setModalSrc(src);
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
  <section id="sobre-ili" ref={ref} className={`pt-6 md:pt-8 pb-12 md:pb-20 overflow-hidden`} style={{ background: '#dbc9c4' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className={`md:col-span-2 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} md:mt-12 lg:mt-16`} style={{ background: 'transparent' }}>
            <img 
              src="/imagenes/sobre-ili.png" 
              alt="Iliana Nicolón" 
              loading="lazy"
              className="w-full h-auto object-contain max-h-56 md:max-h-72 rounded-lg mx-auto bg-transparent"
              style={{ display: 'block', background: 'transparent' }}
            />
          </div>
          <div className={`md:col-span-3 transition-all duration-1000 ease-out delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 id="sobre-ili-header" className="text-4xl md:text-6xl font-playfair mb-4 text-[#7B4A1D]">Sobre mí</h2>
              <div className="space-y-4 leading-relaxed font-source-serif" style={{ color: '#3d2c23' }}>
                <p>
                Mi nombre es Iliana. Nací en Uruguay, donde me formé en Enfermería y Comunicación Social, especializándome en Publicidad. Desde siempre me ha fascinado el comportamiento humano y el vínculo humano-animal en todas sus formas. Mi naturaleza empática me lleva a acompañar con sensibilidad a quienes atraviesan momentos difíciles, y apoyar a los tutores en el cuidado cotidiano de sus compañeros animales.
              </p>
              <p>
                Soy amante de la naturaleza y de los animales. Estar rodeada de ellos me conecta con lo esencial.
              </p>
              <p>
                Mi vida cambió profundamente con la llegada de Teo, mi perrhijo. Aunque ya no está físicamente conmigo, vive en mi corazón y guía cada paso que doy. Teo me enseñó a vivir cada segundo con plenitud y a luchar con amor. Su partida fue dolorosa, pero también el inicio de una transformación: me formé como Acompañante en el Duelo Animal (ADA) junto a mi mentora Laura Vidal, quien me brindó herramientas para acompañar desde una mirada compasiva, consciente y transformadora.
              </p>
              <p>
                Desde entonces, he recorrido un camino de formación y servicio, ofreciendo apoyo integral a familias multiespecie. Hoy, después de dos años de dedicación, me siento profundamente agradecida de poder ayudar a quienes aman a los animales a vivir con mayor tranquilidad, ofreciendo cuidados adaptados a cada ser y a cada vínculo.
              </p>
              <p>
                Cada perro, cada gato, cada familia... son únicos. Por eso, mi enfoque es personalizado y respetuoso. Juntos podemos encontrar las soluciones que mejor se ajusten a tu realidad y a la de tu compañero animal. Estoy aquí para ayudarte a cuidar, amar y comprender a tu mascota, brindándote tranquilidad, contención y soluciones prácticas.
              </p>
              <p>
                Si sentís que puedo ayudarte, no dudes en ponerte en contacto conmigo. Estoy para acompañarte con respeto, compromiso y amor.
              </p>
            </div>
            <div className="w-full mt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Diplomas - en fila en desktop, scrolleable en móvil si hiciera falta */}
                <div className="flex items-center gap-4 overflow-x-auto md:overflow-visible py-2">
                  <button aria-label="Ver diploma Etología y Psicología Canina" onClick={() => openImageModal('/imagenes/Curso_de_Etología_y_Psicología_Canina-Diploma_Curso_de_Psicología_Canina_2493%20diplomA.pdf.png', 'Diploma: Etología y Psicología Canina')} className="inline-block focus:outline-none">
                    <img src="/imagenes/Curso_de_Etología_y_Psicología_Canina-Diploma_Curso_de_Psicología_Canina_2493%20diplomA.pdf.png" alt="Diploma Etología y Psicología Canina" className="h-20 md:h-24 lg:h-28 object-contain rounded-sm" loading="lazy" />
                  </button>

                  <button aria-label="Ver diploma Dietética y Nutrición Animal" onClick={() => openImageModal('/imagenes/Curso_de_Dietética_y_Nutrición_Animal-Diploma_Curso_de_Dietética_y_Nutrición_animal_1976%20%281%29.pdf.png', 'Diploma: Dietética y Nutrición Animal')} className="inline-block focus:outline-none">
                    <img src="/imagenes/Curso_de_Dietética_y_Nutrición_Animal-Diploma_Curso_de_Dietética_y_Nutrición_animal_1976%20%281%29.pdf.png" alt="Diploma Dietética y Nutrición Animal" className="h-20 md:h-24 lg:h-28 object-contain rounded-sm" loading="lazy" />
                  </button>

                  <button aria-label="Ver certificado ADA" onClick={() => openImageModal('/imagenes/Certificado ADA.png', 'Certificado: Acompañante en Duelo Animal (ADA)')} className="inline-block focus:outline-none">
                    <img src="/imagenes/Certificado ADA.png" alt="Certificado Acompañante Duelo Animal (ADA)" className="h-20 md:h-24 lg:h-28 object-contain rounded-sm" loading="lazy" />
                  </button>
                </div>

                {/* Logo + Firma - alineadas a la derecha en desktop */}
                <div className="flex items-center gap-6 md:gap-8 justify-center md:justify-end">
                  <img src="/imagenes/logo.png" alt="Logo de ATA-D (Asistente de Tutores de Animales Domésticos)" className="h-20 md:h-24 lg:h-28" loading="lazy" />
                  <img src="/imagenes/firma.png" alt="Firma manuscrita de Iliana Nicolón" className="h-28 md:h-36 lg:h-40" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle}>
        <div className="w-full flex justify-center">
          <img src={modalSrc} alt={modalTitle} className="w-full h-auto max-w-full object-contain" />
        </div>
      </Modal>
    </section>
  );
};

export default About;