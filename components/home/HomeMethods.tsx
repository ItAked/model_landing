"use client";

import { useRef } from "react";
import { useLocale } from "@/lib/locale";
import { methods, durations, tiers } from "@/lib/content";
import { gsap, useGsap } from "@/lib/useGsap";

export function HomeMethods() {
  const { t, locale } = useLocale();
  const root = useRef<HTMLElement>(null);

  useGsap(
    root,
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".method");
      cards.forEach((card) => {
        gsap.fromTo(
          card.querySelector("img"),
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.15,
            ease: "power4.inOut",
            scrollTrigger: { trigger: card, start: "top 80%" }
          }
        );
        const mins = card.querySelector<HTMLElement>(".method-mins");
        const count = card.querySelector<HTMLElement>(".method-count");
        if (!mins || !count) return;
        const target = Number(mins.dataset.mins);
        const obj = { n: 0 };
        gsap.to(obj, {
          n: target,
          duration: 1.15,
          ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 72%" },
          onUpdate: () => {
            count.textContent = String(Math.round(obj.n));
          }
        });
      });
    },
    [locale]
  );

  return (
    <section className="methods" ref={root}>
      <div className="wrap">
        <p className="eyebrow">02</p>
        <h2 className="section-title">{t.methodsTitle}</h2>
        <p className="lead">{t.methodsLead}</p>
        <div className="method-grid">
          {methods.map((m) => (
            <article className="method" key={m.id}>
              <img src={m.image} alt="" />
              <div className="method-shade" />
              <div className="method-body">
                <p className="eyebrow">{locale === "ar" ? m.titleAr : m.title}</p>
                <p className="lead">{locale === "ar" ? m.bodyAr : m.bodyEn}</p>
                <div className="method-mins" data-mins={m.minutes}>
                  <span className="method-count">0</span>
                  <small>{t.minutes}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeDurations() {
  const { t } = useLocale();
  const root = useRef<HTMLElement>(null);

  useGsap(
    root,
    () => {
      gsap.from(".dur-card", {
        y: 36,
        rotate: 1.4,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" }
      });
    },
    [t.durationsTitle]
  );

  return (
    <section className="durations" ref={root}>
      <div className="wrap">
        <p className="eyebrow">03</p>
        <h2 className="section-title">{t.durationsTitle}</h2>
        <p className="lead">{t.durationsLead}</p>
        <div className="dur-grid">
          {durations.map((d) => (
            <article className="dur-card" key={d.id}>
              <p className="eyebrow">{d.title}</p>
              <p className="big">{d.sessions}</p>
              <p>{t.sessions} · {d.weeks} {t.weeks}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeTiers() {
  const { t, locale } = useLocale();
  const root = useRef<HTMLElement>(null);

  useGsap(
    root,
    () => {
      gsap.from(".tier", {
        y: 48,
        opacity: 0,
        stagger: 0.14,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 74%" }
      });
    },
    [locale]
  );

  return (
    <section className="tiers" ref={root}>
      <div className="wrap">
        <p className="eyebrow">04</p>
        <h2 className="section-title">{t.tiersTitle}</h2>
        <p className="lead">{t.tiersLead}</p>
        <div className="tier-grid">
          {tiers.map((tier) => {
            const points = tier.id === "signature" ? locale === "ar" ? tier.includesAr : tier.includesEn : locale === "ar" ? tier.extraAr : tier.extraEn;
            return (
              <article className={`tier${tier.id === "elite" ? " is-mid" : ""}`} key={tier.id}>
                <h3>{tier.title}</h3>
                <p className="sub">{locale === "ar" ? tier.subtitleAr : tier.subtitleEn}</p>
                <p className="lead">{locale === "ar" ? tier.bodyAr : tier.bodyEn}</p>
                {tier.id !== "signature" ? (
                  <p className="eyebrow">{tier.id === "elite" ? t.plusSignature : t.plusElite}</p>
                ) : null}
                <ul>
                  {points.slice(0, 5).map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}