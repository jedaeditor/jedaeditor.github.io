'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'Silence Detection', description: 'Automatically detect silent sections with adjustable sensitivity.', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
  { title: 'Visual Timeline', description: 'See waveform visualization with highlighted silence regions.', icon: 'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z' },
  { title: 'Adjustable Cuts', description: 'Drag cut points to fine-tune each silence region.', icon: 'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z' },
  { title: 'Jump Playback', description: 'Preview the final cut result by skipping silence during playback.', icon: 'M8 5v14l11-7z' },
  { title: 'Render Range', description: 'Choose which portion of the video to process with range sliders.', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' },
  { title: 'Export with FFmpeg', description: 'Cut video using FFmpeg bundled with the app for reliable processing.', icon: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' },
];

const presets = [
  { name: 'Default', desc: 'Balanced settings for general use' },
  { name: 'Talking Head', desc: 'More aggressive, good for talking videos' },
  { name: 'Podcast', desc: 'Designed for speech-only content' },
  { name: 'Aggressive Cut', desc: 'Removes even short pauses' },
  { name: 'Gentle', desc: 'Only removes very long silences' },
];

const shortcuts = [
  { key: 'Ctrl+O', action: 'Open video' },
  { key: 'Ctrl+D', action: 'Detect silence' },
  { key: 'Ctrl+E', action: 'Cut/Export' },
  { key: 'Space', action: 'Play/Pause' },
  { key: 'J', action: 'Toggle Jump Playback' },
  { key: 'Ctrl+Z', action: 'Undo' },
  { key: 'Ctrl+Y', action: 'Redo' },
  { key: '+ / -', action: 'Zoom timeline' },
];

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) { videoRef.current.pause(); } else { videoRef.current.play(); }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="min-h-[100dvh] bg-[#121212]">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#121212]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
            <img src="/assets/icon.svg" alt="Jeda" className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight text-[#E1E1E1]">Jeda</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-6">
            <a href="#features" className="text-[#8C8C8C] hover:text-[#E1E1E1] transition-colors text-sm scroll-smooth">Features</a>
            <a href="#download" className="px-4 py-2 bg-[#FF8400] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#FF8400]/90 transition-all hover:scale-[1.02] active:scale-[0.98]">Download</a>
          </motion.div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2B2B] border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF8400] animate-pulse"></span>
                <span className="text-xs text-[#8C8C8C]">Now available for macOS & Windows</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#E1E1E1] leading-[1.1] mb-6">
                Cut the silence.<br/><span className="text-[#FF8400]">Keep the content.</span>
              </h1>
              <p className="text-lg text-[#8C8C8C] leading-relaxed max-w-[50ch] mb-8">Jeda automatically detects and removes silent sections from your videos. Perfect for creating tight, engaging silent cuts or away messages compilations.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#download" className="px-6 py-3 bg-[#FF8400] text-[#121212] font-semibold rounded-xl hover:bg-[#FF8400]/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2">Download<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></a>
                <a href="#features" className="px-6 py-3 bg-[#2B2B2B] text-[#E1E1E1] font-semibold rounded-xl border border-white/10 hover:border-[#FF8400]/50 transition-all">Learn More</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8400]/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative bg-[#1E1E1E] rounded-3xl border border-white/10 overflow-hidden aspect-video shadow-2xl">
                <video ref={videoRef} className="w-full h-full object-contain" poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%231E1E1E' width='1920' height='1080'/%3E%3C/svg%3E" onEnded={() => setIsPlaying(false)}>
                  <source src="/assets/videos/demo.mkv" type="video/x-matroska" />
                  <source src="/assets/videos/demo.mp4" type="video/mp4" />
                  <source src="/assets/videos/demo.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button onClick={togglePlay} className="w-16 h-16 bg-[#FF8400] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg pointer-events-auto">
                    {isPlaying ? <svg className="w-6 h-6 text-[#121212]" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> : <svg className="w-6 h-6 text-[#121212] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>}
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-xs text-[#8C8C8C]">Demo Preview</span>
                  <span className="text-xs text-[#FF8400]">Jeda in action</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-[#1E1E1E]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#E1E1E1] mb-4">Everything you need to edit faster</h2>
            <p className="text-[#8C8C8C] max-w-[60ch] mx-auto">Powerful features designed to streamline your video editing workflow.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-[#1E1E1E] rounded-2xl p-6 border border-white/5 hover:border-[#FF8400]/30 transition-all hover:bg-[#2B2B2B]/50">
                <div className="w-12 h-12 bg-[#2B2B2B] rounded-xl flex items-center justify-center mb-4"><svg className="w-6 h-6 text-[#FF8400]" fill="currentColor" viewBox="0 0 24 24"><path d={feature.icon} /></svg></div>
                <h3 className="text-lg font-semibold text-[#E1E1E1] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#8C8C8C] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#E1E1E1] mb-4">Smart detection presets</h2>
              <p className="text-[#8C8C8C] mb-8">Choose from pre-configured detection settings optimized for different video types, or customize your own parameters for precise control.</p>
              <div className="flex flex-wrap gap-3">
                {presets.map((preset, index) => (
                  <motion.span key={preset.name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="px-4 py-2 bg-[#2B2B2B] rounded-lg text-sm text-[#E1E1E1] border border-white/5">{preset.name}</motion.span>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1E1E1E] rounded-2xl p-6 border border-white/10">
              <div className="space-y-4">
                <div><div className="flex justify-between mb-2"><span className="text-sm text-[#E1E1E1]">Threshold</span><span className="text-sm text-[#FF8400]">-40dB</span></div><div className="h-2 bg-[#2B2B2B] rounded-full overflow-hidden"><div className="h-full w-[60%] bg-[#FF8400] rounded-full"></div></div></div>
                <div><div className="flex justify-between mb-2"><span className="text-sm text-[#E1E1E1]">Min Duration</span><span className="text-sm text-[#FF8400]">0.5s</span></div><div className="h-2 bg-[#2B2B2B] rounded-full overflow-hidden"><div className="h-full w-[40%] bg-[#FF8400] rounded-full"></div></div></div>
                <div><div className="flex justify-between mb-2"><span className="text-sm text-[#E1E1E1]">Padding</span><span className="text-sm text-[#FF8400]">0.2s</span></div><div className="h-2 bg-[#2B2B2B] rounded-full overflow-hidden"><div className="h-full w-[25%] bg-[#FF8400] rounded-full"></div></div></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#1E1E1E]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#E1E1E1] mb-4">Keyboard shortcuts for speed</h2>
            <p className="text-[#8C8C8C]">Work faster with intuitive keyboard shortcuts</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {shortcuts.map((shortcut, index) => (
              <motion.div key={shortcut.key} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-center justify-between gap-4 bg-[#1E1E1E] px-4 py-3 rounded-xl border border-white/5">
                <kbd className="px-2 py-1 bg-[#2B2B2B] rounded text-xs text-[#FF8400] font-mono">{shortcut.key}</kbd>
                <span className="text-sm text-[#8C8C8C]">{shortcut.action}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-[#1E1E1E] to-[#2B2B2B] rounded-3xl p-12 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-[#FF8400]/5"></div>
            <div className="relative text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#E1E1E1] mb-4">Ready to speed up your workflow?</h2>
              <p className="text-lg text-[#8C8C8C] mb-8 max-w-[50ch] mx-auto">Download Jeda free and start creating tighter, more engaging videos in minutes.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="px-8 py-4 bg-[#FF8400] text-[#121212] font-bold rounded-xl hover:bg-[#FF8400]/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9 8l4 4H9v3h4v3H9l4-4H9v4l-5-5 5-5v4h4V7H9l-4 4V8l5 5-5 5v-4H9v-3h4V9l-4-4z"/></svg>Download for macOS</a>
                <a href="#" className="px-8 py-4 bg-[#2B2B2B] text-[#E1E1E1] font-bold rounded-xl border border-white/10 hover:border-[#FF8400]/50 transition-all flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9 8l4 4H9v3h4v3H9l4-4H9v4l-5-5 5-5v4h4V7H9l-4 4V8l5 5-5 5v-4H9v-3h4V9l-4-4z"/></svg>Download for Windows</a>
              </div>
              <p className="mt-6 text-sm text-[#8C8C8C]">Version 1.0.0 - Free and open source</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/assets/icon.svg" alt="Jeda" className="w-6 h-6" />
              <span className="text-sm font-semibold text-[#E1E1E1]">Jeda</span>
            </div>
            <p className="text-sm text-[#8C8C8C]">Built with Electron + React</p>
            <a href="#" className="text-[#8C8C8C] hover:text-[#E1E1E1] transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg></a>
          </div>
        </div>
      </footer>
    </main>
  );
}