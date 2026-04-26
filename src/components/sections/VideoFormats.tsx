'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LangContext';

const videoFormats = [
  { format: 'MP4', mac: '✓', win: '✓' },
  { format: 'MKV', mac: '✓', win: '✓' },
  { format: 'WebM', mac: '✓', win: '✓' },
  { format: 'MOV', mac: '✓', win: '*' },
  { format: 'AVI', mac: '✓', win: '*' },
];

const audioFormats = [
  { format: 'MP3', mac: '✓', win: '✓' },
  { format: 'WAV', mac: '✓', win: '✓' },
  { format: 'FLAC', mac: '✓', win: '✓' },
  { format: 'AAC', mac: '✓', win: '✓' },
  { format: 'OGG', mac: '✓', win: '✓' },
];

type TabType = 'video' | 'audio';

export function VideoFormats() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<TabType>('video');

  return (
    <section className="py-20 px-6 bg-[#1E1E1E]/30">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#E1E1E1] mb-4">{t.videoFormats.title}</h2>
          <p className="text-[#8C8C8C]">{t.videoFormats.description}</p>
        </motion.div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-[#1E1E1E] rounded-xl border border-white/10 p-1">
            <button onClick={() => setActiveTab('video')} className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'video' ? 'bg-[#FF8400] text-[#121212]' : 'text-[#8C8C8C] hover:text-[#E1E1E1]'}`}>
              {t.videoFormats.videoTitle || 'Video'}
            </button>
            <button onClick={() => setActiveTab('audio')} className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'audio' ? 'bg-[#FF8400] text-[#121212]' : 'text-[#8C8C8C] hover:text-[#E1E1E1]'}`}>
              {t.videoFormats.audioTitle || 'Audio'}
            </button>
          </div>
        </div>

        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#E1E1E1]">Format</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#E1E1E1]">macOS</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#E1E1E1]">Windows</th>
              </tr>
            </thead>
            <tbody>
              {(activeTab === 'video' ? videoFormats : audioFormats).map((item, index) => (
                <motion.tr key={item.format} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.05 }} className="border-b border-white/5 last:border-0">
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