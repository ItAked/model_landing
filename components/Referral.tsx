"use client";

import { useRef } from "react";
import { useLocale } from "@/lib/locale";
import { gsap, useGsap } from "@/lib/useGsap";

export function Referral() {
  const { t } = useLocale();
  const root = useRef<HTMLElement>(null);

  useGsap(
    root,
    () => {
      const obj = { n: 0 };
      const num = root.current?.querySelector(".referral-count");
      gsap.to(obj, {
        n: 300,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 72%" },
        onUpdate: () => {
          if (num) num.textContent = String(Math.round(obj.n));
        }
      });
      gsap.from(".referral-copy > *", {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 72%" }
      });
    },
    [t.referralTitle]
  );

  return (
    <section className="wrap referral" ref={root} id="referral">
      <div>
        <div className="referral-num">
          <span className="referral-count">0</span>
          <small>{t.sar}</small>
        </div>
      </div>
      <div className="referral-copy">
        <p className="eyebrow">{t.referralLead}</p>
        <h2 className="section-title">{t.referralTitle}</h2>
        <p className="lead">{t.referralBody}</p>
        <p className="eyebrow" style={{ marginTop: "1.4rem" }}>
          {t.referralUsesTitle}
        </p>
        <ul className="perks" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {t.referralUses.map((use) => (
            <li key={use}>{use}</li>
          ))}
        </ul>
        <p style={{ marginTop: "1.2rem" }}>{t.referralCloser}</p>
      </div>
    </section>
  );
}