import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import capturedCSS from "../styles/pages/index.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "nurturehub-sashi.in" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US", "style": { "--scrollbar-offset": "15px" } as import("react").CSSProperties }, body: { "className": "page footer-on-bottom hide-focus-outline \x63ontent-title-style-above \x63ontent-style-boxed kadence-elementor-colors", "data-elementor-device-mode": "desktop", "data-site-import-responsive-incomplete": "class-range-budget" } } },
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="elementor elementor-2887" data-elementor-id="2887">
        <div className="elementor-element elementor-element-566f3fc e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className="elementor-element elementor-widget elementor-widget-template [align-self:var(--align-self)] [order:var(--order)]">
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
                            <li className="menu-item current-menu-item current_page_item">
                              <a className="wpr-menu-item wpr-pointer-item wpr-active-menu-item" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-menu-item wpr-pointer-item" href="/about-us">About Us</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-menu-item wpr-pointer-item" href="/services">Our Service’s</a>
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
                          <ul className={"wpr-mobile-nav-menu [&]:text-center [z-index:9999]"} style={{ display: menuOpen ? "block" : "none", width: "100vw", position: "absolute", right: "-20px", left: "auto" }} id="mobile-menu-2-9545550" data-site-import-responsive="347">
                            <li className="menu-item current-menu-item current_page_item">
                              <a className="wpr-mobile-menu-item wpr-active-menu-item pl-[10px] pr-[10px] pt-[10px]" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/about-us">About Us</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/services">Our Service’s</a>
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
        <div className="elementor-element elementor-element-661a96a e-con-full e-flex e-con e-parent e-lazyloaded animated slideInDown [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className="elementor-element elementor-element-fa9b95b e-flex e-con-boxed e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:initial] [z-index:var(--z-index)]">
            <div className="e-con-inner self-auto [align-content:var(--align-content)] [align-items:var(--align-items)] [gap:var(--row-gap)_var(--column-gap)] [justify-content:var(--justify-content)] [text-align:var(--text-align)]">
              <div className="elementor-element elementor-element-46f6106 elementor-widget__width-initial elementor-widget elementor-widget-heading text-start [align-self:var(--align-self)] [order:var(--order)]">
                <h2 className="elementor-heading-title elementor-size-default">Calm Parenting Starts <span style={{ color: "rgb(11, 189, 0)" }}>With You</span></h2>
              </div>
              <div className="elementor-element elementor-element-c984132 elementor-widget elementor-widget-text-editor text-start [align-self:var(--align-self)] [order:var(--order)]">
                <p>Learn how to communicate better, handle emotions calmly, and build a deeper connection with your child.</p>
              </div>
              <div className="elementor-element elementor-element-6118ee5 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-3c4c8d6 elementor-widget-mobile__width-initial infinite-bounce elementor-widget elementor-widget-button [align-self:var(--align-self)] [order:var(--order)]">
                  <a className={"elementor-button elementor-size-sm [&]:text-center [fill:rgb(255,255,255)]"} href="https://calendly.com/sashi-adler92/30min">
                    <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                      <span className="elementor-button-text [text-decoration:inherit]">
                        <b>Reach Out Today</b>
                        <br />
                        <small>For a 30-minute Free Discovery Call</small>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="elementor-element elementor-element-62b5499 elementor-widget-mobile__width-initial elementor-widget elementor-widget-button [align-self:var(--align-self)] [order:var(--order)]">
                  <a className={"elementor-button elementor-size-sm [&]:text-center [fill:rgb(74,97,74)]"} href="/about-us">
                    <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                      <span className="elementor-button-text [text-decoration:inherit]">Learn More</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-7a39ef2 e-flex e-con-boxed e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:initial] [z-index:var(--z-index)]">
            <div className="e-con-inner self-auto [align-content:var(--align-content)] [align-items:var(--align-items)] [gap:var(--row-gap)_var(--column-gap)] [justify-content:var(--justify-content)] [text-align:var(--text-align)]">
              <div className={"elementor-element elementor-element-988a291 elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <img className={"attachment-full \x73ize-full wp-image-3955 align-middle"} fetchPriority="high" decoding="async" width="1707" height="2560" src="/site-assets/3a142934fe413ab0.png" alt="" srcSet="/site-assets/3a142934fe413ab0.png 1707w, /site-assets/3cc6fd8bc0fd0f02.png 200w, /site-assets/357c783e8c383d1b.png 683w, /site-assets/5c879960e91d747f.png 768w, /site-assets/c843721c65357a4f.png 1024w, /site-assets/a1f9cb1bda5ab6ef.png 1365w" sizes="(max-width: 1707px) 100vw, 1707px" />
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-2a00279 e-flex e-con-boxed e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:initial] [z-index:var(--z-index)]">
          <div className="e-con-inner self-auto [align-content:var(--align-content)] [align-items:var(--align-items)] [gap:var(--row-gap)_var(--column-gap)] [justify-content:var(--justify-content)] [text-align:var(--text-align)]">
            <div className={"elementor-element elementor-element-7d9c1ea elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
              <h2 className="elementor-heading-title elementor-size-default">Why Nurture Hub</h2>
            </div>
            <div className={"elementor-element elementor-element-a1794fe elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
              <h2 className="elementor-heading-title elementor-size-default">I understand the journey you're on because I've walked it myself.</h2>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-4416dc7 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className="elementor-element elementor-element-be70045 e-con-full e-flex e-con animated slideInRight [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
            <div className="elementor-element elementor-element-276aaff e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-63410df e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-796d0cf elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                  <h2 className="elementor-heading-title elementor-size-default">THE POWER OF PRESENCE</h2>
                </div>
                <div className="elementor-element elementor-element-874a386 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-center">
                  <h2 className="elementor-heading-title elementor-size-default">Not through perfection, but through awareness compassion, and intentional presence.</h2>
                </div>
              </div>
              <div className={"elementor-element elementor-element-07c01fc elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <img className={"attachment-full \x73ize-full wp-image-3609 align-middle"} decoding="async" width="403" height="386" src="/site-assets/c5f2bbaeb6a61f0b.png" alt="" srcSet="/site-assets/c5f2bbaeb6a61f0b.png 403w, /site-assets/db71edd9ed433f32.png 300w" sizes="(max-width: 403px) 100vw, 403px" />
              </div>
            </div>
            <div className="elementor-element elementor-element-1dbc5f2 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-7033bac e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-480b981 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                  <h2 className="elementor-heading-title elementor-size-default">THE SAFE SPACE</h2>
                </div>
                <div className="elementor-element elementor-element-0108ae4 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-center">
                  <h2 className="elementor-heading-title elementor-size-default">With awareness and support, parents become the anchor their children need.</h2>
                </div>
              </div>
              <div className={"elementor-element elementor-element-6175faa elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <img className={"attachment-full \x73ize-full wp-image-3610 align-middle"} loading="lazy" decoding="async" width="411" height="382" src="/site-assets/064f599cbe487a37.png" alt="" srcSet="/site-assets/064f599cbe487a37.png 411w, /site-assets/3c93b0e2445e7c2e.png 300w" sizes="(max-width: 411px) 100vw, 411px" />
              </div>
            </div>
            <div className="elementor-element elementor-element-12dd6e3 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-7d63002 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-435041a elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                  <h2 className="elementor-heading-title elementor-size-default">THE EMOTIONAL SHIFT</h2>
                </div>
                <div className="elementor-element elementor-element-30aca83 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-center">
                  <h2 className="elementor-heading-title elementor-size-default">When we learn to regulate our own emotions, we create space for our children to feel safe, heard, and loved.</h2>
                </div>
              </div>
              <div className={"elementor-element elementor-element-6aa4a44 elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <img className={"attachment-full \x73ize-full wp-image-3614 align-middle"} loading="lazy" decoding="async" width="420" height="387" src="/site-assets/d4f70596f0b40c13.png" alt="" srcSet="/site-assets/d4f70596f0b40c13.png 420w, /site-assets/562236efc44568af.png 300w" sizes="(max-width: 420px) 100vw, 420px" />
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-5bf6f74 e-con-full e-flex e-con animated slideInLeft [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
            <div className={"elementor-element elementor-element-2cbeb47 elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
              <img className={"attachment-full \x73ize-full wp-image-3681 align-middle"} loading="lazy" decoding="async" width="2560" height="1707" src="/site-assets/1a63279e4c0af67f.png" alt="" srcSet="/site-assets/1a63279e4c0af67f.png 2560w, /site-assets/44c8e18af7a32330.png 300w, /site-assets/96dd1330850003fa.png 1024w, /site-assets/d19b3034b3036666.png 768w, /site-assets/404b489829fa83a0.png 1536w, /site-assets/ad2f382973723d38.png 2048w" sizes="(max-width: 2560px) 100vw, 2560px" />
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-bbf48bd e-flex e-con-boxed e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:initial] [z-index:var(--z-index)]">
          <div className="e-con-inner self-auto [align-content:var(--align-content)] [align-items:var(--align-items)] [gap:var(--row-gap)_var(--column-gap)] [justify-content:var(--justify-content)] [text-align:var(--text-align)]">
            <div className={"elementor-element elementor-element-4659457 elementor-align-center \x67radient-btn elementor-widget elementor-widget-button [&]:text-center [align-self:var(--align-self)] [cursor:pointer] [order:var(--order)]"}>
              <a className={"elementor-button elementor-size-sm [&]:text-center [fill:rgb(255,255,255)] [word-spacing:1px]"} href="https://calendly.com/sashi-adler92/30min">
                <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                  <span className="elementor-button-text [text-decoration:inherit]">
                    <b>Reach Out Today</b>
                    <br />
                    <small>For a 30-minute Free Discovery Call</small>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-f8e3eb5 e-flex e-con-boxed e-con e-parent e-lazyloaded animated fadeInUp [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:initial] [z-index:var(--z-index)]">
          <div className="e-con-inner self-auto [align-content:var(--align-content)] [align-items:var(--align-items)] [gap:var(--row-gap)_var(--column-gap)] [justify-content:var(--justify-content)] [text-align:var(--text-align)]">
            <div className={"elementor-element elementor-element-e60154f elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
              <h2 className="elementor-heading-title elementor-size-default">This Journey Begins With Us, as Parents</h2>
            </div>
            <div className={"elementor-element elementor-element-311f00f elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
              <h2 className="elementor-heading-title elementor-size-default">Not because we are failing — but because we're ready to grow.</h2>
            </div>
            <div className="elementor-element elementor-element-8985758 e-con-full e-flex e-con animated slideInRight [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-7c854bb e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className={"elementor-element elementor-element-b059a69 elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                  <img className={"attachment-full \x73ize-full wp-image-4075 align-middle"} loading="lazy" decoding="async" width="1600" height="896" src="/site-assets/f91777551cda22f1.jpg" alt="" srcSet="/site-assets/f91777551cda22f1.jpg 1600w, /site-assets/c300a666696f8779.jpg 300w, /site-assets/06a9679949e776d7.jpg 1024w, /site-assets/bb592b944757b171.jpg 768w, /site-assets/4202e9e1a378f9f2.jpg 1536w" sizes="(max-width: 1600px) 100vw, 1600px" />
                </div>
              </div>
              <div className="elementor-element elementor-element-3160dad e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className={"elementor-element elementor-element-0cf1871 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                  <h2 className="elementor-heading-title elementor-size-default capitalize">If you're here, it's likely not because your child is difficult.</h2>
                </div>
                <div className={"elementor-element elementor-element-c500da7 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                  <h2 className="elementor-heading-title elementor-size-default capitalize">changing your response can change everything.</h2>
                </div>
                <div className="elementor-element elementor-element-334c922 elementor-align-start elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list [align-self:var(--align-self)] [order:var(--order)]">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item"><span className="elementor-icon-list-icon [text-align:var(--e-icon-list-icon-align)]">{"\n\t\t\t\t\t\t\t"}<svg className="e-font-icon-svg [fill:rgb(234,106,71)]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" /></svg>{"\t\t\t\t\t\t"}</span><span className="elementor-icon-list-text self-center">More reactions than responses</span></li>
                    <li className="elementor-icon-list-item"><span className="elementor-icon-list-icon [text-align:var(--e-icon-list-icon-align)]">{"\n\t\t\t\t\t\t\t"}<svg className="e-font-icon-svg [fill:rgb(234,106,71)]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" /></svg>{"\t\t\t\t\t\t"}</span><span className="elementor-icon-list-text self-center">More exhaustion than connection</span></li>
                    <li className="elementor-icon-list-item"><span className="elementor-icon-list-icon [text-align:var(--e-icon-list-icon-align)]">{"\n\t\t\t\t\t\t\t"}<svg className="e-font-icon-svg [fill:rgb(234,106,71)]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" /></svg>{"\t\t\t\t\t\t"}</span><span className="elementor-icon-list-text self-center">More guilt than confidence</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-975522d e-con-full e-flex e-con animated slideInLeft [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className={"elementor-element elementor-element-353619a elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <h2 className="elementor-heading-title elementor-size-default">You're Not Alone</h2>
              </div>
              <div className={"elementor-element elementor-element-297b8cd elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <h2 className="elementor-heading-title elementor-size-default">Children are not broken. They don't need fixing.</h2>
              </div>
              <div className={"elementor-element elementor-element-c301a46 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <h2 className="elementor-heading-title elementor-size-default">What truly creates change is when parents become more aware, calm, and intentional.</h2>
              </div>
              <div className={"elementor-element elementor-element-1bc5818 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <h2 className="elementor-heading-title elementor-size-default">When we change how we show up, children change how they feel — and how they behave.</h2>
              </div>
            </div>
            <div className={"elementor-element elementor-element-82c8af5 elementor-align-center \x67radient-btn elementor-widget elementor-widget-button [&]:text-center [align-self:var(--align-self)] [cursor:pointer] [order:var(--order)]"}>
              <a className={"elementor-button elementor-size-sm [&]:text-center [fill:rgb(255,255,255)] [word-spacing:1px]"} href="https://calendly.com/sashi-adler92/30min">
                <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                  <span className="elementor-button-text [text-decoration:inherit]">Reach Out Today <br />For a 30-minute Free Discovery Call</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-e242a10 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-2ff597a elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">What Guides My Work</h2>
          </div>
          <div className={"elementor-element elementor-element-19c97e9 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Your story is safe with me</h2>
          </div>
          <div className="elementor-element elementor-element-652bb36 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
            <div className="elementor-element elementor-element-828f5b7 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-8576403 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-f65bbaa elementor-view-default elementor-widget elementor-widget-icon [align-self:var(--align-self)] [order:var(--order)]">
                  <div className={"[&]:text-center"}>
                    <div className={"elementor-icon [&]:text-center"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" stroke="">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                          <path d="M11.302 21.6149C11.5234 21.744 11.6341 21.8086 11.7903 21.8421C11.9116 21.8681 12.0884 21.8681 12.2097 21.8421C12.3659 21.8086 12.4766 21.744 12.698 21.6149C14.646 20.4784 20 16.9084 20 12V6.6C20 6.04207 20 5.7631 19.8926 5.55048C19.7974 5.36198 19.6487 5.21152 19.4613 5.11409C19.25 5.00419 18.9663 5.00084 18.3988 4.99413C15.4272 4.95899 13.7136 4.71361 12 3C10.2864 4.71361 8.57279 4.95899 5.6012 4.99413C5.03373 5.00084 4.74999 5.00419 4.53865 5.11409C4.35129 5.21152 4.20259 5.36198 4.10739 5.55048C4 5.7631 4 6.04207 4 6.6V12C4 16.9084 9.35396 20.4784 11.302 21.6149Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-7a70bf9 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                <h2 className="elementor-heading-title elementor-size-default">Confidentiality</h2>
              </div>
              <div className={"elementor-element elementor-element-0fe7650 elementor-widget elementor-widget-text-editor [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <p>Your story is safe with me. What we share stays between us.</p>
              </div>
            </div>
            <div className="elementor-element elementor-element-26114c9 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-72f0116 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-202bfa5 elementor-view-default elementor-widget elementor-widget-icon [align-self:var(--align-self)] [order:var(--order)]">
                  <div className={"[&]:text-center"}>
                    <div className={"elementor-icon [&]:text-center"}>
                      <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-787c83e elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                <h2 className="elementor-heading-title elementor-size-default">Empathy</h2>
              </div>
              <div className={"elementor-element elementor-element-c669eb6 elementor-widget elementor-widget-text-editor [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <p>Every interaction is grounded in empathy and understanding.</p>
              </div>
            </div>
            <div className="elementor-element elementor-element-62b80f5 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-93d99a2 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-f9b2616 elementor-view-default elementor-widget elementor-widget-icon [align-self:var(--align-self)] [order:var(--order)]">
                  <div className={"[&]:text-center"}>
                    <div className={"elementor-icon [&]:text-center"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-82405da elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                <h2 className="elementor-heading-title elementor-size-default">Respect</h2>
              </div>
              <div className={"elementor-element elementor-element-7f31d00 elementor-widget elementor-widget-text-editor [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                <p>I honor and respect diverse family backgrounds and traditions.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-9915d53 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-e2ada4c elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">What You’ll Learn</h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-9c2817b e-con-full elementor-hidden-mobile e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-8e91298 elementor-absolute elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <img className={"attachment-full \x73ize-full wp-image-3727 align-middle"} loading="lazy" decoding="async" width="1150" height="1024" src="/site-assets/3c13d9331f9ee8bc.png" alt="" srcSet="/site-assets/3c13d9331f9ee8bc.png 1150w, /site-assets/48703ef832cdefa2.png 300w, /site-assets/6fcd581ffa7f6a86.png 1024w, /site-assets/afb97545e1f86179.png 768w" sizes="(max-width: 1150px) 100vw, 1150px" />
          </div>
          <div className="elementor-element elementor-widget [align-self:var(--align-self)] [order:var(--order)]">
            <div className={"\x72ing ring1"} />
            <div className={"\x72ing ring2"} />
            <div className={"\x72ing ring3"} />
          </div>
          <div className="elementor-element elementor-element-123caa7 elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-absolute elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
            <div className="elementor-icon-box-wrapper gap-[8px]">
              <div className="elementor-icon-box-icon flex-none">
                <span className={"elementor-icon [&]:text-center"}>
                  <i className="icon icon-mutual-fund" aria-hidden="true" />
                </span>
              </div>
              <div className="elementor-icon-box-content grow">
                <h3 className="elementor-icon-box-title">
                  <span>
      							Build mutual respect						</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-42b48fc elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-absolute elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
            <div className="elementor-icon-box-wrapper gap-[8px]">
              <div className="elementor-icon-box-icon flex-none">
                <span className={"elementor-icon [&]:text-center"}>
                  <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z" />
                  </svg>
                </span>
              </div>
              <div className="elementor-icon-box-content grow">
                <h3 className="elementor-icon-box-title">
                  <span>
      							Communicate without shouting						</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-1f1e9c1 elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-absolute elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
            <div className="elementor-icon-box-wrapper gap-[8px]">
              <div className="elementor-icon-box-icon flex-none">
                <span className={"elementor-icon [&]:text-center"}>
                  <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm144 386.4V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v151.4C315.5 447 282.8 456 248 456s-67.5-9-96-24.6V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v114.4c-34.6-36-56-84.7-56-138.4 0-110.3 89.7-200 200-200s200 89.7 200 200c0 53.7-21.4 102.5-56 138.4zM205.8 234.5c4.4-2.4 6.9-7.4 6.1-12.4-4-25.2-34.2-42.1-59.8-42.1s-55.9 16.9-59.8 42.1c-.8 5 1.7 10 6.1 12.4 4.4 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.3 7.9 4.8 13.7 1.6zM344 180c-25.7 0-55.9 16.9-59.8 42.1-.8 5 1.7 10 6.1 12.4 4.5 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.2 8 4.7 13.7 1.6 4.4-2.4 6.9-7.4 6.1-12.4-3.9-25.2-34.1-42.1-59.8-42.1zm-96 92c-30.9 0-56 28.7-56 64s25.1 64 56 64 56-28.7 56-64-25.1-64-56-64z" />
                  </svg>
                </span>
              </div>
              <div className="elementor-icon-box-content grow">
                <h3 className="elementor-icon-box-title">
                  <span>
      							Handle emotions calmly						</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-a9ad241 elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-absolute elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
            <div className="elementor-icon-box-wrapper gap-[8px]">
              <div className="elementor-icon-box-icon flex-none">
                <span className={"elementor-icon [&]:text-center"}>
                  <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z" />
                  </svg>
                </span>
              </div>
              <div className="elementor-icon-box-content grow">
                <h3 className="elementor-icon-box-title">
                  <span>
      							Stay calm in tough moments						</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-07a34f4 elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-absolute elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
            <div className="elementor-icon-box-wrapper gap-[8px]">
              <div className="elementor-icon-box-icon flex-none">
                <span className={"elementor-icon [&]:text-center"}>
                  <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z" />
                  </svg>
                </span>
              </div>
              <div className="elementor-icon-box-content grow">
                <h3 className="elementor-icon-box-title">
                  <span>
      							Set clear boundaries without guilt						</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-8fa99b5 elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-absolute elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
            <div className="elementor-icon-box-wrapper gap-[8px]">
              <div className="elementor-icon-box-icon flex-none">
                <span className={"elementor-icon [&]:text-center"}>
                  <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z" />
                  </svg>
                </span>
              </div>
              <div className="elementor-icon-box-content grow">
                <h3 className="elementor-icon-box-title">
                  <span>
      							Respond instead of reacting in stressful situations						</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-c0bfe4d e-con-full elementor-hidden-desktop elementor-hidden-tablet e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-8531d4c elementor-widget elementor-widget-image [&]:text-center [align-self:var(--align-self)] [order:var(--order)] [z-index:5]"}>
            <img className={"attachment-full \x73ize-full wp-image-3727 align-middle"} loading="lazy" decoding="async" width="1150" height="1024" src="/site-assets/3c13d9331f9ee8bc.png" alt="" srcSet="/site-assets/3c13d9331f9ee8bc.png 1150w, /site-assets/48703ef832cdefa2.png 300w, /site-assets/6fcd581ffa7f6a86.png 1024w, /site-assets/afb97545e1f86179.png 768w" sizes="(max-width: 1150px) 100vw, 1150px" />
          </div>
          <div className="elementor-element elementor-element-b711c20 e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
            <div className="elementor-element elementor-element-811a669 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]" />
            <div className="elementor-element elementor-element-13cb5b9 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]" />
          </div>
          <div className="elementor-element elementor-element-c3680ca e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
            <div className="elementor-element elementor-element-dcef09b elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
              <div className={"elementor-icon-box-wrapper [&]:items-center"}>
                <div className="elementor-icon-box-icon flex-none">
                  <span className={"elementor-icon [&]:text-center"}>
                    <i className="icon icon-mutual-fund" aria-hidden="true" />
                  </span>
                </div>
                <div className="elementor-icon-box-content grow">
                  <h3 className="elementor-icon-box-title">
                    <span>
      							Build mutual respect						</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-9e714b0 elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
              <div className={"elementor-icon-box-wrapper [&]:items-center"}>
                <div className="elementor-icon-box-icon flex-none">
                  <span className={"elementor-icon [&]:text-center"}>
                    <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z" />
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content grow">
                  <h3 className="elementor-icon-box-title">
                    <span>
      							Communicate without shouting						</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-e233f2c elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
              <div className={"elementor-icon-box-wrapper [&]:items-center"}>
                <div className="elementor-icon-box-icon flex-none">
                  <span className={"elementor-icon [&]:text-center"}>
                    <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm144 386.4V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v151.4C315.5 447 282.8 456 248 456s-67.5-9-96-24.6V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v114.4c-34.6-36-56-84.7-56-138.4 0-110.3 89.7-200 200-200s200 89.7 200 200c0 53.7-21.4 102.5-56 138.4zM205.8 234.5c4.4-2.4 6.9-7.4 6.1-12.4-4-25.2-34.2-42.1-59.8-42.1s-55.9 16.9-59.8 42.1c-.8 5 1.7 10 6.1 12.4 4.4 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.3 7.9 4.8 13.7 1.6zM344 180c-25.7 0-55.9 16.9-59.8 42.1-.8 5 1.7 10 6.1 12.4 4.5 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.2 8 4.7 13.7 1.6 4.4-2.4 6.9-7.4 6.1-12.4-3.9-25.2-34.1-42.1-59.8-42.1zm-96 92c-30.9 0-56 28.7-56 64s25.1 64 56 64 56-28.7 56-64-25.1-64-56-64z" />
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content grow">
                  <h3 className="elementor-icon-box-title">
                    <span>
      							Handle emotions calmly						</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-aa4ef49 elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
              <div className={"elementor-icon-box-wrapper [&]:items-center"}>
                <div className="elementor-icon-box-icon flex-none">
                  <span className={"elementor-icon [&]:text-center"}>
                    <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z" />
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content grow">
                  <h3 className="elementor-icon-box-title">
                    <span>
      							Set clear boundaries without guilt						</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-b709214 elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
              <div className={"elementor-icon-box-wrapper [&]:items-center"}>
                <div className="elementor-icon-box-icon flex-none">
                  <span className={"elementor-icon [&]:text-center"}>
                    <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z" />
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content grow">
                  <h3 className="elementor-icon-box-title">
                    <span>
      							Stay calm in tough moments						</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-2c0bbe6 elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box [align-self:var(--align-self)] [order:var(--order)]">
              <div className={"elementor-icon-box-wrapper [&]:items-center"}>
                <div className="elementor-icon-box-icon flex-none">
                  <span className={"elementor-icon [&]:text-center"}>
                    <svg className="e-font-icon-svg" aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z" />
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content grow">
                  <h3 className="elementor-icon-box-title">
                    <span>
      							Respond instead of reacting in stressful situations						</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-449b318 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className="elementor-element elementor-element-b217d96 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
            <div className="elementor-element elementor-element-c72a740 elementor-widget__width-initial elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
              <h2 className="elementor-heading-title elementor-size-default">This Coaching Offers:</h2>
            </div>
            <div className="elementor-element elementor-element-0c80e01 elementor-widget__width-initial elementor-widget elementor-widget-text-editor text-start [align-self:var(--align-self)] [order:var(--order)]">
              <p>A step-by-step approach to help you create calm, confident, and connected parenting.</p>
            </div>
          </div>
          <div className="elementor-element elementor-element-74a0b42 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
            <div className="elementor-element elementor-element-7f5c227 elementor-widget__width-initial elementor-widget elementor-widget-heading text-start [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-start">
              <h2 className="elementor-heading-title elementor-size-default">4 Personalized Coaching Sessions</h2>
            </div>
            <div className="elementor-element elementor-element-0555007 elementor-widget__width-initial elementor-widget elementor-widget-text-editor text-start [align-self:var(--align-self)] [order:var(--order)]">
              <p>Each session is designed to help you reflect, understand patterns, and build new parenting skills.</p>
            </div>
            <div className="elementor-element elementor-element-a2ecd4e elementor-widget__width-initial elementor-widget elementor-widget-heading text-start [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-start">
              <h2 className="elementor-heading-title elementor-size-default">60 Minutes Per Session</h2>
            </div>
            <div className="elementor-element elementor-element-f884587 elementor-widget__width-initial elementor-widget elementor-widget-text-editor text-start [align-self:var(--align-self)] [order:var(--order)]">
              <p>Focused one-to-one time to explore your challenges and work through practical solutions.</p>
            </div>
            <div className="elementor-element elementor-element-6729677 elementor-widget__width-initial elementor-widget elementor-widget-heading text-start [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-start">
              <h2 className="elementor-heading-title elementor-size-default">A Deep Dive Into Your Parenting Challenges</h2>
            </div>
            <div className="elementor-element elementor-element-74ca01a elementor-widget__width-initial elementor-widget elementor-widget-text-editor text-start [align-self:var(--align-self)] [order:var(--order)]">
              <p>We look at what is really happening beneath the behaviour — both yours and your child’s.</p>
            </div>
            <div className="elementor-element elementor-element-ef38102 elementor-widget__width-initial elementor-widget elementor-widget-heading text-start [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-start">
              <h2 className="elementor-heading-title elementor-size-default">Practical Tools for Lasting Change</h2>
            </div>
            <div className="elementor-element elementor-element-923c67e elementor-widget__width-initial elementor-widget elementor-widget-text-editor text-start [align-self:var(--align-self)] [order:var(--order)]">
              <p>Simple strategies you can start using immediately at home.</p>
            </div>
            <div className="elementor-element elementor-element-d128fcf elementor-widget-mobile__width-initial e-transform infinite-bounce elementor-widget elementor-widget-button [align-self:var(--align-self)] [order:var(--order)]">
              <a className={"elementor-button elementor-size-sm [&]:text-center [fill:rgb(255,255,255)]"} href="https://calendly.com/sashi-adler92/30min">
                <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                  <span className="elementor-button-text [text-decoration:inherit]">
                    <b>Reach Out Today</b>
                    <br />
                    <small>For a 30-minute Free Discovery Call</small>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-c8681bd e-con-full e-flex e-con e-parent e-lazyloaded animated zoomIn [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-15b5877 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Let's Connect Gently</h2>
          </div>
          <div className={"elementor-element elementor-element-4826044 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">A gentle first conversation to explore what support may feel right for your family.</h2>
          </div>
          <div className="elementor-element elementor-element-8b13810 infinite-pulse elementor-widget elementor-widget-button [align-self:var(--align-self)] [order:var(--order)]">
            <a className={"elementor-button elementor-size-sm [&]:text-center [fill:rgb(71,93,71)]"} href="https://calendly.com/sashi-adler92/30min">
              <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                <span className="elementor-button-text [text-decoration:inherit]">Book a 30-Min Free Discovery Call</span>
              </span>
            </a>
          </div>
        </div>
        <div className="elementor-element elementor-element-50a635e e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className="bdt-element-link elementor-element elementor-element-260aa12 elementor-widget elementor-widget-template [align-self:var(--align-self)] [order:var(--order)] [cursor:pointer]">
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
      <span className="elementor-screen-only" id="elementor-device-mode" />
      <svg style={{ display: "none" }} />
    </>
  );
}
