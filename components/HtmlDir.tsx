"use client";

import { useEffect } from "react";
import { useLocale } from "@/lib/locale";

export function HtmlDir() {
  const { dir, locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar" : "en";
    document.documentElement.dir = dir;
  }, [dir, locale]);

  return null;
}