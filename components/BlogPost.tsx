import React from 'react';
import { useParams } from 'react-router-dom';
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const posts = {
  'bienvenida-blog': {
    title: '🐾 Bienvenida al Blog de ATAD',
    date: '2025-09-03',
    image: '/imagenes/1 revista.png.png',
    description: 'Descubrí el Blog de ATAD: un espacio creado por Ili para acompañar a tutores de animales con consejos prácticos, historias reales y herramientas para mejorar el vínculo humano-animal.',
    content: `
<header>
  <p><em>Por Ili – 2025</em></p>
</header>

<section>
  <h2>Un espacio para vos y tu compañero animal</h2>
  <p>Bienvenido al Blog de <strong>ATAD – Asistente de Tutores de Animales Domésticos</strong>. Este no es un blog más: es un lugar para compartir, aprender y crecer junto a quienes sentimos que los animales son parte de nuestra familia.</p>
  <p>Mi nombre es Ili, y desde hace años acompaño a tutores en el cuidado de sus perros, gatos y otros compañeros de vida. Sé lo que significa la duda, la culpa, el amor enorme y las ganas de hacerlo mejor. Este espacio nace para darte <strong>información clara, consejos prácticos y también contención emocional</strong>. Porque cuidar a un animal no es solo un acto de responsabilidad, es también un camino de transformación personal.</p>
</section>

<section>
  <h2>¿Qué vas a encontrar en este blog?</h2>
  <ul>
    <li><strong>Artículos de cuidados esenciales:</strong> desde alimentación y paseos hasta salud preventiva y estimulación mental.</li>
    <li><strong>Historias reales de tutores:</strong> porque compartir experiencias nos une y nos ayuda.</li>
    <li><strong>Consejos de expertos:</strong> veterinarios, etólogos, psicólogos y profesionales que colaboran con ATAD.</li>
    <li><strong>Reflexiones de Ili:</strong> sobre el vínculo humano-animal y cómo este nos cambia a nosotros también.</li>
  </ul>
  <p>La idea es que cada artículo te deje algo: un dato útil, una sonrisa, una reflexión o un empujoncito para mirar a tu compañero con otros ojos.</p>
</section>

<section>
  <h2>Un lugar para la comunidad</h2>
  <p>El Blog de ATAD no está pensado solo para leer, sino también para <strong>participar</strong>. Queremos escuchar tu voz: tus dudas, tus anécdotas, tus aprendizajes y hasta esas travesuras que hacen que la vida con animales sea tan única.</p>
  <p>Podés enviarnos tus historias y fotos, y ser parte de esta comunidad que transforma la forma de cuidar y convivir con los animales.</p>
</section>

<section>
  <h2>Cierre: Empezamos juntos este viaje</h2>
  <p>Cuidar mejor y querer más. Ese es el motor de este blog. Ojalá encuentres en estas páginas la inspiración, la compañía y el conocimiento que necesitás para vivir con tu animal desde el amor y la conciencia.</p>
  <p><em>Gracias por estar acá. Bienvenido a la familia ATAD.</em></p>
</section>

<footer>
  <p><strong>Etiquetas:</strong> #blogATAD #cuidodemascotas #tutoresresponsables #bienestaranimal #ilicuida #vinculohumanoanimal</p>
</footer>
    `,
  },
  'cuidados-esenciales-perro': {
    title: '🐾 Cuidados Esenciales para tu Perro',
    date: '2025-09-03',
    image: '/imagenes/cuidados-perro.png',
    description: 'Guía completa de Ili con los cuidados esenciales para tu perro: higiene, vacunas, desparasitación, paseo, socialización, enriquecimiento, descanso, seguridad y primeros auxilios.',
    content: `
<header>
  <p><em>Por Ili – ATAD | Actualizado 2025</em></p>
</header>

<section>
  <h2>Tu perro, tu compañero: lo básico que no puede faltar</h2>
  <p>Cuidar bien a un perro no es cuestión de lujo, es cuestión de <strong>hábitos simples y constantes</strong>. Si recién adoptaste o querés repasar lo importante, acá va mi guía práctica, directa y amorosa. Vas a encontrar lo esencial de <strong>higiene, salud, paseo, socialización, descanso, seguridad y primeros auxilios</strong>. Para que vivan mejor vos y tu compa de cuatro patas.</p>
</section>

<section>
  <h2>Higiene canina: limpio y cómodo, sin exagerar</h2>
  <ul>
    <li><strong>Baño:</strong> cada 4–8 semanas (según pelaje y estilo de vida). Usá <em>shampoo específico para perros</em>. Evitá bañarlo si está con frío o enfermo.</li>
    <li><strong>Cepillado:</strong> 2–4 veces por semana. En razas de doble manto, mejor a diario en muda. Reduce pelos en casa y previene nudos.</li>
    <li><strong>Oídos:</strong> revisá 1 vez por semana. Limpiá con solución ótica para perros y gasa; nunca metas hisopos a fondo.</li>
    <li><strong>Dientes:</strong> 2–3 veces por semana con <em>pasta canina</em>. Sumá snacks dentales y juguetes masticables.</li>
    <li><strong>Uñas:</strong> cortá cuando hagan “clic” al caminar. Si te da miedo, pedí a un profesional.</li>
    <li><strong>Almohadillas y piel:</strong> hidratá si están resecas; chequeá irritaciones, picaduras o cuerpos extraños.</li>
  </ul>
</section>

<section>
  <h2>Salud preventiva: calendario al día y sin dramas</h2>
  <h3>Vacunas y controles</h3>
  <p>Seguí el <strong>calendario de vacunas</strong> que te indique tu veterinario y hacé un <strong>chequeo anual</strong> (dos al año en seniors). La prevención ahorra sustos y plata.</p>
  <h3>Desparasitación</h3>
  <ul>
    <li><strong>Interna:</strong> cada 3 meses (frecuencia según zona y hábitos).</li>
    <li><strong>Externa:</strong> pipetas/collares/isoxazolinas según recomendación. En verano y zonas de campo, no te cuelgues.</li>
  </ul>
  <p><strong>Control de peso:</strong> palpá costillas (deben sentirse sin estar marcadas) y mirá la cintura desde arriba. Un perro en peso vive mejor y más.</p>
</section>

<section>
  <h2>Paseo, ejercicio y socialización: cuerpo y mente en movimiento</h2>
  <ul>
    <li><strong>Frecuencia:</strong> 2–3 paseos diarios. Uno de ellos, más largo y con olfato libre.</li>
    <li><strong>Ritmo:</strong> no es maratón: dejalo oler. El olfato es su “red social”.</li>
    <li><strong>Material:</strong> arnés cómodo (preferentemente tipo H/Y) y correa fija de 2–3 m. La extensible solo si sabés manejarla.</li>
    <li><strong>Ejercicio:</strong> adaptá por edad/raza/clima. Alterná caminata, juegos de traer, búsqueda de premios y pequeños retos.</li>
    <li><strong>Socialización:</strong> encuentros respetuosos, de a poco. No todos quieren saludar; mirá su lenguaje corporal.</li>
  </ul>
</section>

<!-- Continúa: el usuario indicó más contenido (enriquecimiento, descanso, seguridad, primeros auxilios). Se puede ampliar cuando lo comparta. -->
    `,
  },
  'alimentacion-perros': {
    title: '🐶 Alimentación para Perros: Tipos de Comida y Consejos',
    date: '2025-09-03',
    image: '/imagenes/alimentacion-perros.png',
    description: 'Descubrí los tipos de alimentación para perros (pienso, comida húmeda, dieta BARF y casera), consejos prácticos de nutrición y qué alimentos evitar. Guía Ili 2025.',
    content: `
<header>
  <p><em>Por Ili – Actualizado 2025</em></p>
</header>

<section>
  <h2>La comida: el corazón de su bienestar</h2>
  <p>La forma en que alimentás a tu perro hace toda la diferencia. No es solo llenar el plato: es darle salud, energía y calidad de vida. Hoy hay mil opciones y capaz que te mareás entre tanto pienso, latitas, dietas crudas o comida casera. Acá te cuento lo que necesitás saber para elegir con cabeza y con amor.</p>
</section>

<section>
  <h2>Tipos de comida para perros</h2>

  <h3>1. Pienso seco (el clásico de siempre)</h3>
  <ul>
    <li><strong>Ventajas:</strong> práctico, rinde más, se conserva bien y viene balanceado.</li>
    <li><strong>Extra:</strong> ayuda a limpiar los dientes.</li>
    <li><strong>Contras:</strong> algunos perros lo encuentran poco apetecible; la calidad varía mucho entre marcas.</li>
  </ul>
  <p><strong>Tendencia 2025:</strong> piensos grain free, hipoalergénicos o naturales para perros adultos y senior.</p>

  <h3>2. Comida húmeda (la latita de toda la vida)</h3>
  <ul>
    <li><strong>Ventajas:</strong> más rica de sabor, ideal para perros mañosos o viejitos.</li>
    <li><strong>Extra:</strong> aporta agua y ayuda a la hidratación.</li>
    <li><strong>Contras:</strong> sale más caro, no llena tanto y una vez abierta debe refrigerarse.</li>
  </ul>

  <h3>3. Dieta BARF (cruda y natural)</h3>
  <ul>
    <li><strong>Ventajas:</strong> carne cruda, huesos carnosos, verduras… más parecido a lo que comería un perro en la naturaleza.</li>
    <li><strong>Extra:</strong> mejora el pelo, la digestión y la vitalidad.</li>
    <li><strong>Contras:</strong> requiere supervisión profesional y mucha higiene para evitar bacterias.</li>
  </ul>
  <p><strong>Tendencia:</strong> menús BARF preparados y congelados, siempre guiados por un veterinario.</p>

  <h3>4. Comida casera (hecha con tus manos)</h3>
  <ul>
    <li><strong>Ventajas:</strong> controlás vos la calidad y se adapta a alergias o problemas de salud.</li>
    <li><strong>Contras:</strong> lleva más tiempo y sin guía puede haber carencias nutricionales.</li>
  </ul>
  <p><strong>Lo más buscado:</strong> recetas caseras para perros alérgicos o con sobrepeso.</p>
</section>

<section>
  <h2>🚫 Alimentos prohibidos para perros</h2>
  <ul>
    <li>Chocolate</li>
    <li>Uvas y pasas</li>
    <li>Cebolla y ajo</li>
    <li>Café y té</li>
    <li>Huesos cocidos</li>
    <li>Aguacate</li>
  </ul>
  <p>Un descuido puede terminar en urgencia veterinaria. Ojo con eso.</p>
</section>

<section>
  <h2>Consejos prácticos de Ili 🐾</h2>
  <ol>
    <li>Consultá con tu veterinario antes de cambiar la dieta.</li>
    <li>Mantené horarios fijos de comida.</li>
    <li>Ajustá las raciones a su edad, tamaño y actividad.</li>
    <li>Agua fresca siempre disponible.</li>
    <li>Reducí los snacks industriales; mejor premios naturales.</li>
  </ol>
</section>

<section>
  <h2>FAQ: Preguntas frecuentes</h2>
  <p><strong>¿Puedo mezclar pienso seco y comida húmeda?</strong><br>Sí, pero ajustá cantidades para evitar sobrepeso.</p>
  <p><strong>¿La dieta BARF es mejor?</strong><br>Depende del perro, de la calidad de los ingredientes y de la supervisión profesional.</p>
  <p><strong>¿Qué pasa si mi perro solo quiere comida casera?</strong><br>Se puede, pero siempre con asesoramiento veterinario.</p>
</section>

<section>
  <h2>Cierre: elegí con amor y conciencia</h2>
  <p>No hay una receta mágica. Lo que sí hay es observación, compromiso y ganas de dar lo mejor. Cada perro es único, y su comida también debería serlo.</p>
  <p><em>En Ili creemos que alimentar bien es una forma de amar mejor.</em></p>
</section>

<footer>
  <p><strong>Etiquetas:</strong> #alimentacionperros #nutricioncanina #dietabarf #pienso #perrosfelices #ilicuida #tutoresresponsables</p>
</footer>
    `,
  },
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts[slug || ''];

  useDocumentMeta(
    post?.title ? `${post.title} | Blog Ili` : "Blog | Ili",
    post?.description || "Lee los mejores artículos para tutores de animales domésticos en el blog de Ili."
  );
  if (!post) return <div className="text-center py-32 text-brand-light">Post no encontrado.</div>;
  return (
    <article className="max-w-3xl mx-auto py-24 px-4 bg-white/10 rounded-xl shadow-lg mt-16">
      <img src={post.image} alt={post.title} className="w-full h-72 object-cover object-center rounded mb-8" />
      <h1 className="font-playfair text-4xl md:text-5xl text-brand-accent mb-4">{post.title}</h1>
      <p className="text-brand-light/70 mb-8">{post.date}</p>
      <div className="prose prose-invert max-w-none text-brand-light" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

export default BlogPost;
