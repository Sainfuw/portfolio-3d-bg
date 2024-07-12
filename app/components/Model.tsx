"use client";

import { Sparkles, useGLTF } from "@react-three/drei";
import { useRef } from "react";

useGLTF.preload("/models/duck.glb");

export default function Model() {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = useGLTF("/models/duck.glb");

  return (
    <group ref={group}>
      <primitive object={scene} scale={1} />
      <Sparkles scale={2} size={3} position={[0, 0.8, 0]} />
    </group>
  );
}
