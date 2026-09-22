'use client';

import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

interface CameraRigProps {
  scrollProgress: number; // Normalized 0 to 1
}

export function CameraRig({ scrollProgress }: CameraRigProps) {
  const { camera, pointer } = useThree();

  // 3D Spline Path through the entire factory
  const { pathCurve, targetCurve } = useMemo(() => {
    // Camera positions along the 3-stage journey
    const cameraWaypoints = [
      new THREE.Vector3(0, 2.4, 14),     // 0.00: Outside entrance facade
      new THREE.Vector3(0, 2.3, 0),      // 0.15: Sliding gates entry
      new THREE.Vector3(-0.9, 2.3, -38), // 0.35: Stage 01: Raw Material racks
      new THREE.Vector3(0, 2.3, -75),    // 0.65: Stage 02: Stitching & 50,000 Pcs monument
      new THREE.Vector3(0, 2.2, -112),   // 0.85: Stage 03: Quality & Packaging line
      new THREE.Vector3(0, 2.2, -145),   // 1.00: Luxury Showroom threshold
    ];

    // Look-At Targets along the journey
    const targetWaypoints = [
      new THREE.Vector3(0, 2.2, 0),
      new THREE.Vector3(0, 2.2, -20),
      new THREE.Vector3(0, 2.0, -55),
      new THREE.Vector3(0, 2.5, -92),
      new THREE.Vector3(0, 2.0, -130),
      new THREE.Vector3(0, 1.8, -165),
    ];

    return {
      pathCurve: new THREE.CatmullRomCurve3(cameraWaypoints, false, 'catmullrom', 0.2),
      targetCurve: new THREE.CatmullRomCurve3(targetWaypoints, false, 'catmullrom', 0.2),
    };
  }, []);

  const currentCamPos = useRef(new THREE.Vector3(0, 2.4, 14));
  const currentLookAt = useRef(new THREE.Vector3(0, 2.2, 0));

  useFrame((_, delta) => {
    // Clamp progress between 0 and 1
    const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

    // Sample positions on curves
    const targetCamPoint = pathCurve.getPointAt(clampedProgress);
    const targetLookPoint = targetCurve.getPointAt(clampedProgress);

    // Subtle pointer parallax (smooth mouse responsiveness on desktop)
    const parallaxX = pointer.x * 0.4;
    const parallaxY = pointer.y * 0.2;

    targetCamPoint.x += parallaxX;
    targetCamPoint.y += parallaxY;

    // Smooth Lerp damping for butter-smooth camera movement
    const dampSpeed = Math.min(delta * 4.5, 1.0);
    currentCamPos.current.lerp(targetCamPoint, dampSpeed);
    currentLookAt.current.lerp(targetLookPoint, dampSpeed);

    camera.position.copy(currentCamPos.current);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}
