'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { CameraRig } from './CameraRig';
import { FactoryCeilingAndFloor } from './FactoryCeilingAndFloor';
import {
  EntranceZone,
  RawMaterialZone,
  CuttingZone,
  StitchingZone,
  QualityControlZone,
  FinishingZone,
  PackagingZone,
  DispatchZone,
  LuxuryShowroomZone,
} from './FactoryZones';

interface FactoryCanvasProps {
  scrollProgress: number;
}

export default function FactoryCanvas({ scrollProgress }: FactoryCanvasProps) {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="fixed inset-0 bg-[#050507] flex items-center justify-center text-slate-400 p-8 text-center">
        <div>
          <h2 className="text-xl font-bold tracking-widest text-white mb-2">SLATE APPARELS</h2>
          <p className="text-sm text-slate-500">
            WebGL acceleration is disabled on your device. Please use a WebGL-compatible browser to experience the 3D tour.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 2.4, 14], fov: 52, near: 0.1, far: 350 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        onCreated={({ scene, gl }) => {
          scene.background = new THREE.Color('#050507');
          scene.fog = new THREE.FogExp2('#050507', 0.016);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
        }}
      >
        <Suspense fallback={null}>
          <CameraRig scrollProgress={scrollProgress} />
          <FactoryCeilingAndFloor />
          <EntranceZone scrollProgress={scrollProgress} />
          <RawMaterialZone />
          <CuttingZone />
          <StitchingZone />
          <QualityControlZone />
          <FinishingZone />
          <PackagingZone />
          <DispatchZone />
          <LuxuryShowroomZone />
        </Suspense>
      </Canvas>
    </div>
  );
}
