import React from 'react';

const PrivacyPolicyContent: React.FC = () => (
  <div className="space-y-4 text-sm text-brand-light/80 leading-relaxed">
    <p>
      <strong>Responsable del tratamiento:</strong><br />
      Iliana Nicolón Fiol<br />
      DNI: 26889913S<br />
      Contacto: A través del formulario de esta web.
    </p>
    <p>
      De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 (RGPD), le informamos que los datos personales y dirección de correo electrónico, recabados del propio interesado o de fuentes públicas, serán tratados bajo la responsabilidad de Iliana Nicolón Fiol para el envío de comunicaciones sobre nuestros servicios y se conservarán mientras exista un interés mutuo para ello. Los datos no serán comunicados a terceros, salvo obligación legal.
    </p>
    <h3 className="font-bold text-brand-light pt-2">Finalidad del tratamiento</h3>
    <p>
      Tratamos la información que nos facilita con el fin de prestarles el servicio solicitado, realizar la facturación del mismo y enviar comunicaciones comerciales relacionadas con nuestros servicios.
    </p>
    <h3 className="font-bold text-brand-light pt-2">Legitimación</h3>
    <p>
      La base legal para el tratamiento de sus datos es la ejecución de la prestación del servicio contratado y el consentimiento del interesado.
    </p>
    <h3 className="font-bold text-brand-light pt-2">Derechos del usuario</h3>
    <p>
      Le informamos que puede ejercer los siguientes derechos:
    </p>
    <ul className="list-disc list-inside pl-4">
      <li>Derecho de acceso: a obtener confirmación sobre si estamos tratando datos personales que le conciernen.</li>
      <li>Derecho de rectificación: a solicitar la modificación de los datos inexactos.</li>
      <li>Derecho de supresión: a solicitar la eliminación de sus datos cuando, entre otros motivos, ya no sean necesarios para los fines que fueron recogidos.</li>
      <li>Derecho de oposición: a oponerse al tratamiento de sus datos.</li>
      <li>Derecho a la limitación del tratamiento: en determinadas circunstancias, podrá solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.</li>
      <li>Derecho a la portabilidad de los datos: a recibir los datos personales que le incumban, que nos haya facilitado, en un formato estructurado, de uso común y lectura mecánica.</li>
    </ul>
    <p>
      Para ejercer estos derechos, puede dirigirse a nosotros a través del formulario de contacto de esta web.
    </p>
  </div>
);

export default PrivacyPolicyContent;