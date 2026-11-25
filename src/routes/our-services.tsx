import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/our-services.css?raw";

export const Route = createFileRoute("/our-services")({
  head: () => ({ meta: [{ title: "Our Service’s – nurturehub-sashi.in" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US", "style": { "--scrollbar-offset": "15px" } as import("react").CSSProperties }, body: { "className": "page footer-on-bottom hide-focus-outline \x63ontent-title-style-above \x63ontent-style-boxed kadence-elementor-colors", "data-elementor-device-mode": "desktop" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="elementor elementor-3341" data-elementor-id="3341">
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
                              <a className="wpr-menu-item wpr-pointer-item wpr-active-menu-item" aria-current="page" href="#">Our Service’s</a>
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
                            <div className={"wpr-mobile-toggle [&]:text-center [cursor:pointer]"}>
                              <span className="wpr-mobile-toggle-line mb-[4px]" />
                              <span className="wpr-mobile-toggle-line mb-[4px]" />
                              <span className="wpr-mobile-toggle-line [margin-bottom:0px]!" />
                            </div>
                          </div>
                          <ul className={"wpr-mobile-nav-menu [&]:text-center [z-index:9999]"} style={{ width: "1536px", left: "-795.938px" }} id="mobile-menu-2-9545550" data-site-import-responsive="225">
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/">Home</a>
                            </li>
                            <li className="menu-item">
                              <a className="wpr-mobile-menu-item pl-[10px] pr-[10px] pt-[10px]" href="/about-us">About Us</a>
                            </li>
                            <li className="menu-item current-menu-item current_page_item">
                              <a className="wpr-mobile-menu-item wpr-active-menu-item pl-[10px] pr-[10px] pt-[10px]" aria-current="page" href="#">Our Service’s</a>
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
        <div className="elementor-element elementor-element-925907c e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-7516846 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Your Journey
      </h2>
          </div>
          <div className={"elementor-element elementor-element-6d224c6 elementor-widget__width-initial elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Every family's journey is unique. Here's how I can support you.

      </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-e123f99 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-033bfe5 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">How I Can Support You</h2>
          </div>
          <div className={"elementor-element elementor-element-a99e1a6 elementor-widget__width-initial elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Choose the path that feels right for your family's growth and healing.</h2>
          </div>
          <div className="elementor-element elementor-element-185db28 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
            <div className="elementor-element elementor-element-c4e4f8c e-flex e-con-boxed e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:initial] [z-index:var(--z-index)]">
              <div className="e-con-inner self-auto [align-content:var(--align-content)] [align-items:var(--align-items)] [gap:var(--row-gap)_var(--column-gap)] [justify-content:var(--justify-content)] [text-align:var(--text-align)]">
                <div className="elementor-element elementor-element-d35876c e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                  <div className="elementor-element elementor-element-159c61b elementor-view-default elementor-widget elementor-widget-icon [align-self:var(--align-self)] [order:var(--order)]">
                    <div className={"[&]:text-center"}>
                      <div className={"elementor-icon [&]:text-center"}>
                        <svg className="e-font-icon-svg [overflow:hidden]" aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-c125689 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                    <h2 className="elementor-heading-title elementor-size-default [word-spacing:0px]">One-to-One Coaching</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-7a2da1d elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                  <h2 className="elementor-heading-title elementor-size-default">For deeper reflection, skill-building, and steady progress</h2>
                </div>
                <div className="elementor-element elementor-element-f6f20f5 elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list [align-self:var(--align-self)] [order:var(--order)]">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item"><span className="elementor-icon-list-icon [text-align:var(--e-icon-list-icon-align)]">{"\n\t\t\t\t\t\t\t"}<svg className="e-font-icon-svg [overflow:hidden]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{"\t\t\t\t\t\t"}</span><span className="elementor-icon-list-text self-center"><b>4 Sessions</b> of personalized coaching</span></li>
                    <li className="elementor-icon-list-item"><span className="elementor-icon-list-icon [text-align:var(--e-icon-list-icon-align)]">{"\n\t\t\t\t\t\t\t"}<svg className="e-font-icon-svg [overflow:hidden]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{"\t\t\t\t\t\t"}</span><span className="elementor-icon-list-text self-center"><b>60 Minutes</b> per session</span></li>
                    <li className="elementor-icon-list-item"><span className="elementor-icon-list-icon [text-align:var(--e-icon-list-icon-align)]">{"\n\t\t\t\t\t\t\t"}<svg className="e-font-icon-svg [overflow:hidden]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{"\t\t\t\t\t\t"}</span><span className="elementor-icon-list-text self-center">Deep dive into your parenting challenges</span></li>
                    <li className="elementor-icon-list-item"><span className="elementor-icon-list-icon [text-align:var(--e-icon-list-icon-align)]">{"\n\t\t\t\t\t\t\t"}<svg className="e-font-icon-svg [overflow:hidden]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{"\t\t\t\t\t\t"}</span><span className="elementor-icon-list-text self-center">Build practical skills for lasting change</span></li>
                  </ul>
                </div>
                <div className="elementor-element elementor-element-b1b11bf e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                  <div className="elementor-element elementor-element-7666d56 elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list [align-self:var(--align-self)] [order:var(--order)]">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item"><span className="elementor-icon-list-icon [text-align:var(--e-icon-list-icon-align)]">{"\n\t\t\t\t\t\t\t"}<svg className="e-font-icon-svg [overflow:hidden]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z" /></svg>{"\t\t\t\t\t\t"}</span><span className="elementor-icon-list-text self-center">Bonus Follow-Up</span></li>
                    </ul>
                  </div>
                  <div className="elementor-element elementor-element-4f5162b elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list [align-self:var(--align-self)] [order:var(--order)]">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item"><span className="elementor-icon-list-icon [text-align:var(--e-icon-list-icon-align)]">{"\n\t\t\t\t\t\t\t"}<svg className="e-font-icon-svg [overflow:hidden]" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{"\t\t\t\t\t\t"}</span><span className="elementor-icon-list-text self-center"><b>2 Free Follow-Up Sessions</b> (30 minutes each)</span></li>
                    </ul>
                  </div>
                </div>
                <div className="elementor-element elementor-element-94bc47f e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                  <div className={"elementor-element elementor-element-243fab7 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                    <h2 className="elementor-heading-title elementor-size-default">
                      <u>Program Fee</u>
                    </h2>
                  </div>
                  <div className="elementor-element elementor-element-b58abd6 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-center">
                    <h2 className="elementor-heading-title elementor-size-default">4 Sessions | Personalized Guidance</h2>
                  </div>
                  <div className="elementor-element elementor-element-df8149b elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-center">
                    <h2 className="elementor-heading-title elementor-size-default">₹3999<small> (First 3 Clients)</small> <br /> ₹5999 <small>(Regular fee)</small> <br /> <small> Complete package</small> </h2>
                  </div>
                  <div className="elementor-element elementor-element-d3fdb22 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-center">
                    <h2 className="elementor-heading-title elementor-size-default capitalize">Fees Available in international currency on request</h2>
                  </div>
                </div>
                <div className={"elementor-element elementor-element-729ddff elementor-align-center elementor-widget__width-initial elementor-widget elementor-widget-button [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
                  <a className={"elementor-button elementor-size-sm [&]:text-center [fill:rgb(255,255,255)]"} href="https://calendly.com/sashi-adler92/30min">
                    <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                      <span className="elementor-button-text [text-decoration:inherit]">Start Your Journey</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-b38c6db e-flex e-con-boxed e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:initial] [z-index:var(--z-index)]">
          <div className="e-con-inner self-auto [align-content:var(--align-content)] [align-items:var(--align-items)] [gap:var(--row-gap)_var(--column-gap)] [justify-content:var(--justify-content)] [text-align:var(--text-align)]">
            <div className={"elementor-element elementor-element-c1fd11c elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
              <h2 className="elementor-heading-title elementor-size-default">What to Expect</h2>
            </div>
            <div className="elementor-element elementor-element-c6d9144 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-688c5c5 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-1bf03c3 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)] [@media(max-width:767px)]:text-center">
                  <h2 className="elementor-heading-title elementor-size-default">A Safe, Judgment-Free Space</h2>
                </div>
                <div className="elementor-element elementor-element-bcf9359 elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
                  <p>You’ll be met with compassion, not criticism. This is a space to explore, grow, and heal at your own pace.</p>
                </div>
              </div>
              <div className="elementor-element elementor-element-e6cfda2 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-7272be6 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                  <h2 className="elementor-heading-title elementor-size-default">Practical Tools &amp; Skills</h2>
                </div>
                <div className="elementor-element elementor-element-42ce1cc elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
                  <p>Learn actionable strategies you can apply immediately to build connection and regulate emotions.</p>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-209bb82 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
              <div className="elementor-element elementor-element-31f1863 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-1cb8921 elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                  <h2 className="elementor-heading-title elementor-size-default">Personalized Support</h2>
                </div>
                <div className="elementor-element elementor-element-a56bff8 elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
                  <p>Your family’s needs are unique. Together, we’ll create an approach that works for you.</p>
                </div>
              </div>
              <div className="elementor-element elementor-element-fbc446f e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
                <div className="elementor-element elementor-element-5e866df elementor-widget elementor-widget-heading [align-self:var(--align-self)] [order:var(--order)]">
                  <h2 className="elementor-heading-title elementor-size-default">Lasting Transformation</h2>
                </div>
                <div className="elementor-element elementor-element-b1e5b06 elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
                  <p>This isn’t about quick fixes. It’s about deep, sustainable change that ripples through your family.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-c4f8a14 e-con-full e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-ab8743a elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default capitalize [word-spacing:0px]">coming soon programs</h2>
          </div>
          <div className="elementor-element elementor-element-a1bc121 e-flex e-con-boxed e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:initial] [z-index:var(--z-index)]">
            <div className="e-con-inner self-auto [align-content:var(--align-content)] [align-items:var(--align-items)] [gap:var(--row-gap)_var(--column-gap)] [justify-content:var(--justify-content)] [text-align:var(--text-align)]">
              <div className="elementor-element elementor-element-e2c860b elementor-widget elementor-widget-n-accordion [align-self:var(--align-self)] [order:var(--order)]">
                <div className="e-n-accordion" aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys">
                  <details className="e-n-accordion-item flex-col" id="e-n-accordion-item-2370">
                    <summary className={"e-n-accordion-item-title [&]:items-center flex-row list-none [cursor:pointer] [flex-grow:var(--n-menu-title-flex-grow)] [gap:var(--n-accordion-icon-gap)] [justify-content:var(--n-accordion-title-justify-content)]"} tabIndex={0} aria-expanded="false" aria-controls="e-n-accordion-item-2370"><span className="e-n-accordion-item-title-header [cursor:pointer]"><div className={"e-n-accordion-item-title-text [&]:items-center"}> Group Coaching </div></span><span className={"e-n-accordion-item-title-icon [&]:items-center flex-row [cursor:pointer] [order:var(--n-accordion-title-icon-order)]"}>{"\n\t\t\t"}<span className="e-opened"><svg className="e-font-icon-svg [overflow:hidden]" aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg></span>{"\n\t\t\t"}<span className="e-closed"><svg className="e-font-icon-svg [overflow:hidden]" aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg></span>{"\n\t\t"}</span></summary>
                    <div className="elementor-element elementor-element-0de0e56 e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]" role="region" aria-labelledby="e-n-accordion-item-2370">
                      <div className="elementor-element elementor-element-6b4281f elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
                        <h3>
                          <b>Group Coaching will be launching soon .</b>
                        </h3>
                        <h4><strong>Experience</strong> growth together in a <strong>supportive</strong> and <strong>inspiring space.</strong></h4>
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-text">Learn and heal through shared energy</span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-text">Gain wisdom from collective experiences</span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-text">Connect with other parents on similar journeys</span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-text">Build a supportive community</span>
                          </li>
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-text">Transform together in a safe space</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
              <div className="elementor-element elementor-element-452c92c elementor-widget elementor-widget-n-accordion [align-self:var(--align-self)] [order:var(--order)]">
                <div className="e-n-accordion" aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys">
                  <details className="e-n-accordion-item flex-col" id="e-n-accordion-item-7250">
                    <summary className={"e-n-accordion-item-title [&]:items-center flex-row list-none [cursor:pointer] [flex-grow:var(--n-menu-title-flex-grow)] [gap:var(--n-accordion-icon-gap)] [justify-content:var(--n-accordion-title-justify-content)]"} tabIndex={0} aria-expanded="false" aria-controls="e-n-accordion-item-7250"><span className="e-n-accordion-item-title-header [cursor:pointer]"><div className={"e-n-accordion-item-title-text [&]:items-center"}> Mastery Coaching </div></span><span className={"e-n-accordion-item-title-icon [&]:items-center flex-row [cursor:pointer] [order:var(--n-accordion-title-icon-order)]"}>{"\n\t\t\t"}<span className="e-opened"><svg className="e-font-icon-svg [overflow:hidden]" aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg></span>{"\n\t\t\t"}<span className="e-closed"><svg className="e-font-icon-svg [overflow:hidden]" aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg></span>{"\n\t\t"}</span></summary>
                    <div className="elementor-element elementor-element-42a980f e-con-full e-flex e-con [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]" role="region" aria-labelledby="e-n-accordion-item-7250">
                      <div className="elementor-element elementor-element-04e3bb0 elementor-widget elementor-widget-text-editor [align-self:var(--align-self)] [order:var(--order)]">
                        <h3>
                          <b>Mastery Circle – will be launching soon .</b>
                        </h3>
                        <h4>Mastery Circle at Nurture Hub<br />Brings together <strong>like-minded parents</strong> to <strong>learn, share,</strong> and <strong>elevate</strong> each other.</h4>
                        <div>“Where awareness meets collective growth.”<br />• “Grow together. Reflect deeper. Parent consciously.”<br />• “Not advice. Awareness. Not control. Connection.”</div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-8210667 e-con-full infinite-pulse e-flex e-con e-parent e-lazyloaded [align-self:var(--align-self)] [order:var(--order)] [overflow:var(--overflow)] [text-align:var(--text-align)] [z-index:var(--z-index)]">
          <div className={"elementor-element elementor-element-639c52a elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Not Sure Which Path Is Right?</h2>
          </div>
          <div className={"elementor-element elementor-element-01ac564 elementor-widget elementor-widget-heading [&]:text-center [align-self:var(--align-self)] [order:var(--order)]"}>
            <h2 className="elementor-heading-title elementor-size-default">Let's talk. Book a free 30-minute discovery call to explore what feels right for your family.</h2>
          </div>
          <div className="elementor-element elementor-element-6298806 elementor-widget elementor-widget-button [align-self:var(--align-self)] [order:var(--order)]">
            <a className={"elementor-button elementor-size-sm [&]:text-center [fill:rgb(71,93,71)]"} href="https://calendly.com/sashi-adler92/30min">
              <span className={"elementor-button-content-wrapper flex-row gap-[5px] [&]:justify-center [text-decoration:inherit]"}>
                <span className="elementor-button-text [text-decoration:inherit]">Book Your Free Discovery Call</span>
              </span>
            </a>
          </div>
        </div>
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
                            <a href="#">Our Services</a>
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
      <svg className="[overflow:hidden]" style={{ display: "none" }} />
    </>
  );
}
