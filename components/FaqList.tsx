"use client";

import { useRef, useState } from "react";
import { useLocale } from "@/lib/locale";
import { faqs } from "@/lib/content";
import { gsap, useGsap } from "@/lib/useGsap";

export function FaqList() {
  const { t, locale } = useLocale();
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useGsap(
    root,
    () => {
      gsap.from(".faq-item", {
        y: 16,
        opacity: 0,
        stagger: 0.05,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" }
      });
    },
    [locale]
  );

  return (
    <section className="faq" ref={root} id="faq">
      <div className="wrap">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">{t.faqTitle}</h2>
        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.qAr}>
                <button type="button" className="faq-q" onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{locale === "ar" ? item.qAr : item.qEn}</span>
                  <span aria-hidden>{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-a">{locale === "ar" ? item.aAr : item.aEn}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}