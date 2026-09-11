'use client';

import React from 'react';
import { Layers, ShieldCheck, Tag, Box, ArrowUpRight } from 'lucide-react';

interface CapacitySectionProps {
  onReserveCapacity: () => void;
}

export default function CapacitySection({ onReserveCapacity }: CapacitySectionProps) {
  const pillars = [
    { title: 'FLEXIBLE PRODUCTION', desc: 'Scalable line allocation tailored for fast turnaround and responsive reorders.' },
    { title: 'PRIVATE LABEL', desc: 'Complete bespoke branding integration from woven labels to customized trims.' },
    { title: 'CUSTOM MANUFACTURING', desc: 'Full OEM/ODM engineering conforming to custom specs, tech packs & patterns.' },
    { title: 'BRAND PACKAGING', desc: 'Retail-ready export packaging, polybags, hangtags, and branded cartons.' }
  ];

  return (
    <section className="relative z-20 bg-[#030406] text-[#f8fafc] py-28 sm:py-36 px-5 sm:px-8 border-t border-white/10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            SCALE & INFRASTRUCTURE
          </div>

          {/* Large Heroic Capacity Metric */}
          <div className="flex flex-col items-center my-4">
            <span className="text-6xl sm:text-9xl font-extrabold font-mono tracking-tighter text-white drop-shadow-2xl">
              50,000
            </span>
            <span className="text-lg sm:text-2xl font-mono tracking-widest text-slate-400 uppercase mt-2">
              PIECES / MONTH
            </span>
          </div>

          <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl mt-6 leading-relaxed">
            Flexible manufacturing capacity designed to support bulk orders and growing brand requirements with uncompromised consistency.
          </p>

          <button
            onClick={onReserveCapacity}
            className="mt-8 px-8 py-3.5 border border-white bg-white text-black hover:bg-slate-200 font-mono text-xs tracking-widest uppercase font-bold flex items-center gap-2 transition-all shadow-2xl"
          >
            <span>RESERVE PRODUCTION CAPACITY</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Core Infrastructure Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pil, idx) => (
            <div
              key={pil.title}
              className="p-6 bg-[#07090e] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-slate-600 block mb-4">
                  0{idx + 1} // PILLAR
                </span>
                <h4 className="text-sm font-bold text-white tracking-widest uppercase font-mono mb-2">
                  {pil.title}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {pil.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/5 text-[9px] font-mono text-slate-500">
                ACTIVE CAPACITY READY
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
