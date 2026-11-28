import { ArrowRight } from "lucide-react";
import { CALENDLY_URL, formatPrice, type Country } from "@/lib/services/countries";
import { WHATSAPP_MESSAGES, WHATSAPP_NUMBER_DISPLAY, whatsappLink } from "@/lib/whatsapp";

const everydayMoments = [
  "Small disagreements quickly turn into power struggles.",
  "You repeat yourself, then wish you had responded differently.",
  "You want firm boundaries that still feel kind and respectful.",
  "You want to understand what may be behind your child's behaviour.",
];

const pillars = [
  {
    letter: "A",
    name: "Awareness",
    verb: "Notice",
    text: "Recognise your triggers, emotions and patterns, and make room to pause before reacting.",
  },
  {
    letter: "B",
    name: "Boundaries",
    verb: "Guide",
    text: "Set kind, age-appropriate limits while supporting your child's growing independence.",
  },
  {
    letter: "C",
    name: "Connection",
    verb: "Reconnect",
    text: "Listen with curiosity, acknowledge feelings and repair after difficult moments.",
  },
];

const inclusions = [
  {
    title: "12 weekly one-to-one coaching calls",
    detail: "One scheduled call each week during weeks 1–12.",
  },
  {
    title: "Continued support in weeks 13–24",
    detail: "Support while you practise, reflect and discuss challenges during agreed support hours.",
  },
  {
    title: "WhatsApp support",
    detail: "Available 9 a.m.–5 p.m.; target response time is three hours during support hours.",
  },
  {
    title: "Workbook and reflection exercises",
    detail: "Guided prompts and practical activities to use between coaching calls.",
  },
  {
    title: "Practical parenting toolkit",
    detail: "Trigger Tracker, 3-Breath Pause, CLEAR Framework, Curiosity Starters and repair tools.",
  },
];

const outcomes = [
  "Notice your triggers and choose a more thoughtful response.",
  "Set boundaries with greater clarity and empathy.",
  "Understand your child's feelings and perspective.",
  "Repair difficult moments and reconnect.",
];

function CallButton({ label = "Book your free 30-minute clarity call" }: { label?: string }) {
  return (
    <a className="nh-program__button nh-program__button--primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
      {label} <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}

export function ServicesPage({ country }: { country: Country }) {
  return (
    <main className="nh-program">
      <section className="nh-program__hero">
        <div className="nh-program__wrap nh-program__hero-grid">
          <div className="nh-program__hero-copy">
            <p className="nh-program__eyebrow">A six-month journey for parents of children aged 3–12</p>
            <h1>From Control <span>to Connection</span></h1>
            <p className="nh-program__hero-lead">
              Understand your reactions, set kind boundaries and build a stronger relationship with your child — starting with you.
            </p>
            <div className="nh-program__actions">
              <CallButton />
              <a className="nh-program__button nh-program__button--secondary" href="#programme">
                See how the journey works <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <aside className="nh-program__price-card" aria-label={`Programme fee for ${country.name}`}>
            <span>From Control to Connection</span>
            <strong>{formatPrice(country.code)}</strong>
            <small>Six-month programme · {country.name}</small>
            <CallButton label="Book a clarity call" />
            <div className="nh-program__price-details">
              <span>12 weekly calls</span>
              <span>Continued support</span>
              <span>Practical resources</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="nh-program__moments" id="everyday-moments">
        <div className="nh-program__wrap nh-program__moments-grid">
          <div>
            <p className="nh-program__eyebrow">You love your child</p>
            <h2>Everyday moments that keep happening</h2>
            <p className="nh-program__body">
              Familiar situations can leave you frustrated, guilty or unsure what to try next. If you recognise yourself here, you are not alone.
            </p>
          </div>
          <ul className="nh-program__moment-list">
            {everydayMoments.map((moment) => <li key={moment}>{moment}</li>)}
          </ul>
        </div>
      </section>

      <section className="nh-program__framework" id="framework">
        <div className="nh-program__wrap">
          <header className="nh-program__section-heading">
            <p className="nh-program__eyebrow">The Nurture Hub approach</p>
            <h2>Three steps that build on each other</h2>
          </header>
          <div className="nh-program__pillars">
            {pillars.map((pillar) => (
              <article className="nh-program__pillar" key={pillar.letter}>
                <span className="nh-program__pillar-letter">{pillar.letter}</span>
                <p className="nh-program__pillar-verb">{pillar.verb}</p>
                <h3>{pillar.name}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nh-program__timeline" id="programme">
        <div className="nh-program__wrap">
          <header className="nh-program__section-heading nh-program__section-heading--light">
            <p className="nh-program__eyebrow">Your six-month journey</p>
            <h2>A structured start, then room to practise</h2>
          </header>
          <div className="nh-program__phases">
            <article className="nh-program__phase">
              <span className="nh-program__phase-period">Weeks 1–12</span>
              <p className="nh-program__phase-kicker">Phase 1 · Structured programme</p>
              <h3>Learn and practise</h3>
              <p>Explore the ABC Framework through guided learning and apply it to situations that matter to your family.</p>
              <strong>12 scheduled weekly coaching calls</strong>
            </article>
            <article className="nh-program__phase">
              <span className="nh-program__phase-period">Weeks 13–24</span>
              <p className="nh-program__phase-kicker">Phase 2 · Continued support</p>
              <h3>Apply and integrate</h3>
              <p>Keep practising at home, reflect on progress and discuss challenges as they arise.</p>
              <strong>Support access during agreed support hours</strong>
            </article>
          </div>
          <p className="nh-program__support-clarity">
            Continued support is not unlimited scheduled coaching. The programme includes 12 scheduled weekly calls in weeks 1–12.
          </p>
        </div>
      </section>

      <section className="nh-program__included" id="included">
        <div className="nh-program__wrap nh-program__included-grid">
          <div>
            <p className="nh-program__eyebrow">Made for real family life</p>
            <h2>What's included</h2>
            <p className="nh-program__body">A structured programme, practical resources and support as you bring the learning home.</p>
          </div>
          <div className="nh-program__inclusion-list">
            {inclusions.map((item, index) => (
              <article className="nh-program__inclusion" key={item.title}>
                <span>0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nh-program__fit">
        <div className="nh-program__wrap nh-program__fit-grid">
          <div>
            <p className="nh-program__eyebrow">Who it's for</p>
            <h2>For parents ready to reflect and practise</h2>
            <p className="nh-program__body">
              Designed for parents of children aged 3–12 who want to understand their own patterns, set kind and consistent boundaries, and build a stronger connection with their child.
            </p>
          </div>
          <div>
            <p className="nh-program__eyebrow">What may change</p>
            <h2>Small shifts can open new possibilities</h2>
            <ul className="nh-program__outcomes">
              {outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
            </ul>
            <p className="nh-program__disclaimer">This journey supports your growth as a parent. Results are not guaranteed, and difficult moments may still happen.</p>
          </div>
        </div>
      </section>

      <section className="nh-program__closing">
        <div className="nh-program__wrap nh-program__closing-inner">
          <p className="nh-program__eyebrow">Your next step</p>
          <h2>Let's begin with a conversation</h2>
          <p>Book a complimentary 30-minute clarity call to talk about what is happening in your family and whether this journey feels right for you.</p>
          <CallButton />
          <div className="nh-program__contact-links">
            <a href="mailto:connect@nurturehub-sashi.com">connect@nurturehub-sashi.com</a>
            <a href="tel:+919173880167">{WHATSAPP_NUMBER_DISPLAY}</a>
            <a href={whatsappLink(WHATSAPP_MESSAGES.discoveryCall)} target="_blank" rel="noreferrer">Message us on WhatsApp</a>
          </div>
          <small>Six-month online support with Sashi · Graduate Diploma in Psychology, Australia</small>
        </div>
      </section>
    </main>
  );
}
