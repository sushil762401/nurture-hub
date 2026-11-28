import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { CountrySelector } from "./CountrySelector";
import css from "@/styles/pages/site-chrome.css?raw";

const BOOKING_URL = "https://calendly.com/sashi-adler92/30min";
type SitePage = "home" | "about" | "services" | "contact";

export function SiteHeader({ active }: { active?: SitePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{css}</style>
      <header className="nh-site-header">
        <div className="nh-site-header__inner">
          <a className="nh-site-brand" href="/" aria-label="Nurture Hub home">
            <img src="/site-assets/7d2ba851c822f6e9.png" alt="" width="44" height="50" />
            <span>Nurture <b>Hub</b></span>
          </a>
          <button
            className="nh-site-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="nh-site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav
            className={`nh-site-nav${menuOpen ? " nh-site-nav--open" : ""}`}
            id="nh-site-navigation"
            aria-label="Main navigation"
          >
            <a href="/" aria-current={active === "home" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/about-us" aria-current={active === "about" ? "page" : undefined} onClick={() => setMenuOpen(false)}>About</a>
            <a href="/services" aria-current={active === "services" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Services</a>
            <a href="/contact" aria-current={active === "contact" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Contact</a>
            <CountrySelector compact />
          </nav>
          <a className="nh-site-header__cta" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book a clarity call <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="nh-site-footer">
      <div className="nh-site-footer__inner">
        <div className="nh-site-footer__brand">
          <a className="nh-site-brand" href="/" aria-label="Nurture Hub home">
            <img src="/site-assets/7d2ba851c822f6e9.png" alt="" width="38" height="43" />
            <span>Nurture <b>Hub</b></span>
          </a>
          <p>Supporting parents in building stronger, more connected relationships with their children.</p>
        </div>
        <nav className="nh-site-footer__links" aria-label="Footer navigation">
          <strong>Explore</strong>
          <a href="/">Home</a>
          <a href="/about-us">About Sashi</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="nh-site-footer__contact">
          <strong>Get in touch</strong>
          <a href="mailto:connect@nurturehub-sashi.com">connect@nurturehub-sashi.com</a>
          <a href="tel:+919173880167">+91 91738 80167</a>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">Book a free clarity call</a>
        </div>
      </div>
      <div className="nh-site-footer__bottom">
        <span>Made with care for families seeking connection</span>
        <span>© {new Date().getFullYear()} Nurture Hub. All rights reserved.</span>
      </div>
    </footer>
  );
}
