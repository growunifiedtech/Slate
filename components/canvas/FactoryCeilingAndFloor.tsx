'use client';

import React, { useMemo } from 'react';
import * as THREE from 'three';

const PALETTE = {
  black: '#040508',
  slateDark: '#0b0e14',
  slateMedium: '#141923',
  graphite: '#2d3748',
  steel: '#4a5568',
  lightSteel: '#a0aec0',
  white: '#ffffff',
};

export function FactoryCeilingAndFloor() {
  // Industrial columns along the factory hall
  const columnPositions = useMemo(() => {
    const cols: [number, number, number][] = [];
    for (let z = 0; z >= -240; z -= 20) {
      cols.push([-7.5, 4.5, z]);
      cols.push([7.5, 4.5, z]);
    }
    return cols;
  }, []);

  // Overhead roof trusses
  const trussPositions = useMemo(() => {
    const trusses: number[] = [];
    for (let z = 10; z >= -240; z -= 15) {
      trusses.push(z);
    }
    return trusses;
  }, []);

  // Hanging high-bay industrial lamps
  const lampPositions = useMemo(() => {
    const lamps: [number, number, number][] = [];
    for (let z = 0; z >= -240; z -= 25) {
      lamps.push([-3, 8.2, z]);
      lamps.push([3, 8.2, z]);
    }
    return lamps;
  }, []);

  return (
    <group>
      {/* 1. Continuous Reflective Epoxy Concrete Floor */}
      <mesh position={[0, -0.01, -150]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[26, 360]} />
        <meshStandardMaterial
          color={PALETTE.slateDark}
          roughness={0.22}
          metalness={0.4}
        />
      </mesh>

      {/* Center Yellow/White Hazard Walkway Guide Lines */}
      {[-1.2, 1.2].map((x, idx) => (
        <mesh key={idx} position={[x, 0.01, -120]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.08, 280]} />
          <meshBasicMaterial color={PALETTE.lightSteel} transparent opacity={0.3} />
        </mesh>
      ))}

      {/* 2. Industrial Structural H-Beams / Columns */}
      {columnPositions.map(([x, y, z], idx) => (
        <group key={idx} position={[x, y, z]}>
          <mesh>
            <boxGeometry args={[0.6, 9.2, 0.6]} />
            <meshStandardMaterial color={PALETTE.slateMedium} metalness={0.8} roughness={0.3} />
          </mesh>
          {/* Base plate */}
          <mesh position={[0, -4.5, 0]}>
            <boxGeometry args={[1.2, 0.2, 1.2]} />
            <meshStandardMaterial color={PALETTE.steel} metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* 3. Overhead Steel Roof Trusses */}
      {trussPositions.map((z, idx) => (
        <group key={idx} position={[0, 9.2, z]}>
          {/* Horizontal crossbeam */}
          <mesh>
            <boxGeometry args={[17, 0.35, 0.35]} />
            <meshStandardMaterial color={PALETTE.slateMedium} metalness={0.7} roughness={0.4} />
          </mesh>
          {/* Diagonal braces */}
          <mesh position={[-4, -0.4, 0]} rotation={[0, 0, Math.PI / 6]}>
            <boxGeometry args={[4.5, 0.15, 0.15]} />
            <meshStandardMaterial color={PALETTE.steel} metalness={0.8} />
          </mesh>
          <mesh position={[4, -0.4, 0]} rotation={[0, 0, -Math.PI / 6]}>
            <boxGeometry args={[4.5, 0.15, 0.15]} />
            <meshStandardMaterial color={PALETTE.steel} metalness={0.8} />
          </mesh>
        </group>
      ))}

      {/* 4. Overhead Ventilation Ducts */}
      <mesh position={[-4.5, 8.8, -120]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 320, 24]} />
        <meshStandardMaterial color={PALETTE.steel} metalness={0.85} roughness={0.25} />
      </mesh>
      <mesh position={[4.5, 8.8, -120]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 320, 24]} />
        <meshStandardMaterial color={PALETTE.steel} metalness={0.85} roughness={0.25} />
      </mesh>

      {/* 5. Overhead Hanging High-Bay Industrial Pendant Lamps */}
      {lampPositions.map(([x, y, z], idx) => (
        <group key={idx} position={[x, y, z]}>
          {/* Suspension wire */}
          <mesh position={[0, 0.6, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 1.2]} />
            <meshStandardMaterial color={PALETTE.lightSteel} />
          </mesh>
          {/* Reflector shroud */}
          <mesh position={[0, 0, 0]}>
            <coneGeometry args={[0.45, 0.35, 16, 1, true]} />
            <meshStandardMaterial color={PALETTE.slateDark} metalness={0.8} roughness={0.3} />
          </mesh>
          {/* Bulb emitter */}
          <mesh position={[0, -0.05, 0]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial color={PALETTE.white} />
          </mesh>
          {/* Point light for illumination */}
          <pointLight position={[0, -0.2, 0]} intensity={1.8} distance={16} color={PALETTE.white} />
        </group>
      ))}

      {/* Ambient Lighting & Shadows */}
      <ambientLight intensity={0.4} color={PALETTE.white} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={0.6}
        color={PALETTE.white}
        castShadow
      />
    </group>
  );
}
