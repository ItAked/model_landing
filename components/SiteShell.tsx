"use client";

import { type ReactNode } from "react";
import { LocaleProvider } from "@/lib/locale";
import { HtmlDir } from "./HtmlDir";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

export function SiteShell({children, navVariant = "overlay"}: {
  children: ReactNode;
  navVariant?: "overlay" | "static";
}) {
  return (
    <LocaleProvider>
      <HtmlDir />
      <div className="page">
        <ScrollProgress />
        <Navbar variant={navVariant} />
        {children}
        <Footer />
      </div>
    </LocaleProvider>
  );
}