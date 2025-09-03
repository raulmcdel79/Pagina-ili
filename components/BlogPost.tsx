import React from 'react';
import { useParams } from 'react-router-dom';
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const posts = {
  'bienvenida-blog': {
    title: 'Bienvenida al Blog de ATAD',
    date: '2025-08-29',
    image: '/imagenes/1 revista.png.png',
    description: 'Bienvenida al blog de ATAD: información, consejos y experiencias para tutores de animales domésticos. ¡Únete a nuestra comunidad!',
    content: `
¡Hola y bienvenido al blog de ATAD! Este espacio está dedicado a todos los tutores de animales domésticos que buscan información, consejos y experiencias reales para mejorar la vida de sus compañeros peludos.<br><br>
Aquí encontrarás artículos útiles, historias inspiradoras y recursos para el bienestar animal y el acompañamiento emocional. ¡Gracias por acompañarnos en esta aventura!
    `,
  },
  'cuidados-esenciales-perro': {
    title: 'Cuidados Esenciales para tu Perro',
    date: '2025-08-29',
    image: '/imagenes/cuidados-perro.png',
    description: 'Guía práctica sobre salud, higiene, ejercicio y bienestar para perros. Consejos para tutores responsables.',
    content: `
Cuidar de un perro implica mucho más que alimentarlo. Aquí tienes los puntos clave para garantizar su bienestar:<br><br>
<b>1. Alimentación equilibrada:</b> Proporciónale comida de calidad, adaptada a su edad y tamaño.<br>
<b>2. Ejercicio diario:</b> Los paseos y el juego son fundamentales para su salud física y mental.<br>
<b>3. Higiene y salud:</b> Baños regulares, cepillado, limpieza de oídos y visitas al veterinario.<br>
<b>4. Socialización:</b> Permite que interactúe con otros perros y personas para evitar problemas de comportamiento.<br>
<b>5. Amor y atención:</b> Dedícale tiempo y cariño, es esencial para su felicidad.
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
