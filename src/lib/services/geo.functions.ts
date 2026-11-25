import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader } from "@tanstack/react-start/server";
import { countryFromIso, type CountryCode } from "./countries";

// IP geolocation, isolated here so the provider can be swapped later.
// 1) Hosting edge header (Cloudflare `cf-ipcountry`) — free, no key.
// 2) Fallback: ipapi.co free lookup by client IP (set GEO_PROVIDER_DISABLED=1 to skip).
// Anything unknown falls back to India.
export const detectCountry = createServerFn({ method: "GET" }).handler(async (): Promise<{ country: CountryCode; source: string }> => {
  const edge = getRequestHeader("cf-ipcountry");
  if (edge && edge !== "XX" && edge !== "T1") return { country: countryFromIso(edge), source: "edge" };
  if (process.env["GEO_PROVIDER_DISABLED"] === "1") return { country: countryFromIso(null), source: "default" };
  const ip = (getRequestHeader("cf-connecting-ip") ?? getRequestHeader("x-forwarded-for") ?? "").split(",")[0]?.trim();
  if (!ip) return { country: countryFromIso(null), source: "default" };
  try {
    const res = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/country/`, { signal: AbortSignal.timeout(1000) });
    if (res.ok) {
      const iso = (await res.text()).trim();
      if (/^[A-Z]{2}$/.test(iso)) return { country: countryFromIso(iso), source: "ipapi" };
    }
  } catch { /* fall through */ }
  return { country: countryFromIso(null), source: "default" };
});

export const getRequestOrigin = createServerFn({ method: "GET" }).handler(() => {
  const req = getRequest();
  const url = new URL(req.url);
  const sandboxHost = url.hostname === "localhost" ? req.headers.get("x-forwarded-host") : null;
  return sandboxHost ? `https://${sandboxHost}` : url.origin;
});
