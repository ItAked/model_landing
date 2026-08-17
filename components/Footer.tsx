"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale";
import { navItems } from "@/lib/content";

export function Footer() {
  const { t, locale } = useLocale();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="eyebrow">{t.quickLinks}</div>
            <div className="footer-links">
              {navItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  {locale === "ar" ? item.labelAr : item.labelEn}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/programs" className="btn">
            {t.start}
          </Link>
        </div>
        <div className="footer-word">LIKE A MODEL</div>
        <div className="footer-bottom">
          <span>{t.copyright}</span>
          <span>{t.closer}</span>
        </div>
      </div>
    </footer>
  );
}