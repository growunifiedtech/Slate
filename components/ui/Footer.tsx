'use client';

import React from 'react';
import { BRAND_INFO } from '@/lib/constants';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 bg-[#030406] text-[#f8fafc] border-t border-white/10 pt-20 pb-12 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-2xl font-bold tracking-widest uppercase font-mono text-white">
              SLATE APPARELS
            </span>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {BRAND_INFO.businessType}
            </p>
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Industrial apparel manufacturing, precision pattern cutting, private-label branding, and international freight logistics headquartered in New Delhi.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
              <span className="px-2.5 py-1 border border-white/10 bg-white/5">
                GST COMPLIANT
              </span>
              <span className="px-2.5 py-1 border border-white/10 bg-white/5">
                IMPORT EXPORT CODE (IEC)
              </span>
              <span className="px-2.5 py-1 border border-white/10 bg-white/5">
                UDYAM MSME
              </span>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-4">
              FACTORY DIRECTORY
            </span>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <a href="#showroom" className="hover:text-white transition-colors">
                  COLLECTION SHOWROOM
                </a>
              </li>
              <li>
                <a href="#manufacturing" className="hover:text-white transition-colors">
                  5-STEP PRODUCTION LINE
                </a>
              </li>
              <li>
                <a href="#private-label" className="hover:text-white transition-colors">
                  PRIVATE LABEL OEM/ODM
                </a>
              </li>
              <li>
                <a href="#why-slate" className="hover:text-white transition-colors">
                  MANUFACTURING EDGE
                </a>
              </li>
              <li>
                <a href="#factory" className="hover:text-white transition-colors">
                  PHYSICAL FACILITY GALLERY
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  REQUEST BULK QUOTE
                </a>
              </li>
            </ul>
          </div>

          {/* Facility Coordinates & Contact (4 cols) */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-4">
              NEW DELHI FACILITY
            </span>
            <p className="text-slate-300 leading-relaxed">
              {BRAND_INFO.address}
            </p>
            <div className="pt-2 space-y-1 text-slate-300">
              <div>
                WHATSAPP:{' '}
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </div>
              <div>
                EMAIL:{' '}
                <a href={`mailto:${BRAND_INFO.email}`} className="text-white hover:underline">
                  {BRAND_INFO.email}
                </a>
              </div>
              <div>MARKETS: INDIA + INTERNATIONAL EXPORT</div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} SLATE APPARELS. ALL RIGHTS RESERVED. B2B APPAREL MANUFACTURER.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white uppercase tracking-widest transition-colors"
          >
            <span>BACK TO ENTRANCE</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
