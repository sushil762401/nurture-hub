import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import capturedCSS from "../styles/pages/contact.css?raw";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact – nurturehub-sashi.in" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US", "style": { "--scrollbar-offset": "15px" } as import("react").CSSProperties }, body: { "className": "page footer-on-bottom hide-focus-outline \x63ontent-title-style-above \x63ontent-style-boxed kadence-elementor-colors", "data-elementor-device-mode": "desktop" } } },
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="elementor elementor-4166" data-elementor-id="4166">
        <div className="elementor-element elementor-element-aece91b e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className="elementor-element elementor-widget [align-self:var(--align-self)] [order:var(--order)]">
            <div className="elementor-widget-container">
              <div>
                <div className="elementor elementor-4306" data-elementor-id="4306">
                  <div className="elementor-element elementor-element-32cc406 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                    <div className="elementor-element elementor-element-4e3f7d8 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                      <div className="elementor-element elementor-element-e4d196f elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                        <h2 className="elementor-heading-title elementor-size-default">Nurture <span style={{ color: "rgb(243, 141, 111)" }}>Hub</span></h2>
                      </div>
                      <div className={"elementor-element elementor-element-af2b174 elementor-widget__width-initial elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                        <a href="/">
                          <img className={"attachment-large \x73ize-large wp-image-4273 align-middle"} decoding="async" width="201" height="226" src="/site-assets/7d2ba851c822f6e9.png" alt="" />
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
                            <li className="menu-item">
                              <a className="wpr-menu-item wpr-pointer-item" href="/services">Our Service’s</a>
                            </li>
                            <li className="menu-item current-menu-item current_page_item">
                              <a className="wpr-menu-item wpr-pointer-item wpr-active-menu-item" aria-current="page" href="#">Contact</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-menu-item wpr-pointer-item" href="/category/reading-room">Reading Room</a>
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
                          <ul className={"wpr-mobile-nav-menu [&]:text-center [z-index:9999]"} style={{ display: menuOpen ? "block" : "none", width: "100vw", position: "absolute", right: "-20px", left: "auto" }} id="mobile-menu-2-9545550" data-site-import-responsive="129">
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/">Home</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/about-us">About Us</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/services">Our Service’s</a>
                            </li>
                            <li className="menu-item current-menu-item current_page_item">
                              <a className="wpr-mobile-menu-item wpr-active-menu-item pl-[10px] pr-[10px] pt-[10px]" aria-current="page" href="#">Contact</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/category/reading-room">Reading Room</a>
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
        <div className="elementor-element elementor-element-76c470f e-flex e-con-boxed e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:initial] [z-index:var(--z-index)]">
          <div className="e-con-inner self-auto [align-content:var(--align-content)] [align-items:var(--align-items)] [gap:var(--row-gap)_var(--column-gap)] [justify-content:var(--justify-content)] [text-align:var(--text-align)]">
            <div className="elementor-element elementor-element-706b604 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className={"elementor-element elementor-element-a848d8c elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <img className={"attachment-full \x73ize-full wp-image-4207 align-middle"} fetchPriority="high" decoding="async" width="1822" height="2560" src="/site-assets/75b841cd9289417a.jpg" alt="" srcSet="/site-assets/75b841cd9289417a.jpg 1822w, /site-assets/657c94d7a10f4569.jpg 214w, /site-assets/6fd2712252f5c71b.jpg 729w, /site-assets/4560b4f523872950.jpg 768w, /site-assets/8ebca20eb643e8d0.jpg 1093w, /site-assets/e4731bf5a4ac14aa.jpg 1458w" sizes="(max-width: 1822px) 100vw, 1822px" />
              </div>
              <div className="elementor-element elementor-element-6913350 elementor-widget elementor-widget-heading text-start [align-self:var(--align-self)] [order:var(--order)]">
                <h2 className="elementor-heading-title elementor-size-default">Sashi Krishnan</h2>
              </div>
              <div className="elementor-element elementor-element-819fb50 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-9931da2 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                  <h2 className="elementor-heading-title elementor-size-default">Contact Info</h2>
                </div>
                <div className="elementor-element elementor-element-d907787 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                  <h2 className="elementor-heading-title elementor-size-default">
                    <b>Email:</b>
                    <br />
                    <small>connect@nurturehub-sashi.com</small>
                  </h2>
                </div>
                <div className="elementor-element elementor-element-bcc9374 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                  <h2 className="elementor-heading-title elementor-size-default">
                    <b>Phone:</b>
                    <br />
                    <small>+91 9173880167</small>
                  </h2>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-b5931b9 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-2ff1d80 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                <h2 className="elementor-heading-title elementor-size-default">Share Your Enquiry</h2>
              </div>
              <div className="elementor-element elementor-element-9e49cb7 elementor-button-align-stretch elementor-widget elementor-widget-form [align-self:var(--align-self)] [order:var(--order)]">
                <form className="elementor-form" method="post" name="New Form"><input type="hidden" name="post_id" defaultValue="4166" /><input type="hidden" name="form_id" defaultValue="9e49cb7" /><input type="hidden" name="referer_title" defaultValue="Contact" /><input type="hidden" name="queried_id" defaultValue="4166" /><div className="elementor-form-fields-wrapper elementor-labels-above flex-wrap mb-[-10px] ml-[calc(-5px)] mr-[calc(-5px)]"><div className={"elementor-field-group elementor-column elementor-col-100 [&]:items-center flex-wrap mb-[10px] pl-[calc(5px)] pr-[calc(5px)]"}><label className="elementor-field-label [cursor:pointer]" htmlFor="form-field-name">
      								First Name							</label><input className="elementor-field elementor-size-sm elementor-field-textual grow align-middle" type="text" name="form_fields[name]" id="form-field-name" placeholder="First Name" required {...({ size: "1" } as any)} /></div><div className={"elementor-field-group elementor-column elementor-col-100 [&]:items-center flex-wrap mb-[10px] pl-[calc(5px)] pr-[calc(5px)]"}><label className="elementor-field-label [cursor:pointer]" htmlFor="form-field-name">
      								Last Name							</label><input className="elementor-field elementor-size-sm elementor-field-textual grow align-middle" type="text" name="form_fields[name]" id="form-field-name" placeholder="Last Name" {...({ size: "1" } as any)} /></div><div className={"elementor-field-group elementor-column elementor-col-100 [&]:items-center flex-wrap mb-[10px] pl-[calc(5px)] pr-[calc(5px)]"}><label className="elementor-field-label [cursor:pointer]" htmlFor="form-field-name">
      								Phone No.							</label><input className="elementor-field elementor-size-sm elementor-field-textual grow align-middle" type="number" name="form_fields[name]" id="form-field-name" placeholder="Phone No." required min="" max="" /></div><div className={"elementor-field-group elementor-column elementor-col-100 [&]:items-center flex-wrap mb-[10px] pl-[calc(5px)] pr-[calc(5px)]"}><label className="elementor-field-label [cursor:pointer]" htmlFor="form-field-email">
      								Email							</label><input className="elementor-field elementor-size-sm elementor-field-textual grow align-middle" type="email" name="form_fields[email]" id="form-field-email" placeholder="Email" required {...({ size: "1" } as any)} /></div><div className={"elementor-field-group elementor-column elementor-col-100 [&]:items-center flex-wrap mb-[10px] pl-[calc(5px)] pr-[calc(5px)]"}><label className="elementor-field-label [cursor:pointer]" htmlFor="form-field-message">
      								Message							</label><textarea className="elementor-field-textual elementor-field elementor-size-sm grow align-middle [overflow:auto]" name="form_fields[message]" id="form-field-message" rows={4} placeholder="Message" />				</div><div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons items-end flex-wrap mb-[10px] pl-[calc(5px)] pr-[calc(5px)]"><button className={"elementor-button elementor-size-sm [&]:text-center [flex-basis:100%]"} type="submit">{"\n\t\t\t\t\t\t"}<span className={"elementor-button-content-wrapper [&]:items-center flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>{"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"}<span className="elementor-button-text whitespace-normal [text-decoration:inherit]">Send</span>{"\n\t\t\t\t\t\t\t\t\t\t\t\t\t"}</span>{"\n\t\t\t\t\t"}</button></div></div></form>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-13162fd e-flex e-con-boxed e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:initial] [z-index:var(--z-index)]">
          <div className="e-con-inner self-auto [align-content:var(--align-content)] [align-items:var(--align-items)] [gap:var(--row-gap)_var(--column-gap)] [justify-content:var(--justify-content)] [text-align:var(--text-align)]">
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
                            <a className={"elementor-button elementor-size-sm [&]:text-center [word-spacing:1px]"} href="/contact-us">
                              <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                                <span className="elementor-button-text [text-decoration:inherit]">Connect Today</span>
                              </span>
                            </a>
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
        </div>
      </div>
      <span className="elementor-screen-only" id="elementor-device-mode" />
      <svg className="[overflow:hidden]" style={{ display: "none" }} />
    </>
  );
}
