'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LangContext';

export function Download() {
  const { t } = useLang();

  return (
    <section id="download" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-[#1E1E1E] to-[#2B2B2B] rounded-3xl p-12 border border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[#FF8400]/5"></div>
          <div className="relative text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#E1E1E1] mb-4">{t.download.title}</h2>
            <p className="text-lg text-[#8C8C8C] mb-8 max-w-[50ch] mx-auto">{t.download.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="px-8 py-4 bg-[#FF8400] text-[#121212] font-bold rounded-xl hover:bg-[#FF8400]/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9 8l4 4H9v3h4v3H9l4-4H9v4l-5-5 5-5v4h4V7H9l-4 4V8l5 5-5 5v-4H9v-3h4V9l-4-4z"/></svg>
                {t.download.macos}
              </a>
              <a href="#" className="px-8 py-4 bg-[#2B2B2B] text-[#E1E1E1] font-bold rounded-xl border border-white/10 hover:border-[#FF8400]/50 transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9 8l4 4H9v3h4v3H9l4-4H9v4l-5-5 5-5v4h4V7H9l-4 4V8l5 5-5 5v-4H9v-3h4V9l-4-4z"/></svg>
                {t.download.windows}
              </a>
            </div>
            <p className="mt-6 text-sm text-[#8C8C8C]">{t.download.version}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}