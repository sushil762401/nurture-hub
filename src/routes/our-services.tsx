import { createFileRoute, redirect } from "@tanstack/react-router";

// The original Services page now lives at /services (country-specific versions under /{country}/services).
export const Route = createFileRoute("/our-services")({
  beforeLoad: () => { throw redirect({ to: "/services", statusCode: 301 }); },
});
