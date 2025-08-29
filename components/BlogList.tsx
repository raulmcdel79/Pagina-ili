import React from 'react';
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
    slug: 'ejemplo-primer-post',
    title: 'Bienvenida al Blog de ATAD',
    date: '2025-08-29',
    summary: 'Descubre consejos, historias y novedades sobre el mundo animal y la asistencia a tutores.',
    image: '/imagenes/1 revista.png.png',
  },
];

const BlogList: React.FC = () => (
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

export default BlogList;
