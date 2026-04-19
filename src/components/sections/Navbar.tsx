'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LangContext';

export function Navbar() {
  const { lang, setLang, t } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#121212]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
          <img src="/assets/icon.svg" alt="Jeda" className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-[#E1E1E1]">Jeda</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4">
          <a href="#features" className="text-[#8C8C8C] hover:text-[#E1E1E1] transition-colors text-sm">{t.nav.features}</a>
          <a href="#download" className="px-4 py-2 bg-[#FF8400] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#FF8400]/90 transition-all hover:scale-[1.02] active:scale-[0.98]">{t.nav.download}</a>
          <button onClick={() => setLang(lang === 'en' ? 'id' : 'en')} className="px-2 py-1 text-xs text-[#8C8C8C] hover:text-[#E1E1E1] border border-white/10 rounded hover:border-[#FF8400]/50 transition-all">
            {lang === 'en' ? 'ID' : 'EN'}
          </button>
        </motion.div>
      </div>
    </nav>
  );
}