import { useState } from "react";
import { CountrySelector } from "./CountrySelector";
import { WhatsAppCta } from "@/components/WhatsApp";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

/** Site header copied from the imported NurtureHub page, plus the country selector. */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
        <div className="elementor-element elementor-element-bb31f84 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className="elementor-element elementor-widget [align-self:var(--align-self)] [order:var(--order)]">
            <div className="elementor-widget-container">
              <div>
                <div className="elementor elementor-4306" data-elementor-id="4306">
                  <div className="elementor-element elementor-element-32cc406 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                    <div className="elementor-element elementor-element-4e3f7d8 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                      <div className="elementor-element elementor-element-e4d196f elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                        <h2 className="elementor-heading-title elementor-size-default">Nurture <span style={{ color: "rgb(243, 141, 111)" }}>Hub</span></h2>
                      </div>
                      <div className="elementor-element elementor-element-af2b174 elementor-widget__width-initial elementor-widget elementor-widget-image [align-self:var(--align-self)] [order:var(--order)]">
                        <a href="/">
                          <img className={"attachment-large \x73ize-large wp-image-4273"} decoding="async" width="201" height="226" src="/site-assets/7d2ba851c822f6e9.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-da2dcf1 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                      <div className="elementor-element elementor-element-9545550 wpr-main-menu-align-left wpr-main-menu-align--tabletleft wpr-main-menu-align--mobileleft wpr-pointer-underline wpr-pointer-line-fx wpr-pointer-fx-fade wpr-sub-icon-caret-down wpr-sub-menu-fx-fade wpr-nav-menu-bp-mobile wpr-mobile-menu-full-width wpr-sub-divider-yes wpr-mobile-divider-yes elementor-widget elementor-widget-wpr-nav-menu [align-self:var(--align-self)] [order:var(--order)]">
                        <nav className="wpr-nav-menu-container wpr-nav-menu-horizontal">
                          <ul className="wpr-nav-menu" id="menu-1-9545550">
                            <li className="menu-item">
                              <a className="wpr-menu-item wpr-pointer-item" href="/">Home</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-menu-item wpr-pointer-item" href="/about-us">About Us</a>
                            </li>
                            <li className="menu-item current-menu-item current_page_item">
                              <a className="wpr-menu-item wpr-pointer-item wpr-active-menu-item" aria-current="page" href="/services">Our Service’s</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-menu-item wpr-pointer-item" href="/contact">Contact</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-menu-item wpr-pointer-item" href="/category/reading-room">Reading Room</a>
                            </li>
                            <li className="menu-item nh-country-li">
                              <CountrySelector />
                            </li>
                          </ul>
                        </nav>
                        <nav className="wpr-mobile-nav-menu-container">
                          <div className={"wpr-mobile-toggle-wrap [&]:text-center"}>
                            <div className={"wpr-mobile-toggle [&]:text-center [cursor:pointer]"} role="button" tabIndex={0} aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setMenuOpen((o) => !o); } if (e.key === "Escape") setMenuOpen(false); }}>
                              <span className="wpr-mobile-toggle-line mb-[4px]" />
                              <span className="wpr-mobile-toggle-line mb-[4px]" />
                              <span className="wpr-mobile-toggle-line [margin-bottom:0px]!" />
                            </div>
                          </div>
                          <ul className={"wpr-mobile-nav-menu [&]:text-center [z-index:9999]"} style={{ display: menuOpen ? "block" : "none", width: "100vw", position: "absolute", right: "-20px", left: "auto" }} id="mobile-menu-2-9545550" data-site-import-responsive="225">
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/">Home</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/about-us">About Us</a>
                            </li>
                            <li className="menu-item current-menu-item current_page_item">
                              <a className="wpr-mobile-menu-item wpr-active-menu-item pl-[10px] pr-[10px] pt-[10px]" aria-current="page" href="/services">Our Service’s</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/contact">Contact</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/category/reading-room">Reading Room</a>
                            </li>
                            <li className="menu-item nh-country-li-mobile">
                              <CountrySelector compact />
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

/** Site footer copied from the imported NurtureHub page. */
export function SiteFooter() {
  return (
    <>
        <div className="elementor-element elementor-element-830f4ca e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className="elementor-element elementor-widget [align-self:var(--align-self)] [order:var(--order)]">
            <div className="elementor-widget-container">
              <div>
                <div className="elementor elementor-3577" data-elementor-id="3577">
                  <div className="elementor-element elementor-element-ce45922 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                    <div className="elementor-element elementor-element-27afb3e e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                      <div className="elementor-element elementor-element-f67f4fc e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                        <div className="elementor-element elementor-element-9dfd266 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                          <h2 className="elementor-heading-title elementor-size-default">Nurture <span style={{ color: "rgb(243, 141, 111)" }}>Hub</span></h2>
                        </div>
                        <div className="elementor-element elementor-element-e39b4c9 elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
                          <p>Supporting parents in building strong, emotionally connected relationships with their children.</p>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-9da428d e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                        <div className="elementor-element elementor-element-09a350d elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                          <h2 className="elementor-heading-title elementor-size-default">Quick Links</h2>
                        </div>
                        <div className="elementor-element elementor-element-cebb40b elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                          <h2 className="elementor-heading-title elementor-size-default">
                            <a href="/">Home</a>
                          </h2>
                        </div>
                        <div className="elementor-element elementor-element-0da1dca elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                          <h2 className="elementor-heading-title elementor-size-default">
                            <a href="/about-us">About Us</a>
                          </h2>
                        </div>
                        <div className="elementor-element elementor-element-d27a392 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                          <h2 className="elementor-heading-title elementor-size-default">
                            <a href="/services">Our Services</a>
                          </h2>
                        </div>
                        <div className="elementor-element elementor-element-c5f8740 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                          <h2 className="elementor-heading-title elementor-size-default">Reading Room</h2>
                        </div>
                        <div className="elementor-element elementor-element-f98f92e elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                          <h2 className="elementor-heading-title elementor-size-default">
                            <a href="/contact-us">Book a Call</a>
                          </h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-92455f6 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                        <div className="elementor-element elementor-element-9d8a65f elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                          <h2 className="elementor-heading-title elementor-size-default">Get in Touch</h2>
                        </div>
                        <div className="elementor-element elementor-element-b1c7434 elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
                          <p>Ready to begin your journey? Book a free 30-minute discovery call.</p>
                        </div>
                        <div className={"elementor-element elementor-element-6c3e7d1 elementor-align-left infinite-pulse-01 elementor-widget elementor-widget-button [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                          <a className={"elementor-button elementor-size-sm [&]:text-center [fill:rgb(255,255,255)] [word-spacing:1px]"} href="/contact-us">
                            <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                              <span className="elementor-button-text [text-decoration:inherit]">Connect Today</span>
                            </span>
                          </a>
                        </div>
                        <div className="elementor-element elementor-widget [align-self:var(--align-self)] [order:var(--order)]">
                          <WhatsAppCta small label="WhatsApp" message={WHATSAPP_MESSAGES.general} />
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-58b8789 elementor-widget-divider--view-line elementor-widget elementor-widget-divider [align-self:var(--align-self)] [order:var(--order)]">
                      <div className={"elementor-divider [&]:text-center"}>
                        <span className="elementor-divider-separator [direction:ltr]">{"\n\t\t\t\t\t\t"}</span>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-becb149 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                      <div className="elementor-element elementor-element-62cd57f elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
                        <p>Made with 🧡 for families seeking connection</p>
                        <p>© 2026 Nurture Hub. All rights reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
