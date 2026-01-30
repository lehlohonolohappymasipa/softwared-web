export const BOOKING_URL = "https://calendly.com/masipalh/30min";

export const WHATSAPP_PHONE_NUMBER = "27627152900";
export const WHATSAPP_MESSAGE = "Hi softwared, I'm interested in custom software development and business automation.";

export function getWhatsAppHref(): string {
  const encoded = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encoded}`;
}
