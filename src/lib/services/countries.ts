// Central country + service configuration for the country-specific Services pages.

export const COUNTRY_CODES = ["in", "us", "ca", "ng", "uk", "de", "my", "sg"] as const;
export type CountryCode = (typeof COUNTRY_CODES)[number];
export const DEFAULT_COUNTRY: CountryCode = "in";

export const SITE_URL = "https://nurturehub-sashi.in";
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

export interface Country {
  code: CountryCode;
  name: string;
  flag: string;
  hreflang: string;
  /** Service offer configured for this country. */
  services: Service[] | null;
}

// Six-month journey fees use the existing fixed PPP ratios (never live exchange rates).
export const PRICING: Record<CountryCode, { currency: string; symbol: string; amount: number }> = {
  in: { currency: "INR", symbol: "₹", amount: 60000 },
  us: { currency: "USD", symbol: "$", amount: 2990 },
  ca: { currency: "CAD", symbol: "C$", amount: 3790 },
  ng: { currency: "NGN", symbol: "₦", amount: 960000 },
  uk: { currency: "GBP", symbol: "£", amount: 2090 },
  de: { currency: "EUR", symbol: "€", amount: 2190 },
  my: { currency: "MYR", symbol: "RM", amount: 4290 },
  sg: { currency: "SGD", symbol: "S$", amount: 3090 },
};
export function formatPrice(code: CountryCode, amount = PRICING[code].amount): string {
  return PRICING[code].symbol + amount.toLocaleString("en-US");
}

const oneToOneIndia: Service = {
  id: "conscious-parenting-journey",
  name: "Conscious Parenting Journey",
  tagline: "A six-month journey from control to connection",
  highlights: [
    { value: "6 Months", label: "of guided support" },
    { value: "12 Calls", label: "weekly one-to-one coaching" },
  ],
  bullets: [
    "Learn the Awareness, Boundaries and Connection framework",
    "Apply practical tools in everyday family life",
  ],
  prices: [{ label: "Six-month programme", amount: formatPrice("in") }],
  priceNote: "12 weekly calls, learning resources and continued support",
  cta: { label: "Book a Free Clarity Call", href: CALENDLY_URL },
};

function oneToOneFor(code: CountryCode): Service {
  return { ...oneToOneIndia, prices: [{ label: "Six-month programme", amount: formatPrice(code) }] };
}

export const COUNTRIES: Record<CountryCode, Country> = {
  in: { code: "in", name: "India", flag: "🇮🇳", hreflang: "en-IN", services: [oneToOneIndia] },
  us: { code: "us", name: "United States", flag: "🇺🇸", hreflang: "en-US", services: [oneToOneFor("us")] },
  ca: { code: "ca", name: "Canada", flag: "🇨🇦", hreflang: "en-CA", services: [oneToOneFor("ca")] },
  ng: { code: "ng", name: "Nigeria", flag: "🇳🇬", hreflang: "en-NG", services: [oneToOneFor("ng")] },
  uk: { code: "uk", name: "United Kingdom", flag: "🇬🇧", hreflang: "en-GB", services: [oneToOneFor("uk")] },
  de: { code: "de", name: "Germany", flag: "🇩🇪", hreflang: "en-DE", services: [oneToOneFor("de")] },
  my: { code: "my", name: "Malaysia", flag: "🇲🇾", hreflang: "en-MY", services: [oneToOneFor("my")] },
  sg: { code: "sg", name: "Singapore", flag: "🇸🇬", hreflang: "en-SG", services: [oneToOneFor("sg")] },
};

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
    const opts = "; path=/; max-age=31536000; samesite=lax";
    document.cookie = `${KEY}=${code}${opts}`;
    if (manual) document.cookie = `${MANUAL_KEY}=1${opts}`;
  } catch { /* ignore */ }
}
