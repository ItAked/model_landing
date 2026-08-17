"use client";

import {createContext, useContext, useMemo, useState, type ReactNode} from "react";
import { copy, type Locale } from "./content";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof copy)["ar"];
  dir: "rtl" | "ltr";
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar");
  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: copy[locale],
      dir: locale === "ar" ? ("rtl" as const) : ("ltr" as const)
    }),
    [locale]
  );

  return (<LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>);
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}