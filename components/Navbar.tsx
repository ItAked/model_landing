"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { useLocale } from "@/lib/locale";
import { navItems } from "@/lib/content";

export function Navbar({ variant = "overlay" }: { variant?: "overlay" | "static" }) {
  const { t, locale, setLocale } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = navItems.map((item) => {
    const path = item.href.split("#")[0];
    const active = item.href === "/" ? pathname === "/" : pathname === path;
    return (
      <Link key={item.href} href={item.href} className={`nav-link${active ? " active" : ""}`} onClick={() => setOpen(false)}>
        {locale === "ar" ? item.labelAr : item.labelEn}
      </Link>
    );
  });

  return (
    <header className={`nav${variant === "static" ? " is-static" : ""}`}>
      <div className="wrap nav-bar">
        <Link href="/" className="nav-logo" aria-label={t.brand}>
          <Logo />
        </Link>
        <nav className="nav-menu">
          <div className="nav-links">{links}</div>
          <div className="nav-right">
            <button type="button" className="lang-btn" onClick={() => setLocale(locale === "ar" ? "en" : "ar")}>
              {locale === "ar" ? "EN" : "عربي"}
            </button>
            <Link href="/programs" className="btn">
              {t.start}
            </Link>
          </div>
        </nav>
        <button type="button" className={`nav-toggle${open ? " is-open" : ""}`} aria-label={open ? "close" : "menu"} onClick={() => setOpen((v) => !v)}>
          <span />
        </button>
      </div>
      {open ? (
        <div className="mobile-menu">
          {links}
          <button type="button" className="lang-btn" onClick={() => setLocale(locale === "ar" ? "en" : "ar")}>
            {locale === "ar" ? "EN" : "عربي"}
          </button>
          <Link href="/programs" className="btn" onClick={() => setOpen(false)}>
            {t.start}
          </Link>
        </div>
      ) : null}
    </header>
  );
}