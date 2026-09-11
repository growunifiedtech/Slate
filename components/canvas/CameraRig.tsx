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
    // Camera positions along the journey
    const cameraWaypoints = [
      new THREE.Vector3(0, 2.4, 14),     // 0.00: Outside entrance
      new THREE.Vector3(0, 2.3, 4),      // 0.08: Approaching gates
      new THREE.Vector3(-0.8, 2.2, -18), // 0.18: Zone 01 entrance
      new THREE.Vector3(-1.2, 2.3, -42), // 0.28: Zone 01 Raw Material
      new THREE.Vector3(1.0, 2.4, -72),  // 0.38: Zone 02 Cutting
      new THREE.Vector3(0, 2.3, -105),   // 0.50: Zone 03 Stitching & 50,000 Capacity
      new THREE.Vector3(0, 2.2, -138),   // 0.62: Zone 04 Quality Control
      new THREE.Vector3(0.6, 2.2, -165), // 0.72: Zone 05 Finishing
      new THREE.Vector3(-0.6, 2.2, -192),// 0.82: Zone 06 Packaging
      new THREE.Vector3(0, 2.4, -222),   // 0.90: Zone 07 Dispatch Bay
      new THREE.Vector3(0, 2.2, -260),   // 1.00: Inside Luxury Showroom
    ];

    // Look-At Targets along the journey
    const targetWaypoints = [
      new THREE.Vector3(0, 2.2, 0),
      new THREE.Vector3(0, 2.2, -10),
      new THREE.Vector3(0, 2.0, -32),
      new THREE.Vector3(0, 2.0, -56),
      new THREE.Vector3(0, 1.8, -86),
      new THREE.Vector3(0, 2.4, -120),
      new THREE.Vector3(0, 2.0, -150),
      new THREE.Vector3(0, 1.9, -178),
      new THREE.Vector3(0, 1.9, -205),
      new THREE.Vector3(0, 2.2, -240),
      new THREE.Vector3(0, 1.8, -275),
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
