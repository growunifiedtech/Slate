'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '@/lib/constants';

export default function WhatsAppButton() {
  return (
    <a
      href={BRAND_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 bg-[#080b11] border border-white/20 hover:border-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105"
      title="Direct WhatsApp Chat with Slate Apparels"
    >
      <div className="relative">
        <MessageSquare className="w-5 h-5 text-white" />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white" />
      </div>

      <div className="flex flex-col text-left">
        <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
          DIRECT LINE
        </span>
        <span className="text-xs font-bold font-mono tracking-wider text-white uppercase group-hover:text-slate-200">
          CHAT ON WHATSAPP
        </span>
      </div>
    </a>
  );
}
