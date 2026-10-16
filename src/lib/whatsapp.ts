import { contact, whatsappMessages, type WhatsAppKey } from "./site";

/**
 * Gera um link de WhatsApp (wa.me) com mensagem inicial codificada.
 * Aceita uma chave de mensagem pré-definida ou um texto livre.
 */
export function whatsappLink(message: WhatsAppKey | { text: string } = "geral"): string {
  const text = typeof message === "string" ? whatsappMessages[message] : message.text;
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
