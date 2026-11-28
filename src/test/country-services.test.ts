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
  it("shows India's six-month journey fee", () => {
    expect(COUNTRIES.in.services?.[0]?.prices?.map((p) => p.amount)).toEqual(["₹60,000"]);
  });
  it("shows the configured six-month PPP fee per country, never rupees abroad", () => {
    const want = {
      us: "$2,990",
      ca: "C$3,790",
      ng: "₦960,000",
      uk: "£2,090",
      de: "€2,190",
      my: "RM4,290",
      sg: "S$3,090",
    } as const;
    for (const [c, v] of Object.entries(want))
      expect(COUNTRIES[c as keyof typeof want].services?.[0]?.prices?.map((p) => p.amount)).toEqual(
        [v],
      );
  });
  it("offers the six-month journey in every country", () => {
    for (const code of COUNTRY_CODES) {
      expect(COUNTRIES[code].services?.[0]?.name).toBe("Conscious Parenting Journey");
      expect(COUNTRIES[code].services?.[0]?.prices?.[0]?.label).toBe("Six-month programme");
    }
  });
});
