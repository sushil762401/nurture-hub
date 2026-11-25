// Central country + service configuration for the country-specific Services pages.
// Only India has confirmed services and prices (taken from the original Services page).
// For other countries, `services` is null until the business confirms what is offered there.
// PLACEHOLDER: fill in `services` for each country once confirmed by NurtureHub.

export const COUNTRY_CODES = ["in", "us", "ca", "ng", "uk", "de", "my", "sg"] as const;
export type CountryCode = (typeof COUNTRY_CODES)[number];
export const DEFAULT_COUNTRY: CountryCode = "in";

export const CALENDLY_URL = "https://calendly.com/sashi-adler92/30min";

export interface ServicePrice {
  label: string;
  amount: string;
  note?: string;
  strike?: boolean;
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  highlights: { value: string; label: string }[];
  bullets: string[];
  bonus?: { title: string; text: string };
  prices?: ServicePrice[];
  priceNote?: string;
  cta: { label: string; href: string };
}

export interface ComingSoonProgram {
  id: string;
  name: string;
  status: string;
  intro: string;
  bullets: string[];
}

export interface Country {
  code: CountryCode;
  name: string;
  flag: string;
  hreflang: string;
  /** null = not yet confirmed by the business; never show services as available. */
  services: Service[] | null;
}

const oneToOneIndia: Service = {
  id: "one-to-one-coaching",
  name: "One-to-One Coaching",
  tagline: "For deeper reflection, skill-building, and steady progress",
  highlights: [
    { value: "4 Sessions", label: "of personalized coaching" },
    { value: "60 Minutes", label: "per session" },
  ],
  bullets: [
    "Deep dive into your parenting challenges",
    "Build practical skills for lasting change",
  ],
  bonus: { title: "Bonus Follow-Up", text: "2 Free Follow-Up Sessions" },
  prices: [
    { label: "First 3 Clients", amount: "₹3999" },
    { label: "Regular fee", amount: "₹5999" },
  ],
  priceNote: "4 Sessions | Personalized Guidance · Complete package",
  cta: { label: "Start Your Journey", href: CALENDLY_URL },
};

export const COUNTRIES: Record<CountryCode, Country> = {
  in: { code: "in", name: "India", flag: "🇮🇳", hreflang: "en-IN", services: [oneToOneIndia] },
  us: { code: "us", name: "United States", flag: "🇺🇸", hreflang: "en-US", services: null },
  ca: { code: "ca", name: "Canada", flag: "🇨🇦", hreflang: "en-CA", services: null },
  ng: { code: "ng", name: "Nigeria", flag: "🇳🇬", hreflang: "en-NG", services: null },
  uk: { code: "uk", name: "United Kingdom", flag: "🇬🇧", hreflang: "en-GB", services: null },
  de: { code: "de", name: "Germany", flag: "🇩🇪", hreflang: "en-DE", services: null },
  my: { code: "my", name: "Malaysia", flag: "🇲🇾", hreflang: "en-MY", services: null },
  sg: { code: "sg", name: "Singapore", flag: "🇸🇬", hreflang: "en-SG", services: null },
};

// From the original page: "Fees Available in international currency on request".
export const INTERNATIONAL_FEE_NOTE = "Fees are available in international currency on request.";

export const WHAT_TO_EXPECT = [
  { title: "A Safe, Judgment-Free Space", text: "You’ll be met with compassion, not criticism. This is a space to explore, grow, and heal at your own pace." },
  { title: "Practical Tools & Skills", text: "Learn actionable strategies you can apply immediately to build connection and regulate emotions." },
  { title: "Personalized Support", text: "Your family’s needs are unique. Together, we’ll create an approach that works for you." },
  { title: "Lasting Transformation", text: "This isn’t about quick fixes. It’s about deep, sustainable change that ripples through your family." },
];

export const COMING_SOON: ComingSoonProgram[] = [
  {
    id: "group-coaching",
    name: "Group Coaching",
    status: "Launching soon",
    intro: "Experience growth together in a supportive and inspiring space.",
    bullets: [
      "Learn and heal through shared energy",
      "Gain wisdom from collective experiences",
      "Connect with other parents on similar journeys",
      "Build a supportive community",
      "Transform together in a safe space",
    ],
  },
  {
    id: "mastery-circle",
    name: "Mastery Circle",
    status: "Launching soon",
    intro: "Brings together like-minded parents to learn, share, and elevate each other. “Where awareness meets collective growth.”",
    bullets: [
      "Grow together. Reflect deeper. Parent consciously.",
      "Not advice. Awareness. Not control. Connection.",
    ],
  },
];

export function isCountryCode(v: unknown): v is CountryCode {
  return typeof v === "string" && (COUNTRY_CODES as readonly string[]).includes(v);
}

/** Maps an ISO 3166 alpha-2 code (e.g. from IP geolocation) to a site country, defaulting to India. */
export function countryFromIso(iso: string | null | undefined): CountryCode {
  const c = (iso ?? "").trim().toLowerCase();
  if (c === "gb") return "uk";
  return isCountryCode(c) ? c : DEFAULT_COUNTRY;
}

// Persistent visitor choice (browser only; call from effects/handlers).
const KEY = "nh_country";
const MANUAL_KEY = "nh_country_manual";
export function getStoredCountry(): { code: CountryCode; manual: boolean } | null {
  try {
    const v = localStorage.getItem(KEY);
    return isCountryCode(v) ? { code: v, manual: localStorage.getItem(MANUAL_KEY) === "1" } : null;
  } catch { return null; }
}
export function storeCountry(code: CountryCode, manual: boolean) {
  try {
    localStorage.setItem(KEY, code);
    if (manual) localStorage.setItem(MANUAL_KEY, "1");
  } catch { /* ignore */ }
}
