import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraLight() {
  const { viewport } = useThree();
  const ref = useRef<any>();

  useFrame(({ pointer }) => {
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;
    if (!ref.current) return;

    ref.current.position.set(x, y, 2);
    ref.current.rotation.set(x, y, 2);
  });

  return <spotLight ref={ref} position={[0, 0, 0]} intensity={10} />;
}
