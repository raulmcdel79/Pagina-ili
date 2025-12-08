# Contact & CTA Inventory

Listado de CTAs de contacto detectados en el código base:

| Texto visible | Tipo | Acción / href | Archivo | Comentarios |
|---|---:|---|---|---|
| Pedir información por WhatsApp | enlace botón | wa.me (WhatsApp) | `components/WhatsAppInfo.tsx`, modal en `App.tsx` | Uso del número centralizado
| (ícono) WhatsApp | botón flotante | abre modal interno con `WhatsAppInfo` | `App.tsx` | Botón fijo en bottom-right
| Pedir información por WhatsApp | botón | wa.me (WhatsApp) | `components/DueloAnimal.tsx` | Reemplazado para usar constantes
| Solicitar información por email | enlace mailto: | mailto:ilinicolonf@hotmail.com | `components/DueloAnimal.tsx` | Usado como alternativa al WhatsApp
| 665 149 561 | enlace tel: | tel:665149561 | `components/Footer.tsx` | Número centralizado
| Consultar Agenda | enlace ancla | `#contacto` scroll | `components/Hero.tsx` | CTA principal del Hero
| Reservá ahora | enlace ancla | `#contacto` scroll | `components/TopBanner.tsx` | Banner superior
| Contacto (nav) | nav link | `#contact-header` scroll | `components/Header.tsx` & `components/Footer.tsx` | Elemento del menú
| Enviar Mensaje | submit button | POST a Formspree | `components/Contact.tsx` | Formulario de contacto
| Suscribirse | submit button | POST a Formspree | `components/Footer.tsx` (Newsletter) | Newsletter en Footer
| Política de Privacidad / Aviso Legal / Cookies | botones | abren modal legal | `components/Footer.tsx` | Botones legales

Los enlaces y textos principales se han centralizado en `constants/contact.ts`.
