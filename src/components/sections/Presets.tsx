'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LangContext';

export function Presets() {
  const { t } = useLang();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#E1E1E1] mb-4">{t.presets.title}</h2>
            <p className="text-[#8C8C8C] mb-8">{t.presets.description}</p>
            <div className="flex flex-wrap gap-3">
              {t.presets.names.map((name: string, index: number) => (
                <motion.span key={name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="px-4 py-2 bg-[#2B2B2B] rounded-lg text-sm text-[#E1E1E1] border border-white/5">{name}</motion.span>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1E1E1E] rounded-2xl p-6 border border-white/10">
            <div className="space-y-4">
              <div><div className="flex justify-between mb-2"><span className="text-sm text-[#E1E1E1]">{t.presets.params.threshold}</span><span className="text-sm text-[#FF8400]">-40dB</span></div><div className="h-2 bg-[#2B2B2B] rounded-full overflow-hidden"><div className="h-full w-[60%] bg-[#FF8400] rounded-full"></div></div></div>
              <div><div className="flex justify-between mb-2"><span className="text-sm text-[#E1E1E1]">{t.presets.params.minDuration}</span><span className="text-sm text-[#FF8400]">0.5s</span></div><div className="h-2 bg-[#2B2B2B] rounded-full overflow-hidden"><div className="h-full w-[40%] bg-[#FF8400] rounded-full"></div></div></div>
              <div><div className="flex justify-between mb-2"><span className="text-sm text-[#E1E1E1]">{t.presets.params.padding}</span><span className="text-sm text-[#FF8400]">0.2s</span></div><div className="h-2 bg-[#2B2B2B] rounded-full overflow-hidden"><div className="h-full w-[25%] bg-[#FF8400] rounded-full"></div></div></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}