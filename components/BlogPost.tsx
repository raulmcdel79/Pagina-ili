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
    title: 'Alimentación para Perros: Tipos de Comida y Consejos',
    date: '2025-08-29',
    image: '/imagenes/alimentacion-perros.png',
    description: 'Todo sobre alimentación canina: pienso, comida húmeda, dieta BARF y recomendaciones para una nutrición saludable.',
    content: `
La alimentación es clave para la salud de tu perro. Conoce las opciones principales:<br><br>
<b>Pienso seco:</b> Práctico y equilibrado, ideal para la mayoría de los perros.<br>
<b>Comida húmeda:</b> Más palatable, pero suele contener más agua y puede ser menos saciante.<br>
<b>Dieta BARF:</b> Basada en alimentos crudos y naturales, requiere asesoramiento profesional.<br>
<b>Consejos:</b> Consulta siempre con tu veterinario antes de cambiar la dieta, ofrece agua fresca y evita alimentos peligrosos como chocolate, uvas o cebolla.
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
