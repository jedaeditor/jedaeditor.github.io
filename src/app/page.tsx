'use client';

import { useState } from 'react';
import { Navbar, Hero, Features, Presets, Shortcuts, Download, Footer } from '@/components/sections';
import { VideoModal } from '@/components/VideoModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-[100dvh] bg-[#121212]">
      <Navbar />
      <Hero onOpenModal={openModal} />
      <Features />
      <Presets />
      <Shortcuts />
      <Download />
      <Footer />
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}