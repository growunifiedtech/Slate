'use client';

import React from 'react';
import { BUSINESS_TYPES } from '@/lib/constants';
import { Briefcase, ShoppingBag, Store, Warehouse, Repeat, Laptop, Tag, PackageCheck } from 'lucide-react';

export default function BusinessTypesSection() {
  const icons = [
    ShoppingBag,
    Briefcase,
    Store,
    Warehouse,
    Repeat,
    Laptop,
    Tag,
    PackageCheck,
  ];

  return (
    <section className="relative z-20 bg-[#040507] text-[#f8fafc] py-28 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              TARGET MARKET CHANNELS
            </div>
            <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white uppercase font-display">
              BUILT FOR BUSINESSES
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-mono tracking-wider uppercase max-w-md">
            TAILORED MANUFACTURING WORKFLOWS ENGINEERED FOR DIVERSE COMMERCIAL SECTORS.
          </p>
        </div>

        {/* 8 Business Customer Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_TYPES.map((biz, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={biz.label}
                className="p-6 bg-[#080a0e] border border-white/10 hover:border-white/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 border border-white/15 bg-white/[0.02] flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5 text-slate-300 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-widest uppercase font-mono mb-2">
                    {biz.label}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {biz.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>CHANNEL 0{idx + 1}</span>
                  <span className="group-hover:text-white transition-colors">→ B2B READY</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
