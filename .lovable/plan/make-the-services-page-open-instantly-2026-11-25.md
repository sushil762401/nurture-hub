# Make the Services page open instantly

## Why it is still slow
- The "Finding services for your country…" screen is a blank in-between page. The browser first has to download and start the whole site, then work out the country, then load a second page. That is several steps before anything useful appears.
- The country page also asks the server for the site address every time it opens, which adds another round trip.
- The preview itself runs in a slow development mode, so everything feels slower there than on the published site.

## The fix: decide the country before the page is sent
1. **Server-side redirect.** When someone opens /services, the server picks the country right away and sends them straight to /de/services (or similar). No in-between "Finding…" screen at all.
   - First it checks the visitor's saved choice.
   - Next it checks the country the hosting network already knows from the visitor's connection. This costs nothing and needs no extra lookup.
   - If neither is known, it shows India. There is no slow outside lookup on this path.
2. **Remember the choice in a cookie as well.** The country picker still saves the visitor's choice, but now the server can read it too, so returning visitors and manual picks are honoured instantly.
3. **Menu links go straight to the right country.** Once the country is known, "Our Services" in the menu on every page links directly to /xx/services, skipping the redirect.
4. **Remove the extra server call** for the site address on the country page. Use a fixed site address setting instead, so moving between pages is instant.
5. **Fallback.** If cookies are blocked, the current time-zone guess stays in place as a backup.

## How we'll check it
- Measure the time from opening /services to the country page appearing, before and after the change, for a German, a US and a first-time visitor.
- Confirm a manually picked country still wins.
- Run the existing price and country tests.

## Technical details
- `/services` gets a `beforeLoad` that runs on the server. It reads the `nh_country` / `nh_country_manual` cookies, then the `cf-ipcountry` header, and calls `throw redirect({ to: "/$country/services", statusCode: 302 })`.
- `storeCountry` also writes cookies with `max-age` set to one year. The ipapi.co fallback is removed from the redirect path.
- The `$country/services` loader drops `getRequestOrigin()`. Canonical and hreflang links use a `SITE_URL` constant, with an SSR-only fallback.
- The header and nav links read the stored country after the page loads and update their `href`.
