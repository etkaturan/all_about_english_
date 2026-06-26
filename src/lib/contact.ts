// Builds deep links to Karyna's messaging channels with a pre-filled message.
// Phase 1 "checkout": instead of a payment processor, the buyer is sent to
// Telegram/WhatsApp with a ready-to-send message. Swap this module later for
// automated payments without touching the buttons that call it.

const TELEGRAM = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME ?? "";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export function telegramLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://t.me/${TELEGRAM}?text=${text}`;
}

export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP}?text=${text}`;
}

export const hasTelegram = () => TELEGRAM.length > 0;
export const hasWhatsApp = () => WHATSAPP.length > 0;