import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { getStoredCountry, storeCountry, DEFAULT_COUNTRY, type CountryCode } from "@/lib/services/countries";

// Instant, offline guess from the browser's time zone (no network wait).
const TZ: Record<string, CountryCode> = {
  "Asia/Kolkata": "in", "Asia/Calcutta": "in", "Africa/Lagos": "ng", "Europe/London": "uk",
  "Europe/Berlin": "de", "Europe/Busingen": "de", "Asia/Kuala_Lumpur": "my", "Asia/Kuching": "my", "Asia/Singapore": "sg",
};
function guessFromTimeZone(): CountryCode | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (TZ[tz]) return TZ[tz];
    // Ambiguous US/Canada zones: rely on IP lookup instead.
    return null;
  } catch { return null; }
}
const withTimeout = <T,>(p: Promise<T>, ms: number) =>
  Promise.race([p, new Promise<never>((_, r) => setTimeout(() => r(new Error("timeout")), ms))]);
import { detectCountry } from "@/lib/services/geo.functions";

export const Route = createFileRoute("/services")({
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
  component: ServicesRedirect,
});

function ServicesRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const stored = getStoredCountry();
      let code = stored?.code ?? guessFromTimeZone() ?? undefined;
      if (!code) {
        try { code = (await withTimeout(detectCountry(), 1200)).country; } catch { code = DEFAULT_COUNTRY; }
        storeCountry(code, false);
      }
      if (!cancelled) void navigate({ to: "/$country/services", params: { country: code }, replace: true });
    })();
    return () => { cancelled = true; };
  }, [navigate]);
  return (
    <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", fontFamily: "DM Sans, sans-serif", color: "rgb(71, 93, 71)" }}>
      Finding services for your country…
    </div>
  );
}
