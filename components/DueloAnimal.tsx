import React from "react";

const DueloAnimal: React.FC = () => (
  <section className="max-w-3xl mx-auto px-4 py-12 text-brand-light">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
      <span role="img" aria-label="huella">🐾</span> Acompañamiento en el Duelo Animal
    </h1>
    <p className="mb-6 text-brand-accent font-semibold">Por ili – A.D.A. (Acompañante en el Duelo Animal)</p>
    <p className="mb-4">La partida de mi compañero peludo fue uno de los momentos más difíciles de mi vida. Sin embargo, ese dolor me llevó a descubrir una vocación: acompañar a otras personas que atraviesan el duelo por sus animales de compañía. Gracias a la formación como A.D.A. bajo la guía de mi mentora Laura Vidal —un ser único que me enseñó a mirar la vida y la muerte con otros ojos— hoy puedo ofrecerte un espacio seguro, respetuoso y libre de juicios para transitar este proceso.</p>
    <p className="mb-4">No importa si tu compañero fue un perro, gato, conejo, loro, ratón, lagartija o pez. Lo que realmente importa es el vínculo que compartiste con él, el amor que le diste y el vacío que ha dejado su partida.</p>
    <h2 className="text-2xl font-bold mt-8 mb-2">🌿 ¿Qué ofrezco?</h2>
    <p className="mb-4">Un servicio personalizado de acompañamiento emocional para personas que han perdido a sus animales de compañía. Mi enfoque se basa en la escucha activa, la empatía y el respeto profundo por el vínculo humano-animal.</p>
    <h2 className="text-2xl font-bold mt-8 mb-2">📅 Programa de Acompañamiento</h2>
    <ul className="mb-4 list-disc list-inside pl-4">
      <li>Duración: 4 sesiones individuales</li>
      <li>Frecuencia: 1 sesión por semana (posibilidad de 2 si lo necesitas)</li>
      <li>Duración por sesión: 1 hora</li>
      <li>Precio: 35 € por sesión</li>
      <li>Sesiones adicionales: Disponibles bajo demanda, con el mismo coste</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-2">🧭 Estructura de las sesiones</h2>
    <ol className="mb-4 list-decimal list-inside pl-4">
      <li><strong>Sesión 1:</strong> Primer contacto y exploración emocional
        <ul className="list-disc list-inside pl-4">
          <li>Crear un espacio seguro y romper el hielo</li>
          <li>Conocer la historia del vínculo: nombre, edad, especie del animal, tipo de relación, circunstancias de la pérdida</li>
          <li>Escucha activa y planificación del acompañamiento</li>
        </ul>
      </li>
      <li><strong>Sesión 2:</strong> Validación del duelo y expresión emocional
        <ul className="list-disc list-inside pl-4">
          <li>Reconocer y validar el dolor</li>
          <li>Desmontar creencias limitantes sobre el duelo animal</li>
          <li>Técnicas de expresión emocional (escritura, visualización, diálogo simbólico)</li>
        </ul>
      </li>
      <li><strong>Sesión 3:</strong> Reconstrucción del vínculo y resignificación
        <ul className="list-disc list-inside pl-4">
          <li>Recordar momentos significativos</li>
          <li>Honrar el legado emocional del animal</li>
          <li>Transformar el dolor en amor a través de rituales simbólicos y cartas de despedida</li>
        </ul>
      </li>
      <li><strong>Sesión 4:</strong> Cierre y proyección hacia el futuro
        <ul className="list-disc list-inside pl-4">
          <li>Evaluar el proceso emocional</li>
          <li>Reforzar recursos personales</li>
          <li>Ofrecer herramientas para continuar el duelo de forma autónoma</li>
        </ul>
      </li>
    </ol>
    <h2 className="text-2xl font-bold mt-8 mb-2">💬 Mi experiencia</h2>
    <p className="mb-4">Acompañar a personas en duelo ha sido una de las vivencias más gratificantes de mi vida. Ver cómo alguien llega destrozado a la primera sesión y, poco a poco, empieza a ver la luz, a sentirse mejor, a transformar el dolor en amor… es profundamente conmovedor. El duelo animal suele ser incomprendido por el entorno, pero aquí encontrarás un espacio donde tu dolor será respetado, validado y cuidado.</p>
    <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4">
      <a href="mailto:info@iliadad.com" className="px-6 py-3 rounded bg-brand-accent text-brand-dark font-semibold text-lg shadow hover:opacity-90 transition">Solicitar información o reservar sesión</a>
    </div>
  </section>
);

export default DueloAnimal;
