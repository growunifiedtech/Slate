'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

export type LabelType = 'woven' | 'leather' | 'hangtag';

interface InteractiveLabel3DProps {
  brandName: string;
  labelType: LabelType;
  ribbonColor: string;
  threadColor: string;
  sizeLabel: string;
}

// Generate dynamic high-resolution texture for the label
function useLabelTexture({
  brandName,
  labelType,
  ribbonColor,
  threadColor,
  sizeLabel,
}: {
  brandName: string;
  labelType: LabelType;
  ribbonColor: string;
  threadColor: string;
  sizeLabel: string;
}) {
  return useMemo(() => {
    if (typeof window === 'undefined') return null;

    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Background base
    ctx.fillStyle = ribbonColor;
    ctx.fillRect(0, 0, 1024, 1024);

    if (labelType === 'woven') {
      // 1. Woven Damask Micro-Weave Pattern
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      for (let x = 0; x < 1024; x += 6) {
        ctx.fillRect(x, 0, 3, 1024);
      }
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      for (let y = 0; y < 1024; y += 6) {
        ctx.fillRect(0, y, 1024, 3);
      }

      // Top Seam stitch line
      ctx.strokeStyle = threadColor;
      ctx.lineWidth = 4;
      ctx.setLineDash([12, 8]);
      ctx.beginPath();
      ctx.moveTo(60, 90);
      ctx.lineTo(964, 90);
      ctx.stroke();
      ctx.setLineDash([]);

      // Top margin notice
      ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
      ctx.font = 'bold 24px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('SLATE APPARELS // OEM DIVISION', 512, 140);

      // Main Brand Name (Stitched Damask Look)
      ctx.fillStyle = threadColor;
      ctx.shadowColor = 'rgba(0,0,0,0.7)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetY = 2;

      const fontSize = brandName.length > 12 ? 64 : 84;
      ctx.font = `bold ${fontSize}px "Space Grotesk", sans-serif`;
      ctx.letterSpacing = '6px';
      ctx.fillText(brandName.toUpperCase() || 'YOUR BRAND', 512, 420);
      ctx.shadowBlur = 0;

      // Brand Subtitle
      ctx.fillStyle = 'rgba(203, 213, 225, 0.85)';
      ctx.font = 'bold 28px monospace';
      ctx.fillText('PREMIUM STREETWEAR', 512, 480);

      // Dividing ornamental line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(260, 530);
      ctx.lineTo(764, 530);
      ctx.stroke();

      // Fabric specification
      ctx.fillStyle = 'rgba(148, 163, 184, 0.9)';
      ctx.font = '26px monospace';
      ctx.fillText('100% COMBED HEAVYWEIGHT COTTON', 512, 590);
      ctx.fillText('DESIGNED FOR LUXURY DISTRIBUTION', 512, 635);
      ctx.fillText('MADE IN INDIA // NEW DELHI', 512, 680);

      // Care symbols representation
      ctx.font = '32px sans-serif';
      ctx.fillText('🧺 30°   ▲   熨   ⊗   ♨', 512, 750);

      // Size badge pill
      ctx.strokeStyle = threadColor;
      ctx.lineWidth = 3;
      ctx.strokeRect(432, 820, 160, 70);
      ctx.fillStyle = threadColor;
      ctx.font = 'bold 36px monospace';
      ctx.fillText(`SIZE ${sizeLabel}`, 512, 868);

      // Bottom folded edge marker
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(0, 970, 1024, 54);
    } else if (labelType === 'leather') {
      // 2. Embossed Matte Leather Texture
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      for (let i = 0; i < 6000; i++) {
        const px = Math.random() * 1024;
        const py = Math.random() * 1024;
        ctx.fillRect(px, py, 2, 2);
      }

      // Perimeter debossed stitching track
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.lineWidth = 6;
      ctx.strokeRect(50, 50, 924, 924);

      ctx.strokeStyle = threadColor;
      ctx.lineWidth = 4;
      ctx.setLineDash([16, 12]);
      ctx.strokeRect(50, 50, 924, 924);
      ctx.setLineDash([]);

      // Debossed center brand stamp
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      const fontSize = brandName.length > 12 ? 68 : 88;
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(brandName.toUpperCase() || 'YOUR BRAND', 514, 462);

      ctx.fillStyle = threadColor;
      ctx.fillText(brandName.toUpperCase() || 'YOUR BRAND', 512, 460);

      ctx.font = 'bold 30px monospace';
      ctx.fillText('GENUINE APPAREL TRIM', 512, 530);
      ctx.fillText(`SIZE [ ${sizeLabel} ] • EST. INDIA`, 512, 590);
    } else {
      // 3. Thick Cardstock Hangtag with Grommet
      // Metallic Eyelet hole at top
      ctx.beginPath();
      ctx.arc(512, 120, 36, 0, Math.PI * 2);
      ctx.fillStyle = '#0a0d14';
      ctx.fill();
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 12;
      ctx.stroke();

      // Card border
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 3;
      ctx.strokeRect(60, 60, 904, 904);

      // Monogram or Badge
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(452, 260, 120, 120);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 64px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(brandName.charAt(0).toUpperCase() || 'S', 512, 345);

      // Main Brand
      const fontSize = brandName.length > 12 ? 60 : 76;
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.fillText(brandName.toUpperCase() || 'YOUR BRAND', 512, 520);

      ctx.fillStyle = 'rgba(203, 213, 225, 0.8)';
      ctx.font = '26px monospace';
      ctx.fillText('AUTHENTIC APPAREL SPECIFICATION', 512, 580);
      ctx.fillText('SLATE APPARELS MANUFACTURER', 512, 630);

      // Price & barcode mockup
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(260, 700, 504, 110);

      // Barcode bars
      ctx.fillStyle = '#ffffff';
      for (let b = 290; b < 730; b += Math.random() * 12 + 6) {
        ctx.fillRect(b, 720, Math.random() * 5 + 2, 70);
      }

      ctx.font = 'bold 30px monospace';
      ctx.fillText(`SIZE: ${sizeLabel}  |  B2B CERTIFIED`, 512, 870);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    texture.anisotropy = 16;
    return texture;
  }, [brandName, labelType, ribbonColor, threadColor, sizeLabel]);
}

function LabelMesh({
  brandName,
  labelType,
  ribbonColor,
  threadColor,
  sizeLabel,
}: InteractiveLabel3DProps) {
  const meshRef = useRef<THREE.Group>(null);
  const texture = useLabelTexture({
    brandName,
    labelType,
    ribbonColor,
    threadColor,
    sizeLabel,
  });

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle idle breathing floating motion
      const t = state.clock.elapsedTime;
      meshRef.current.rotation.y = Math.sin(t * 0.5) * 0.18;
      meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.04;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* 1. Garment Collar Fabric Backing (Shows how the label attaches to the inside neck of a hoodie/t-shirt) */}
      <mesh position={[0, 0, -0.06]}>
        <planeGeometry args={[3.8, 3.8, 16, 16]} />
        <meshStandardMaterial
          color="#08090d"
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>

      {/* 2. Top Garment Neck Seam Band */}
      <mesh position={[0, 1.45, -0.02]}>
        <boxGeometry args={[3.8, 0.45, 0.08]} />
        <meshStandardMaterial
          color="#121620"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Visible Seam Lockstitch Line */}
      {[-1.6, -1.2, -0.8, -0.4, 0, 0.4, 0.8, 1.2, 1.6].map((x, i) => (
        <mesh key={i} position={[x, 1.35, 0.03]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.04, 0.18, 0.02]} />
          <meshStandardMaterial color="#475569" roughness={0.5} />
        </mesh>
      ))}

      {/* 3. The 3D Label Itself */}
      <group position={[0, 0.05, 0.04]}>
        {/* Label Front Mesh with High-Res Texture */}
        <mesh castShadow receiveShadow>
          <boxGeometry
            args={[
              labelType === 'hangtag' ? 1.8 : 2.2,
              labelType === 'hangtag' ? 2.6 : 2.4,
              0.02,
            ]}
          />
          {texture && (
            <meshStandardMaterial
              map={texture}
              roughness={labelType === 'woven' ? 0.7 : labelType === 'leather' ? 0.5 : 0.4}
              metalness={labelType === 'woven' ? 0.15 : labelType === 'leather' ? 0.2 : 0.05}
            />
          )}
        </mesh>

        {/* Tactile Edge Shadow / Fold */}
        <mesh position={[0, -1.2, -0.01]}>
          <boxGeometry args={[2.2, 0.04, 0.03]} />
          <meshStandardMaterial color="#000000" roughness={1} />
        </mesh>
      </group>

      {/* 4. Hangtag Cord & Safety Pin (when Hangtag type is selected) */}
      {labelType === 'hangtag' && (
        <group position={[0, 1.2, 0.05]}>
          {/* Braided Cotton Cord */}
          <mesh position={[0, 0.35, 0]}>
            <cylinderGeometry args={[0.012, 0.012, 0.7, 8]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.8} />
          </mesh>
          {/* Metallic Safety Pin Head */}
          <mesh position={[0, 0.72, 0]} rotation={[0, 0, Math.PI / 4]}>
            <torusGeometry args={[0.08, 0.015, 8, 16]} />
            <meshStandardMaterial color="#ffffff" metalness={0.95} roughness={0.1} />
          </mesh>
        </group>
      )}
    </group>
  );
}

export default function InteractiveLabel3D({
  brandName = 'YOUR BRAND',
  labelType = 'woven',
  ribbonColor = '#0a0d14',
  threadColor = '#ffffff',
  sizeLabel = 'L',
}: InteractiveLabel3DProps) {
  return (
    <div className="w-full h-full min-h-[360px] relative rounded-none overflow-hidden bg-[#06080d] border border-white/10">
      <Canvas
        shadows
        camera={{ position: [0, 0, 3.4], fov: 48 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.1;
        }}
      >
        <ambientLight intensity={0.7} />
        {/* Key Spotlight on Label Texture */}
        <directionalLight
          position={[3, 5, 4]}
          intensity={1.8}
          color="#ffffff"
          castShadow
        />
        {/* Soft fill light to catch thread relief */}
        <directionalLight
          position={[-3, -2, 2]}
          intensity={0.6}
          color="#94a3b8"
        />
        <pointLight position={[0, 0, 2.5]} intensity={0.8} color="#ffffff" />

        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
          <LabelMesh
            brandName={brandName}
            labelType={labelType}
            ribbonColor={ribbonColor}
            threadColor={threadColor}
            sizeLabel={sizeLabel}
          />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.7}
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
        />
      </Canvas>

      {/* 360 Drag Interaction Cue */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[9px] text-slate-400 font-mono tracking-wider pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span>INTERACTIVE 3D LABEL • DRAG TO TILT 360°</span>
      </div>
    </div>
  );
}
