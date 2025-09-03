import React from 'react';

const CookiesPolicyContent: React.FC = () => (
  <div className="space-y-4 text-sm text-brand-light/80 leading-relaxed">
    <h3 className="font-bold text-brand-light">¿Qué son las cookies?</h3>
    <p>
      Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.
    </p>
    <h3 className="font-bold text-brand-light pt-2">Tipos de cookies y finalidad</h3>
    <ul className="list-disc list-inside pl-4">
      <li><strong>Necesarias</strong>: imprescindibles para el funcionamiento básico del sitio (no requieren consentimiento).</li>
      <li><strong>Preferencias</strong>: recuerdan opciones como idioma o región.</li>
      <li><strong>Estadísticas</strong>: ayudan a comprender cómo interactúan los visitantes (p. ej., Google Analytics con IP anonimizada).</li>
      <li><strong>Marketing</strong>: seguimiento para mostrar contenidos y promociones personalizadas.</li>
    </ul>
    <p>Las cookies de preferencias, estadísticas y marketing solo se instalan si usted presta su consentimiento.</p>
    <h3 className="font-bold text-brand-light pt-2">Desactivación o eliminación de cookies</h3>
    <p>
      En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando. La mayoría de los navegadores ofrecen la posibilidad de gestionar las cookies para un mayor control y privacidad.
    </p>
    <p>Además, puede <em>cambiar o retirar su consentimiento</em> en cualquier momento desde el enlace “Preferencias de cookies” situado en el pie de página.</p>
    <h3 className="font-bold text-brand-light pt-2">Notas adicionales</h3>
    <p>
      Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener terceros proveedores.
    </p>
    <p className="pt-4">Creado por Bufit Impulsa.</p>
  </div>
);

export default CookiesPolicyContent;