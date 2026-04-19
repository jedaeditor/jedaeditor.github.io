'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LangContext';

const KeyPattern = () => (
  <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="keys" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
        <rect x="5" y="5" width="22" height="20" rx="3" fill="none" stroke="#FF8400" strokeWidth="1" />
        <rect x="33" y="5" width="22" height="20" rx="3" fill="none" stroke="#FF8400" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#keys)" />
  </svg>
);

export function Shortcuts() {
  const { t } = useLang();

  return (
    <section className="py-20 px-6 bg-[#1E1E1E]/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <KeyPattern />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#E1E1E1] mb-4">{t.shortcuts.title}</h2>
          <p className="text-[#8C8C8C]">{t.shortcuts.description}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {t.shortcuts.items.map((shortcut: { key: string; action: string }, index: number) => (
            <motion.div key={shortcut.key} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-center justify-between gap-4 bg-[#1E1E1E] px-4 py-3 rounded-xl border border-white/5">
              <kbd className="px-2 py-1 bg-[#2B2B2B] rounded text-xs text-[#FF8400] font-mono">{shortcut.key}</kbd>
              <span className="text-sm text-[#8C8C8C]">{shortcut.action}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}