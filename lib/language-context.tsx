"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { translations, Lang, TranslationKey } from "@/data/translations";

interface LanguageContextValue {
  language: Lang;
  isNepali: boolean;
  toggleLanguage: () => void;
  t: Record<string, string>;
}


const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Lang>("en");
  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "ne" : "en"));
  }, []);
  const value: LanguageContextValue = {
    language,
    isNepali: language === "ne",
    toggleLanguage,
    t: translations[language],
  };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
