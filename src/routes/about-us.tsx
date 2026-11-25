import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import capturedCSS from "../styles/pages/about-us.css?raw";

export const Route = createFileRoute("/about-us")({
  head: () => ({ meta: [{ title: "About Us – nurturehub-sashi.in" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US", "style": { "--scrollbar-offset": "15px" } as import("react").CSSProperties }, body: { "className": "page footer-on-bottom hide-focus-outline \x63ontent-title-style-above \x63ontent-style-boxed kadence-elementor-colors", "data-elementor-device-mode": "desktop" } } },
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="elementor elementor-3213" data-elementor-id="3213">
        <div className="elementor-element elementor-element-84d4d49 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
          <div className="elementor-element elementor-widget elementor-widget-template [align-self:var(--align-self)] [order:var(--order)]">
            <div className="elementor-widget-container">
              <div>
                <div className="elementor elementor-4306" data-elementor-id="4306">
                  <div className="elementor-element elementor-element-32cc406 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
                    <div className="elementor-element elementor-element-4e3f7d8 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
                      <div className="elementor-element elementor-element-e4d196f elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                        <h2 className="elementor-heading-title elementor-size-default">Nurture <span style={{ color: "rgb(243, 141, 111)" }}>Hub</span></h2>
                      </div>
                      <div className={"elementor-element elementor-element-af2b174 elementor-widget__width-initial elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                        <a href="/">
                          <img className={"attachment-large \x73ize-large wp-image-4273 align-middle"} decoding="async" width="201" height="226" src="/site-assets/7d2ba851c822f6e9.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-da2dcf1 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
                      <div className="elementor-element elementor-element-9545550 wpr-main-menu-align-left wpr-main-menu-align--tabletleft wpr-main-menu-align--mobileleft wpr-pointer-underline wpr-pointer-line-fx wpr-pointer-fx-fade wpr-sub-icon-caret-down wpr-sub-menu-fx-fade wpr-nav-menu-bp-mobile wpr-mobile-menu-full-width wpr-sub-divider-yes wpr-mobile-divider-yes elementor-widget elementor-widget-wpr-nav-menu [align-self:var(--align-self)] [order:var(--order)]">
                        <nav className="wpr-nav-menu-container wpr-nav-menu-horizontal">
                          <ul className="wpr-nav-menu" id="menu-1-9545550">
                            <li className="menu-item">
                              <a className="wpr-menu-item wpr-pointer-item" href="/">Home</a>
                            </li>
                            <li className="menu-item current-menu-item current_page_item">
                              <a className="wpr-menu-item wpr-pointer-item wpr-active-menu-item" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-menu-item wpr-pointer-item" href="/our-services">Our Service’s</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-menu-item wpr-pointer-item" href="/contact">Contact</a>
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
                          <ul className={"wpr-mobile-nav-menu [&]:text-center [z-index:9999]"} style={{ display: menuOpen ? "block" : "none", width: "100vw", position: "absolute", right: "-20px", left: "auto" }} id="mobile-menu-2-9545550" data-site-import-responsive="198">
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/">Home</a>
                            </li>
                            <li className="menu-item current-menu-item current_page_item">
                              <a className="wpr-mobile-menu-item wpr-active-menu-item pl-[10px] pr-[10px] pt-[10px]" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/our-services">Our Service’s</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/contact">Contact</a>
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
        <div className="elementor-element elementor-element-925907c e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-7516846 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Meet Your Coach</h2>
          </div>
          <div className={"elementor-element elementor-element-6d224c6 elementor-widget__width-initial elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Over 20 years of experience helping families build strong, emotionally connected relationships</h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-b9dbd61 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
          <div className="elementor-element elementor-element-a8395db e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
            <div className={"elementor-element elementor-element-3173ba1 elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
              <img className={"attachment-large \x73ize-large wp-image-3253 align-middle"} fetchPriority="high" decoding="async" width="764" height="1024" src="/site-assets/2f7aa76b546dd8f2.jpg" alt="" srcSet="/site-assets/2f7aa76b546dd8f2.jpg 764w, /site-assets/1b1f1ccd05cd176b.jpg 224w, /site-assets/ff226bc702a74071.jpg 768w, /site-assets/c12a40cde5d687e2.jpg 1146w, /site-assets/673fd918d57e508a.jpg 1528w, /site-assets/174e1beb55fab7a5.jpg 1600w" sizes="(max-width: 764px) 100vw, 764px" />
            </div>
          </div>
          <div className="elementor-element elementor-element-c864e2e e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
            <div className="elementor-element elementor-element-5af722d elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
              <h2 className="elementor-heading-title elementor-size-default">Hi, I am Sashi K</h2>
            </div>
            <div className="elementor-element elementor-element-0bfba71 elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list [align-self:var(--align-self)] [order:var(--order)]">
              <ul className="elementor-icon-list-items">
                <li className="elementor-icon-list-item"><span className="elementor-icon-list-icon [text-align:var(--e-icon-list-icon-align)]">{"\n\t\t\t\t\t\t\t"}<svg className="e-font-icon-svg [fill:rgb(74,97,74)]" aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" /></svg>{"\t\t\t\t\t\t"}</span><span className="elementor-icon-list-text self-center">Grad Diploma in Psychology, Monash University, Australia, BSc University of Alberta, Canada</span></li>
              </ul>
            </div>
            <div className="elementor-element elementor-element-8b718da elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
              <p>With over 20 years of experience working with families and children, I support parents in building strong, emotionally connected relationships. My work across Singapore, Malaysia, and Nepal has helped families grow through understanding behavior, emotions, and conscious parenting.</p>
              <p>I guide parents to shift from control to connection, helping them respond with calm, clarity, and confidence, so they can raise secure and emotionally strong children.</p>
            </div>
            <div className="elementor-element elementor-element-3854ce4 elementor-widget-mobile__width-initial elementor-mobile-align-center elementor-widget elementor-widget-button [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-center">
              <a className={"elementor-button elementor-size-sm [&]:text-center [fill:rgb(255,255,255)]"} href="https://calendly.com/sashi-adler92/30min">
                <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                  <span className="elementor-button-text [text-decoration:inherit]">Book a Free Discovery Call</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-2ac2abe e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-41894c8 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">My Story, My Why</h2>
          </div>
          <div className="elementor-element elementor-element-5ff3bc8 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
            <div className="elementor-element elementor-element-09304cc elementor-widget__width-initial elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
              <p>I wasn’t always the parent I am today.</p>
              <p>Like many, I believed control meant safety and strictness meant love. I followed the patterns I had grown up with, trusting they were right.</p>
            </div>
            <div className="elementor-element elementor-element-74d60c6 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
              <div className={"elementor-element elementor-element-d6fc078 elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <img className={"attachment-full \x73ize-full wp-image-3814 align-middle"} decoding="async" width="612" height="402" src="/site-assets/9939e32d45a868b9.jpg" alt="" srcSet="/site-assets/9939e32d45a868b9.jpg 612w, /site-assets/28882bfbbe6cb00a.jpg 300w" sizes="(max-width: 612px) 100vw, 612px" />
              </div>
              <div className="elementor-element elementor-element-eca5337 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-6c872a4 elementor-widget__width-initial elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-center">
                  <h2 className="elementor-heading-title elementor-size-default">I didn’t have the words, but with time I knew something was missing.  
      Our connection was slowly fading.”.
      </h2>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-ed74868 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
              <div className={"elementor-element elementor-element-b875483 elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <img className={"attachment-full \x73ize-full wp-image-3815 align-middle"} loading="lazy" decoding="async" width="2560" height="1707" src="/site-assets/f6ac1667411bce2d.jpg" alt="" srcSet="/site-assets/f6ac1667411bce2d.jpg 2560w, /site-assets/7cb5d9751e53153d.jpg 300w, /site-assets/ef0475a90a29d301.jpg 1024w, /site-assets/28ed49c8ccd30d48.jpg 768w, /site-assets/b4f8765b6c37476f.jpg 1536w, /site-assets/8463d86fe5bb5a81.jpg 2048w" sizes="(max-width: 2560px) 100vw, 2560px" />
              </div>
              <div className="elementor-element elementor-element-d19aae4 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-9ba6e2f elementor-widget__width-initial elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-center">
                  <h2 className="elementor-heading-title elementor-size-default capitalize">That was my turning point. That discomfort changed everything. </h2>
                </div>
                <div className="elementor-element elementor-element-01c4991 elementor-widget__width-initial elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-start">
                  <p><b>I realized:</b><br />Nothing was wrong with me as a parent.<br />I just needed awareness… and support. I moved from Control to Connection</p>
                  <p>
                    <b>I  replaced :</b>
                  </p>
                  <ul>
                    <li>Control with Connection</li>
                    <li>Fear with Curiosity</li>
                    <li>Judgement with Understanding</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-f830fb4 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
              <div className="elementor-shape elementor-shape-top [direction:ltr] [overflow:hidden]" aria-hidden="true" data-negative="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                  <path className="elementor-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" />
                  <path className="elementor-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" />
                  <path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z" />
                </svg>
              </div>
              <div className={"elementor-element elementor-element-460f264 elementor-widget elementor-widget-text-editor [&]:text-center capitalize [align-self:var(--align-self)] [order:var(--order)]"}>
                <p>
                  <strong>Today, I help parents experience this shift so that their  children feel</strong>
                </p>
                <p>
                  <strong>safe, seen, and deeply connected</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-e23eb39 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-9f4062d elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Professional Background</h2>
          </div>
          <div className="elementor-element elementor-element-aabb1e0 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
            <div className="elementor-element elementor-element-547a9c0 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-c7b30a4 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-6334f1d elementor-view-default elementor-widget elementor-widget-icon [align-self:var(--align-self)] [order:var(--order)]">
                  <div className={"[&]:text-center"}>
                    <div className={"elementor-icon [&]:text-center"}>
                      <i className="icon icon-graduation-hat" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-b7c05c3 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                <h2 className="elementor-heading-title elementor-size-default">Education</h2>
              </div>
              <div className={"elementor-element elementor-element-c1da496 elementor-widget elementor-widget-text-editor [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <p>Grad Diploma in Psychology, Monash University, Australia,<br />BSc University of Alberta, Canada</p>
              </div>
            </div>
            <div className="elementor-element elementor-element-c02a9ba e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-06319ff e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-1135be5 elementor-view-default elementor-widget elementor-widget-icon [align-self:var(--align-self)] [order:var(--order)]">
                  <div className={"[&]:text-center"}>
                    <div className={"elementor-icon [&]:text-center"}>
                      <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-2cd4efc elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                <h2 className="elementor-heading-title elementor-size-default">Experience</h2>
              </div>
              <div className={"elementor-element elementor-element-e9f294a elementor-widget elementor-widget-text-editor [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <p>Over 20 years working with families and children in conscious parenting</p>
              </div>
            </div>
            <div className="elementor-element elementor-element-c920a61 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-af66a3a e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-548950e elementor-view-default elementor-widget elementor-widget-icon [align-self:var(--align-self)] [order:var(--order)]">
                  <div className={"[&]:text-center"}>
                    <div className={"elementor-icon [&]:text-center"}>
                      <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-866ecfe elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                <h2 className="elementor-heading-title elementor-size-default">Global Reach</h2>
              </div>
              <div className={"elementor-element elementor-element-6f1163e elementor-widget elementor-widget-text-editor [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <p>Supporting families across Singapore, Malaysia, and Nepal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-8210667 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-639c52a elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Ready to Begin Your Journey?</h2>
          </div>
          <div className={"elementor-element elementor-element-01ac564 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Let's connect gently. Share a little about your family, and let's explore how I can support you.</h2>
          </div>
          <div className={"elementor-element elementor-element-efb2cc2 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Supporting Parents Globally through Online Sessions</h2>
          </div>
          <div className="elementor-element elementor-element-6298806 elementor-widget elementor-widget-button [align-self:var(--align-self)] [order:var(--order)]">
            <a className={"elementor-button elementor-size-sm [&]:text-center [fill:rgb(71,93,71)]"} href="https://calendly.com/sashi-adler92/30min">
              <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                <span className="elementor-button-text [text-decoration:inherit]">Book a 30-Min Free Discovery Call</span>
              </span>
            </a>
          </div>
        </div>
        <div className="elementor-element elementor-element-576c86a e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
          <div className="bdt-element-link elementor-element elementor-element-bfdaa82 elementor-widget elementor-widget-template [align-self:var(--align-self)] [order:var(--order)] [cursor:pointer]">
            <div className="elementor-widget-container">
              <div>
                <div className="elementor elementor-3577" data-elementor-id="3577">
                  <div className="elementor-element elementor-element-ce45922 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
                    <div className="elementor-element elementor-element-27afb3e e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
                      <div className="elementor-element elementor-element-f67f4fc e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
                        <div className="elementor-element elementor-element-9dfd266 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                          <h2 className="elementor-heading-title elementor-size-default">Nurture <span style={{ color: "rgb(243, 141, 111)" }}>Hub</span></h2>
                        </div>
                        <div className="elementor-element elementor-element-e39b4c9 elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
                          <p>Supporting parents in building strong, emotionally connected relationships with their children.</p>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-9da428d e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
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
                            <a href="#">About Us</a>
                          </h2>
                        </div>
                        <div className="elementor-element elementor-element-d27a392 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                          <h2 className="elementor-heading-title elementor-size-default">
                            <a href="/our-services">Our Services</a>
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
                      <div className="elementor-element elementor-element-92455f6 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
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
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-58b8789 elementor-widget-divider--view-line elementor-widget elementor-widget-divider [align-self:var(--align-self)] [order:var(--order)]">
                      <div className={"elementor-divider [&]:text-center"}>
                        <span className="elementor-divider-separator [direction:ltr]">{"\n\t\t\t\t\t\t"}</span>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-becb149 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [z-index:var(--z-index)]">
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
      <span className="elementor-screen-only" id="elementor-device-mode" />
      <svg style={{ display: "none" }} />
    </>
  );
}
