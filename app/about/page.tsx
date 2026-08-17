import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "Like A Model | من نحن",
  description: "في Like A Model نؤمن أن التحول الحقيقي لا يبدأ من المكان، بل من القرار. لسنا مجرد برنامج تدريبي، نحن شريكك في رحلة التحول."
};

export default function AboutRoute() {
  return <AboutView />;
}