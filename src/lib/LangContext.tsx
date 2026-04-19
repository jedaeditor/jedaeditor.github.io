'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../lib/en.json';
import id from '../lib/id.json';

type Translations = typeof en;

interface LangContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: Translations;
}

const translations: Record<string, Translations> = { en, id };

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('jeda-lang');
    if (saved && translations[saved]) setLang(saved);
  }, []);

  const handleSetLang = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem('jeda-lang', newLang);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used within LangProvider');
  return context;
}