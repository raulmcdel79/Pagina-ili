
import React from "react";
import WhatsAppInfo from "./WhatsAppInfo";

const DueloAnimal: React.FC = () => (
  <section className="relative max-w-3xl mx-auto px-4 py-12 text-brand-light">
  <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2 z-10 relative">
      <span role="img" aria-label="huella">🐾</span> Acompañamiento en el Duelo Animal
    </h1>
  <p className="mb-6 text-brand-accent font-semibold z-10 relative">Por ili – A.D.A. (Acompañante en el Duelo Animal)</p>
  <p className="mb-4 z-10 relative">La partida de mi compañero peludo fue uno de los momentos más difíciles de mi vida. Sin embargo, ese dolor me llevó a descubrir una vocación: acompañar a otras personas que atraviesan el duelo por sus animales de compañía. Gracias a la formación como A.D.A. bajo la guía de mi mentora Laura Vidal —un ser único que me enseñó a mirar la vida y la muerte con otros ojos— hoy puedo ofrecerte un espacio seguro, respetuoso y libre de juicios para transitar este proceso.</p>
    {/* Imagen de fondo decorativa */}
    <img
      src="/muerte-duelo-animal-perdida-mascota.png"
      alt="Acompañamiento en el duelo animal"
      className="pointer-events-none select-none absolute left-0 right-0 mx-auto bottom-0 w-full max-w-3xl opacity-80 z-0"
      style={{objectFit: 'cover', objectPosition: 'center', minHeight: '300px'}}
    />
    <p className="mb-4">No importa si tu compañero fue un perro, gato, conejo, loro, ratón, lagartija o pez. Lo que realmente importa es el vínculo que compartiste con él, el amor que le diste y el vacío que ha dejado su partida.</p>
    <h2 className="text-2xl font-bold mt-8 mb-2">¿Qué ofrezco?</h2>
    <p className="mb-4">Un servicio personalizado de acompañamiento emocional para personas que han perdido a sus animales de compañía. Mi enfoque se basa en la escucha activa, la empatía y el respeto profundo por el vínculo humano-animal.</p>
    <div className="mt-10 mb-8 flex flex-col items-center">
      <div className="w-full max-w-xl bg-brand-dark/80 rounded-2xl shadow-lg border border-brand-accent/30 p-6 md:p-8 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-accent mb-2">
              Programa de Acompañamiento
            </h2>
        <div className="text-center text-brand-light/90 mb-4">
          <p className="text-lg mb-2">Un proceso sensible y personalizado para acompañarte en el duelo por tu animal querido.</p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
          <div className="flex-1 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-brand-accent mb-1">35 €</div>
            <div className="text-sm text-brand-light/70 mb-2">por sesión individual</div>
            <div className="text-base text-brand-light/80">4 sesiones (1h/semana)<br/><span className="text-xs">(posibilidad de 2/semana si lo necesitas)</span></div>
            <div className="text-sm text-brand-light/60 mt-2">Sesiones adicionales bajo demanda, mismo coste</div>
          </div>
        </div>
        <div className="w-full mt-6">
              <h3 className="text-lg font-semibold text-brand-accent mb-2">Estructura de las sesiones</h3>
          <ol className="list-decimal list-inside pl-4 text-brand-light/90 space-y-3">
            <li>
              <span className="font-bold">Sesión 1:</span> Primer contacto y exploración emocional
              <ul className="list-disc list-inside pl-4 text-brand-light/70">
                <li>Crear un espacio seguro y romper el hielo</li>
                <li>Conocer la historia del vínculo: nombre, edad, especie, tipo de relación, circunstancias de la pérdida</li>
                <li>Escucha activa y planificación del acompañamiento</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Sesión 2:</span> Validación del duelo y expresión emocional
              <ul className="list-disc list-inside pl-4 text-brand-light/70">
                <li>Reconocer y validar el dolor</li>
                <li>Desmontar creencias limitantes sobre el duelo animal</li>
                <li>Técnicas de expresión emocional (escritura, visualización, diálogo simbólico)</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Sesión 3:</span> Reconstrucción del vínculo y resignificación
              <ul className="list-disc list-inside pl-4 text-brand-light/70">
                <li>Recordar momentos significativos</li>
                <li>Honrar el legado emocional del animal</li>
                <li>Transformar el dolor en amor a través de rituales simbólicos y cartas de despedida</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Sesión 4:</span> Cierre y proyección hacia el futuro
              <ul className="list-disc list-inside pl-4 text-brand-light/70">
                <li>Evaluar el proceso emocional</li>
                <li>Reforzar recursos personales</li>
                <li>Ofrecer herramientas para continuar el duelo de forma autónoma</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <h2 className="text-2xl font-bold mt-8 mb-2"> Mi experiencia</h2>
    <p className="mb-4">Acompañar a personas en duelo ha sido una de las vivencias más gratificantes de mi vida. Ver cómo alguien llega destrozado a la primera sesión y, poco a poco, empieza a ver la luz, a sentirse mejor, a transformar el dolor en amor… es profundamente conmovedor. El duelo animal suele ser incomprendido por el entorno, pero aquí encontrarás un espacio donde tu dolor será respetado, validado y cuidado.</p>
    <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4">
      <a 
        href="mailto:ilinicolonf@hotmail.com?subject=Deseo%20informaci%C3%B3n%20sobre%20el%20acompa%C3%B1amiento%20del%20duelo%20de%20mi%20compa%C3%B1ero.&body=Hola%20Iliana%2C%0A%0AMe%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20el%20acompa%C3%B1amiento%20en%20duelo%20animal.%20Estos%20son%20mis%20datos%3A%0A%0ANombre%3A%20%0ATel%C3%A9fono%3A%20%0AEmail%3A%20%0A%0AMi%20situaci%C3%B3n%20es%3A%20%0A%0A%28Por%20favor%2C%20cu%C3%A9ntame%20brevemente%20tu%20caso%20o%20duda%29%0A%0AGracias%20por%20tu%20ayuda%2C%0A" 
        className="px-6 py-3 rounded bg-brand-accent text-brand-dark font-semibold text-lg shadow hover:opacity-90 transition"
      >
        Solicitar información o reservar sesión
      </a>
      <WhatsAppInfo phone="665149561" />
    </div>
  </section>
);

export default DueloAnimal;
