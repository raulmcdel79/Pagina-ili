import { useEffect } from "react";

/**
 * Hook para actualizar dinámicamente el <title> y la <meta name="description"> de la página.
 * @param {string} title - Título de la página
 * @param {string} description - Meta descripción de la página
 */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
  }, [title, description]);
}
