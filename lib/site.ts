export const WHATSAPP_NUMBER = "5562000000000";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Wolf Gym! Quero fazer parte da alcateia. Podem me ajudar com a matrícula?";

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export const SITE = {
  name: "Wolf Gym",
  city: "Caldas Novas — GO",
  address: "Caldas Novas — GO (endereço completo no WhatsApp)",
  hours: {
    weekdays: "Seg–Sex 05h–22h",
    weekend: "Sáb–Dom 08h–12h",
  },
};
