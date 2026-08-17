"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { journeys } from "@/lib/content";
import { gsap, prefersReducedMotion, useGsap } from "@/lib/useGsap";

export function HomeHero() {
  const { t } = useLocale();
  const root = useRef<HTMLElement>(null);

  useGsap(
    root,
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".hero-visual",
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1.35, ease: "power4.inOut" }
      ).from(".hero-eyebrow", { y: 18, opacity: 0, duration: 0.55 }, 0.35).from(".hero-line", { yPercent: 110, duration: 1, stagger: 0.12 }, 0.28)
        .from(".hero-lead, .hero-actions", { y: 22, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.7);

      gsap.to(".hero-visual img", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true }
      });
    },
    [t.heroTitle]
  );

  return (
    <section className="hero" ref={root}>
      <div className="wrap hero-copy">
        <p className="eyebrow hero-eyebrow">{t.heroEyebrow}</p>
        <h1>
          <span>
            <span className="hero-line">{t.heroTitle}</span>
          </span>
          <span>
            <span className="hero-line">{t.heroTitle2}</span>
          </span>
        </h1>
        <p className="lead hero-lead">{t.heroLead}</p>
        <div className="hero-actions">
          <Link href="/programs" className="btn">
            {t.start}
          </Link>
          <Link href="/about" className="btn btn-ghost">
            {t.aboutTitle}
          </Link>
        </div>
      </div>
      <div className="hero-visual">
        <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80" alt="" />
      </div>
    </section>
  );
}

export function Manifesto() {
  const { t } = useLocale();
  const root = useRef<HTMLElement>(null);

  useGsap(
    root,
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 992px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=140%",
            pin: true,
            scrub: 1
          }
        });
        tl.fromTo(".manifesto-a span", { yPercent: 120 }, { yPercent: 0, duration: 0.4 }).fromTo(".manifesto-b span", { yPercent: 120 }, { yPercent: 0, duration: 0.4 })
          .fromTo(".manifesto-copy", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.35 });
      });
      mm.add("(max-width: 991px)", () => {
        gsap.from(".manifesto-a span, .manifesto-b span, .manifesto-copy", {
          y: 28,
          opacity: 0,
          stagger: 0.12,
          duration: 0.75,
          scrollTrigger: { trigger: root.current, start: "top 78%" }
        });
      });
    },
    [t.manifestoA]
  );

  return (
    <section className="manifesto" ref={root}>
      <div className="wrap manifesto-inner">
        <h2>
          <div className="manifesto-a">
            <span>{t.manifestoA}</span>
          </div>
          <div className="manifesto-b">
            <span>{t.manifestoB}</span>
          </div>
        </h2>
        <p className="manifesto-copy">{t.manifestoBody}</p>
      </div>
    </section>
  );
}

export function HomeSteps() {
  const { t, dir } = useLocale();
  const root = useRef<HTMLElement>(null);
  const index = useRef(0);
  const busy = useRef(false);
  const [active, setActive] = useState(0);

  const goTo = (next: number, direction: number) => {
    const steps = t.steps;
    const i = (next + steps.length) % steps.length;
    if (busy.current || i === index.current) return;
    const from = index.current;
    const panels = root.current?.querySelectorAll<HTMLElement>(".step-panel");
    const numEl = root.current?.querySelector<HTMLElement>(".steps-num");
    if (!panels) return;
    busy.current = true;
    index.current = i;
    setActive(i);
    const dirY = direction;
    const reduced = prefersReducedMotion();

    if (reduced) {
      panels.forEach((p, n) => {
        p.classList.toggle("is-on", n === i);
        gsap.set(p, { autoAlpha: n === i ? 1 : 0, y: 0 });
      });
      if (numEl) numEl.textContent = steps[i].num;
      busy.current = false;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        busy.current = false;
      }
    });
    tl.to(panels[from], { autoAlpha: 0, y: -28 * dirY, duration: 0.4, ease: "power3.in" }, 0).fromTo(
      panels[i],
      { autoAlpha: 0, y: 36 * dirY },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" },
      0.12
    );
    if (numEl) {
      tl.to(numEl, { yPercent: -40 * dirY, opacity: 0, duration: 0.28, ease: "power2.in" }, 0)
        .add(() => {
          numEl.textContent = steps[i].num;
        }).fromTo(numEl, { yPercent: 40 * dirY, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.4, ease: "power3.out" });
    }
    panels.forEach((p, n) => p.classList.toggle("is-on", n === i));
  };

  useGsap(root, () => {
    gsap.set(".step-panel", { autoAlpha: 0, y: 24 });
    gsap.set(".step-panel.is-on", { autoAlpha: 1, y: 0 });
  }, [t.stepsTitle]);

  return (
    <section className="steps" ref={root}>
      <div className="wrap">
        <p className="eyebrow">{t.stepsLead}</p>
        <h2 className="section-title">{t.stepsTitle}</h2>
        <div className="steps-pin">
          <div className="steps-num" aria-hidden>
            {t.steps[0].num}
          </div>
          <div>
            <div className="steps-stage">
              {t.steps.map((step, i) => (
                <article className={`step-panel${i === 0 ? " is-on" : ""}`} key={step.num}>
                  <p className="eyebrow">{step.num}</p>
                  <h3>{step.title}</h3>
                  <p className="lead">{step.body}</p>
                </article>
              ))}
            </div>
            <SliderControls dir={dir} count={t.steps.length} active={active} onPrev={() => goTo(index.current - 1, -1)} onNext={() => goTo(index.current + 1, 1)} 
              onDot={(i) => goTo(i, i > index.current ? 1 : -1)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function JourneyRail() {
  const { t, locale, dir } = useLocale();
  const root = useRef<HTMLElement>(null);
  const index = useRef(0);
  const [active, setActive] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const slideTo = (next: number) => {
    const viewport = root.current?.querySelector<HTMLElement>(".rail-viewport");
    const track = root.current?.querySelector<HTMLElement>(".rail-track");
    const card = track?.querySelector<HTMLElement>(".rail-card");
    if (!viewport || !track || !card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 20;
    const step = card.offsetWidth + gap;
    const maxIndexValue = Math.max(0, Math.floor((track.scrollWidth - viewport.clientWidth - 1) / step));
    setMaxIndex(maxIndexValue);
    const i = Math.min(maxIndexValue, Math.max(0, next));
    index.current = i;
    setActive(i);
    const offset = i * step;
    const x = locale === "ar" ? offset : -offset;
    if (prefersReducedMotion()) {
      gsap.set(track, { x });
      return;
    }
    gsap.to(track, { x, duration: 0.75, ease: "power3.inOut" });
  };

  useGsap(root, () => {
    gsap.fromTo(
      ".rail-card",
      { clipPath: "inset(14% 10% 14% 10% round 28px)" },
      {
        clipPath: "inset(0% 0% 0% 0% round 28px)",
        stagger: 0.08,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 72%" }
      }
    );
  }, [locale, t.journeysTitle]);

  useEffect(() => {
    slideTo(index.current);
    const onResize = () => slideTo(index.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [locale]);

  return (
    <section className="rail" ref={root} id="journeys">
      <div className="wrap rail-head">
        <div>
          <p className="eyebrow">01</p>
          <h2 className="section-title">{t.journeysTitle}</h2>
          <p className="lead">{t.journeysLead}</p>
        </div>
        <SliderControls dir={dir} count={journeys.length} active={active} onPrev={() => slideTo(index.current - 1)} onNext={() => slideTo(index.current + 1)} disablePrev={active <= 0}
          disableNext={active >= maxIndex} />
      </div>
      <div className="rail-viewport">
        <div className="rail-track">
          {journeys.map((j) => (
            <figure className="rail-card" key={j.id}>
              <img src={j.image} alt="" />
              <figcaption>
                <h3>{locale === "ar" ? j.titleAr : j.titleEn}</h3>
                <ul>
                  {(locale === "ar" ? j.pointsAr : j.pointsEn).slice(0, 4).map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SliderControls({dir, count, active, onPrev, onNext, onDot, disablePrev, disableNext}: {
  dir: "rtl" | "ltr";
  count: number;
  active: number;
  onPrev: () => void;
  onNext: () => void;
  onDot?: (i: number) => void;
  disablePrev?: boolean;
  disableNext?: boolean;
}) {
  return (
    <div className="slider-nav">
      <button type="button" className="slider-btn" onClick={onPrev} aria-label="prev" disabled={disablePrev}>
        <svg viewBox="0 0 24 24" className={dir === "rtl" ? "" : "is-flip"} aria-hidden>
          <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {onDot ? (
        <div className="slider-dots">
          {Array.from({ length: count }, (_, i) => (
            <button key={i} type="button" className={`slider-dot${i === active ? " is-on" : ""}`} onClick={() => onDot(i)} aria-label={`slide ${i + 1}`} />
          ))}
        </div>
      ) : null}
      <button type="button" className="slider-btn" onClick={onNext} aria-label="next" disabled={disableNext}>
        <svg viewBox="0 0 24 24" className={dir === "rtl" ? "is-flip" : ""} aria-hidden>
          <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}