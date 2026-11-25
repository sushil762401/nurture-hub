import { createFileRoute, redirect } from "@tanstack/react-router";
import { getStoredCountry, type CountryCode } from "@/lib/services/countries";
import { resolveCountry } from "@/lib/services/geo.functions";

// Instant offline guess from the browser's time zone (used only in the browser if nothing is saved).
const TZ: Record<string, CountryCode> = {
  "Asia/Kolkata": "in", "Asia/Calcutta": "in", "Africa/Lagos": "ng", "Europe/London": "uk",
  "Europe/Berlin": "de", "Europe/Busingen": "de", "Asia/Kuala_Lumpur": "my", "Asia/Kuching": "my", "Asia/Singapore": "sg",
};
function guessFromTimeZone(): CountryCode | null {
  try { return TZ[Intl.DateTimeFormat().resolvedOptions().timeZone] ?? null; } catch { return null; }
}

export const Route = createFileRoute("/services")({
  beforeLoad: async () => {
    let code: CountryCode | null = null;
    if (typeof window !== "undefined") code = getStoredCountry()?.code ?? guessFromTimeZone();
    if (!code) code = await resolveCountry();
    throw redirect({ to: "/$country/services", params: { country: code }, statusCode: 302, replace: true });
  },
  head: () => ({
    meta: [
      { title: "Our Services | Nurture Hub Parenting Coaching" },
      { name: "description", content: "Find Nurture Hub parenting coaching services available in your country." },
      { property: "og:title", content: "Our Services | Nurture Hub" },
      { property: "og:description", content: "Find Nurture Hub parenting coaching services available in your country." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
