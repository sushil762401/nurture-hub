// WhatsApp contact for Nurture Hub — the single place the number lives.
// Change the number here and every WhatsApp CTA on the site follows.

export const WHATSAPP_NUMBER_INTL = "919173880167";
export const WHATSAPP_NUMBER_DISPLAY = "+91 91738 80167";

/** wa.me link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  discoveryCall:
    "Hi Nurture Hub! I'd like to book a free 30-minute discovery call.",
  general:
    "Hi Nurture Hub! I'd like to know more about your parenting support.",
  services: (country: string) =>
    `Hi Nurture Hub! I'm in ${country} and would like to know more about your parenting coaching programs.`,
  enquiry:
    "Hi Nurture Hub! I'd like to share an enquiry about support for my family.",
} as const;
