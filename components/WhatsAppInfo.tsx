import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE, whatsappUrl, CTA_WHATSAPP_LABEL } from '../constants/contact';

interface WhatsAppInfoProps {
  phone?: string;
}

const WhatsAppInfo: React.FC<WhatsAppInfoProps> = ({ phone }) => {
  const p = phone || WHATSAPP_NUMBER;
  const url = whatsappUrl(p, WHATSAPP_DEFAULT_MESSAGE);

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 rounded bg-green-500 text-white font-semibold text-base shadow hover:bg-green-600 transition"
      >
        {CTA_WHATSAPP_LABEL}
      </a>
    </div>
  );
};

export default WhatsAppInfo;
