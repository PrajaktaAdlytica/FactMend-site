import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { A, Button } from "./components";
import { useMotionPreference } from "./MotionContext";
import { createSeamLight } from "./seamLight";
import "./terrain-intro.css";

gsap.registerPlugin(ScrollTrigger);

export default function TerrainIntro() {
  const { reduced } = useMotionPreference();
  const [paused, setPaused] = useState(false);
  const root = useRef(null);
  const canvas = useRef(null);
  const image = useRef(null);
  const playback = useRef(null);
  const pauseRef = useRef(paused);
  pauseRef.current = paused;

  useEffect(() => { playback.current?.(); }, [paused]);

  const skipIntro = event => {
    event.preventDefault();
    event.stopPropagation();
    const destination = document.getElementById("home-hero");
    if (!destination) return;
    // Avoid adding Lenis's anchor offset to CSS scroll padding and margin.
    const top = destination.getBoundingClientRect().top + window.scrollY
      - document.querySelector("header").offsetHeight;
    destination.focus({ preventScroll: true });
    window.scrollTo({ top, behavior: reduced ? "instant" : "smooth" });
  };

  useLayoutEffect(() => {
    const section = root.current;
    if (reduced) {
      section.dataset.playback = "still";
      section.dataset.seam = "still";
      return;
    }
    let visible = true;
    let disposed = false;
    let ticking = false;
    let elapsed = 0;
    let light = null;
    let lastPaint = -1;
    const tick = (_time, delta) => {
      elapsed += Math.min(delta, 50) / 1000;
      // Light is deliberately capped at 30fps; cloud transforms remain compositor driven.
      if (elapsed - lastPaint > 1 / 30) {
        light?.render(elapsed);
        lastPaint = elapsed;
      }
    };
    let clouds;
    let camera;
    const ctx = gsap.context(() => {
      clouds = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
      clouds.fromTo(".terrain-mist-far", { xPercent: -24, opacity: 0.48 },
        { xPercent: 24, opacity: 0.72, duration: 11, ease: "sine.inOut" }, 0);
      clouds.fromTo(".terrain-mist-near", { xPercent: 23, yPercent: 5, opacity: 0.38 },
        { xPercent: -27, yPercent: -5, opacity: 0.62, duration: 14, ease: "sine.inOut" }, 0);
      // Start mid-drift so the opening moves immediately, before the first reversal.
      clouds.seek(4);
      camera = gsap.to(".terrain-landscape", {
        yPercent: 3, scale: 1.035, ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 0.8 },
      });
    }, section);
    const syncPlayback = () => {
      const running = visible && !document.hidden && !pauseRef.current;
      section.dataset.playback = running ? "playing" : "paused";
      clouds.paused(!running);
      camera.scrollTrigger?.[pauseRef.current ? "disable" : "enable"](false);
      if (running && !ticking) { gsap.ticker.add(tick); ticking = true; }
      if (!running && ticking) { gsap.ticker.remove(tick); ticking = false; }
    };
    playback.current = syncPlayback;
    const loadLight = () => {
      if (disposed || !image.current?.naturalWidth) return;
      light?.destroy();
      light = createSeamLight(canvas.current, image.current);
      section.dataset.seam = light ? "animated" : "still";
      light?.render(elapsed);
    };
    image.current.addEventListener("load", loadLight);
    if (image.current.complete) loadLight();
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.02, rootMargin: `-${document.querySelector("header").offsetHeight}px 0px 0px 0px` });
    observer.observe(section);
    document.addEventListener("visibilitychange", syncPlayback);
    syncPlayback();
    const sourceImage = image.current;
    return () => {
      disposed = true;
      playback.current = null;
      sourceImage.removeEventListener("load", loadLight);
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      gsap.ticker.remove(tick);
      light?.destroy();
      ctx.revert();
    };
  }, [reduced]);

  return (
    <section className="terrain-intro" ref={root} aria-labelledby="terrain-title">
      <div className="terrain-landscape" aria-hidden="true">
        <img ref={image} className="terrain-plate" src={`${A}images/intro/living-memory-terrain.webp`}
          alt="" width="1536" height="1024" fetchPriority="high" />
        {!reduced && <canvas ref={canvas} className="terrain-seam-light" />}
        <img className="terrain-mist terrain-mist-far" src={`${A}images/intro/valley-mist.webp`}
          alt="" width="2172" height="724" />
        <img className="terrain-mist terrain-mist-near" src={`${A}images/intro/valley-mist.webp`}
          alt="" width="2172" height="724" />
      </div>
      <div className="terrain-readability" aria-hidden="true" />
      <div className="wrap terrain-content">
        <h1 id="terrain-title">Memory changes.<br /><em>Keep the whole story.</em></h1>
        <p>Know what your assistant remembers,<br className="desktop-only" /> where it came from, and where it goes next.</p>
        <div className="terrain-actions">
          <Button to="/assessment">Map your memory paths</Button>
          <Button to="/demo" secondary>Explore the workspace</Button>
        </div>
      </div>
      <div className="wrap terrain-controls">
        <a href="#home-hero" className="terrain-skip" onClick={skipIntro}>Skip intro <span aria-hidden="true">↓</span></a>
        {!reduced && <button type="button" onClick={() => setPaused(value => !value)}
          aria-pressed={paused} aria-label={paused ? "Resume intro animation" : "Pause intro animation"}>
          <span className={paused ? "terrain-play-symbol" : "terrain-pause-symbol"} aria-hidden="true" />
          {paused ? "Resume motion" : "Pause motion"}
        </button>}
      </div>
    </section>
  );
}
