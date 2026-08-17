"use client";

import { useRef } from "react";
import { gsap, useGsap } from "@/lib/useGsap";

export function ScrollProgress() {
  const root = useRef<HTMLDivElement>(null);

  useGsap(root, () => {
    gsap.to(root.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { scrub: 0.2 }
    });
  }, []);

  return <div className="scroll-progress" ref={root} aria-hidden />;
}