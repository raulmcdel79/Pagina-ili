# Instrucciones Copilot para A.T.A.D. – Asistente de Tutores de Animales Domésticos

## Resumen del Proyecto
- **Tipo:** SPA moderna en React (TypeScript), construida con Vite y desplegada en Vercel.
- **Propósito:** Sitio web de servicios para el cuidado de mascotas, con UI dinámica, blog, modales legales y elementos interactivos.
- **Archivos clave:** `App.tsx` (ruteo/layout), `components/` (UI), `hooks/` (custom hooks), `blog/` (posts markdown), `analytics.js` (ID Google Analytics), `vite.config.ts` (configuración Vite).

## Arquitectura y Patrones
- **Ruteo:** Usa `react-router-dom` v7. Todas las rutas están en `App.tsx`.
- **Estructura de Componentes:** Toda la UI está en `components/`. El contenido legal está en `components/legal/`. Cada sección (servicios, testimonios, blog, etc.) es un componente separado.
- **Custom Hooks:** Usa `useInView` para animaciones por scroll y `useDocumentMeta` para meta tags dinámicos.
- **Estado:** Solo estado local; no hay gestión global de estado.
- **Estilos:** Tailwind CSS vía CDN en `index.html`. Colores y fuentes personalizados en el bloque de configuración de Tailwind.
- **Variables de entorno:** Usa `.env.local` para desarrollo local. Ejemplo: `GEMINI_API_KEY`, `VITE_SHOW_TESTIMONIALS`.
- **Feature Flags:** La sección de testimonios se activa con la variable `VITE_SHOW_TESTIMONIALS`.
- **Modales legales:** Se abren por estado en `App.tsx`, contenido en `components/legal/`.
- **Blog:** Los posts están hardcodeados en `components/BlogPost.tsx` y `components/BlogList.tsx`, con un ejemplo markdown en `blog/`.

## Flujos de Trabajo para Desarrolladores
- **Instalar dependencias:** `npm install`
- **Servidor de desarrollo:** `npm run dev`
- **Build:** `npm run build`
- **Preview del build:** `npm run preview`
- **Deploy:** `npm run deploy` (usa `gh-pages`)
- **Vercel:** Configurado para Vercel (`vercel.json`, `.vercel/`).
- **Variables de entorno:** Configura `GEMINI_API_KEY` en `.env.local` antes de correr localmente.

## Convenciones del Proyecto
- **Nombres de componentes:** PascalCase para componentes React. Contenido legal en `components/legal/`.
- **Props:** Prefiere tipos/interfaces explícitos.
- **Animaciones:** Usa `useInView` para efectos fade/slide-in por scroll.
- **Formularios:** Usa Formspree para formularios de contacto/newsletter.
- **Imágenes:** Todas en `public/imagenes/`.
- **Sin Redux ni Context:** Todo el estado es local o por props.
- **Sin código server-side:** SPA puro; todos los datos son estáticos o de APIs del cliente.

## Integraciones
- **Google Analytics:** Define `GOOGLE_ANALYTICS_ID` en `analytics.js` y en el entorno. Se carga condicionalmente vía `CookieConsent`.
- **Formspree:** Formularios de contacto/newsletter hacen POST a Formspree.
- **Vercel:** Para deploy, reescribe todas las rutas a `/` (SPA fallback).

## Ejemplos
- **Agregar una sección:** Crea un componente en `components/`, impórtalo y agrégalo en `App.tsx`.
- **Agregar un post al blog:** Añade al objeto `posts` en `components/BlogPost.tsx` y `components/BlogList.tsx`, o como archivo markdown en `blog/`.
- **Agregar una página legal:** Crea un componente en `components/legal/` y actualiza la lógica de modales en `App.tsx`.

## Precauciones
- **No agregues código server-side.**
- **No uses librerías de estado global.**
- **No cambies la config de Tailwind en `package.json`; está en `index.html`.**
- **No subas `.vercel/` ni archivos `.env.*`.**

---
Para más detalles, revisa `README.md` y `App.tsx` para patrones de ruteo/layout.
