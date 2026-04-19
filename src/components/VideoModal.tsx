'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    if (modalVideoRef.current) modalVideoRef.current.pause();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={handleClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-5xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleClose} className="absolute -top-12 right-0 text-[#8C8C8C] hover:text-[#E1E1E1] transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="relative bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <video ref={modalVideoRef} className="w-full aspect-video object-contain" controls autoPlay>
            <source src="/assets/videos/demo.m4v" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </motion.div>
  );
}