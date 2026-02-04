export const BOOKING_URL = "https://calendly.com/masipalh/30min";

export const WHATSAPP_PHONE_NUMBER = "27627152900";
export const WHATSAPP_MESSAGE = "Hi Softwared, I am interested in your services";

export function getWhatsAppHref(): string {
  const encoded = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encoded}`;
}
