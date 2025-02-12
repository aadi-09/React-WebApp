import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { type Points as ThreePoints } from "three";

function StarField() {
  const ref = useRef<ThreePoints>(null);
    const [sphere] = useState(() => 
        random.inSphere(new Float32Array(500), { radius: 1.5 })
          );

            useFrame((_state, delta) => {
                if (ref.current) {
                      ref.current.rotation.x -= delta / 20;
                            ref.current.rotation.y -= delta / 25;
                                }
                                  });

                                    return (
                                        <group rotation={[0, 0, Math.PI / 4]}>
                                              <Points
                                                      ref={ref}
                                                              positions={sphere}
                                                                      stride={3}
                                                                              frustumCulled
                                                                                    >
                                                                                            <PointMaterial
                                                                                                      transparent
                                                                                                                color="#ffffff"
                                                                                                                          size={0.002}
                                                                                                                                    sizeAttenuation={true}
                                                                                                                                              depthWrite={false}
                                                                                                                                                      />
                                                                                                                                                            </Points>
                                                                                                                                                                </group>
                                                                                                                                                                  );
                                                                                                                                                                  }

                                                                                                                                                                  export function Stars() {
                                                                                                                                                                    const [mounted, setMounted] = useState(false);

                                                                                                                                                                      useEffect(() => {
                                                                                                                                                                          setMounted(true);
                                                                                                                                                                              return () => setMounted(false);
                                                                                                                                                                                }, []);

                                                                                                                                                                                  if (!mounted) return null;

                                                                                                                                                                                    return (
                                                                                                                                                                                        <div className="w-full h-screen absolute">
                                                                                                                                                                                              <Canvas
                                                                                                                                                                                                      camera={{ position: [0, 0, 1] }}
                                                                                                                                                                                                              gl={{
                                                                                                                                                                                                                        antialias: true,
                                                                                                                                                                                                                                  alpha: true,
                                                                                                                                                                                                                                            powerPreference: "high-performance",
                                                                                                                                                                                                                                                      preserveDrawingBuffer: true
                                                                                                                                                                                                                                                              }}
                                                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                                                            <StarField />
                                                                                                                                                                                                                                                                                  </Canvas>
                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                        }