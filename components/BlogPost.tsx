import React from 'react';
import { useParams } from 'react-router-dom';

const posts = {
  'ejemplo-primer-post': {
    title: 'Bienvenida al Blog de ATAD',
    date: '2025-08-29',
    image: '/imagenes/1 revista.png.png',
    content: `\
¡Hola! Este es el primer post del blog. Aquí encontrarás artículos útiles, historias inspiradoras y recursos para mejorar la vida de los animales domésticos y sus tutores.\
\
¡Gracias por acompañarnos en esta aventura!\
    `,
  },
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts[slug || ''];
  if (!post) return <div className="text-center py-32 text-brand-light">Post no encontrado.</div>;
  return (
    <article className="max-w-3xl mx-auto py-24 px-4 bg-white/10 rounded-xl shadow-lg mt-16">
      <img src={post.image} alt={post.title} className="w-full h-72 object-cover object-center rounded mb-8" />
      <h1 className="font-playfair text-4xl md:text-5xl text-brand-accent mb-4">{post.title}</h1>
      <p className="text-brand-light/70 mb-8">{post.date}</p>
      <div className="prose prose-invert max-w-none text-brand-light" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
    </article>
  );
};

export default BlogPost;
