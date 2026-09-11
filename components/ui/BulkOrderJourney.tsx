'use client';

import React, { useState } from 'react';
import { ORDER_STEPS } from '@/lib/constants';
import { ArrowRight, FileText, Calculator, CheckSquare, Factory, Truck } from 'lucide-react';

interface BulkOrderJourneyProps {
  onStartOrder: () => void;
}

export default function BulkOrderJourney({ onStartOrder }: BulkOrderJourneyProps) {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [FileText, Calculator, CheckSquare, Factory, Truck];

  return (
    <section id="manufacturing" className="relative z-20 bg-[#050507] text-[#f8fafc] py-28 sm:py-36 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              TRANSPARENT B2B WORKFLOW
            </div>
            <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white uppercase font-display">
              FROM IDEA TO BULK PRODUCTION.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              A streamlined, accountable 5-stage manufacturing pipeline designed for seamless collaboration and precision delivery.
            </p>
          </div>

          <button
            onClick={onStartOrder}
            className="px-6 py-3 border border-white bg-white text-black hover:bg-slate-200 font-mono text-xs tracking-widest uppercase font-bold flex items-center gap-2 transition-all self-start md:self-auto"
          >
            <span>START YOUR ORDER</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5 Interactive Workflow Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {ORDER_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-white bg-[#0e1219] -translate-y-1 shadow-2xl'
                    : 'border-white/10 bg-[#080a0e] hover:border-white/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold font-mono text-white tracking-widest">
                      {step.step}
                    </span>
                    <Icon
                      className={`w-5 h-5 ${
                        isSelected ? 'text-white' : 'text-slate-500'
                      }`}
                    />
                  </div>

                  <h3 className="text-sm font-bold tracking-widest uppercase font-mono text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>STAGE {step.step}</span>
                  <span className={isSelected ? 'text-white' : ''}>
                    {isSelected ? 'ACTIVE' : 'SELECT'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Panel for Active Step */}
        <div className="p-8 bg-[#080a0e] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border border-white/20 bg-white/5 flex items-center justify-center font-mono text-lg font-bold text-white">
              {ORDER_STEPS[activeStep].step}
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                SELECTED STAGE DETAIL
              </div>
              <h4 className="text-lg font-bold font-mono text-white tracking-wider uppercase">
                {ORDER_STEPS[activeStep].title}
              </h4>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl">
            {ORDER_STEPS[activeStep].desc} Dedicated merchandisers and production managers ensure continuous transparency at every milestone.
          </p>

          <button
            onClick={onStartOrder}
            className="px-5 py-2.5 border border-white/30 hover:border-white bg-white/5 hover:bg-white hover:text-black transition-all text-xs font-mono tracking-widest uppercase flex-shrink-0"
          >
            DISCUSS THIS STAGE
          </button>
        </div>
      </div>
    </section>
  );
}
