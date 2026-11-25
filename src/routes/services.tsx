import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { getStoredCountry, storeCountry, DEFAULT_COUNTRY } from "@/lib/services/countries";
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
      let code = stored?.code;
      if (!code) {
        try { code = (await detectCountry()).country; } catch { code = DEFAULT_COUNTRY; }
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
