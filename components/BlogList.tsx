import React from 'react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Link } from 'react-router-dom';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    slug: 'bienvenida-blog',
  title: '🐾 Bienvenida al Blog de ATAD',
  date: '2025-09-03',
  summary: 'Descubrí el Blog de ATAD: un espacio creado por Ili para acompañar a tutores de animales con consejos prácticos, historias reales y herramientas para mejorar el vínculo humano-animal.',
    image: '/imagenes/1 revista.png.png',
  },
  {
    slug: 'cuidados-esenciales-perro',
  title: '🐾 Cuidados Esenciales para tu Perro',
  date: '2025-09-03',
  summary: 'Guía completa de Ili con los cuidados esenciales para tu perro: higiene, vacunas, desparasitación, paseo, socialización, enriquecimiento, descanso, seguridad y primeros auxilios.',
    image: '/imagenes/cuidados-perro.png',
  },
  {
    slug: 'alimentacion-perros',
  title: '🐶 Alimentación para Perros: Tipos de Comida y Consejos',
  date: '2025-09-03',
  summary: 'Descubrí los tipos de alimentación para perros (pienso, comida húmeda, dieta BARF y casera), consejos prácticos de nutrición y qué alimentos evitar. Guía Ili 2025.',
    image: '/imagenes/alimentacion-perros.png',
  },
];

const BlogList: React.FC = () => {
  useDocumentMeta(
    'Blog | Asistente de Tutores de Animales Domésticos',
    'Lee los últimos artículos y consejos para tutores de animales domésticos en el blog de Ili. Actualizaciones, guías y experiencias.'
  );

  return (
    <section className="py-24 md:py-32 bg-brand-dark/50">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-4xl md:text-6xl text-center text-brand-accent mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {posts.map(post => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="group rounded-xl overflow-hidden shadow-lg bg-white/10 hover:bg-white/20 transition-all flex flex-col">
              <img src={post.image} alt={post.title} className="w-full h-60 object-cover object-center" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-playfair text-2xl text-brand-light mb-2 group-hover:text-brand-accent transition-colors">{post.title}</h3>
                <p className="text-brand-light/70 text-sm mb-4">{post.date}</p>
                <p className="text-brand-light/80 flex-1">{post.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;
