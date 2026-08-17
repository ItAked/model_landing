"use client";

import { useRef } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { journeys } from "@/lib/content";
import { gsap, useGsap } from "@/lib/useGsap";

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
  const { t } = useLocale();
  const root = useRef<HTMLElement>(null);

  useGsap(
    root,
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 992px)", () => {
        const nums = t.steps.map((s) => s.num);
        const numEl = root.current?.querySelector(".steps-num");
        const panels = gsap.utils.toArray<HTMLElement>(".step-panel");
        gsap.set(panels, { autoAlpha: 0, y: 28 });
        gsap.set(panels[0], { autoAlpha: 1, y: 0 });
        if (numEl) numEl.textContent = nums[0];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=260%",
            pin: true,
            scrub: 0.85,
            onUpdate: (self) => {
              const i = Math.min(nums.length - 1, Math.floor(self.progress * nums.length));
              if (numEl) numEl.textContent = nums[i];
            }
          }
        });

        panels.forEach((panel, i) => {
          if (i === 0) return;
          tl.to(panels[i - 1], { autoAlpha: 0, y: -24, duration: 0.45 }, i).fromTo(panel, { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: 0.45 }, i);
        });
      });
    },
    [t.stepsTitle]
  );

  return (
    <section className="steps" ref={root}>
      <div className="wrap">
        <p className="eyebrow">{t.stepsLead}</p>
        <h2 className="section-title">{t.stepsTitle}</h2>
        <div className="steps-pin">
          <div className="steps-num" aria-hidden>01</div>
          <div className="steps-stage">
            {t.steps.map((step, i) => (
              <article className={`step-panel${i === 0 ? " is-on" : ""}`} key={step.num}>
                <p className="eyebrow">{step.num}</p>
                <h3>{step.title}</h3>
                <p className="lead">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function JourneyRail() {
  const { t, locale } = useLocale();
  const root = useRef<HTMLElement>(null);

  useGsap(
    root,
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const track = root.current?.querySelector(".rail-track") as HTMLElement | null;
        if (!track) return;
        const getAmount = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);
        gsap.to(track, {
          x: () => (locale === "ar" ? getAmount() : -getAmount()),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${getAmount()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });
      });
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
    },
    [locale, t.journeysTitle]
  );

  return (
    <section className="rail" ref={root} id="journeys">
      <div className="wrap rail-head">
        <p className="eyebrow">01</p>
        <h2 className="section-title">{t.journeysTitle}</h2>
        <p className="lead">{t.journeysLead}</p>
      </div>
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
    </section>
  );
}