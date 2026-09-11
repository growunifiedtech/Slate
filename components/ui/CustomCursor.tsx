'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState<string | null>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect target element for custom data-cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorLabel = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorLabel) {
        setLabel(cursorLabel);
        setIsPointer(true);
      } else if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setLabel('OPEN');
        setIsPointer(true);
      } else if (target.closest('.group') || target.tagName === 'INPUT' || target.tagName === 'SELECT') {
        setLabel(null);
        setIsPointer(true);
      } else {
        setLabel(null);
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp loop for outer ring
    let animId: number;
    const updateTrail = () => {
      setTrailPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(updateTrail);
    };
    animId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [pos.x, pos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Center sharp dot */}
      <div
        className="fixed w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />

      {/* Outer interactive ring with context label */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 flex items-center justify-center transition-all duration-200 ${
          label
            ? 'w-16 h-16 bg-white text-black font-mono text-[9px] font-bold tracking-widest uppercase scale-100 shadow-2xl'
            : isPointer
            ? 'w-10 h-10 border-white bg-white/10 scale-105'
            : 'w-7 h-7 border-white/30 scale-90'
        }`}
        style={{ left: `${trailPos.x}px`, top: `${trailPos.y}px` }}
      >
        {label && <span>{label}</span>}
      </div>
    </div>
  );
}
