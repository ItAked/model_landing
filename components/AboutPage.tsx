"use client";

import { useRef } from "react";
import { useLocale } from "@/lib/locale";
import { reasons } from "@/lib/content";
import { FaqList } from "@/components/FaqList";
import { SiteCta } from "@/components/SiteCta";
import { gsap, useGsap } from "@/lib/useGsap";

export function AboutPage() {
  const { t, locale } = useLocale();
  const hero = useRef<HTMLElement>(null);
  const media = useRef<HTMLElement>(null);
  const why = useRef<HTMLElement>(null);
  const results = useRef<HTMLElement>(null);
  const stories = useRef<HTMLElement>(null);

  useGsap(hero, () => {
    gsap.from(".about-hero .line", {
      yPercent: 110,
      duration: 1,
      stagger: 0.12,
      ease: "power4.out"
    });
    gsap.from(".about-hero .tag, .about-hero .lead", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.35
    });
  }, [t.aboutTitle]);

  useGsap(media, () => {
    gsap.fromTo(
      ".about-media img",
      { scale: 1.18, clipPath: "inset(12% 8% 12% 8%)" },
      {
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: { trigger: media.current, start: "top 80%", end: "top 20%", scrub: 1 }
      }
    );
  }, []);

  useGsap(why, () => {
    gsap.from(".why-card", {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: why.current, start: "top 75%" }
    });
  }, [locale]);

  useGsap(results, () => {
    gsap.from(".results li span", {
      yPercent: 110,
      stagger: 0.16,
      duration: 0.85,
      ease: "power4.out",
      scrollTrigger: { trigger: results.current, start: "top 72%" }
    });
  }, [locale]);

  useGsap(stories, () => {
    gsap.from(".stories p", {
      opacity: 0,
      y: 18,
      stagger: 0.18,
      duration: 0.8,
      scrollTrigger: { trigger: stories.current, start: "top 75%" }
    });
  }, [locale]);

  return (
    <main>
      <section className="about-hero" ref={hero}>
        <div className="wrap">
          <p className="eyebrow">{t.aboutTitle}</p>
          <h1>
            <span>
              <span className="line">{t.heroTitle}</span>
            </span>
            <span>
              <span className="line">{t.heroTitle2}</span>
            </span>
          </h1>
          <p className="tag">{t.aboutTag}</p>
          <p className="lead">{t.aboutIntro}</p>
        </div>
      </section>

      <section className="about-media" ref={media}>
        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1800&q=80" alt="" />
      </section>

      <section className="mv">
        <article>
          <p className="eyebrow">{t.missionTitle}</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            {t.mission}
          </h2>
        </article>
        <article>
          <p className="eyebrow">{t.visionTitle}</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            {t.vision}
          </h2>
        </article>
      </section>

      <section className="why" ref={why}>
        <div className="wrap">
          <h2 className="section-title">{t.whyTitle}</h2>
          <div className="why-grid">
            {reasons.map((reason) => (
              <article className="why-card" key={reason.titleAr}>
                <h3>{locale === "ar" ? reason.titleAr : reason.titleEn}</h3>
                <p>{locale === "ar" ? reason.bodyAr : reason.bodyEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results" ref={results}>
        <div className="wrap">
          <p className="eyebrow">{t.resultsTitle}</p>
          <h2 className="section-title">{t.resultsLead}</h2>
          <ul>
            {t.results.map((line) => (
              <li key={line}>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="lead" style={{ marginTop: "2rem" }}>
            {t.resultsCloser}
          </p>
        </div>
      </section>

      <section className="stories" ref={stories}>
        <div className="wrap">
          <p className="eyebrow">{t.storiesTitle}</p>
          {t.storiesBody.map((p) => (
            <p className="quote" key={p}>
              {p}
            </p>
          ))}
          <p className="quote" style={{ color: "var(--accent)" }}>
            {t.testimonials}
          </p>
        </div>
      </section>

      <FaqList />
      <SiteCta />
    </main>
  );
}