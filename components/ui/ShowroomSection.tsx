'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, CATEGORIES, CategoryFilter, Product } from '@/data/products';
import { Eye, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface ShowroomSectionProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuoteForProduct: (product: Product) => void;
}

export default function ShowroomSection({
  onSelectProduct,
  onRequestQuoteForProduct,
}: ShowroomSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');

  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="showroom" className="relative z-20 bg-[#050507] text-[#f8fafc] py-24 sm:py-32 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              CURATED PRODUCTION CATALOG
            </div>
            <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white uppercase font-display">
              NOW, LET&apos;S TALK PRODUCT.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              High-specification apparel engineered for brand owners, wholesalers, and retail distributors across India & worldwide.
            </p>
          </div>

          {/* Business Model Badges */}
          <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
            <span className="px-3 py-1 border border-white/10 bg-white/[0.02]">
              PRICE: ₹599 – ₹1,999
            </span>
            <span className="px-3 py-1 border border-white/10 bg-white/[0.02]">
              MOQ VARIES BY PRODUCT
            </span>
            <span className="px-3 py-1 border border-white/10 bg-white/[0.02]">
              5–6 SIZES PER ITEM
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-mono tracking-widest uppercase transition-all duration-200 border ${
                activeCategory === cat
                  ? 'border-white bg-white text-black font-semibold'
                  : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#090b10] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Product Image Container */}
              <div 
                onClick={() => onSelectProduct(product)}
                className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950 cursor-pointer"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  unoptimized
                  priority={filteredProducts.indexOf(product) < 6}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-black/30 pointer-events-none" />

                {/* Category & Season Tags */}
                <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none">
                  <span className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest bg-black/80 backdrop-blur-md border border-white/10 text-white">
                    {product.category}
                  </span>
                  <span className="px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-white/10 backdrop-blur-md text-slate-300">
                    {product.season}
                  </span>
                </div>

                {/* Hover Quick Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="px-4 py-2 border border-white bg-white text-black font-mono text-xs tracking-widest uppercase flex items-center gap-1.5 hover:bg-slate-200 transition-colors shadow-2xl"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW PRODUCT</span>
                  </button>
                  <a
                    href={`https://wa.me/919599084873?text=Hello%20Slate%20Apparels%2C%20I%20am%20interested%20in%20a%20bulk%20quote%20for%20${encodeURIComponent(
                      product.name
                    )}.%20Please%20share%20MOQ%20and%20pricing.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 border border-white/30 bg-black/80 text-white hover:bg-white hover:text-black transition-all"
                    title="Direct WhatsApp Inquiry"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Product Meta & Description */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide uppercase font-mono mb-2 group-hover:text-slate-200 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 font-light leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-1.5 py-3 border-y border-white/5 text-[11px] font-mono">
                    <div className="flex justify-between text-slate-400">
                      <span>FABRIC:</span>
                      <span className="text-slate-200 text-right truncate max-w-[180px]">
                        {product.fabric.split('/')[0]}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>SIZES:</span>
                      <span className="text-slate-200">{product.sizes.join(' • ')}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>PRICE RANGE:</span>
                      <span className="text-white font-semibold">{product.price}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>MOQ:</span>
                      <span className="text-slate-300">{product.moq}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="mt-5 pt-3 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="text-xs font-mono tracking-widest text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors uppercase"
                  >
                    <span>VIEW SPECS</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onRequestQuoteForProduct(product)}
                    className="text-xs font-mono tracking-widest text-white underline hover:text-slate-300 uppercase"
                  >
                    BULK QUOTE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
