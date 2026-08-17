"use client";

import { useLayoutEffect, type DependencyList, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useGsap(
  root: RefObject<HTMLElement | null>,
  factory: () => void,
  deps: DependencyList = [],
) {
  useLayoutEffect(() => {
    if (!root.current || prefersReducedMotion()) return;
    const ctx = gsap.context(factory, root);
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, deps);
}

export { gsap, ScrollTrigger };