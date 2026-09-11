'use client';

import React, { useState } from 'react';
import { Tag, Sparkles, Box, Scissors, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import InteractiveLabel3D, { LabelType } from '../canvas/InteractiveLabel3D';

interface PrivateLabelSectionProps {
  onStartCustomCollection: () => void;
}

export default function PrivateLabelSection({ onStartCustomCollection }: PrivateLabelSectionProps) {
  const [brandName, setBrandName] = useState('YOUR BRAND');
  const [labelType, setLabelType] = useState<LabelType>('woven');
  const [ribbonColor, setRibbonColor] = useState('#0a0d14');
  const [threadColor, setThreadColor] = useState('#ffffff');
  const [sizeLabel, setSizeLabel] = useState('L');

  const ribbonOptions = [
    { label: 'Jet Obsidian', hex: '#0a0d14' },
    { label: 'Slate Graphite', hex: '#1c222e' },
    { label: 'Chalk Off-White', hex: '#f1f5f9' },
  ];

  const threadOptions = [
    { label: 'Crisp White', hex: '#ffffff' },
    { label: 'Industrial Silver', hex: '#cbd5e1' },
    { label: 'Stealth Black', hex: '#000000' },
  ];

  const features = [
    {
      icon: Tag,
      title: 'CUSTOM WOVEN LABELS',
      desc: 'High-density 50-denier damask woven neck labels with heat-sealed ultrasonic cut edges that eliminate neck irritation.'
    },
    {
      icon: Scissors,
      title: 'BESPOKE SILHOUETTES',
      desc: 'Custom cut-and-sew pattern grading, tech pack translation, and proprietary fit development for luxury fashion brands.'
    },
    {
      icon: Sparkles,
      title: 'PRECISION EMBROIDERY & PRINT',
      desc: 'Screen printing, high-density 3D puff, chenille patch applique, vintage mineral washing, and laser distressing.'
    },
    {
      icon: Box,
      title: 'RETAIL-READY PACKAGING',
      desc: 'Custom matte frosted ziplock polybags, foil-stamped hangtags with waxed safety cords, and branded shipping mailers.'
    },
    {
      icon: Layers,
      title: 'FLEXIBLE LINE CAPACITY',
      desc: 'Low-barrier sampling followed by seamless ramp-up to bulk production runs scaling up to 50,000 units per month.'
    },
    {
      icon: CheckCircle2,
      title: 'EXPORT-GRADE QUALITY',
      desc: 'Strict 4-tier inspection audits, shrinkage control, and color-fastness testing compliant with domestic and international standards.'
    }
  ];

  return (
    <section id="private-label" className="relative z-20 bg-[#040507] text-[#f8fafc] py-28 sm:py-36 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Brand Sequence */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            END-TO-END OEM & ODM PRIVATE LABELING
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-3xl sm:text-6xl font-bold tracking-tight text-white uppercase font-display mb-4">
            <span className="text-slate-500">YOUR BRAND.</span>
            <span className="text-slate-400">YOUR LABEL.</span>
            <span className="text-white">YOUR PRODUCT.</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-widest uppercase font-mono mt-2 mb-6">
            WE MANUFACTURE IT.
          </h3>

          <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            From woven damask neck labels and debossed leather patches to custom garment cuts, we engineer full private-label apparel ready for global brand distribution.
          </p>
        </div>

        {/* Interactive 3D Private Label Customizer */}
        <div className="bg-[#080b11] border border-white/15 p-6 sm:p-10 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D Label Preview (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full aspect-square sm:aspect-[4/3] rounded-none overflow-hidden relative border border-white/10 bg-black/60 shadow-2xl">
              <InteractiveLabel3D
                brandName={brandName}
                labelType={labelType}
                ribbonColor={ribbonColor}
                threadColor={threadColor}
                sizeLabel={sizeLabel}
              />

              {/* Overlay Label Telemetry */}
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-white/15 p-3 font-mono text-[10px] hidden sm:block">
                <div className="text-slate-500 uppercase">ACTIVE CONFIGURATION:</div>
                <div className="text-white font-bold tracking-widest mt-0.5">
                  {brandName.toUpperCase()} // SIZE {sizeLabel}
                </div>
                <div className="text-slate-400 mt-1 uppercase">
                  TRIM: {labelType === 'woven' ? 'DAMASK WOVEN' : labelType === 'leather' ? 'EMBOSSED LEATHER' : 'SOFT-TOUCH HANGTAG'}
                </div>
              </div>
            </div>
            <p className="text-[10px] font-mono text-slate-500 tracking-wider mt-3">
              LIVE 3D PRIVATE-LABEL TRIM SIMULATION • ROTATE & TILT TO INSPECT WEAVE
            </p>
          </div>

          {/* Configuration Controls (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Step 1: Input Brand Name */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-1">
                STEP 01 // TYPE YOUR BRAND NAME
              </span>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value.slice(0, 18))}
                placeholder="Enter brand name..."
                className="w-full px-4 py-3 bg-black/70 border border-white/20 text-white font-mono text-sm tracking-wider uppercase focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Step 2: Label Trim Style */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-1">
                STEP 02 // SELECT LABEL TYPE
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'woven', label: 'WOVEN DAMASK' },
                  { id: 'leather', label: 'LEATHER PATCH' },
                  { id: 'hangtag', label: 'HANGTAG CARD' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLabelType(item.id as LabelType)}
                    className={`py-2 px-2 border text-[10px] font-mono tracking-wider uppercase transition-all text-center ${
                      labelType === item.id
                        ? 'border-white bg-white text-black font-bold'
                        : 'border-white/15 bg-white/5 text-slate-300 hover:border-white/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Base Ribbon / Substrate Color */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-1">
                STEP 03 // BASE SUBSTRATE COLOR
              </span>
              <div className="grid grid-cols-3 gap-2">
                {ribbonOptions.map((opt) => (
                  <button
                    key={opt.hex}
                    onClick={() => setRibbonColor(opt.hex)}
                    className={`py-2 px-2 border text-[10px] font-mono tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 ${
                      ribbonColor === opt.hex
                        ? 'border-white bg-white text-black font-semibold'
                        : 'border-white/15 bg-white/5 text-slate-300 hover:border-white/30'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/20"
                      style={{ backgroundColor: opt.hex }}
                    />
                    <span className="truncate">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Stitching Thread / Foil Color */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-1">
                STEP 04 // THREAD / EMBROIDERY TONE
              </span>
              <div className="grid grid-cols-3 gap-2">
                {threadOptions.map((opt) => (
                  <button
                    key={opt.hex}
                    onClick={() => setThreadColor(opt.hex)}
                    className={`py-2 px-2 border text-[10px] font-mono tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 ${
                      threadColor === opt.hex
                        ? 'border-white bg-white text-black font-semibold'
                        : 'border-white/15 bg-white/5 text-slate-300 hover:border-white/30'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-white/20"
                      style={{ backgroundColor: opt.hex }}
                    />
                    <span className="truncate">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Size Specifier */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-1">
                STEP 05 // SIZE BADGE
              </span>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL', '2XL'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSizeLabel(s)}
                    className={`flex-1 py-1.5 border text-xs font-mono transition-all ${
                      sizeLabel === s
                        ? 'border-white bg-white text-black font-bold'
                        : 'border-white/15 bg-white/5 text-slate-300 hover:border-white/30'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={onStartCustomCollection}
              className="w-full py-3.5 border border-white bg-white text-black hover:bg-slate-200 font-mono text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2 transition-all shadow-xl"
            >
              <span>BUILD YOUR COLLECTION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Core Private-Label Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#07090e] border border-white/10 hover:border-white/30 transition-all group"
              >
                <div className="w-10 h-10 border border-white/20 bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-colors">
                  <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-white tracking-widest uppercase font-mono mb-2">
                  {feat.title}
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
