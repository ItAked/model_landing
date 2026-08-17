import type { Metadata } from "next";
import { ProgramsView } from "@/components/ProgramsView";

export const metadata: Metadata = {
  title: "Like A Model | البرامج",
  description: "اختاري رحلة التحول، أسلوب التدريب، مدة البرنامج، ومستوى التجربة. دليل برامج وأسعار Like A Model."
};

export default function ProgramsRoute() {
  return <ProgramsView />;
}