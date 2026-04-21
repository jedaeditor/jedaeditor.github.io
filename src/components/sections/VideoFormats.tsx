'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LangContext';

const formats = [
  { format: 'MP4', mac: '✓', win: '✓' },
  { format: 'MKV', mac: '✓', win: '✓' },
  { format: 'WebM', mac: '✓', win: '✓' },
  { format: 'MOV', mac: '✓', win: '*' },
  { format: 'AVI', mac: '✓', win: '*' },
];

export function VideoFormats() {
  const { t } = useLang();

  return (
    <section className="py-20 px-6 bg-[#1E1E1E]/30">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#E1E1E1] mb-4">{t.videoFormats.title}</h2>
          <p className="text-[#8C8C8C]">{t.videoFormats.description}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#E1E1E1]">Format</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#E1E1E1]">macOS</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#E1E1E1]">Windows</th>
              </tr>
            </thead>
            <tbody>
              {formats.map((item, index) => (
                <motion.tr key={item.format} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="border-b border-white/5 last:border-0">
                  <td className="px-6 py-4 text-sm text-[#E1E1E1]">{item.format}</td>
                  <td className="px-6 py-4 text-center text-sm text-[#FF8400]">{item.mac}</td>
                  <td className="px-6 py-4 text-center text-sm">{item.win === '*' ? <span className="text-[#8C8C8C]">{item.win}</span> : <span className="text-[#FF8400]">{item.win}</span>}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <p className="mt-4 text-xs text-[#8C8C8C] text-center">{t.videoFormats.note}</p>
      </div>
    </section>
  );
}