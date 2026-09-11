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
import BulkInquiryForm from '@/components/ui/BulkInquiryForm';
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
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);

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

      // Determine active stage index (0 to 7 for factory stages, 8 for showroom)
      const stageIdx = Math.min(Math.floor(progress * 8.2), 8);
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
    if (product) setQuoteProduct(product);
    const formElement = document.getElementById('inquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
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
      <div id="factory-tour" ref={factoryTrackRef} className="relative h-[650vh] w-full pointer-events-none">
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

      {/* 16. B2B Bulk Inquiry Form */}
      <BulkInquiryForm preselectedProduct={quoteProduct} />

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
