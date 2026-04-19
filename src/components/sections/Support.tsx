'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LangContext';

const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/jedaeditor/jeda.github.io';
const email = process.env.NEXT_PUBLIC_EMAIL || 'jedaeditor@gmail.com';

export function Support() {
  const { t } = useLang();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#E1E1E1] mb-4">
            {t.support?.title || 'Have a question or feature request?'}
          </h2>
          <p className="text-[#8C8C8C] max-w-[50ch] mx-auto">
            {t.support?.description || 'We d love to hear from you. Submit issues, feature requests, or just say hello.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-6 bg-[#1E1E1E] rounded-2xl border border-white/5 hover:border-[#FF8400]/30 transition-all"
          >
            <div className="w-12 h-12 bg-[#2B2B2B] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-[#E1E1E1]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#E1E1E1]">{t.support?.github || 'GitHub'}</h3>
              <p className="text-sm text-[#8C8C8C]">{t.support?.githubDesc || 'Report bugs & feature requests'}</p>
            </div>
          </motion.a>

          <motion.a
            href={`mailto:${email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-6 bg-[#1E1E1E] rounded-2xl border border-white/5 hover:border-[#FF8400]/30 transition-all"
          >
            <div className="w-12 h-12 bg-[#2B2B2B] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-[#E1E1E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#E1E1E1]">{t.support?.email || 'Email'}</h3>
              <p className="text-sm text-[#8C8C8C]">{t.support?.emailDesc || 'Send us a message'}</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}