import { CALENDLY_URL, COMING_SOON, INTERNATIONAL_FEE_NOTE, WHAT_TO_EXPECT, type Country } from "@/lib/services/countries";
import { WhatsAppCta } from "@/components/WhatsApp";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export function ServicesPage({ country }: { country: Country }) {
  const services = country.services;
  return (
    <main className="nh-svc">
      <section className="nh-hero">
        <div className="nh-wrap">
          <span className="nh-eyebrow"><span aria-hidden>{country.flag}</span> Services in {country.name}</span>
          <h1>How I Can <span>Support</span> You</h1>
          <p>Every family's journey is unique. Here's how I can support parents in {country.name} — choose the path that feels right for your family's growth and healing.</p>
        </div>
      </section>

      <section className="nh-section">
        <div className="nh-wrap">
          <h2>Your Journey</h2>
          <p className="nh-sub">Programs available in {country.name}</p>
          {services && services.length > 0 ? (
            <div style={{ display: "grid", gap: 28 }}>
              {services.map((s) => (
                <article key={s.id} className="nh-card" id={s.id}>
                  <div className="nh-card__body">
                    <h3>{s.name}</h3>
                    <p className="nh-tag">{s.tagline}</p>
                    <div className="nh-stats">
                      {s.highlights.map((h) => (
                        <div key={h.value} className="nh-stat"><b>{h.value}</b><span>{h.label}</span></div>
                      ))}
                    </div>
                    <ul className="nh-list">{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                    {s.bonus && <div className="nh-bonus"><b>{s.bonus.title}:</b> {s.bonus.text}</div>}
                  </div>
                  <div className="nh-card__price">
                    <h4>Program Fee</h4>
                    {s.prices?.map((p) => (
                      <div key={p.label} className="nh-price"><strong>{p.amount}</strong><small>{p.label}</small></div>
                    ))}
                    {s.priceNote && <p className="nh-note">{s.priceNote}</p>}
                    <a className="nh-btn" href={s.cta.href} target="_blank" rel="noreferrer">{s.cta.label}</a>
                    <WhatsAppCta small block label="Chat on WhatsApp" message={WHATSAPP_MESSAGES.services(country.name)} />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="nh-empty">
              <h3>Services for {country.name} are being finalised</h3>
              <p>We're confirming which programs and fees are available in {country.name}. {INTERNATIONAL_FEE_NOTE} Book a free discovery call or get in touch and we'll share the options for your family.</p>
              <div className="nh-actions">
                <a className="nh-btn" href={CALENDLY_URL} target="_blank" rel="noreferrer">Book a Free Discovery Call</a>
                <a className="nh-btn nh-btn--ghost" href="/contact">Send an Enquiry</a>
                <WhatsAppCta label="Chat on WhatsApp" message={WHATSAPP_MESSAGES.services(country.name)} />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="nh-section" style={{ background: "#fff" }}>
        <div className="nh-wrap">
          <h2>What to Expect</h2>
          <p className="nh-sub">A gentle, practical approach to parenting support</p>
          <div className="nh-grid4">
            {WHAT_TO_EXPECT.map((w) => <div key={w.title} className="nh-mini"><h3>{w.title}</h3><p>{w.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="nh-section">
        <div className="nh-wrap">
          <h2>Coming Soon Programs</h2>
          <p className="nh-sub">Grow together with other parents</p>
          <div className="nh-grid2">
            {COMING_SOON.map((p) => (
              <div key={p.id} className="nh-soon">
                <span className="nh-badge">{p.status}</span>
                <h3>{p.name}</h3>
                <p>{p.intro}</p>
                <ul className="nh-list">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nh-section" style={{ paddingTop: 0 }}>
        <div className="nh-wrap">
          <div className="nh-cta">
            <h2>Not Sure Which Path Is Right?</h2>
            <p>Let's talk. Book a free 30-minute discovery call to explore what feels right for your family.</p>
            <div className="nh-actions">
              <a className="nh-btn" href={CALENDLY_URL} target="_blank" rel="noreferrer">Book Your Free Discovery Call</a>
              <a className="nh-btn nh-btn--ghost nh-btn--ghost-light" href="/contact">Contact Us</a>
              <WhatsAppCta label="Chat on WhatsApp" message={WHATSAPP_MESSAGES.services(country.name)} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
