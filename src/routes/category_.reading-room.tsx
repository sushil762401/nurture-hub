import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import capturedCSS from "../styles/pages/category.reading-room.css?raw";

export const Route = createFileRoute("/category_/reading-room")({
  head: () => ({ meta: [{ title: "Reading Room – nurturehub-sashi.in" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US", "style": { "--scrollbar-offset": "15px" } as import("react").CSSProperties }, body: { "className": "archive wp-embed-responsive footer-on-bottom hide-focus-outline \x63ontent-title-style-above \x63ontent-style-boxed kadence-elementor-colors", "data-site-import-popup-incomplete": "document-menu-ownership" } } },
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="site wp-site-blocks [overflow:clip]" id="wrapper">
        <a className={"screen-reader-text [&:focus]:[z-index:100000]"} href="#main">Skip to content</a>
        <ImportedHeader menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} />
        <main className="wrap kt-clear" id="inner-wrap" role="main">
          <section className="entry-hero">
            <div className="entry-hero-container-inner">
              <div className="hero-section-overlay" />
              <div className="hero-container site-container">
                <header className={"entry-header items-center flex-col justify-center [&]:text-center [margin-bottom:0px]"}>
                  <h1>Reading Room</h1>
                </header>
              </div>
            </div>
          </section>
          <div className={"\x63ontent-area"} id="primary">
            <div className={"\x63ontent-container site-container"}>
              <div className="site-main" id="main">
                <ul className={"\x63ontent-wrap kadence-posts-list \x67rid-cols \x67rid-sm-col-2 \x67rid-lg-col-3 [gap:2.5rem]"} id="archive-container">
                  <li className="entry-list-item flex-col">
                    <ImportedArticleEROThe />
                  </li>
                  <li className="entry-list-item flex-col">
                    <ImportedArticleTheParentingMapWorkbook />
                  </li>
                  <li className="entry-list-item flex-col">
                    <ImportedArticleTheParentingMap />
                  </li>
                  <li className="entry-list-item flex-col">
                    <ImportedArticleHealthyScreenHabitsFor />
                  </li>
                  <li className="entry-list-item flex-col">
                    <ImportedArticlePRACTICALGUIDEFORSCREEN />
                  </li>
                  <li className="entry-list-item flex-col">
                    <ImportedArticlePARADIGM />
                  </li>
                  <li className="entry-list-item flex-col">
                    <ImportedArticleTheWholeBrainChild />
                  </li>
                  <li className="entry-list-item flex-col">
                    <ImportedArticleGRATITUDE />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <footer className="site-footer" id="colophon" role="contentinfo">
          <div className="site-footer-wrap">
            <div>
              <div className="site-footer-row-container-inner">
                <div className="site-container">
                  <div className="site-bottom-footer-inner-wrap site-footer-row site-footer-row-columns-1 site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-row gap-x-[30px] justify-center pt-[30px]">
                    <div className={"site-footer-section footer-section-inner-items-1 flex-1 [&]:text-center"}>
                      <div className="footer-widget-area flex-1">
                        <div>
                          <div className="footer-html inner-link-style-normal">
                            <div>
                              <p>© 2026 nurturehub-sashi.in</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className={"popup-drawer popup-drawer-layout-sidepanel [z-index:99999]" + (menuOpen ? " show-drawer active" : "")} id="mobile-drawer" style={menuOpen ? { display: "block", opacity: 1, visibility: "visible" } : undefined} onKeyDown={(e) => { if (e.key === "Escape") setMenuOpen(false); }}>
        <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />
        <div className="drawer-inner flex-col [overflow:auto]">
          <div className="drawer-header justify-end">
            <button className="drawer-toggle" aria-label="Close menu" aria-expanded={menuOpen} value="" onClick={() => setMenuOpen(false)}>{"\n\t\t\t\t\t"}<span className="toggle-close-bar ml-[-0.375em]" />{"\n\t\t\t\t\t"}<span className="toggle-close-bar ml-[-0.375em]" />{"\n\t\t\t\t"}</button>
          </div>
          <div className={"drawer-content \x63ontent-align-left \x63ontent-valign-top"}>
            <div className="site-header-item site-header-item-mobile-navigation items-center [margin-bottom:0px] [margin-right:0px]">
              <nav className="mobile-navigation" id="mobile-site-navigation" role="navigation" aria-label="Primary Mobile">
                <div className="mobile-menu-container drawer-menu-container">
                  <ul className="menu has-collapse-sub-nav" id="mobile-menu">
                    <li className="menu-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="/about-us">About Us</a>
                    </li>
                    <li className="menu-item">
                      <a href="/our-services">Our Service’s</a>
                    </li>
                    <li className="menu-item">
                      <a href="/contact">Contact</a>
                    </li>
                    <li className="menu-item current-menu-item">
                      <a aria-current="page" href="#">Reading Room</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ImportedHeader({ menuOpen, onOpenMenu }: { menuOpen: boolean; onOpenMenu: () => void }) {
  return (
    <header className="[z-index:11]" id="masthead" role="banner" itemType="https://schema.org/WPHeader" itemScope>
      <div id="main-header">
        <div>
          <div>
            <div className="site-header-upper-inner-wrap">
              <div className="site-main-header-wrap site-header-row-container">
                <div className="site-header-row-container-inner">
                  <div className="site-container">
                    <div className="site-main-header-inner-wrap site-header-row grid-cols-[auto_auto]">
                      <div className="site-header-section">
                        <div className="site-header-item items-center [margin-right:0px]">
                          <div className="site-branding">
                            <a className="brand items-center flex-row gap-[1em]" href="/" rel="home">
                              <div className="site-title-wrap">
                                <p className="site-title">nurturehub-sashi.in</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="site-header-section justify-end">
                        <div className="site-header-item items-center [margin-right:0px]">
                          <nav className="main-navigation header-navigation nav--toggle-sub" id="site-navigation" role="navigation" aria-label="Primary">
                            <div className="primary-menu-container header-menu-container">
                              <ul className="menu items-center flex-wrap justify-center" id="primary-menu">
                                <li className="menu-item" id="menu-item-3525">
                                  <a href="/">Home</a>
                                </li>
                                <li className="menu-item" id="menu-item-3513">
                                  <a href="/about-us">About Us</a>
                                </li>
                                <li className="menu-item" id="menu-item-3512">
                                  <a href="/our-services">Our Service’s</a>
                                </li>
                                <li className="menu-item" id="menu-item-4171">
                                  <a href="/contact">Contact</a>
                                </li>
                                <li className="menu-item current-menu-item" id="menu-item-4135">
                                  <a aria-current="page" href="#">Reading Room</a>
                                </li>
                              </ul>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-header">
        <div>
          <div>
            <div className="site-header-upper-inner-wrap">
              <div className="site-main-header-wrap">
                <div className="site-header-row-container-inner">
                  <div className="site-container">
                    <div className="site-main-header-inner-wrap site-header-row grid-cols-[auto_auto]">
                      <div className="site-header-section">
                        <div className="site-header-item items-center [margin-right:0px]">
                          <div className="site-branding">
                            <a className="brand items-center flex-row gap-[1em]" href="/" rel="home">
                              <div className="site-title-wrap">
                                <div className="site-title vs-md-false">nurturehub-sashi.in</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="site-header-section justify-end">
                        <div className="site-header-item items-center [margin-right:0px]">
                          <div className="mobile-toggle-open-container">
                            <button className="menu-toggle-open drawer-toggle menu-toggle-style-default items-center" id="mobile-toggle" aria-label="Open menu" aria-expanded={menuOpen} onClick={onOpenMenu}>
                              <span className="menu-toggle-icon">
                                <span className="kadence-svg-iconset self-center">
                                  <svg className="kadence-svg-icon [overflow:hidden]" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...({ version: "1.1" } as any)}>
                                    <title>Toggle Menu</title>
                                    <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" />
                                  </svg>
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ImportedArticleEROThe() {
  return (
    <article className={"entry \x63ontent-bg loop-entry type-post flex-1"}>
      <div className="entry-content-wrap">
        <header className="entry-header mb-[1em]">
          <div className="entry-taxonomies uppercase">
            <span>
              <a href="#" rel="tag">Reading Room</a>
            </span>
          </div>
          <h2 className="entry-title wrap-break-word">
            <a href="/e-r-o-the-foundation-of-conscious-parenting" rel="bookmark">E + R = O:                                                                           The Foundation of Conscious Parenting</a>
          </h2>
          <div className="entry-meta flex-wrap"><span><span className="meta-label">By</span><span><a className="url fn n" href="/">sashi</a></span></span>					<span>{"\n\t\t\t\t\t\t"}<time className="published whitespace-nowrap" dateTime="2026-06-07T00:41:10+00:00" itemProp="datePublished">June 7, 2026</time><time className="updated whitespace-nowrap" dateTime="2026-06-07T00:41:49+00:00" itemProp="dateModified">June 7, 2026</time>{"\t\t\t\t\t"}</span></div>
        </header>
        <div className="entry-summary">
          <p>The foundation of conscious parenting is taking 100% responsibility.Instead of focusing on changing your child, this formula helps you understand how your response creates your experience as a parent. Core Concept : E + R = O E = Event (What happens)R = Response (How you react)O = Outcome (What you experience) Every outcome in…</p>
        </div>
        <footer className={"[&]:clear-both"}>
          <div>
            <p className="more-link-wrap [margin-bottom:0px]">
              <a className="post-more-link uppercase" href="/e-r-o-the-foundation-of-conscious-parenting">
    				Read More<span className={"screen-reader-text [&:focus]:[z-index:100000]"}> E + R = O:                                                                           The Foundation of Conscious Parenting</span><span className="kadence-svg-iconset svg-baseline self-center ml-[0.5em]"><svg className="kadence-svg-icon [overflow:hidden]" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" {...({ version: "1.1" } as any)}><title>Continue</title><path d="M27 13.953c0 0.141-0.063 0.281-0.156 0.375l-6 5.531c-0.156 0.141-0.359 0.172-0.547 0.094-0.172-0.078-0.297-0.25-0.297-0.453v-3.5h-19.5c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h19.5v-3.5c0-0.203 0.109-0.375 0.297-0.453s0.391-0.047 0.547 0.078l6 5.469c0.094 0.094 0.156 0.219 0.156 0.359v0z" />{"\n\t\t\t\t"}</svg></span>{"\t\t\t"}</a>
            </p>
          </div>
        </footer>
      </div>
    </article>
  );
}

function ImportedArticleTheParentingMapWorkbook() {
  return (
    <article className={"entry \x63ontent-bg loop-entry type-post flex-1"}>
      <div className="entry-content-wrap">
        <header className="entry-header mb-[1em]">
          <div className="entry-taxonomies uppercase">
            <span>
              <a href="#" rel="tag">Reading Room</a>
            </span>
          </div>
          <h2 className="entry-title wrap-break-word">
            <a href="/the-parenting-map-workbook" rel="bookmark">The Parenting Map Workbook</a>
          </h2>
          <div className="entry-meta flex-wrap"><span><span className="meta-label">By</span><span><a className="url fn n" href="/">sashi</a></span></span>					<span>{"\n\t\t\t\t\t\t"}<time className="published whitespace-nowrap" dateTime="2026-06-06T23:54:46+00:00" itemProp="datePublished">June 6, 2026</time><time className="updated whitespace-nowrap" dateTime="2026-06-06T23:55:25+00:00" itemProp="dateModified">June 6, 2026</time>{"\t\t\t\t\t"}</span></div>
        </header>
        <div className="entry-summary">
          <p>1. Introduction to Conscious Parenting Conscious parenting shifts the focus from controlling the child to understanding the self. It is a journey where parenting becomes a mirror for inner growth. Reflection Questions Exercise Write a one-page intention for your parenting journey. 2. Awareness: The Foundation Awareness allows you to pause before reacting. It helps you…</p>
        </div>
        <footer className={"[&]:clear-both"}>
          <div>
            <p className="more-link-wrap [margin-bottom:0px]">
              <a className="post-more-link uppercase" href="/the-parenting-map-workbook">
    				Read More<span className={"screen-reader-text [&:focus]:[z-index:100000]"}> The Parenting Map Workbook</span><span className="kadence-svg-iconset svg-baseline self-center ml-[0.5em]"><svg className="kadence-svg-icon [overflow:hidden]" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" {...({ version: "1.1" } as any)}><title>Continue</title><path d="M27 13.953c0 0.141-0.063 0.281-0.156 0.375l-6 5.531c-0.156 0.141-0.359 0.172-0.547 0.094-0.172-0.078-0.297-0.25-0.297-0.453v-3.5h-19.5c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h19.5v-3.5c0-0.203 0.109-0.375 0.297-0.453s0.391-0.047 0.547 0.078l6 5.469c0.094 0.094 0.156 0.219 0.156 0.359v0z" />{"\n\t\t\t\t"}</svg></span>{"\t\t\t"}</a>
            </p>
          </div>
        </footer>
      </div>
    </article>
  );
}

function ImportedArticleTheParentingMap() {
  return (
    <article className={"entry \x63ontent-bg loop-entry type-post flex-1"}>
      <div className="entry-content-wrap">
        <header className="entry-header mb-[1em]">
          <div className="entry-taxonomies uppercase">
            <span>
              <a href="#" rel="tag">Reading Room</a>
            </span>
          </div>
          <h2 className="entry-title wrap-break-word">
            <a href="/the-parenting-map" rel="bookmark">The Parenting Map</a>
          </h2>
          <div className="entry-meta flex-wrap"><span><span className="meta-label">By</span><span><a className="url fn n" href="/">sashi</a></span></span>					<span>{"\n\t\t\t\t\t\t"}<time className="published whitespace-nowrap" dateTime="2026-06-06T23:51:24+00:00" itemProp="datePublished">June 6, 2026</time><time className="updated whitespace-nowrap" dateTime="2026-06-06T23:52:53+00:00" itemProp="dateModified">June 6, 2026</time>{"\t\t\t\t\t"}</span></div>
        </header>
        <div className="entry-summary">
          <p>Inspired by Dr. Shefali Tsabary The Parenting Map is a transformative approach to raising children by focusing first on the parent’s inner world. Rather than controlling or fixing the child, this philosophy invites parents to become conscious, self-aware, and emotionally present. It views parenting as a journey of personal growth, where the child becomes a…</p>
        </div>
        <footer className={"[&]:clear-both"}>
          <div>
            <p className="more-link-wrap [margin-bottom:0px]">
              <a className="post-more-link uppercase" href="/the-parenting-map">
    				Read More<span className={"screen-reader-text [&:focus]:[z-index:100000]"}> The Parenting Map</span><span className="kadence-svg-iconset svg-baseline self-center ml-[0.5em]"><svg className="kadence-svg-icon [overflow:hidden]" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" {...({ version: "1.1" } as any)}><title>Continue</title><path d="M27 13.953c0 0.141-0.063 0.281-0.156 0.375l-6 5.531c-0.156 0.141-0.359 0.172-0.547 0.094-0.172-0.078-0.297-0.25-0.297-0.453v-3.5h-19.5c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h19.5v-3.5c0-0.203 0.109-0.375 0.297-0.453s0.391-0.047 0.547 0.078l6 5.469c0.094 0.094 0.156 0.219 0.156 0.359v0z" />{"\n\t\t\t\t"}</svg></span>{"\t\t\t"}</a>
            </p>
          </div>
        </footer>
      </div>
    </article>
  );
}

function ImportedArticleHealthyScreenHabitsFor() {
  return (
    <article className={"entry \x63ontent-bg loop-entry type-post flex-1"}>
      <div className="entry-content-wrap">
        <header className="entry-header mb-[1em]">
          <div className="entry-taxonomies uppercase">
            <span>
              <a href="#" rel="tag">Reading Room</a>
            </span>
          </div>
          <h2 className="entry-title wrap-break-word">
            <a href="/healthy-screen-habits-for-families" rel="bookmark">Healthy Screen Habits for Families</a>
          </h2>
          <div className="entry-meta flex-wrap"><span><span className="meta-label">By</span><span><a className="url fn n" href="/">sashi</a></span></span>					<span>{"\n\t\t\t\t\t\t"}<time className="published whitespace-nowrap" dateTime="2026-06-06T03:42:14+00:00" itemProp="datePublished">June 6, 2026</time><time className="updated whitespace-nowrap" dateTime="2026-06-06T03:55:28+00:00" itemProp="dateModified">June 6, 2026</time>{"\t\t\t\t\t"}</span></div>
        </header>
        <div className="entry-summary">
          <p>Healthy screen habits start with intention, not restriction. When families set clear boundaries, choose quality content, and stay involved, screens become a tool,not a struggle. With the right balance, children learn to enjoy technology without it taking over their wellbeing, learning, or connection.Let’s us see how we can approach there screen habits. A) Prioritize Real-Life…</p>
        </div>
        <footer className={"[&]:clear-both"}>
          <div>
            <p className="more-link-wrap [margin-bottom:0px]">
              <a className="post-more-link uppercase" href="/healthy-screen-habits-for-families">
    				Read More<span className={"screen-reader-text [&:focus]:[z-index:100000]"}> Healthy Screen Habits for Families</span><span className="kadence-svg-iconset svg-baseline self-center ml-[0.5em]"><svg className="kadence-svg-icon [overflow:hidden]" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" {...({ version: "1.1" } as any)}><title>Continue</title><path d="M27 13.953c0 0.141-0.063 0.281-0.156 0.375l-6 5.531c-0.156 0.141-0.359 0.172-0.547 0.094-0.172-0.078-0.297-0.25-0.297-0.453v-3.5h-19.5c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h19.5v-3.5c0-0.203 0.109-0.375 0.297-0.453s0.391-0.047 0.547 0.078l6 5.469c0.094 0.094 0.156 0.219 0.156 0.359v0z" />{"\n\t\t\t\t"}</svg></span>{"\t\t\t"}</a>
            </p>
          </div>
        </footer>
      </div>
    </article>
  );
}

function ImportedArticlePRACTICALGUIDEFORSCREEN() {
  return (
    <article className={"entry \x63ontent-bg loop-entry type-post flex-1"}>
      <div className="entry-content-wrap">
        <header className="entry-header mb-[1em]">
          <div className="entry-taxonomies uppercase">
            <span>
              <a href="#" rel="tag">Reading Room</a>
            </span>
          </div>
          <h2 className="entry-title wrap-break-word">
            <a href="/practical-guide-for-screen-time" rel="bookmark">PRACTICAL GUIDE FOR SCREEN TIME</a>
          </h2>
          <div className="entry-meta flex-wrap"><span><span className="meta-label">By</span><span><a className="url fn n" href="/">sashi</a></span></span>					<span>{"\n\t\t\t\t\t\t"}<time className="published whitespace-nowrap" dateTime="2026-06-06T03:04:07+00:00" itemProp="datePublished">June 6, 2026</time><time className="updated whitespace-nowrap" dateTime="2026-06-06T03:04:58+00:00" itemProp="dateModified">June 6, 2026</time>{"\t\t\t\t\t"}</span></div>
        </header>
        <div className="entry-summary">
          <p>In today’s world, screens are everywhere, and digital devices have become a natural part of daily life for both adults and children. They help us learn, connect, and stay entertained. However,alongside these benefits comes an important question. How much is too much, and how do we create balance? This manual is designed to help parents…</p>
        </div>
        <footer className={"[&]:clear-both"}>
          <div>
            <p className="more-link-wrap [margin-bottom:0px]">
              <a className="post-more-link uppercase" href="/practical-guide-for-screen-time">
    				Read More<span className={"screen-reader-text [&:focus]:[z-index:100000]"}> PRACTICAL GUIDE FOR SCREEN TIME</span><span className="kadence-svg-iconset svg-baseline self-center ml-[0.5em]"><svg className="kadence-svg-icon [overflow:hidden]" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" {...({ version: "1.1" } as any)}><title>Continue</title><path d="M27 13.953c0 0.141-0.063 0.281-0.156 0.375l-6 5.531c-0.156 0.141-0.359 0.172-0.547 0.094-0.172-0.078-0.297-0.25-0.297-0.453v-3.5h-19.5c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h19.5v-3.5c0-0.203 0.109-0.375 0.297-0.453s0.391-0.047 0.547 0.078l6 5.469c0.094 0.094 0.156 0.219 0.156 0.359v0z" />{"\n\t\t\t\t"}</svg></span>{"\t\t\t"}</a>
            </p>
          </div>
        </footer>
      </div>
    </article>
  );
}

function ImportedArticlePARADIGM() {
  return (
    <article className={"entry \x63ontent-bg loop-entry type-post flex-1"}>
      <div className="entry-content-wrap">
        <header className="entry-header mb-[1em]">
          <div className="entry-taxonomies uppercase">
            <span>
              <a href="#" rel="tag">Reading Room</a>
            </span>
          </div>
          <h2 className="entry-title wrap-break-word">
            <a href="/paradigm" rel="bookmark">PARADIGM</a>
          </h2>
          <div className="entry-meta flex-wrap"><span><span className="meta-label">By</span><span><a className="url fn n" href="/">sashi</a></span></span>					<span>{"\n\t\t\t\t\t\t"}<time className="published whitespace-nowrap" dateTime="2026-06-05T22:58:12+00:00" itemProp="datePublished">June 5, 2026</time><time className="updated whitespace-nowrap" dateTime="2026-06-05T22:59:04+00:00" itemProp="dateModified">June 5, 2026</time>{"\t\t\t\t\t"}</span></div>
        </header>
        <div className="entry-summary">
          <p>What is a Paradigm? A paradigm is a mental program — a set of beliefs, habits, and patterns stored in the subconscious mind that control how we: Most of these patterns are not consciously chosen.They are formed through: A paradigm is the “lens” through which you see life Why Paradigms Matter We often believe we…</p>
        </div>
        <footer className={"[&]:clear-both"}>
          <div>
            <p className="more-link-wrap [margin-bottom:0px]">
              <a className="post-more-link uppercase" href="/paradigm">
    				Read More<span className={"screen-reader-text [&:focus]:[z-index:100000]"}> PARADIGM</span><span className="kadence-svg-iconset svg-baseline self-center ml-[0.5em]"><svg className="kadence-svg-icon [overflow:hidden]" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" {...({ version: "1.1" } as any)}><title>Continue</title><path d="M27 13.953c0 0.141-0.063 0.281-0.156 0.375l-6 5.531c-0.156 0.141-0.359 0.172-0.547 0.094-0.172-0.078-0.297-0.25-0.297-0.453v-3.5h-19.5c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h19.5v-3.5c0-0.203 0.109-0.375 0.297-0.453s0.391-0.047 0.547 0.078l6 5.469c0.094 0.094 0.156 0.219 0.156 0.359v0z" />{"\n\t\t\t\t"}</svg></span>{"\t\t\t"}</a>
            </p>
          </div>
        </footer>
      </div>
    </article>
  );
}

function ImportedArticleTheWholeBrainChild() {
  return (
    <article className={"entry \x63ontent-bg loop-entry type-post flex-1"}>
      <div className="entry-content-wrap">
        <header className="entry-header mb-[1em]">
          <div className="entry-taxonomies uppercase">
            <span>
              <a href="#" rel="tag">Reading Room</a>
            </span>
          </div>
          <h2 className="entry-title wrap-break-word">
            <a href="/the-whole-brain-child" rel="bookmark">The Whole-Brain Child</a>
          </h2>
          <div className="entry-meta flex-wrap"><span><span className="meta-label">By</span><span><a className="url fn n" href="/">sashi</a></span></span>					<span>{"\n\t\t\t\t\t\t"}<time className="published whitespace-nowrap" dateTime="2026-06-03T05:34:39+00:00" itemProp="datePublished">June 3, 2026</time><time className="updated whitespace-nowrap" dateTime="2026-06-03T05:36:08+00:00" itemProp="dateModified">June 3, 2026</time>{"\t\t\t\t\t"}</span></div>
        </header>
        <div className="entry-summary">
          <p>The Whole-Brain Child blends cutting-edge brain science with simple, everyday parenting strategies. It helps parents understand how a child’s brain develops, why behavior sometimes feels overwhelming, and most importantly, how to respond in ways that build emotional intelligence and resilience. What is happening in the child’s brain? Amygdala (Emotional Brain) Middle Prefrontal Cortex (Thinking Brain)…</p>
        </div>
        <footer className={"[&]:clear-both"}>
          <div>
            <p className="more-link-wrap [margin-bottom:0px]">
              <a className="post-more-link uppercase" href="/the-whole-brain-child">
    				Read More<span className={"screen-reader-text [&:focus]:[z-index:100000]"}> The Whole-Brain Child</span><span className="kadence-svg-iconset svg-baseline self-center ml-[0.5em]"><svg className="kadence-svg-icon [overflow:hidden]" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" {...({ version: "1.1" } as any)}><title>Continue</title><path d="M27 13.953c0 0.141-0.063 0.281-0.156 0.375l-6 5.531c-0.156 0.141-0.359 0.172-0.547 0.094-0.172-0.078-0.297-0.25-0.297-0.453v-3.5h-19.5c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h19.5v-3.5c0-0.203 0.109-0.375 0.297-0.453s0.391-0.047 0.547 0.078l6 5.469c0.094 0.094 0.156 0.219 0.156 0.359v0z" />{"\n\t\t\t\t"}</svg></span>{"\t\t\t"}</a>
            </p>
          </div>
        </footer>
      </div>
    </article>
  );
}

function ImportedArticleGRATITUDE() {
  return (
    <article className={"entry \x63ontent-bg loop-entry type-post flex-1"}>
      <div className="entry-content-wrap">
        <header className="entry-header mb-[1em]">
          <div className="entry-taxonomies uppercase">
            <span>
              <a href="#" rel="tag">Reading Room</a>
            </span>
          </div>
          <h2 className="entry-title wrap-break-word">
            <a href="/gratitude-2" rel="bookmark">GRATITUDE</a>
          </h2>
          <div className="entry-meta flex-wrap"><span><span className="meta-label">By</span><span><a className="url fn n" href="/">sashi</a></span></span>					<span>{"\n\t\t\t\t\t\t"}<time className="published whitespace-nowrap" dateTime="2026-05-25T02:45:29+00:00" itemProp="datePublished">May 25, 2026</time><time className="updated whitespace-nowrap" dateTime="2026-06-03T05:36:19+00:00" itemProp="dateModified">June 3, 2026</time>{"\t\t\t\t\t"}</span></div>
        </header>
        <div className="entry-summary">
          <p>Stop. Look. Go : is a simple and powerful daily gratitude practice that will lead you to experience increased presence, a more expansive perspective, and a great sense of possibility in your daily life. Created by Br.David Steindl- Rast In daily life we often move quickly from one task to another. “STOP” invites us to…</p>
        </div>
        <footer className={"[&]:clear-both"}>
          <div>
            <p className="more-link-wrap [margin-bottom:0px]">
              <a className="post-more-link uppercase" href="/gratitude-2">
    				Read More<span className={"screen-reader-text [&:focus]:[z-index:100000]"}> GRATITUDE</span><span className="kadence-svg-iconset svg-baseline self-center ml-[0.5em]"><svg className="kadence-svg-icon [overflow:hidden]" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" {...({ version: "1.1" } as any)}><title>Continue</title><path d="M27 13.953c0 0.141-0.063 0.281-0.156 0.375l-6 5.531c-0.156 0.141-0.359 0.172-0.547 0.094-0.172-0.078-0.297-0.25-0.297-0.453v-3.5h-19.5c-0.281 0-0.5-0.219-0.5-0.5v-3c0-0.281 0.219-0.5 0.5-0.5h19.5v-3.5c0-0.203 0.109-0.375 0.297-0.453s0.391-0.047 0.547 0.078l6 5.469c0.094 0.094 0.156 0.219 0.156 0.359v0z" />{"\n\t\t\t\t"}</svg></span>{"\t\t\t"}</a>
            </p>
          </div>
        </footer>
      </div>
    </article>
  );
}
