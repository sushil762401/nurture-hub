import { createServerFn } from "@tanstack/react-start";
import { getCookie, getRequestHeader } from "@tanstack/react-start/server";
import { countryFromIso, isCountryCode, type CountryCode } from "./countries";

// Instant country decision: saved cookie first, then the hosting edge's country header, else India.
// No outside lookups, so this never waits on a third-party service.
export const resolveCountry = createServerFn({ method: "GET" }).handler((): CountryCode => {
  const saved = getCookie("nh_country");
  if (isCountryCode(saved)) return saved;
  const edge = getRequestHeader("cf-ipcountry");
  if (edge && edge !== "XX" && edge !== "T1") return countryFromIso(edge);
  return countryFromIso(null);
});
