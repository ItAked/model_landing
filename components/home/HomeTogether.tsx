"use client";

import { useRef } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { together } from "@/lib/content";
import { gsap, useGsap } from "@/lib/useGsap";

export function HomeTogether() {
  const { t, locale } = useLocale();
  const root = useRef<HTMLElement>(null);

  useGsap(
    root,
    () => {
      gsap.from(".together-card", {
        x: locale === "ar" ? 40 : -40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 76%" }
      });
    },
    [locale]
  );

  return (
    <section className="together" ref={root}>
      <div className="wrap">
        <p className="eyebrow">{t.togetherDiscount}</p>
        <h2 className="section-title">{t.togetherTitle}</h2>
        <p className="lead">{t.togetherLead}</p>
        <div className="together-grid">
          {together.map((item) => (
            <article className="together-card" key={item.id}>
              <h3>{locale === "ar" ? item.titleAr : item.titleEn}</h3>
              <p>{locale === "ar" ? item.bodyAr : item.bodyEn}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/programs#together" className="btn">
            {t.togetherCta}
          </Link>
        </div>
      </div>
    </section>
  );
}