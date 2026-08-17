"use client";

import { SiteShell } from "@/components/SiteShell";
import { AboutPage } from "@/components/AboutPage";

export function AboutView() {
  return (
    <SiteShell navVariant="static">
      <AboutPage />
    </SiteShell>
  );
}