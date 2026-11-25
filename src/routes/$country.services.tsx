import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import capturedCSS from "../styles/pages/our-services.css?raw";
import svcCSS from "../styles/pages/services-country.css?raw";
import { SiteFooter, SiteHeader } from "@/components/services/SiteChrome";
import { ServicesPage } from "@/components/services/ServicesPage";
import { COUNTRIES, COUNTRY_CODES, getStoredCountry, isCountryCode, storeCountry } from "@/lib/services/countries";
import { getRequestOrigin } from "@/lib/services/geo.functions";

export const Route = createFileRoute("/$country/services")({
  loader: async ({ params }) => {
    if (!isCountryCode(params.country)) throw notFound();
    const origin = await getRequestOrigin();
    return { code: params.country, origin };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Services – Nurture Hub" }, { name: "robots", content: "noindex" }] };
    const c = COUNTRIES[loaderData.code];
    const title = `Parenting Coaching Services in ${c.name} | Nurture Hub`;
    const description = c.services
      ? `One-to-one conscious parenting coaching from Nurture Hub for families in ${c.name}. See programs, fees and book a free discovery call.`
      : `Nurture Hub parenting coaching for families in ${c.name}. Book a free discovery call to learn about programs and fees.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: `${loaderData.origin}/${c.code}/services` },
        ...COUNTRY_CODES.map((code) => ({ rel: "alternate", hrefLang: COUNTRIES[code].hreflang, href: `${loaderData.origin}/${code}/services` })),
        { rel: "alternate", hrefLang: "x-default", href: `${loaderData.origin}/services` },
      ],
    };
  },
  staticData: { importedDocument: { html: { "lang": "en-US" }, body: { "className": "page footer-on-bottom hide-focus-outline content-title-style-above content-style-boxed kadence-elementor-colors", "data-elementor-device-mode": "desktop" } } },
  component: CountryServices,
});

function CountryServices() {
  const { code } = Route.useLoaderData();
  // A visitor opening a country URL directly adopts that country, unless they picked one manually.
  useEffect(() => {
    const s = getStoredCountry();
    if (!s?.manual) storeCountry(code, false);
  }, [code]);
  return (
    <>
      <style>{capturedCSS}</style>
      <style>{svcCSS}</style>
      <div className="elementor elementor-3341" data-elementor-id="3341">
        <SiteHeader />
        <ServicesPage country={COUNTRIES[code]} />
        <SiteFooter />
      </div>
    </>
  );
}
