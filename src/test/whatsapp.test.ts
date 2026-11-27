import { describe, expect, it } from "vitest";
import {
  WHATSAPP_MESSAGES,
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_NUMBER_INTL,
  whatsappLink,
} from "@/lib/whatsapp";

describe("WhatsApp contact rules", () => {
  it("uses the number the business gave: +91 91738 80167", () => {
    expect(WHATSAPP_NUMBER_DISPLAY).toBe("+91 91738 80167");
    expect(WHATSAPP_NUMBER_INTL).toBe("919173880167");
  });
  it("builds a wa.me link to that number with an encoded message", () => {
    expect(whatsappLink("Hi there!")).toBe(
      "https://wa.me/919173880167?text=Hi%20there!",
    );
  });
  it("names the visitor's country in the services message", () => {
    expect(WHATSAPP_MESSAGES.services("Germany")).toContain("Germany");
  });
});
