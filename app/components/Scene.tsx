"use client";

import { CameraControls, Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CameraLight from "./CameraLight";
import Model from "./Model";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <CameraControls />
      <CameraLight />

      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
