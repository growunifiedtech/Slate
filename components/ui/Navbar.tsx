'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundEngine } from '@/lib/audio';

interface NavbarProps {
  onNavigateTo: (targetId: string) => void;
  onRequestQuote: () => void;
}

export default function Navbar({ onNavigateTo, onRequestQuote }: NavbarProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    if (soundEngine) {
      const muted = soundEngine.toggleMute();
      setIsMuted(muted);
    }
  };

  const navLinks = [
    { label: 'FACTORY', id: 'factory-tour' },
    { label: 'COLLECTIONS', id: 'showroom' },
    { label: 'MANUFACTURING', id: 'manufacturing' },
    { label: 'PRIVATE LABEL', id: 'private-label' },
    { label: 'WHY SLATE', id: 'why-slate' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050507]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigateTo('factory-tour')}
            className="flex flex-col text-left group"
          >
            <span className="text-sm sm:text-base font-bold tracking-widest text-white uppercase group-hover:text-slate-300 transition-colors">
              SLATE APPARELS
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400">
              NEW DELHI // B2B
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigateTo(link.id)}
                className="text-[11px] font-mono tracking-widest text-slate-400 hover:text-white transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Audio Ambient Toggle Button */}
            <button
              onClick={toggleSound}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-mono tracking-widest"
              title={isMuted ? 'Turn Sound On' : 'Mute Ambient Audio'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">AUDIO: OFF</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                  <span className="hidden sm:inline">AUDIO: LIVE</span>
                  <div className="flex items-center gap-[2px] h-3">
                    <span className="w-[2px] h-2 bg-white animate-bounce" />
                    <span className="w-[2px] h-3 bg-white animate-bounce delay-75" />
                    <span className="w-[2px] h-1.5 bg-white animate-bounce delay-150" />
                  </div>
                </>
              )}
            </button>

            {/* Request Quote Primary Action */}
            <button
              onClick={onRequestQuote}
              className="px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] font-mono tracking-widest uppercase border border-white text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              REQUEST QUOTE
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#050507]/95 backdrop-blur-xl flex flex-col justify-center px-8 lg:hidden">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-mono text-slate-500 tracking-ultra uppercase mb-2">
              NAVIGATION MENU
            </span>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateTo(link.id);
                }}
                className="text-left text-2xl font-bold tracking-widest text-white hover:text-slate-400 transition-colors uppercase font-mono"
              >
                {link.label}
              </button>
            ))}
            <div className="h-[1px] bg-white/10 my-4" />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="py-3 border border-white text-center font-mono text-xs tracking-widest uppercase bg-white text-black font-semibold"
            >
              REQUEST BULK QUOTE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
