import { SiteFooter, SiteHeader } from "@/components/services/SiteChrome";
import { WhatsAppCta } from "@/components/WhatsApp";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import homeCSS from "../styles/pages/home.css?raw";

const bookingUrl = "https://calendly.com/sashi-adler92/30min";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nurture Hub | From Control to Connection" },
      {
        name: "description",
        content:
          "A six-month conscious parenting journey for parents of children aged 3–12. Build awareness, set kind boundaries and strengthen connection.",
      },
      { property: "og:title", content: "Nurture Hub | From Control to Connection" },
      {
        property: "og:description",
        content: "Conscious parenting support for parents of children aged 3–12.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="nh-home">
      <style>{homeCSS}</style>
      <SiteHeader active="home" />

      <main>
        <section className="nh-home__hero">
          <div className="nh-home__hero-inner">
            <div className="nh-home__hero-copy">
              <h1>
                Calm Parenting Starts <em>With You</em>
              </h1>
              <p className="nh-home__hero-lead">
                A six-month journey for parents of children aged 3–12. Understand your reactions,
                set kind boundaries and build a stronger relationship with your child — starting
                with you.
              </p>
              <div className="nh-home__hero-actions">
                <a
                  className="nh-home__button nh-home__button--primary"
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book your free 30-minute clarity call <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="nh-home__button nh-home__button--outline" href="/services">
                  View programme details <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="nh-home__portrait-wrap">
              <div className="nh-home__portrait-shape" aria-hidden="true" />
              <img
                className="nh-home__portrait"
                src="/site-assets/3a142934fe413ab0.png"
                srcSet="/site-assets/3cc6fd8bc0fd0f02.png 200w, /site-assets/357c783e8c383d1b.png 683w, /site-assets/5c879960e91d747f.png 768w, /site-assets/c843721c65357a4f.png 1024w, /site-assets/a1f9cb1bda5ab6ef.png 1365w, /site-assets/3a142934fe413ab0.png 1707w"
                sizes="(max-width: 720px) 82vw, 42vw"
                width="683"
                height="1024"
                fetchPriority="high"
                alt="Sashi, founder of Nurture Hub, smiling in a white blouse"
              />
              <div className="nh-home__portrait-caption">
                <span>Meet your guide</span>
                <strong>Sashi</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="nh-home__section nh-home__moments" id="your-moments">
          <div className="nh-home__container nh-home__moments-grid">
            <div className="nh-home__section-intro">
              <p className="nh-home__eyebrow">You love your child</p>
              <h2>Some days, the little things feel like a battle.</h2>
              <p>
                Familiar moments can leave you feeling frustrated, guilty or unsure what to try
                next. If you recognise yourself here, you are not alone.
              </p>
            </div>
            <ul className="nh-home__moments-list">
              <li>Small disagreements quickly turn into power struggles.</li>
              <li>You repeat yourself, then wish you had responded differently.</li>
              <li>You want firm boundaries that still feel kind and respectful.</li>
              <li>You want to understand what may be behind your child's behaviour.</li>
            </ul>
          </div>
        </section>

        <section className="nh-home__section nh-home__framework" id="framework">
          <div className="nh-home__container">
            <div className="nh-home__section-heading">
              <p className="nh-home__eyebrow">A practical way forward</p>
              <h2>The ABC Framework</h2>
              <p>
                Three connected parts of your parenting journey — notice what is happening, guide
                with clarity, and reconnect after hard moments.
              </p>
            </div>
            <div className="nh-home__pillars">
              <article className="nh-home__pillar">
                <span className="nh-home__pillar-letter">A</span>
                <p className="nh-home__pillar-action">Notice</p>
                <h3>Awareness</h3>
                <p>
                  Recognise the triggers, emotions and patterns that shape your responses. Create a
                  pause before reacting.
                </p>
              </article>
              <article className="nh-home__pillar">
                <span className="nh-home__pillar-letter">B</span>
                <p className="nh-home__pillar-action">Guide</p>
                <h3>Boundaries</h3>
                <p>
                  Set kind, age-appropriate limits and support your child's growing responsibility
                  and independence.
                </p>
              </article>
              <article className="nh-home__pillar">
                <span className="nh-home__pillar-letter">C</span>
                <p className="nh-home__pillar-action">Reconnect</p>
                <h3>Connection</h3>
                <p>
                  Listen with curiosity, acknowledge feelings and repair after difficult moments.
                </p>
              </article>
            </div>
            <a className="nh-home__under-link" href="/services">
              See how the six-month journey works <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="nh-home__section nh-home__journey">
          <div className="nh-home__container">
            <div className="nh-home__section-heading">
              <p className="nh-home__eyebrow">Six months, with support along the way</p>
              <h2>Learn it. Practise it. Make it part of family life.</h2>
            </div>
            <div className="nh-home__phases">
              <article className="nh-home__phase">
                <span className="nh-home__phase-number">01</span>
                <div>
                  <p className="nh-home__phase-duration">Weeks 1–12 · Structured programme</p>
                  <h3>Learn and practise the ABC Framework</h3>
                  <p>
                    Weekly one-to-one coaching, guided learning and a workbook help you apply
                    practical tools to situations that matter to your family.
                  </p>
                  <strong>12 weekly coaching calls</strong>
                </div>
              </article>
              <article className="nh-home__phase">
                <span className="nh-home__phase-number">02</span>
                <div>
                  <p className="nh-home__phase-duration">Weeks 13–24 · Continued support</p>
                  <h3>Keep applying the learning at home</h3>
                  <p>
                    Reflect on progress, discuss challenges as they arise and strengthen new
                    responses with continued support within agreed support hours.
                  </p>
                  <strong>Support access, not extra scheduled calls</strong>
                </div>
              </article>
            </div>
            <div className="nh-home__journey-link-wrap">
              <a className="nh-home__button nh-home__button--outline" href="/services">
                View programme details and fees <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="nh-home__section nh-home__founder">
          <div className="nh-home__container nh-home__founder-inner">
            <div className="nh-home__founder-copy">
              <p className="nh-home__eyebrow">A steady, compassionate guide</p>
              <h2>Hi, I’m Sashi.</h2>
              <p>
                I support parents in understanding their own patterns and finding practical ways to
                respond, guide and connect. This work begins with curiosity, not judgement.
              </p>
              <p>
                My approach brings together the ABC Framework and the real situations families face
                every day.
              </p>
              <p className="nh-home__credential">
                Founder, Nurture Hub
                <br />
                Graduate Diploma in Psychology, Australia
              </p>
              <a className="nh-home__text-link" href="/about-us">
                Get to know me <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <aside className="nh-home__founder-note" aria-label="A reminder for parents">
              <span className="nh-home__founder-mark" aria-hidden="true">
                “
              </span>
              <p>
                You do not need to have all the answers before you begin. You only need the
                willingness to start.
              </p>
              <small>A gentle reminder for the journey</small>
            </aside>
          </div>
        </section>

        <section className="nh-home__closing">
          <div className="nh-home__container nh-home__closing-inner">
            <p className="nh-home__eyebrow">Your next step</p>
            <h2>Ready to begin with a little more understanding?</h2>
            <p>
              Book a complimentary 30-minute clarity call. We can talk about what is happening in
              your family and whether this journey feels right for you.
            </p>
            <div className="nh-home__closing-actions">
              <a
                className="nh-home__button nh-home__button--primary"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
              >
                Book your free clarity call <ArrowRight size={18} aria-hidden="true" />
              </a>
              <WhatsAppCta
                small
                label="Or message us on WhatsApp"
                message={WHATSAPP_MESSAGES.discoveryCall}
              />
            </div>
            <p className="nh-home__realistic-note">
              This journey supports your growth as a parent. It does not promise a perfectly behaved
              child or that difficult moments will disappear.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
