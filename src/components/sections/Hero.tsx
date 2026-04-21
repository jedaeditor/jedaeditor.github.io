'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/LangContext';

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  const { t } = useLang();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) { 
        videoRef.current.pause(); 
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
        videoRef.current.play();
      }
    }
  };

  const pauseVideo = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleOpenModal = () => {
    pauseVideo();
    onOpenModal();
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2B2B] border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF8400] animate-pulse"></span>
              <span className="text-xs text-[#8C8C8C]">{t.hero.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#E1E1E1] leading-[1.1] mb-6">
              {t.hero.title}<br/><span className="text-[#FF8400]">{t.hero.subtitle}</span>
            </h1>
            <p className="text-lg text-[#8C8C8C] leading-relaxed max-w-[50ch] mb-8">{t.hero.description}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#download" className="px-6 py-3 bg-[#FF8400] text-[#121212] font-semibold rounded-xl hover:bg-[#FF8400]/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2">{t.hero.download}<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></a>
              <a href="#features" className="px-6 py-3 bg-[#2B2B2B] text-[#E1E1E1] font-semibold rounded-xl border border-white/10 hover:border-[#FF8400]/50 transition-all">{t.hero.learnMore}</a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF8400]/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative bg-[#1E1E1E] rounded-3xl border border-white/10 overflow-hidden aspect-video shadow-2xl">
              <div className={`absolute inset-0 bg-[#121212] transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/assets/icon.svg" alt="Jeda" className="w-32 h-32 opacity-90" />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF8400]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FF8400]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FF8400]/30"></div>
                  </div>
                  <div className="h-1 bg-[#2B2B2B] rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#FF8400] rounded-full"
                      animate={{ width: ['0%', '60%', '45%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </div>
              <video ref={videoRef} className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`} onEnded={() => setIsPlaying(false)}>
                <source src="/assets/videos/demo.m4v" type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.button 
                  onClick={togglePlay} 
                  className="w-16 h-16 bg-[#FF8400] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg pointer-events-auto"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isPlaying ? <svg className="w-6 h-6 text-[#121212]" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> : <svg className="w-6 h-6 text-[#121212] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>}
                </motion.button>
              </div>
              <button onClick={handleOpenModal} className="absolute top-4 right-4 w-8 h-8 bg-[#1E1E1E]/80 rounded-lg flex items-center justify-center hover:bg-[#2B2B2B] transition-colors pointer-events-auto">
                <svg className="w-4 h-4 text-[#E1E1E1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              </button>
              <div className={`absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-xs text-[#8C8C8C]">{t.hero.demoPreview}</span>
                <span className="text-xs text-[#FF8400]">{t.hero.demoSubtitle}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}