'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/ui/LoadingScreen';
import Navbar from '@/components/ui/Navbar';
import CameraHUD from '@/components/ui/CameraHUD';
import StageTextOverlays from '@/components/ui/StageTextOverlays';
import ShowroomSection from '@/components/ui/ShowroomSection';
import ProductModal from '@/components/ui/ProductModal';
import PrivateLabelSection from '@/components/ui/PrivateLabelSection';
import WhySlateSection from '@/components/ui/WhySlateSection';
import BusinessTypesSection from '@/components/ui/BusinessTypesSection';
import BulkOrderJourney from '@/components/ui/BulkOrderJourney';
import CapacitySection from '@/components/ui/CapacitySection';
import FactoryPhotoGallery from '@/components/ui/FactoryPhotoGallery';
import CredentialsSection from '@/components/ui/CredentialsSection';
import Footer from '@/components/ui/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CustomCursor from '@/components/ui/CustomCursor';
import { Product } from '@/data/products';
import { soundEngine } from '@/lib/audio';

// Dynamically import Three.js master canvas to prevent SSR window issues
const FactoryCanvas = dynamic(
  () => import('@/components/canvas/FactoryCanvas'),
  { ssr: false }
);

export default function HomePage() {
  const [hasEntered, setHasEntered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const factoryTrackRef = useRef<HTMLDivElement>(null);

  // Monitor scroll position through the 3D factory tour track
  useEffect(() => {
    const handleScroll = () => {
      if (!factoryTrackRef.current) return;

      const trackRect = factoryTrackRef.current.getBoundingClientRect();
      const trackHeight = factoryTrackRef.current.clientHeight - window.innerHeight;

      if (trackHeight <= 0) return;

      // Calculate progress through the factory track (0 to 1)
      const scrolled = -trackRect.top;
      const progress = Math.min(Math.max(scrolled / trackHeight, 0), 1);

      setScrollProgress(progress);

      // Determine active stage index (0 to 2 for factory stages, 3 for showroom)
      const stageIdx = Math.min(Math.floor(progress * 3.2), 3);
      setActiveStageIndex(stageIdx);

      // Update sound engine acoustic environment
      soundEngine?.updateStage(stageIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuote = (product?: Product) => {
    const text = product
      ? `Hello Slate Apparels, I am interested in placing a bulk apparel order for ${product.name}. Please share MOQ, pricing, and catalog details.`
      : `Hello Slate Apparels, I am interested in placing a bulk apparel order. I would like to discuss products, MOQ and pricing.`;
    window.open(`https://wa.me/919599084873?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenCustomizer = (_product: Product) => {
    const customizerEl = document.getElementById('private-label');
    if (customizerEl) {
      customizerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative bg-[#050507] text-[#f8fafc] min-h-screen overflow-x-hidden select-none">
      {/* 1. Custom Desktop Magnetic Cursor */}
      <CustomCursor />

      {/* 2. Loading Experience */}
      {!hasEntered && (
        <LoadingScreen onEnter={() => setHasEntered(true)} />
      )}

      {/* 3. Global Monochromatic Navbar */}
      <Navbar
        onNavigateTo={handleNavigateTo}
        onRequestQuote={() => handleRequestQuote()}
      />

      {/* 4. 3D WebGL Canvas Layer (Fixed Background) */}
      <FactoryCanvas scrollProgress={scrollProgress} />

      {/* 5. 3D Camera HUD Overlay */}
      {scrollProgress <= 0.98 && (
        <CameraHUD
          scrollProgress={scrollProgress}
          activeStageIndex={activeStageIndex}
        />
      )}

      {/* 6. Floating Stage Text Overlays */}
      <StageTextOverlays
        scrollProgress={scrollProgress}
        activeStageIndex={activeStageIndex}
      />

      {/* 7. Scroll Track for 3D Factory Journey (Scroll Height = Camera Movement) */}
      <div id="factory-tour" ref={factoryTrackRef} className="relative h-[240vh] w-full pointer-events-none">
        {/* Helper instruction at top */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center pointer-events-auto">
          <span className="px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-widest text-slate-400 uppercase animate-bounce">
            ↓ SCROLL TO TOUR FACTORY
          </span>
        </div>
      </div>

      {/* 8. Showroom Section (Winters, Summers, Top Wear, Bottom Wear) */}
      <ShowroomSection
        onSelectProduct={(product) => setSelectedProduct(product)}
        onRequestQuoteForProduct={(product) => handleRequestQuote(product)}
      />

      {/* 9. Private Label Experience ("YOUR BRAND. YOUR LABEL. YOUR PRODUCT. WE MANUFACTURE IT.") */}
      <PrivateLabelSection
        onStartCustomCollection={() => handleRequestQuote()}
      />

      {/* 10. Why Slate Section (8 3D Floating Tilt Cards) */}
      <WhySlateSection />

      {/* 11. Built For Businesses (8 Customer Profiles) */}
      <BusinessTypesSection />

      {/* 12. 5-Step Bulk Order Journey */}
      <BulkOrderJourney onStartOrder={() => handleRequestQuote()} />

      {/* 13. Manufacturing Capacity (50,000 Pieces/Month Dramatic Section) */}
      <CapacitySection onReserveCapacity={() => handleRequestQuote()} />

      {/* 14. Inside Slate Authentic Factory Photography Gallery */}
      <FactoryPhotoGallery />

      {/* 15. Trust & Credibility (GST, IEC, UDYAM) */}
      <CredentialsSection />

      {/* 16. Direct WhatsApp Bulk Order Desk (Replaces Static Contact Form) */}
      <section id="contact" className="relative z-20 py-20 px-5 sm:px-8 border-t border-white/10 bg-[#06080c]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-slate-300 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            DIRECT B2B MANUFACTURING DESK
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-display mb-4">
            START YOUR BULK ORDER DIRECTLY ON WHATSAPP
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl font-light mb-8">
            Connect directly with our production specialists in New Delhi. Get immediate quotations, discuss fabric swatches, tech packs, and MOQ timelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/919599084873?text=Hello%20Slate%20Apparels%2C%20I%20am%20interested%20in%20placing%20a%20bulk%20apparel%20order.%20I%20would%20like%20to%20discuss%20products%2C%20MOQ%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-white bg-white text-black hover:bg-slate-200 font-mono text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2.5 transition-all shadow-2xl"
            >
              <span>CHAT ON WHATSAPP (+91 9599084873)</span>
              <span className="text-[9px] px-1.5 py-0.5 bg-black text-white rounded font-mono">PRIMARY</span>
            </a>
            <a
              href="https://wa.me/919758807721?text=Hello%20Slate%20Apparels%2C%20I%20am%20interested%20in%20placing%20a%20bulk%20apparel%20order.%20I%20would%20like%20to%20discuss%20products%2C%20MOQ%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2.5 transition-all"
            >
              <span>ALTERNATE WHATSAPP (+91 9758807721)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 17. Monochromatic Footer */}
      <Footer />

      {/* 18. Persistent Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* 19. Product Detail Drawer / Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(prod) => handleRequestQuote(prod)}
        onOpenCustomizer={(prod) => handleOpenCustomizer(prod)}
      />
    </main>
  );
}
