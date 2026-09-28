'use client';

import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';

// Monochromatic color palette constants for 3D materials
const PALETTE = {
  black: '#050507',
  deepSlate: '#0a0d14',
  slateDark: '#121620',
  slateMedium: '#1a202c',
  slateLight: '#2d3748',
  graphite: '#4a5568',
  steel: '#718096',
  silver: '#cbd5e0',
  white: '#f7fafc',
  glowWhite: '#ffffff',
  laserWhite: '#e2e8f0',
};

// 1. FACTORY EXTERIOR & ENTRANCE (Z: 0 to -25)
export function EntranceZone({ scrollProgress }: { scrollProgress: number }) {
  const leftDoorRef = useRef<THREE.Group>(null);
  const rightDoorRef = useRef<THREE.Group>(null);

  // Doors slide open as scroll progresses past 0.05
  useFrame(() => {
    const doorOpen = Math.min(Math.max((scrollProgress - 0.04) * 12, 0), 1);
    if (leftDoorRef.current) leftDoorRef.current.position.x = -2.5 - doorOpen * 3.5;
    if (rightDoorRef.current) rightDoorRef.current.position.x = 2.5 + doorOpen * 3.5;
  });

  return (
    <group position={[0, 0, -10]}>
      {/* Industrial Facade Pillars */}
      <mesh position={[-6, 5, 0]}>
        <boxGeometry args={[2, 10, 2]} />
        <meshStandardMaterial color={PALETTE.slateDark} roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[6, 5, 0]}>
        <boxGeometry args={[2, 10, 2]} />
        <meshStandardMaterial color={PALETTE.slateDark} roughness={0.7} metalness={0.3} />
      </mesh>

      {/* Heavy Overhead Portal Beam */}
      <mesh position={[0, 9.5, 0]}>
        <boxGeometry args={[14, 1.8, 2.5]} />
        <meshStandardMaterial color={PALETTE.deepSlate} roughness={0.6} metalness={0.5} />
      </mesh>

      {/* Luminous Monochromatic Signage */}
      <group position={[0, 9.5, 1.3]}>
        <Text
          fontSize={0.9}
          color={PALETTE.white}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.18}
        >
          SLATE APPARELS
        </Text>
        <Text
          position={[0, -0.65, 0]}
          fontSize={0.24}
          color={PALETTE.silver}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.25}
        >
          MANUFACTURING • WHOLESALE • EXPORT
        </Text>
      </group>

      {/* Sliding Industrial Security Doors */}
      <group ref={leftDoorRef} position={[-2.5, 4.2, 0.2]}>
        <mesh>
          <boxGeometry args={[5, 8.4, 0.3]} />
          <meshStandardMaterial color={PALETTE.slateMedium} roughness={0.4} metalness={0.7} />
        </mesh>
        {/* Reinforced industrial door ribs */}
        {[-3, -1, 1, 3].map((y, i) => (
          <mesh key={i} position={[0, y, 0.2]}>
            <boxGeometry args={[4.8, 0.15, 0.1]} />
            <meshStandardMaterial color={PALETTE.steel} metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
      </group>

      <group ref={rightDoorRef} position={[2.5, 4.2, 0.2]}>
        <mesh>
          <boxGeometry args={[5, 8.4, 0.3]} />
          <meshStandardMaterial color={PALETTE.slateMedium} roughness={0.4} metalness={0.7} />
        </mesh>
        {[-3, -1, 1, 3].map((y, i) => (
          <mesh key={i} position={[0, y, 0.2]}>
            <boxGeometry args={[4.8, 0.15, 0.1]} />
            <meshStandardMaterial color={PALETTE.steel} metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
      </group>

      {/* Industrial Entry Floor Plate with Hazard Striping */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color={PALETTE.slateDark} roughness={0.8} metalness={0.4} />
      </mesh>
    </group>
  );
}

// 2. ZONE 01: RAW MATERIAL (Z: -30 to -55)
export function RawMaterialZone() {
  const fabricRollsRef = useRef<THREE.Group>(null);

  // Subtle floating fiber particles
  const particleCount = 60;
  const particlePositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = Math.random() * 6 + 0.5;
      pos[i * 3 + 2] = -42 + (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (fabricRollsRef.current) {
      fabricRollsRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  const rollColors = [
    PALETTE.black,
    PALETTE.slateDark,
    PALETTE.slateMedium,
    PALETTE.graphite,
    PALETTE.silver,
    PALETTE.white,
  ];

  return (
    <group position={[0, 0, -38]}>
      {/* Left Multi-Tier Fabric Storage Rack */}
      <group position={[-5.5, 0, 0]}>
        {/* Steel Uprights */}
        {[-4, 0, 4].map((z, idx) => (
          <mesh key={idx} position={[0, 4, z]}>
            <boxGeometry args={[0.3, 8, 0.3]} />
            <meshStandardMaterial color={PALETTE.graphite} metalness={0.8} roughness={0.3} />
          </mesh>
        ))}

        {/* Shelves & Fabric Rolls */}
        {[1.2, 3.2, 5.2, 7.0].map((shelfY, sIdx) => (
          <group key={sIdx} position={[0, shelfY, 0]}>
            {/* Shelf Crossbeam */}
            <mesh position={[0, -0.1, 0]}>
              <boxGeometry args={[1.2, 0.15, 9]} />
              <meshStandardMaterial color={PALETTE.steel} metalness={0.7} roughness={0.4} />
            </mesh>
            {/* Rows of cylindrical fabric rolls */}
            {[-3.5, -2.1, -0.7, 0.7, 2.1, 3.5].map((rollZ, rIdx) => {
              const color = rollColors[(sIdx * 2 + rIdx) % rollColors.length];
              return (
                <mesh key={rIdx} position={[0, 0.45, rollZ]} rotation={[0, 0, Math.PI / 2]}>
                  <cylinderGeometry args={[0.38, 0.38, 1.4, 20]} />
                  <meshStandardMaterial color={color} roughness={0.85} metalness={0.05} />
                </mesh>
              );
            })}
          </group>
        ))}
      </group>

      {/* Right Multi-Tier Fabric Storage Rack */}
      <group position={[5.5, 0, 0]}>
        {[-4, 0, 4].map((z, idx) => (
          <mesh key={idx} position={[0, 4, z]}>
            <boxGeometry args={[0.3, 8, 0.3]} />
            <meshStandardMaterial color={PALETTE.graphite} metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
        {[1.2, 3.2, 5.2, 7.0].map((shelfY, sIdx) => (
          <group key={sIdx} position={[0, shelfY, 0]}>
            <mesh position={[0, -0.1, 0]}>
              <boxGeometry args={[1.2, 0.15, 9]} />
              <meshStandardMaterial color={PALETTE.steel} metalness={0.7} roughness={0.4} />
            </mesh>
            {[-3.5, -2.1, -0.7, 0.7, 2.1, 3.5].map((rollZ, rIdx) => {
              const color = rollColors[(sIdx * 3 + rIdx + 1) % rollColors.length];
              return (
                <mesh key={rIdx} position={[0, 0.45, rollZ]} rotation={[0, 0, Math.PI / 2]}>
                  <cylinderGeometry args={[0.38, 0.38, 1.4, 20]} />
                  <meshStandardMaterial color={color} roughness={0.85} metalness={0.05} />
                </mesh>
              );
            })}
          </group>
        ))}
      </group>

      {/* Center Wood Pallets with Stacked Fabric Bolts */}
      <group position={[-1.8, 0, 2]}>
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1.8, 0.25, 2.4]} />
          <meshStandardMaterial color={PALETTE.slateDark} roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[1.6, 0.7, 2.2]} />
          <meshStandardMaterial color={PALETTE.slateMedium} roughness={0.9} />
        </mesh>
      </group>

      {/* Floating Fiber Dust Motes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color={PALETTE.silver} transparent opacity={0.4} />
      </points>

      {/* Overhead Zone Label */}
      <mesh position={[0, 6.8, 0]}>
        <boxGeometry args={[5, 0.8, 0.1]} />
        <meshStandardMaterial color={PALETTE.deepSlate} metalness={0.6} roughness={0.4} />
      </mesh>
      <Text
        position={[0, 6.8, 0.08]}
        fontSize={0.28}
        color={PALETTE.white}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.2}
      >
        01 // RAW MATERIAL STORAGE
      </Text>
    </group>
  );
}



// 4. ZONE 03: STITCHING & 50,000 PCS/MO CAPACITY (Z: -90 to -120)
export function StitchingZone() {
  const needleGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (needleGroupRef.current) {
      // Rapid vertical needle pulse
      const t = state.clock.elapsedTime * 28;
      needleGroupRef.current.position.y = 1.62 + Math.abs(Math.sin(t)) * 0.08;
    }
  });

  return (
    <group position={[0, 0, -75]}>
      {/* Linear Rows of Industrial Sewing Stations (Left & Right) */}
      {[-3.2, 3.2].map((rowX, rowIdx) => (
        <group key={rowIdx} position={[rowX, 0, 0]}>
          {[-7, -3.5, 0, 3.5, 7].map((tableZ, sIdx) => (
            <group key={sIdx} position={[0, 0, tableZ]}>
              {/* Sewing Workbench */}
              <mesh position={[0, 1.1, 0]}>
                <boxGeometry args={[1.6, 0.1, 2.2]} />
                <meshStandardMaterial color={PALETTE.slateDark} roughness={0.5} metalness={0.5} />
              </mesh>
              {/* Steel Legs */}
              <mesh position={[-0.6, 0.55, -0.8]}>
                <cylinderGeometry args={[0.04, 0.04, 1.1]} />
                <meshStandardMaterial color={PALETTE.graphite} metalness={0.8} roughness={0.2} />
              </mesh>
              <mesh position={[0.6, 0.55, -0.8]}>
                <cylinderGeometry args={[0.04, 0.04, 1.1]} />
                <meshStandardMaterial color={PALETTE.graphite} metalness={0.8} roughness={0.2} />
              </mesh>
              <mesh position={[-0.6, 0.55, 0.8]}>
                <cylinderGeometry args={[0.04, 0.04, 1.1]} />
                <meshStandardMaterial color={PALETTE.graphite} metalness={0.8} roughness={0.2} />
              </mesh>
              <mesh position={[0.6, 0.55, 0.8]}>
                <cylinderGeometry args={[0.04, 0.04, 1.1]} />
                <meshStandardMaterial color={PALETTE.graphite} metalness={0.8} roughness={0.2} />
              </mesh>

              {/* Industrial Sewing Machine Head (Cast iron / steel) */}
              <group position={[0, 1.35, 0]}>
                {/* Machine Base */}
                <mesh position={[0, 0.06, 0]}>
                  <boxGeometry args={[0.4, 0.08, 0.9]} />
                  <meshStandardMaterial color={PALETTE.silver} metalness={0.8} roughness={0.2} />
                </mesh>
                {/* Vertical Casting Arm */}
                <mesh position={[0, 0.25, 0.3]}>
                  <boxGeometry args={[0.22, 0.45, 0.25]} />
                  <meshStandardMaterial color={PALETTE.silver} metalness={0.85} roughness={0.2} />
                </mesh>
                {/* Overhanging Head */}
                <mesh position={[0, 0.45, 0.05]}>
                  <boxGeometry args={[0.2, 0.16, 0.65]} />
                  <meshStandardMaterial color={PALETTE.silver} metalness={0.85} roughness={0.2} />
                </mesh>
                {/* Handwheel */}
                <mesh position={[0, 0.35, 0.46]} rotation={[Math.PI / 2, 0, 0]}>
                  <cylinderGeometry args={[0.14, 0.14, 0.06, 16]} />
                  <meshStandardMaterial color={PALETTE.graphite} metalness={0.9} roughness={0.2} />
                </mesh>
                {/* Thread Stand with Cones */}
                <mesh position={[0.3, 0.5, 0.35]}>
                  <cylinderGeometry args={[0.015, 0.015, 0.9]} />
                  <meshStandardMaterial color={PALETTE.steel} />
                </mesh>
                <mesh position={[0.3, 0.7, 0.35]}>
                  <coneGeometry args={[0.08, 0.24, 16]} />
                  <meshStandardMaterial color={PALETTE.white} roughness={0.9} />
                </mesh>
              </group>

              {/* Operator Ergonomic Stool */}
              <mesh position={[rowX > 0 ? -1.0 : 1.0, 0.5, 0]}>
                <cylinderGeometry args={[0.22, 0.22, 0.08, 16]} />
                <meshStandardMaterial color={PALETTE.deepSlate} roughness={0.7} />
              </mesh>
            </group>
          ))}
        </group>
      ))}

      {/* Floating Needles Animated */}
      <group ref={needleGroupRef} position={[0, 0, 0]} />

      {/* Dramatic Floating 50,000 Capacity Monument */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <group position={[0, 4.6, 0]}>
          <mesh position={[0, 0, -0.2]}>
            <boxGeometry args={[5.2, 2.2, 0.2]} />
            <meshStandardMaterial
              color={PALETTE.deepSlate}
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.85}
            />
          </mesh>
          <Text
            position={[0, 0.45, 0]}
            fontSize={0.95}
            color={PALETTE.glowWhite}
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.08}
          >
            50,000
          </Text>
          <Text
            position={[0, -0.35, 0]}
            fontSize={0.24}
            color={PALETTE.silver}
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.25}
          >
            PIECES / MONTH CAPACITY
          </Text>
        </group>
      </Float>

      {/* Overhead Zone Banner */}
      <Text
        position={[0, 7.2, 0]}
        fontSize={0.28}
        color={PALETTE.white}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.2}
      >
        02 // HIGH-PRECISION STITCHING LINES
      </Text>
    </group>
  );
}

// 3. ZONE 03: QUALITY & PACKAGING (Z: -112)
export function QualityAndPackagingZone() {
  const boxGroupRef = useRef<THREE.Group>(null);
  const checkItems = ['FABRIC AUDIT', 'STITCH INTEGRITY', 'FINISHING & LABELS', 'FINAL DISPATCH CHECK'];

  useFrame((state) => {
    if (boxGroupRef.current) {
      const t = (state.clock.elapsedTime * 0.8) % 3.0;
      boxGroupRef.current.position.z = -t;
    }
  });

  return (
    <group position={[0, 0, -112]}>
      {/* High-CRI Pristine White Inspection Table */}
      <group position={[-2.8, 0, 0]}>
        <mesh position={[0, 1.3, 0]}>
          <boxGeometry args={[3.4, 0.2, 4.4]} />
          <meshStandardMaterial color={PALETTE.white} roughness={0.15} metalness={0.2} />
        </mesh>
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[3.0, 1.2, 4.0]} />
          <meshStandardMaterial color={PALETTE.slateDark} roughness={0.6} metalness={0.4} />
        </mesh>
        {/* Overhead Luminaire */}
        <mesh position={[0, 4.2, 0]}>
          <boxGeometry args={[3.0, 0.2, 4.0]} />
          <meshStandardMaterial color={PALETTE.slateLight} metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 4.05, 0]}>
          <planeGeometry args={[2.8, 3.8]} />
          <meshBasicMaterial color={PALETTE.glowWhite} />
        </mesh>
        <pointLight position={[0, 3.8, 0]} intensity={3.5} distance={8} color={PALETTE.white} />
        {/* Inspected Garment Silhouette */}
        <mesh position={[0, 1.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.6, 2.0]} />
          <meshStandardMaterial color={PALETTE.slateMedium} roughness={0.9} />
        </mesh>
      </group>

      {/* Automated Packaging Conveyor */}
      <group position={[2.8, 0, 0]}>
        <mesh position={[0, 1.1, 0]}>
          <boxGeometry args={[1.6, 0.2, 8]} />
          <meshStandardMaterial color={PALETTE.slateDark} roughness={0.3} metalness={0.7} />
        </mesh>
        <mesh position={[-0.85, 1.3, 0]}>
          <boxGeometry args={[0.08, 0.25, 8]} />
          <meshStandardMaterial color={PALETTE.steel} metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.85, 1.3, 0]}>
          <boxGeometry args={[0.08, 0.25, 8]} />
          <meshStandardMaterial color={PALETTE.steel} metalness={0.8} roughness={0.2} />
        </mesh>
        {[-3, 0, 3].map((z, lIdx) => (
          <group key={lIdx} position={[0, 0.55, z]}>
            <mesh position={[-0.75, 0, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 1.1]} />
              <meshStandardMaterial color={PALETTE.graphite} metalness={0.8} />
            </mesh>
            <mesh position={[0.75, 0, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 1.1]} />
              <meshStandardMaterial color={PALETTE.graphite} metalness={0.8} />
            </mesh>
          </group>
        ))}
        {/* Moving Custom Brand Packaging Boxes */}
        <group ref={boxGroupRef}>
          {[-2.5, 0.5, 3.5].map((boxZ, bIdx) => (
            <group key={bIdx} position={[0, 1.42, boxZ]}>
              <mesh>
                <boxGeometry args={[0.85, 0.42, 1.1]} />
                <meshStandardMaterial color={PALETTE.deepSlate} roughness={0.4} metalness={0.4} />
              </mesh>
              <mesh position={[0, 0.22, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.55, 0.7]} />
                <meshStandardMaterial color={PALETTE.white} roughness={0.9} />
              </mesh>
            </group>
          ))}
        </group>
      </group>

      {/* 4-Tier Interactive Quality Checkpoint Signboards */}
      <group position={[0, 2.8, 3.2]}>
        {checkItems.map((item, idx) => (
          <group key={idx} position={[(idx - 1.5) * 1.8, 0, 0]}>
            <mesh>
              <boxGeometry args={[1.55, 0.55, 0.08]} />
              <meshStandardMaterial
                color={PALETTE.deepSlate}
                roughness={0.3}
                metalness={0.7}
              />
            </mesh>
            <Text
              position={[0, 0, 0.06]}
              fontSize={0.14}
              color={PALETTE.glowWhite}
              anchorX="center"
              anchorY="middle"
              letterSpacing={0.12}
            >
              {`✓ ${item}`}
            </Text>
          </group>
        ))}
      </group>

      {/* Overhead Zone Banner */}
      <Text
        position={[0, 6.8, 0]}
        fontSize={0.28}
        color={PALETTE.white}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.2}
      >
        03 // QUALITY CONTROL & BRAND PACKAGING
      </Text>
    </group>
  );
}

// 4. THE TRANSITION PORTAL & LUXURY SHOWROOM (Z: -130 to -165)
export function LuxuryShowroomZone() {
  const showroomPedestalRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (showroomPedestalRef.current) {
      showroomPedestalRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <group position={[0, 0, -150]}>
      {/* Architectural Threshold Portal between Factory & Showroom */}
      <group position={[0, 0, 18]}>
        <mesh position={[-4.5, 4.5, 0]}>
          <boxGeometry args={[2, 9, 2]} />
          <meshStandardMaterial color={PALETTE.black} roughness={0.2} metalness={0.8} />
        </mesh>
        <mesh position={[4.5, 4.5, 0]}>
          <boxGeometry args={[2, 9, 2]} />
          <meshStandardMaterial color={PALETTE.black} roughness={0.2} metalness={0.8} />
        </mesh>
        <mesh position={[0, 8.5, 0]}>
          <boxGeometry args={[11, 1, 2]} />
          <meshStandardMaterial color={PALETTE.black} roughness={0.2} metalness={0.8} />
        </mesh>
        {/* Radiant Luminous Portal Framing */}
        <mesh position={[0, 4.2, -0.2]}>
          <boxGeometry args={[7.2, 7.8, 0.1]} />
          <meshBasicMaterial color={PALETTE.white} transparent opacity={0.06} />
        </mesh>
      </group>

      {/* Luxury Showroom Architecture: Obsidian Flooring & Dark Minimalist Concrete */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[22, 40]} />
        <meshStandardMaterial
          color={PALETTE.black}
          roughness={0.08}
          metalness={0.85}
        />
      </mesh>

      {/* Dramatic Downward Pin-Spotlights on Runway */}
      <pointLight position={[0, 7.5, 6]} intensity={3.5} distance={14} color={PALETTE.white} />
      <pointLight position={[0, 7.5, -4]} intensity={3.5} distance={14} color={PALETTE.white} />

      {/* Central Rotating Pedestal for Master Showcase Garment */}
      <group position={[0, 0, 0]}>
        {/* Tiered Marble/Obsidian Display Pedestal */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[2.4, 2.6, 0.6, 40]} />
          <meshStandardMaterial color={PALETTE.deepSlate} roughness={0.15} metalness={0.7} />
        </mesh>
        <mesh position={[0, 0.65, 0]}>
          <cylinderGeometry args={[1.8, 1.8, 0.1, 40]} />
          <meshStandardMaterial color={PALETTE.white} roughness={0.1} metalness={0.9} />
        </mesh>

        {/* Rotating Monochromatic Showcase Mannequin & Apparel Profile */}
        <group ref={showroomPedestalRef} position={[0, 0.7, 0]}>
          {/* Mannequin Stand Pole */}
          <mesh position={[0, 0.8, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 1.6]} />
            <meshStandardMaterial color={PALETTE.silver} metalness={0.95} roughness={0.05} />
          </mesh>
          {/* Stylized Torso / Oversized Heavyweight Hoodie Form */}
          <mesh position={[0, 1.7, 0]}>
            <cylinderGeometry args={[0.38, 0.32, 1.0, 24]} />
            <meshStandardMaterial color={PALETTE.black} roughness={0.85} metalness={0.1} />
          </mesh>
          {/* Shoulders & Arms */}
          <mesh position={[0, 2.1, 0]}>
            <boxGeometry args={[1.1, 0.28, 0.45]} />
            <meshStandardMaterial color={PALETTE.black} roughness={0.85} metalness={0.1} />
          </mesh>
          {/* Double-Layered Hood Silhouette */}
          <mesh position={[0, 2.35, -0.05]}>
            <sphereGeometry args={[0.26, 20, 20]} />
            <meshStandardMaterial color={PALETTE.black} roughness={0.85} metalness={0.1} />
          </mesh>
        </group>
      </group>

      {/* Showroom Wall Typographic Statement */}
      <group position={[0, 5.5, -16]}>
        <Text
          position={[0, 0.6, 0]}
          fontSize={0.85}
          color={PALETTE.white}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.15}
        >
          NOW, LET&apos;S TALK PRODUCT.
        </Text>
        <Text
          position={[0, -0.2, 0]}
          fontSize={0.25}
          color={PALETTE.silver}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.25}
        >
          HOODIES • JACKETS • T-SHIRTS • TRACKSUITS • KNITWEAR
        </Text>
      </group>
    </group>
  );
}
