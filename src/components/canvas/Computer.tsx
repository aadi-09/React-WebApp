import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

function Model() {
  return (
      <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
                  <pointLight intensity={1} position={[0, 50, 0]} />
                        <spotLight
                                position={[-20, 50, 10]}
                                        angle={0.12}
                                                penumbra={1}
                                                        intensity={1}
                                                                castShadow
                                                                      />
                                                                            <mesh receiveShadow castShadow>
                                                                                    <boxGeometry args={[2, 2, 2]} />
                                                                                            <meshStandardMaterial color="#8B5CF6" />
                                                                                                  </mesh>
                                                                                                      </mesh>
                                                                                                        );
                                                                                                        }

                                                                                                        export function Computer() {
                                                                                                          const [mounted, setMounted] = useState(false);

                                                                                                            useEffect(() => {
                                                                                                                setMounted(true);
                                                                                                                    return () => setMounted(false);
                                                                                                                      }, []);

                                                                                                                        if (!mounted) return null;

                                                                                                                          return (
                                                                                                                              <div style={{ width: '100%', height: '400px' }}>
                                                                                                                                    <Canvas
                                                                                                                                            shadows
                                                                                                                                                    dpr={[1, 2]}
                                                                                                                                                            camera={{ position: [-4, 3, 6], fov: 45 }}
                                                                                                                                                                    gl={{
                                                                                                                                                                              antialias: true,
                                                                                                                                                                                        alpha: true,
                                                                                                                                                                                                  powerPreference: "high-performance",
                                                                                                                                                                                                          }}
                                                                                                                                                                                                                >
                                                                                                                                                                                                                        <Suspense fallback={null}>
                                                                                                                                                                                                                                  <OrbitControls
                                                                                                                                                                                                                                              enableZoom={false}
                                                                                                                                                                                                                                                          maxPolarAngle={Math.PI / 2}
                                                                                                                                                                                                                                                                      minPolarAngle={Math.PI / 2}
                                                                                                                                                                                                                                                                                />
                                                                                                                                                                                                                                                                                          <Model />
                                                                                                                                                                                                                                                                                                  </Suspense>
                                                                                                                                                                                                                                                                                                        </Canvas>
                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                              }