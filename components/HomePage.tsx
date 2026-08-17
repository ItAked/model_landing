"use client";

import { HomeHero, Manifesto, HomeSteps, JourneyRail } from "@/components/home/HomeHero";
import { HomeMethods, HomeDurations, HomeTiers } from "@/components/home/HomeMethods";
import { HomeTogether } from "@/components/home/HomeTogether";
import { Referral } from "@/components/Referral";
import { SiteCta } from "@/components/SiteCta";
import { SiteShell } from "@/components/SiteShell";

export function HomePage() {
  return (
    <SiteShell>
      <main>
        <HomeHero />
        <Manifesto />
        <HomeSteps />
        <JourneyRail />
        <HomeMethods />
        <HomeDurations />
        <HomeTiers />
        <HomeTogether />
        <Referral />
        <SiteCta />
      </main>
    </SiteShell>
  );
}