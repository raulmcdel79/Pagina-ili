// Centralized contact constants and helpers
export const WHATSAPP_NUMBER = '665149561';
export const PHONE_TEL = '665149561';

export const WHATSAPP_DEFAULT_MESSAGE = `Hola Iliana,\n\nMe gustaría recibir información por WhatsApp sobre el acompañamiento en duelo animal. Estos son mis datos:\n\nNombre: \nTeléfono: \nEmail: \n\nMi situación es: \n\n(Por favor, cuéntame brevemente tu caso o duda)\n\nGracias por tu ayuda,`;

export const MAILTO_ADDRESS = 'ilinicolonf@hotmail.com';
export const MAILTO_SUBJECT = 'Deseo información sobre el acompañamiento en duelo de mi compañero';
export const MAILTO_BODY_TEMPLATE = `Hola Iliana,\n\nMe gustaría recibir información sobre el acompañamiento en duelo animal. Estos son mis datos:\n\nNombre:\nTeléfono:\nEmail:\n\nMi situación es:\n\n(Por favor, cuéntame brevemente tu caso o duda)\n\nGracias por tu ayuda,`;

export const CTA_WHATSAPP_LABEL = 'Pedir información por WhatsApp';
export const CTA_EMAIL_LABEL = 'Solicitar información por email';
export const CTA_HERO_LABEL = 'Consultar Agenda';
export const CTA_RESERVE_LABEL = 'Reservá ahora';

export function whatsappUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
