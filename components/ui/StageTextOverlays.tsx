'use client';

import React from 'react';
import { FACTORY_STAGES } from '@/lib/constants';

interface StageTextOverlaysProps {
  scrollProgress: number; // 0 to 1
  activeStageIndex: number;
}

export default function StageTextOverlays({
  scrollProgress,
  activeStageIndex,
}: StageTextOverlaysProps) {
  // Only render during the factory tour range (0 to 0.96)
  if (scrollProgress > 0.98) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center select-none">
      {FACTORY_STAGES.map((stage, idx) => {
        const [start, end] = stage.scrollProgress;
        // Fade in when inside progress window
        const isCurrent = scrollProgress >= start && scrollProgress < end;
        const distFromCenter = Math.abs(scrollProgress - (start + end) / 2);
        const opacity = Math.max(0, 1 - distFromCenter * 14);

        if (opacity <= 0.01) return null;

        return (
          <div
            key={stage.id}
            className="absolute max-w-2xl px-6 text-center flex flex-col items-center transition-opacity duration-300"
            style={{ opacity }}
          >
            {/* Step Subtitle */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-300 uppercase">
                {stage.stepNumber}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white uppercase mb-3 drop-shadow-2xl">
              {stage.headline}
            </h2>

            {/* Subheading / Tagline */}
            <p className="text-xs sm:text-sm font-mono tracking-ultra uppercase text-slate-300 mb-4">
              {stage.subheading}
            </p>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xl mb-4">
              {stage.description}
            </p>

            {/* Interactive checkpoints for Quality Control */}
            {stage.checkpoints && (
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3">
                {stage.checkpoints.map((check, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-white/15 bg-black/60 backdrop-blur-md text-[10px] sm:text-xs font-mono tracking-widest text-white"
                  >
                    <span className="text-slate-400">0{cIdx + 1}</span>
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Capacity Stat Callout for Stitching */}
            {stage.metric && (
              <div className="mt-4 px-6 py-3 border border-white/20 bg-black/70 backdrop-blur-md flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-widest">
                  {stage.metric.value}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400">
                  {stage.metric.label}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
