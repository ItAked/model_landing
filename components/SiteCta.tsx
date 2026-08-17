"use client";

import { useRef } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { gsap, useGsap } from "@/lib/useGsap";

export function SiteCta() {
  const { t, dir } = useLocale();
  const root = useRef<HTMLElement>(null);

  useGsap(
    root,
    () => {
      const hidden = dir === "rtl" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)";
      gsap.fromTo(
        ".cta-title",
        { clipPath: hidden },
        {
          clipPath: "inset(0 0% 0 0%)",
          duration: 1.1,
          ease: "power4.inOut",
          scrollTrigger: { trigger: root.current, start: "top 82%" }
        }
      );
    },
    [t.ctaTitle, dir]
  );

  return (
    <section className="cta" ref={root}>
      <div className="wrap">
        <p className="eyebrow">{t.heroEyebrow}</p>
        <h2 className="cta-title">{t.ctaTitle}</h2>
        <p className="lead" style={{ marginTop: "1rem" }}>
          {t.ctaBody}
        </p>
        <div>
          <Link href="/programs" className="btn">
            {t.start}
          </Link>
          <Link href="/about" className="btn btn-ghost">
            {t.aboutTitle}
          </Link>
        </div>
      </div>
    </section>
  );
}