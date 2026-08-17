"use client";

import { SiteShell } from "@/components/SiteShell";
import { ProgramsPage } from "@/components/ProgramsPage";

export function ProgramsView() {
  return (
    <SiteShell navVariant="static">
      <ProgramsPage />
    </SiteShell>
  );
}