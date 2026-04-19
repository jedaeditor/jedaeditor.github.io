'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LangContext';

const macosUrl = process.env.NEXT_PUBLIC_MACOS_DOWNLOAD_URL || '#';
const windowsUrl = process.env.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL || '#';

export function Download() {
  const { t } = useLang();

  return (
    <section id="download" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-[#1E1E1E] to-[#2B2B2B] rounded-3xl p-12 border border-white/10 overflow-hidden glow-border">
          <div className="absolute inset-0 bg-[#FF8400]/5"></div>
          <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF8400]/30 rounded-full blur-[120px] pointer-events-none"></motion.div>
          <div className="relative text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#E1E1E1] mb-4">{t.download.title}</h2>
            <p className="text-lg text-[#8C8C8C] mb-4 max-w-[50ch] mx-auto">{t.download.description}</p>
            <div className="mb-8">
              {t.download.discountPricing && (
                <>
                  <span className="text-2xl font-bold text-[#FF8400]">{t.download.discountPricing}</span>
                  <span className="text-lg text-[#8C8C8C] line-through mx-2">{t.download.pricing}</span>
                </>
              )}
              {!t.download.discountPricing && (
                <span className="text-2xl font-bold text-[#FF8400]">{t.download.pricing}</span>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-4 relative">
              <div className="absolute inset-0 bg-[#FF8400]/10 rounded-2xl blur-xl -z-10"></div>
              <a href={macosUrl} className="px-8 py-4 bg-[#FF8400] text-[#121212] font-bold rounded-xl hover:bg-[#FF8400]/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.02.41-2.24 1.05-3.11z"/></svg>
                {t.download.macos}
              </a>
              <a href={windowsUrl} className="px-8 py-4 bg-[#2B2B2B] text-[#E1E1E1] font-bold rounded-xl border border-white/10 hover:border-[#FF8400]/50 transition-all flex items-center gap-2">
                <img src="/assets/windows_logo.svg" alt="Windows" className="w-5 h-5" />
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