import { describe, expect, it } from "vitest";
import { COUNTRIES, COUNTRY_CODES, countryFromIso } from "@/lib/services/countries";

describe("country services rules", () => {
  it("supports exactly the eight country codes", () => {
    expect([...COUNTRY_CODES]).toEqual(["in", "us", "ca", "ng", "uk", "de", "my", "sg"]);
  });
  it("defaults to India when the country is unknown or unsupported", () => {
    expect(countryFromIso(null)).toBe("in");
    expect(countryFromIso("FR")).toBe("in");
  });
  it("maps GB from geolocation to the uk page", () => {
    expect(countryFromIso("GB")).toBe("uk");
  });
  it("shows India's confirmed fees", () => {
    expect(COUNTRIES.in.services?.[0]?.prices?.map((p) => p.amount)).toEqual(["₹3,999", "₹5,999"]);
  });
  it("shows the configured PPP price per country, never rupees abroad", () => {
    const want = { us: "$299", ca: "C$379", ng: "₦96,000", uk: "£209", de: "€219", my: "RM429", sg: "S$309" } as const;
    for (const [c, v] of Object.entries(want)) expect(COUNTRIES[c as keyof typeof want].services?.[0]?.prices?.map((p) => p.amount)).toEqual([v]);
  });
});
