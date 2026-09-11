'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

interface GarmentProps {
  color?: string;
  type?: 'hoodie' | 'tshirt' | 'jacket' | 'trackpants';
  customLogoText?: string;
}

function GarmentMesh({ color = '#121214', type = 'hoodie', customLogoText }: GarmentProps) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
    }
  });

  return (
    <group ref={meshRef} position={[0, -0.2, 0]}>
      {/* 1. Torso Silhouette */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.7, 0.65, 1.4, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.88}
          metalness={0.08}
          bumpScale={0.05}
        />
      </mesh>

      {/* 2. Shoulders & Arms */}
      <mesh position={[-0.8, 0.4, 0]} rotation={[0, 0, Math.PI / 12]}>
        <cylinderGeometry args={[0.22, 0.18, 1.0, 24]} />
        <meshStandardMaterial color={color} roughness={0.88} metalness={0.08} />
      </mesh>
      <mesh position={[0.8, 0.4, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <cylinderGeometry args={[0.22, 0.18, 1.0, 24]} />
        <meshStandardMaterial color={color} roughness={0.88} metalness={0.08} />
      </mesh>

      {/* 3. Collar or Hood based on type */}
      {type === 'hoodie' && (
        <group position={[0, 0.85, -0.15]}>
          <mesh>
            <sphereGeometry args={[0.38, 24, 24]} />
            <meshStandardMaterial color={color} roughness={0.9} />
          </mesh>
          {/* Hood Drawstrings */}
          <mesh position={[-0.12, -0.25, 0.25]}>
            <cylinderGeometry args={[0.015, 0.015, 0.45]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.5} roughness={0.5} />
          </mesh>
          <mesh position={[0.12, -0.25, 0.25]}>
            <cylinderGeometry args={[0.015, 0.015, 0.45]} />
            <meshStandardMaterial color="#cbd5e1" metalness={0.5} roughness={0.5} />
          </mesh>
        </group>
      )}

      {type === 'tshirt' && (
        <mesh position={[0, 0.78, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.3, 0.04, 16, 32]} />
          <meshStandardMaterial color={color} roughness={0.7} />
        </mesh>
      )}

      {/* 4. Kangaroo Pocket for Hoodie */}
      {type === 'hoodie' && (
        <mesh position={[0, -0.15, 0.58]}>
          <boxGeometry args={[0.65, 0.35, 0.1]} />
          <meshStandardMaterial color={color} roughness={0.9} />
        </mesh>
      )}

      {/* 5. Custom Client Brand Label Simulation */}
      {customLogoText && (
        <mesh position={[0, 0.35, 0.69]}>
          <planeGeometry args={[0.5, 0.22]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      )}

      {/* Hanger / Stand */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.3]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function InteractiveGarment3D({
  color = '#121620',
  type = 'hoodie',
  customLogoText,
}: GarmentProps) {
  return (
    <div className="w-full h-full min-h-[320px] relative rounded-xl overflow-hidden bg-[#0a0d14]/70 border border-white/10">
      <Canvas camera={{ position: [0, 0.5, 3.2], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -4, -5]} intensity={0.4} color="#94a3b8" />
        <pointLight position={[0, 2, 2]} intensity={1.0} color="#ffffff" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <GarmentMesh color={color} type={type} customLogoText={customLogoText} />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>

      {/* 360 Drag Interaction Cue */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-slate-400 font-mono tracking-wider pointer-events-none">
        DRAG TO ROTATE 360°
      </div>
    </div>
  );
}
