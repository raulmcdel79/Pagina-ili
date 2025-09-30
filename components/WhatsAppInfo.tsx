import React from "react";

interface WhatsAppInfoProps {
  phone?: string;
}

const WhatsAppInfo: React.FC<WhatsAppInfoProps> = ({ phone = "665149561" }) => {
  const message = encodeURIComponent(
    "Hola Iliana,\n\nMe gustaría recibir información por WhatsApp sobre el acompañamiento en duelo animal. Estos son mis datos:\n\nNombre: \nMi situación es: \n\n(Por favor, cuéntame brevemente tu caso o duda)\n\nGracias por tu ayuda,\n"
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 rounded bg-green-500 text-white font-semibold text-base shadow hover:bg-green-600 transition"
      >
        Pedir información por WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppInfo;
