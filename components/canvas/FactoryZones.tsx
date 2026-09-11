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
    <group position={[0, 0, -42]}>
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

// 3. ZONE 02: CUTTING (Z: -60 to -85)
export function CuttingZone() {
  const laserBeamRef = useRef<THREE.Mesh>(null);
  const cuttingHeadRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const laserX = Math.sin(t * 1.8) * 1.6;
    if (cuttingHeadRef.current) {
      cuttingHeadRef.current.position.x = laserX;
    }
    if (laserBeamRef.current) {
      laserBeamRef.current.position.x = laserX;
      // Subtle pulse in intensity
      const mat = laserBeamRef.current.material as THREE.MeshBasicMaterial;
      if (mat) mat.opacity = 0.55 + Math.sin(t * 10) * 0.15;
    }
  });

  return (
    <group position={[0, 0, -72]}>
      {/* Industrial High-Precision Cutting Table */}
      <group position={[0, 0, 0]}>
        {/* Table Top Surface */}
        <mesh position={[0, 1.4, 0]}>
          <boxGeometry args={[4.2, 0.2, 8]} />
          <meshStandardMaterial color={PALETTE.slateDark} roughness={0.4} metalness={0.6} />
        </mesh>

        {/* Fabric Spread Stack (Multi-layer fabric ready for cut) */}
        <mesh position={[0, 1.55, 0]}>
          <boxGeometry args={[3.6, 0.1, 7.2]} />
          <meshStandardMaterial color={PALETTE.graphite} roughness={0.9} metalness={0.1} />
        </mesh>

        {/* Heavy Table Framework & Legs */}
        {[-1.8, 1.8].map((x, xIdx) =>
          [-3.5, 0, 3.5].map((z, zIdx) => (
            <mesh key={`${xIdx}-${zIdx}`} position={[x, 0.7, z]}>
              <boxGeometry args={[0.2, 1.4, 0.2]} />
              <meshStandardMaterial color={PALETTE.deepSlate} metalness={0.7} roughness={0.3} />
            </mesh>
          ))
        )}

        {/* Gantry Overhead Bridge (Moves along length) */}
        <group position={[0, 2.8, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[4.4, 0.25, 0.4]} />
            <meshStandardMaterial color={PALETTE.steel} metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Side Gantry Uprights */}
          <mesh position={[-2.1, -0.65, 0]}>
            <boxGeometry args={[0.18, 1.4, 0.35]} />
            <meshStandardMaterial color={PALETTE.slateMedium} metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[2.1, -0.65, 0]}>
            <boxGeometry args={[0.18, 1.4, 0.35]} />
            <meshStandardMaterial color={PALETTE.slateMedium} metalness={0.7} roughness={0.3} />
          </mesh>

          {/* Precision Cutting Head */}
          <group ref={cuttingHeadRef} position={[0, -0.15, 0]}>
            <mesh>
              <boxGeometry args={[0.45, 0.35, 0.3]} />
              <meshStandardMaterial color={PALETTE.white} metalness={0.9} roughness={0.1} />
            </mesh>
          </group>
        </group>

        {/* Projected Laser Guide Line (Monochromatic sharp white line) */}
        <mesh ref={laserBeamRef} position={[0, 1.62, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.04, 7.2]} />
          <meshBasicMaterial color={PALETTE.glowWhite} transparent opacity={0.7} />
        </mesh>

        {/* CAD Blueprint Display Monitor Console */}
        <group position={[2.8, 1.8, 2]}>
          <mesh>
            <boxGeometry args={[0.08, 0.9, 1.2]} />
            <meshStandardMaterial color={PALETTE.deepSlate} metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Glowing CAD Screen */}
          <mesh position={[-0.05, 0, 0]}>
            <planeGeometry args={[1.1, 0.8]} />
            <meshBasicMaterial color={PALETTE.silver} />
          </mesh>
        </group>
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
        02 // PRECISION CAD & LASER CUTTING
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
    <group position={[0, 0, -105]}>
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
        03 // HIGH-PRECISION STITCHING LINES
      </Text>
    </group>
  );
}

// 5. ZONE 04: QUALITY CONTROL (Z: -125 to -150)
export function QualityControlZone() {
  const checkItems = ['FABRIC', 'STITCHING', 'FINISHING', 'FINAL CHECK'];

  return (
    <group position={[0, 0, -138]}>
      {/* High-CRI Pristine White Inspection Table */}
      <mesh position={[0, 1.3, 0]}>
        <boxGeometry args={[4.4, 0.2, 5.5]} />
        <meshStandardMaterial color={PALETTE.white} roughness={0.15} metalness={0.2} />
      </mesh>
      {/* Heavy Base */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[3.8, 1.2, 4.8]} />
        <meshStandardMaterial color={PALETTE.slateDark} roughness={0.6} metalness={0.4} />
      </mesh>

      {/* Bright Overhead Luminaire (High inspection lighting) */}
      <mesh position={[0, 4.2, 0]}>
        <boxGeometry args={[3.8, 0.2, 4.8]} />
        <meshStandardMaterial color={PALETTE.slateLight} metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, 4.05, 0]}>
        <planeGeometry args={[3.6, 4.6]} />
        <meshBasicMaterial color={PALETTE.glowWhite} />
      </mesh>
      <pointLight position={[0, 3.8, 0]} intensity={4.5} distance={9} color={PALETTE.white} />

      {/* Inspected Garment Silhouette on Table */}
      <mesh position={[0, 1.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.8, 2.2]} />
        <meshStandardMaterial color={PALETTE.slateMedium} roughness={0.9} />
      </mesh>

      {/* 4-Tier Interactive Quality Checkpoint Signboards */}
      <group position={[0, 2.8, 3.2]}>
        {checkItems.map((item, idx) => (
          <group key={idx} position={[(idx - 1.5) * 1.6, 0, 0]}>
            <mesh>
              <boxGeometry args={[1.35, 0.55, 0.08]} />
              <meshStandardMaterial
                color={PALETTE.deepSlate}
                roughness={0.3}
                metalness={0.7}
              />
            </mesh>
            <Text
              position={[0, 0, 0.06]}
              fontSize={0.16}
              color={PALETTE.glowWhite}
              anchorX="center"
              anchorY="middle"
              letterSpacing={0.15}
            >
              {`✓ ${item}`}
            </Text>
          </group>
        ))}
      </group>

      <Text
        position={[0, 6.8, 0]}
        fontSize={0.28}
        color={PALETTE.white}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.2}
      >
        04 // 4-TIER RIGOROUS QUALITY CONTROL
      </Text>
    </group>
  );
}

// 6. ZONE 05: FINISHING (Z: -155 to -175)
export function FinishingZone() {
  return (
    <group position={[0, 0, -165]}>
      {/* Industrial Steam Vacuum Tables */}
      {[-2.4, 2.4].map((x, idx) => (
        <group key={idx} position={[x, 0, 0]}>
          {/* Ironing Surface */}
          <mesh position={[0, 1.25, 0]}>
            <boxGeometry args={[1.4, 0.15, 3.2]} />
            <meshStandardMaterial color={PALETTE.slateMedium} roughness={0.4} metalness={0.6} />
          </mesh>
          {/* Base & Steam Generator Boiler */}
          <mesh position={[0, 0.6, 0]}>
            <boxGeometry args={[1.2, 1.1, 2.8]} />
            <meshStandardMaterial color={PALETTE.slateDark} metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Overhead Steam Iron Spring Suspender */}
          <mesh position={[0, 2.2, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 1.8]} />
            <meshStandardMaterial color={PALETTE.steel} />
          </mesh>
          {/* Heavy Steam Iron Head */}
          <mesh position={[0, 1.4, 0]}>
            <boxGeometry args={[0.22, 0.14, 0.4]} />
            <meshStandardMaterial color={PALETTE.silver} metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* Finished Garment Rolling Rack with Folded & Hanging Apparel */}
      <group position={[0, 0, 0]}>
        {/* Chrome Rolling Rack Rail */}
        <mesh position={[0, 2.0, 0]}>
          <boxGeometry args={[0.06, 0.06, 4.8]} />
          <meshStandardMaterial color={PALETTE.silver} metalness={0.95} roughness={0.1} />
        </mesh>
        {/* End Support Posts */}
        <mesh position={[0, 1.0, -2.4]}>
          <cylinderGeometry args={[0.03, 0.03, 2.0]} />
          <meshStandardMaterial color={PALETTE.silver} metalness={0.95} roughness={0.1} />
        </mesh>
        <mesh position={[0, 1.0, 2.4]}>
          <cylinderGeometry args={[0.03, 0.03, 2.0]} />
          <meshStandardMaterial color={PALETTE.silver} metalness={0.95} roughness={0.1} />
        </mesh>

        {/* Array of Hanging Hoodies / Shirts (Monochromatic) */}
        {[-2.0, -1.5, -1.0, -0.5, 0, 0.5, 1.0, 1.5, 2.0].map((z, hIdx) => (
          <mesh key={hIdx} position={[0, 1.3, z]}>
            <boxGeometry args={[0.7, 1.2, 0.14]} />
            <meshStandardMaterial
              color={hIdx % 2 === 0 ? PALETTE.black : PALETTE.slateMedium}
              roughness={0.8}
            />
          </mesh>
        ))}
      </group>

      <Text
        position={[0, 6.8, 0]}
        fontSize={0.28}
        color={PALETTE.white}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.2}
      >
        05 // STEAM FINISHING & BRAND LABELS
      </Text>
    </group>
  );
}

// 7. ZONE 06: PACKAGING (Z: -180 to -205)
export function PackagingZone() {
  const boxGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (boxGroupRef.current) {
      // Subtle conveyor translation
      const t = (state.clock.elapsedTime * 0.8) % 3.0;
      boxGroupRef.current.position.z = -t;
    }
  });

  return (
    <group position={[0, 0, -192]}>
      {/* Central Industrial Conveyor Assembly */}
      <group position={[0, 0, 0]}>
        {/* Conveyor Bed */}
        <mesh position={[0, 1.1, 0]}>
          <boxGeometry args={[1.8, 0.2, 12]} />
          <meshStandardMaterial color={PALETTE.slateDark} roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Conveyor Side Rails */}
        <mesh position={[-0.95, 1.3, 0]}>
          <boxGeometry args={[0.08, 0.25, 12]} />
          <meshStandardMaterial color={PALETTE.steel} metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.95, 1.3, 0]}>
          <boxGeometry args={[0.08, 0.25, 12]} />
          <meshStandardMaterial color={PALETTE.steel} metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Steel Support Legs */}
        {[-5, -2, 1, 4].map((z, lIdx) => (
          <group key={lIdx} position={[0, 0.55, z]}>
            <mesh position={[-0.85, 0, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 1.1]} />
              <meshStandardMaterial color={PALETTE.graphite} metalness={0.8} />
            </mesh>
            <mesh position={[0.85, 0, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 1.1]} />
              <meshStandardMaterial color={PALETTE.graphite} metalness={0.8} />
            </mesh>
          </group>
        ))}

        {/* Conveyor Moving Custom Brand Boxes */}
        <group ref={boxGroupRef}>
          {[-4, -1, 2, 5].map((boxZ, bIdx) => (
            <group key={bIdx} position={[0, 1.42, boxZ]}>
              <mesh>
                <boxGeometry args={[0.95, 0.45, 1.2]} />
                <meshStandardMaterial color={PALETTE.deepSlate} roughness={0.4} metalness={0.4} />
              </mesh>
              {/* Monochromatic Brand Label on Box */}
              <mesh position={[0, 0.23, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.6, 0.8]} />
                <meshStandardMaterial color={PALETTE.white} roughness={0.9} />
              </mesh>
            </group>
          ))}
        </group>
      </group>

      <Text
        position={[0, 6.8, 0]}
        fontSize={0.28}
        color={PALETTE.white}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.2}
      >
        06 // AUTOMATED FOLDING & CUSTOM PACKAGING
      </Text>
    </group>
  );
}

// 8. ZONE 07: DISPATCH & LOGISTICS (Z: -210 to -235)
export function DispatchZone() {
  return (
    <group position={[0, 0, -222]}>
      {/* High-Bay Heavy Cargo Pallet Racks (Left & Right) */}
      {[-4.8, 4.8].map((rackX, rIdx) => (
        <group key={rIdx} position={[rackX, 0, 0]}>
          {/* Heavy Uprights */}
          {[-4.5, 0, 4.5].map((z, uIdx) => (
            <mesh key={uIdx} position={[0, 4.2, z]}>
              <boxGeometry args={[0.3, 8.4, 0.3]} />
              <meshStandardMaterial color={PALETTE.graphite} metalness={0.8} roughness={0.2} />
            </mesh>
          ))}

          {/* Stored Palletized Master Cartons */}
          {[1.2, 3.6, 6.0].map((levelY, levIdx) => (
            <group key={levIdx} position={[0, levelY, 0]}>
              <mesh position={[0, -0.1, 0]}>
                <boxGeometry args={[1.6, 0.15, 10]} />
                <meshStandardMaterial color={PALETTE.steel} metalness={0.7} />
              </mesh>
              {[-3.5, -1.2, 1.2, 3.5].map((cartonZ, cIdx) => (
                <mesh key={cIdx} position={[0, 0.7, cartonZ]}>
                  <boxGeometry args={[1.3, 1.2, 1.8]} />
                  <meshStandardMaterial color={PALETTE.slateDark} roughness={0.7} metalness={0.3} />
                </mesh>
              ))}
            </group>
          ))}
        </group>
      ))}

      {/* Industrial Dispatch Bay Exit Sign */}
      <group position={[0, 4.8, 6]}>
        <mesh>
          <boxGeometry args={[6.5, 1.4, 0.2]} />
          <meshStandardMaterial color={PALETTE.deepSlate} metalness={0.8} roughness={0.2} />
        </mesh>
        <Text
          position={[0, 0.25, 0.12]}
          fontSize={0.45}
          color={PALETTE.glowWhite}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.12}
        >
          INDIA + INTERNATIONAL MARKETS
        </Text>
        <Text
          position={[0, -0.3, 0.12]}
          fontSize={0.18}
          color={PALETTE.silver}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.22}
        >
          GLOBAL EXPORT FREIGHT LOGISTICS
        </Text>
      </group>

      <Text
        position={[0, 6.8, 0]}
        fontSize={0.28}
        color={PALETTE.white}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.2}
      >
        07 // EXPORT DISPATCH LOGISTICS
      </Text>
    </group>
  );
}

// 9. THE TRANSITION PORTAL & LUXURY SHOWROOM (Z: -240 to -300)
export function LuxuryShowroomZone() {
  const showroomPedestalRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (showroomPedestalRef.current) {
      showroomPedestalRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <group position={[0, 0, -270]}>
      {/* Architectural Threshold Portal between Factory & Showroom */}
      <group position={[0, 0, 28]}>
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
        <planeGeometry args={[22, 50]} />
        <meshStandardMaterial
          color={PALETTE.black}
          roughness={0.08}
          metalness={0.85}
        />
      </mesh>

      {/* Dramatic Downward Pin-Spotlights on Runway */}
      <pointLight position={[0, 7.5, 10]} intensity={3.5} distance={14} color={PALETTE.white} />
      <pointLight position={[0, 7.5, -5]} intensity={3.5} distance={14} color={PALETTE.white} />
      <pointLight position={[0, 7.5, -20]} intensity={3.5} distance={14} color={PALETTE.white} />

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
      <group position={[0, 5.5, -24]}>
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
          WINTERS • SUMMERS • TOP WEAR • BOTTOM WEAR
        </Text>
      </group>
    </group>
  );
}
