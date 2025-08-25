import React from 'react';

const CookiesPolicyContent: React.FC = () => (
  <div className="space-y-4 text-sm text-brand-light/80 leading-relaxed">
    <h3 className="font-bold text-brand-light">¿Qué son las cookies?</h3>
    <p>
      Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, acceso a cuentas de usuario, etc.
    </p>
    <h3 className="font-bold text-brand-light pt-2">Cookies utilizadas en este sitio web</h3>
    <p>
      Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.
    </p>
    <p>Este sitio web utiliza las siguientes <strong>cookies propias</strong>:</p>
    <ul className="list-disc list-inside pl-4">
      <li>Cookies de sesión, para garantizar que los usuarios que escriban comentarios en el blog sean humanos y no aplicaciones automatizadas. De esta forma se combate el spam.</li>
    </ul>
    <p>Este sitio web utiliza las siguientes <strong>cookies de terceros</strong>:</p>
    <ul className="list-disc list-inside pl-4">
      <li>Google Analytics: Almacena cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el tratamiento de información acerca de usted por Google. Por tanto, el ejercicio de cualquier derecho en este sentido deberá hacerlo comunicando directamente con Google.</li>
      <li>Redes sociales: Cada red social utiliza sus propias cookies para que usted pueda pinchar en botones del tipo Me gusta o Compartir.</li>
    </ul>
    <h3 className="font-bold text-brand-light pt-2">Desactivación o eliminación de cookies</h3>
    <p>
      En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando. La mayoría de los navegadores ofrecen la posibilidad de gestionar las cookies para un mayor control y privacidad.
    </p>
    <h3 className="font-bold text-brand-light pt-2">Notas adicionales</h3>
    <p>
      Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.
    </p>
    <p className="pt-4">Creado por Bufit Impulsa.</p>
  </div>
);

export default CookiesPolicyContent;