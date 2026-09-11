'use client';

import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Globe2 } from 'lucide-react';
import { BRAND_INFO } from '@/lib/constants';

export default function CredentialsSection() {
  return (
    <section className="relative z-20 bg-[#050507] text-[#f8fafc] py-24 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            REGULATORY COMPLIANCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-display mb-4">
            BUSINESS-READY MANUFACTURING
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-mono uppercase tracking-widest">
            LICENSED & AUTHORIZED FOR DOMESTIC COMMERCE AND DIRECT GLOBAL EXPORT.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRAND_INFO.credentials.map((cred, idx) => (
            <div
              key={cred.title}
              className="p-8 bg-[#080b11] border border-white/15 hover:border-white/40 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 border border-white/20 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                <ShieldCheck className="w-7 h-7 text-white group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-base font-bold font-mono tracking-widest text-white uppercase mb-2">
                {cred.title}
              </h3>
              <p className="text-xs text-slate-400 font-light">
                {cred.subtitle}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>OFFICIALLY VERIFIED ENTITY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
