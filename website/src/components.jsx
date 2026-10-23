import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { modules, lifecycle, titleFor } from "./data";
gsap.registerPlugin(ScrollTrigger);
import {useMotionPreference} from "./MotionContext";
export const A = "/assets/";
export function Icon({ name = "arrow-right", size = 24, ...props }) {
  if (name === "arrow-down")
    return (
      <svg
        width={size}
        height={size}
        className="icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        {...props}
      >
        <path d="M12 4v16m-6-6 6 6 6-6" />
      </svg>
    );
  name =
    {
      conversation: "record",
      link: "branch",
      layers: "archive",
      reset: "refresh",
      "arrow-down": "arrow-right",
    }[name] || name;
  return (
    <svg
      width={size}
      height={size}
      className="icon"
      aria-hidden="true"
      {...props}
    >
      <use href={`${A}icons/sprite.svg#${name}`} />
    </svg>
  );
}
export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}
export function Button({
  to,
  children,
  secondary = false,
  className = "",
  ...props
}) {
  return (
    <Link
      to={to}
      className={`button ${secondary ? "secondary" : ""} ${className}`}
      {...props}
    >
      {children}
      <Arrow />
    </Link>
  );
}
export function TextLink({ to, children, ...props }) {
  return (
    <Link className="text-link" to={to} {...props}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
export function Tag({ children, tone = "" }) {
  return <span className={`tag ${tone}`}>{children}</span>;
}
export function SectionHead({ eyebrow, title, body, children }) {
  return (
    <div className="section-head" data-reveal>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title?.replaceAll("\\n", "\n")}</h2>
      </div>
      {body && <p className="section-lead">{body}</p>}
      {children}
    </div>
  );
}
export function Plate({ name, alt, className = "" }) {
  return (
    <div
      className={`plate ${className}`}
      role="region"
      aria-label={alt || "Workflow diagram"}
      tabIndex="0"
      data-reveal
    >
      <img
        src={`${A}visuals/${name}.svg`}
        alt={alt || name.replaceAll("-", " ")}
        width="1000"
        height="560"
        loading="lazy"
      />
    </div>
  );
}
export function Header() {
  const [menu, setMenu] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [heroReached, setHeroReached] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef();
  const introHidden = pathname === "/" && !heroReached;
  useLayoutEffect(() => {
    if (pathname !== "/") return;
    const update = () => {
      const hero = document.getElementById("home-hero");
      setHeroReached(!!hero && hero.getBoundingClientRect().top <= navRef.current.offsetHeight + 1);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);
  useEffect(() => {
    if (introHidden) { setMenu(null); setMobile(false); }
  }, [introHidden]);
  useEffect(() => {
    setMenu(null);
    setMobile(false);
  }, [pathname]);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setMenu(null);
        setMobile(false);
        navRef.current?.querySelector('[aria-expanded="true"]')?.focus();
      }
      if (e.type === "pointerdown" && !navRef.current?.contains(e.target)) {
        setMenu(null);
        setMobile(false);
      }
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", close);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`header${pathname === "/" ? " homepage-header" : ""}${introHidden ? " intro-hidden" : ""}`}
        ref={navRef} inert={introHidden} aria-hidden={introHidden || undefined}>
        <div className="nav-wrap">
          <Link to="/" className="brand" aria-label="Factmend home">
            <img
              src={`${A}logos/lockup-primary.svg`}
              alt="Factmend"
              width="148"
              height="42"
            />
          </Link>
          <nav
            className={mobile ? "nav open" : "nav"}
            aria-label="Main navigation"
          >
            <button
              aria-expanded={menu === "products"}
              aria-controls="products-menu"
              onClick={() => setMenu(menu === "products" ? null : "products")}
            >
              Products <span>⌄</span>
            </button>
            <button
              aria-expanded={menu === "platform"}
              aria-controls="platform-menu"
              onClick={() => setMenu(menu === "platform" ? null : "platform")}
            >
              Platform <span>⌄</span>
            </button>
            <Link to="/solutions">Solutions</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/pricing">Pricing</Link>
            <div className="mobile-utility">
              <Link to="/company">Company</Link>
              <Link to="/sign-in">Sign in</Link>
              <Button to="/assessment">Map your memory paths</Button>
            </div>
          </nav>
          <div className="nav-actions">
            <Link to="/sign-in">Sign in</Link>
            <Button to="/assessment">Let’s talk</Button>
          </div>
          <button
            className="menu-button"
            aria-label={mobile ? "Close navigation" : "Open navigation"}
            aria-expanded={mobile}
            onClick={() => {
              setMobile(!mobile);
              setMenu(null);
            }}
          >
            <span>{mobile ? "×" : "☰"}</span>
          </button>
        </div>
        {menu === "products" && (
          <div id="products-menu" className="mega">
            <div className="mega-intro">
              <p className="eyebrow">The memory toolkit</p>
              <h3>
                Every fact.
                <br />
                Every responsibility.
              </h3>
              <TextLink to="/products">Explore all products</TextLink>
            </div>
            <div className="mega-grid">
              {modules.map((m) => (
                <Link key={m.id} to={"/products/" + m.slug}>
                  <Icon name={m.icon} />
                  <span>
                    <strong>{m.name}</strong>
                    <small>{m.job}</small>
                  </span>
                  <Arrow />
                </Link>
              ))}
            </div>
          </div>
        )}
        {menu === "platform" && (
          <div id="platform-menu" className="mega platform-menu">
            {[
              ["/platform", "Platform", "A shared record model"],
              ["/lifecycle", "Lifecycle", "From learned to checked"],
              ["/stack-fit", "Stack fit", "Evaluate your native stack"],
              [
                "/trust",
                "Trust & governance",
                "Owners, boundaries and evidence",
              ],
              ["/evaluation", "Evaluation", "Define acceptance criteria"],
            ].map(([to, name, desc]) => (
              <Link key={to} to={to}>
                <strong>{name}</strong>
                <small>{desc}</small>
                <Arrow />
              </Link>
            ))}
          </div>
        )}
        <div className="scroll-progress" aria-hidden="true" />
      </header>
    </>
  );
}
export function Footer() {
  const {reduced,setOverride}=useMotionPreference();
  return (
    <footer>
      <div className="wrap footer-top">
        <div className="footer-brand">
          <Link to="/" aria-label="Factmend home">
            <img
              src={`${A}logos/lockup-reverse.svg`}
              alt="Factmend"
              width="176"
              height="50"
            />
          </Link>
          <p>
            A clearer relationship
            <br />
            with what AI remembers.
          </p>
          <address className="footer-address">
            355 Nguyen Trong Tuyen St.<br />
            Ward 1, Tan Binh District<br />
            Ho Chi Minh City 790282, Vietnam
          </address>
          <div className="socials">
            <span
              title="LinkedIn company profile is not available"
              aria-label="LinkedIn company profile unavailable"
            >
              <img
                src={`${A}social/linkedin/in-logo/LI-In-Bug.png`}
                alt="LinkedIn"
              />
            </span>
            <span
              title="Crunchbase company profile is not available"
              aria-label="Crunchbase company profile unavailable"
            >
              <img src={`${A}social/crunchbase-icon.png`} alt="Crunchbase" />
            </span>
          </div>
        </div>
        <div>
          <h4>Products</h4>
          {modules.map((m) => (
            <Link key={m.id} to={"/products/" + m.slug}>
              {m.name}
            </Link>
          ))}
        </div>
        <div>
          <h4>Explore</h4>
          {[
            ["Platform", "/platform"],
            ["Solutions", "/solutions"],
            ["Stack fit", "/stack-fit"],
            ["Evaluation", "/evaluation"],
            ["Resources", "/resources"],
            ["Pricing", "/pricing"],
          ].map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h4>Company</h4>
          {[
            ["About us", "/company"],
            ["Contact", "/contact"],
            ["Trust & governance", "/trust"],
            ["Map your memory paths", "/assessment"],
            ["Workspace access", "/sign-in"],
          ].map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="wrap footer-bottom">
        <small>© {new Date().getFullYear()} Factmend</small>
        <span>Thoughtful memory. Clear boundaries.</span>
        <div>
          <Link to="/legal/privacy">Privacy</Link>
          <Link to="/legal/terms">Terms</Link>
          <button className="motion-toggle" aria-pressed={reduced} onClick={()=>setOverride(!reduced)}>{reduced?"Enable motion":"Reduce motion"}</button>
          <button
            onClick={() =>
              document
                .querySelector("#main")
                ?.scrollIntoView({
                  behavior: reduced
                    ? "instant"
                    : "smooth",
                })
            }
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
export function CTA({
  title = "Start with the paths\nyou need to understand.",
  module,
}) {
  return (
    <section className="closing" data-chapter>
      <img
        className="closing-photo"
        src={`${A}images/peach-window.webp`}
        alt=""
        width="1536"
        height="1024"
        loading="lazy"
      />
      <div className="wrap closing-inner" data-reveal>
        <p className="eyebrow">A clearer next step</p>
        <h2>{title}</h2>
        <p>
          Bring your memory stack, your hardest question
          <br className="desktop-only" /> and the boundaries you want to test.
        </p>
        <Button to={"/assessment" + (module ? "?module=" + module : "")}>
          Map your memory deletion paths
        </Button>
        <TextLink to="/demo">Explore the memory workspace</TextLink>
      </div>
    </section>
  );
}
export function FAQ({ items }) {
  return (
    <div className="faq">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  lead,
  theme = "paper",
  children,
  action = true,
}) {
  return (
    <section className={`page-hero ${theme}`} data-chapter>
      <div className="wrap page-hero-inner">
        <div className="page-hero-copy" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
          {action && (
            <div className="actions">
              <Button to="/assessment">Map your memory paths</Button>
              <TextLink to="/demo">Explore the workspace</TextLink>
            </div>
          )}
        </div>
        {children && (
          <div className="page-hero-visual" data-reveal>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
export function ScopeWidget() {
  const [purpose, setPurpose] = useState("Support");
  const [tenant, setTenant] = useState("Helio");
  const allowed = tenant === "Helio" && purpose === "Support";
  return (
    <div className="scope-widget">
      <div className="mini-top">
        <Icon name="scope" />
        <span>Memory Desk</span>
        <Tag>Access policy</Tag>
      </div>
      <div className="scope-field">
        <p className="eyebrow">Request context</p>
        <div className="field-grid">
          <label>
            Tenant
            <select value={tenant} onChange={(e) => setTenant(e.target.value)}>
              <option>Helio</option>
              <option>Solace</option>
            </select>
          </label>
          <label>
            Purpose
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option>Support</option>
              <option>Sales</option>
            </select>
          </label>
        </div>
      </div>
      <div className="scope-connector">
        <span />
        <Icon name="arrow-down" />
        <span />
      </div>
      <div
        className={"scope-result " + (allowed ? "allow" : "deny")}
        aria-live="polite"
      >
        <div>
          <Icon name={allowed ? "check" : "lock"} />
          <strong>
            {allowed ? "Scoped retrieval allowed" : "Retrieval denied"}
          </strong>
        </div>
        <p>
          {allowed
            ? "C-012 · Invoice delivery · portal only"
            : tenant !== "Helio"
              ? "Tenant mismatch. This record belongs to Helio."
              : "Purpose mismatch. This record is limited to support."}
        </p>
        <small>Policy: tenant + purpose + subject</small>
      </div>
    </div>
  );
}
export function VersionWidget() {
  const [version, setVersion] = useState(2);
  return (
    <div className="version-widget">
      <div className="mini-top">
        <Icon name="review" />
        <span>Invoice delivery</span>
        <Tag>C-012</Tag>
      </div>
      <div className="version-tabs" role="group" aria-label="Record version">
        <button aria-pressed={version === 1} onClick={() => setVersion(1)}>
          06 Oct · Original
        </button>
        <button aria-pressed={version === 2} onClick={() => setVersion(2)}>
          08 Oct · Current
        </button>
      </div>
      <div className="version-value" aria-live="polite">
        <p className="eyebrow">
          Version {version}{" "}
          <span> / {version === 1 ? "Superseded" : "Current"}</span>
        </p>
        <h3>{version === 1 ? "email invoices" : "portal only"}</h3>
        <blockquote>
          “
          {version === 1
            ? "Please email the invoices to me."
            : "Please use the portal for invoices from now on."}
          ”
        </blockquote>
        <p>Support conversation · {version === 1 ? "06" : "08"} Oct 2026</p>
      </div>
      <div className="version-footer">
        <span className="dot" />
        Source retained · previous version preserved
      </div>
    </div>
  );
}
export function PolicyWidget() {
  const [withdraw, setWithdraw] = useState(false);
  return (
    <div className="policy-widget">
      <div className="mini-top">
        <Icon name="proof" />
        <span>Retention policy</span>
        <Tag>Support</Tag>
      </div>
      <h3>A purpose. A deadline.</h3>
      <div className="policy-timeline">
        <div>
          <span>01</span>
          <strong>Learned</strong>
          <small>06 October</small>
        </div>
        <div>
          <span>02</span>
          <strong>Corrected</strong>
          <small>08 October</small>
        </div>
        <div className={withdraw ? "warning" : ""}>
          <span>03</span>
          <strong>{withdraw ? "Consent withdrawn" : "Policy expiry"}</strong>
          <small>{withdraw ? "Immediate review" : "05 January"}</small>
        </div>
      </div>
      <div className="policy-state" aria-live="polite">
        <Tag tone={withdraw ? "clay" : "sage"}>
          {withdraw ? "Propagation pending" : "Consent active"}
        </Tag>
        <p>
          {withdraw
            ? "The consent change needs an acknowledgement from every destination."
            : "Retention: 90 days from the original source. Policy version 3."}
        </p>
      </div>
      <button className="plain-button" onClick={() => setWithdraw(!withdraw)}>
        {withdraw ? "Restore consent example" : "Inspect a consent withdrawal"}
        <span>→</span>
      </button>
    </div>
  );
}
export function ReceiptWidget({ interactive = true, initialChecked = false }) {
  const [checked, setChecked] = useState(initialChecked);
  return (
    <div className="receipt-widget">
      <div className="mini-top">
        <Icon name="signal" />
        <span>Erasure receipt</span>
        <Tag tone="clay">{checked ? "Partial" : "C-012"}</Tag>
      </div>
      <h3>
        {checked ? "Evidence has a boundary." : "Follow the destinations."}
      </h3>
      <div className="destination-rows">
        {[
          ["Index A", "Active retrieval path"],
          ["Cache B", "Derived response cache"],
          ["Backup", "Restore boundary"],
        ].map(([name, desc], i) => (
          <div key={name}>
            <span className="destination-symbol">
              <Icon name={i === 2 ? "archive" : "database"} />
            </span>
            <span>
              <strong>{name}</strong>
              <small>{desc}</small>
            </span>
            <Tag tone={i === 2 ? "clay" : checked ? "sage" : ""}>
              {i === 2
                ? "Unverified"
                : checked
                  ? "Simulated clear"
                  : "Awaiting check"}
            </Tag>
          </div>
        ))}
      </div>
      <p className="receipt-note">
        {checked
          ? "No active result in fixture retrieval. Backup expiry and restore behavior remain unverified."
          : "A result for one destination does not establish the state of every copy."}
      </p>
      {interactive && (
        <button className="plain-button" onClick={() => setChecked(!checked)}>
          {checked ? "Reset checks" : "Run sample checks"}
          <span>→</span>
        </button>
      )}
    </div>
  );
}
export function ManifestWidget({ value = "portal only", version = 2 }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="manifest-widget">
      <div className="mini-top">
        <Icon name="report" />
        <span>Memory manifest</span>
        <Tag>JSON</Tag>
      </div>
      <h3>More than a value.</h3>
      <div className="manifest-items">
        {[
          ["fact", value],
          ["scope", "Helio / Support"],
          [
            "source",
            version === 1 ? "conversation-06-oct" : "conversation-08-oct",
          ],
          ["versions", `${version} · source-linked`],
          ["policy", "retention-v3"],
          ["destinations", "Index A, Cache B, Backup"],
        ].map(([key, value]) => (
          <div key={key}>
            <span>{key}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <button
        className="plain-button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        Inspect the envelope <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <pre>
          {JSON.stringify(
            {
              schema: "factmend.memory.v1",
              fixture: "C-012",
              synthetic: true,
              value,
              tenant: "Helio",
              purpose: "support",
              versions: version,
            },
            null,
            2,
          )}
        </pre>
      )}
    </div>
  );
}
export function Widget({ id }) {
  return id === "desk" ? (
    <ScopeWidget />
  ) : id === "review" ? (
    <VersionWidget />
  ) : id === "proof" ? (
    <PolicyWidget />
  ) : id === "signal" ? (
    <ReceiptWidget />
  ) : (
    <ManifestWidget />
  );
}
export function SystemMap({ active = 0 }) {
  return (
    <div className="system-map">
      <div className="map-source">
        <Icon name="conversation" />
        <span>
          Conversations
          <br />
          <small>Source & context</small>
        </span>
      </div>
      <div className="map-line" />
      <div className="map-core">
        <img src={`${A}logos/mark-primary.svg`} alt="" width="44" height="44" />
        <strong>A governed record</strong>
        <small>Scope · source · version · policy</small>
      </div>
      <div className="map-branches">
        {modules.map((m, i) => (
          <Link
            to={"/products/" + m.slug}
            className={active === i ? "active" : ""}
            key={m.id}
          >
            <Icon name={m.icon} />
            <span>
              {m.name}
              <small>{m.job}</small>
            </span>
            <Arrow />
          </Link>
        ))}
      </div>
    </div>
  );
}
export function LifecycleWidget({ step }) {
  return step === 0 ? (
    <div className="learn-widget">
      <div className="mini-top">
        <Icon name="record" />
        <span>The source record</span>
        <Tag>C-012</Tag>
      </div>
      <p className="eyebrow">06 October / Support conversation</p>
      <blockquote>“Please email the invoices to me.”</blockquote>
      <div className="manifest-items">
        <div>
          <span>Learned value</span>
          <strong>email invoices</strong>
        </div>
        <div>
          <span>Subject</span>
          <strong>Invoice delivery</strong>
        </div>
        <div>
          <span>Context</span>
          <strong>Helio / Support</strong>
        </div>
      </div>
    </div>
  ) : step === 1 ? (
    <ScopeWidget />
  ) : step === 2 ? (
    <VersionWidget />
  ) : (
    <ReceiptWidget initialChecked={step === 4} />
  );
}
export function Story({ kind = "lifecycle", compact = false }) {
  const {reduced}=useMotionPreference();
  const [active, setActive] = useState(0);
  const root = useRef();
  const steps =
    kind === "lifecycle"
      ? lifecycle
      : modules
          .find((m) => m.id === kind)
          ?.steps.map((s, i) => [String(i + 1).padStart(2, "0"), ...s]) ||
        lifecycle;
  useLayoutEffect(() => {
    if(reduced)return;
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add(
        "(min-width: 1000px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)",
        () => {
          const articles = gsap.utils.toArray(".story-step");
          articles.forEach((el, i) =>
            ScrollTrigger.create({
              trigger: el,
              start: "top 55%",
              end: "bottom 55%",
              onEnter: () => setActive(i),
              onEnterBack: () => setActive(i),
            }),
          );
          gsap.fromTo(
            ".story-spine-fill",
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: root.current,
                start: "top 35%",
                end: "bottom 65%",
                scrub: true,
              },
            },
          );
        },
      );
    }, root);
    return () => ctx.revert();
  }, [kind,reduced]);
  const widgetId =
    kind === "lifecycle"
      ? ["desk", "desk", "review", "signal", "report"][active]
      : kind;
  return (
    <section
      ref={root}
      className={`story ${compact ? "compact" : ""}`}
      id="story"
      data-chapter
    >
      <div className="wrap">
        <div className="story-title" data-reveal>
          <p className="eyebrow">
            {kind === "lifecycle" ? "Follow the fact" : "How it works"}
          </p>
          <h2>
            {kind === "lifecycle"
              ? "One memory.\nA lifetime of context."
              : "From a question\nto a clear record."}
          </h2>
          <a href="#after-story" className="text-link">
            Skip to the next chapter <span>↓</span>
          </a>
        </div>
        <div className="story-layout">
          <div className="story-steps">
            <div className="story-spine">
              <span className="story-spine-fill" />
            </div>
            {steps.map(([label, title, text], i) => (
              <article
                key={label}
                className={`story-step ${active === i ? "active" : ""}`}
              >
                <div className="step-number">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="eyebrow">{label}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="mobile-story-widget">
                  {kind === "lifecycle" ? (
                    <LifecycleWidget step={i} />
                  ) : (
                    <Widget id={kind} />
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="story-stage">
            <div className="story-stage-frame">
              <div className="stage-progress">
                {steps.map((s, i) => (
                  <span key={i} className={i <= active ? "on" : ""} />
                ))}
              </div>
              <div className="stage-context">
                <span>Helio / Support</span>
                <span>C-012</span>
              </div>
              <div key={active} className="stage-content">
                {kind === "lifecycle" ? (
                  <LifecycleWidget step={active} />
                ) : (
                  <Widget id={widgetId} />
                )}
              </div>
              <div className="stage-caption">
                <span>
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(steps.length).padStart(2, "0")}
                </span>
                <span>{steps[active][0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Motion() {
  const {reduced}=useMotionPreference();
  const previousRoute=useRef();
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    document.title = `${titleFor(pathname)} — Factmend`;
    let lenis;
    let ticker;
    const setup = () => {
      if (!reduced) {
        lenis = new Lenis({
          duration: 1.05,
          smoothWheel: true,
          syncTouch: false,
          anchors: { offset: -96 },
        });
        lenis.on("scroll", ScrollTrigger.update);
        ticker = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);
      }
    };
    setup();
    if (!hash && previousRoute.current!==pathname) window.scrollTo(0, 0);
    previousRoute.current=pathname;
    const ctx = gsap.context(() => {
      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: true },
      });
      if (!reduced) {
        gsap.utils
          .toArray("[data-reveal]")
          .forEach((el) =>
            gsap.from(el, {
              y: 22,
              opacity: 0,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 94%", once: true },
            }),
          );
        gsap.utils.toArray("[data-draw]").forEach((el) => {
          const length = el.getTotalLength?.() || 1000;
          gsap.fromTo(
            el,
            { strokeDasharray: length, strokeDashoffset: length },
            {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest("section"),
                start: "top 75%",
                end: "bottom 45%",
                scrub: 0.5,
              },
            },
          );
        });
        const desktop = gsap.matchMedia();
        desktop.add("(min-width: 1000px)", () => {
          gsap.utils
            .toArray(".page-hero-visual")
            .forEach((el) =>
              gsap.fromTo(
                el,
                { y: 18 },
                {
                  y: -18,
                  ease: "none",
                  scrollTrigger: {
                    trigger: el.closest("section"),
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                  },
                },
              ),
            );
          gsap.utils
            .toArray(".system-map")
            .forEach((el) =>
              gsap.from(
                el.querySelectorAll(".map-source,.map-core,.map-branches>a"),
                {
                  y: 14,
                  opacity: 0.3,
                  stagger: 0.12,
                  ease: "none",
                  scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    end: "center 50%",
                    scrub: 0.6,
                  },
                },
              ),
            );
        });
        gsap.utils
          .toArray("[data-parallax]")
          .forEach((el) =>
            gsap.fromTo(
              el,
              { yPercent: -4 },
              {
                yPercent: 5,
                ease: "none",
                scrollTrigger: {
                  trigger: el.closest("section"),
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            ),
          );
      }
    });
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });
    if (hash) {
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    }
    return () => {
      cancelled = true;
      ctx.revert();
      lenis?.destroy();
      if (ticker) gsap.ticker.remove(ticker);
    };
  }, [pathname,reduced]);
  return null;
}
