'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LangContext';

const iconPaths = [
  'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
  'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z',
  'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z',
  'M8 5v14l11-7z',
  'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
  'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
];

export function Features() {
  const { t } = useLang();

  return (
    <section id="features" className="py-20 px-6 bg-[#1E1E1E]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#E1E1E1] mb-4">{t.features.title}</h2>
          <p className="text-[#8C8C8C] max-w-[60ch] mx-auto">{t.features.description}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature: { title: string; description: string }, index: number) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-[#1E1E1E] rounded-2xl p-6 border border-white/5 hover:border-[#FF8400]/30 transition-all hover:bg-[#2B2B2B]/50">
              <div className="w-12 h-12 bg-[#2B2B2B] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FF8400]" fill="currentColor" viewBox="0 0 24 24"><path d={iconPaths[index]} /></svg>
              </div>
              <h3 className="text-lg font-semibold text-[#E1E1E1] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#8C8C8C] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}