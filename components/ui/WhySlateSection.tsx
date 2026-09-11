'use client';

import React, { useState } from 'react';
import { WHY_SLATE_ITEMS } from '@/lib/constants';
import { ShieldCheck, Award, Layers, Factory, Zap, Clock, PenTool, Globe } from 'lucide-react';

export default function WhySlateSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const icons = [ShieldCheck, Award, Layers, Factory, Zap, Clock, PenTool, Globe];

  return (
    <section id="why-slate" className="relative z-20 bg-[#050507] text-[#f8fafc] py-28 sm:py-36 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            MANUFACTURING ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white uppercase font-display mb-4">
            WHY SLATE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Engineered precision, consistent bulk throughput, and strict quality control designed to protect your brand&apos;s reputation in global markets.
          </p>
        </div>

        {/* 8 Floating 3D Tilt Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_SLATE_ITEMS.map((item, idx) => {
            const Icon = icons[idx];
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative p-8 bg-[#090b10] border transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer ${
                  isHovered
                    ? 'border-white bg-[#0e1219] -translate-y-2 shadow-2xl'
                    : 'border-white/10'
                }`}
                style={{
                  transform: isHovered
                    ? 'perspective(800px) rotateX(2deg) translateY(-6px)'
                    : 'none',
                }}
              >
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                    {item.number} // ADVANTAGE
                  </span>
                  <div className="w-10 h-10 border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Icon className="w-5 h-5 text-slate-300 group-hover:text-black transition-colors" />
                  </div>
                </div>

                {/* Card Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-white tracking-widest uppercase font-mono mb-3 group-hover:text-slate-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Monochromatic Glow on Hover */}
                <div
                  className={`absolute -bottom-10 -right-10 w-28 h-28 bg-white/5 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
