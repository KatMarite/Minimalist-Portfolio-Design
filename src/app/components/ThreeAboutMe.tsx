import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNodes() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.15;
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <group ref={group}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
                {/* Core AI Brain Sphere - Uses a cool distorting material so it looks alive */}
                <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
                    <MeshDistortMaterial
                        color="#3b82f6" // Tailwind Blue 600
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </Sphere>
            </Float>

            {/* Orbiting data nodes representing ML problem solving / data structures */}
            {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const radius = 2.5 + Math.random() * 0.5;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                const y = (Math.random() - 0.5) * 2;
                return (
                    <Float key={i} speed={1.5} rotationIntensity={2} floatIntensity={2}>
                        <mesh position={[x, y, z]}>
                            <sphereGeometry args={[0.15, 16, 16]} />
                            <meshStandardMaterial
                                color={i % 2 === 0 ? "#f59e0b" : "#ec4899"} // Amber and Pink accents
                                roughness={0.1}
                                metalness={0.8}
                            />
                        </mesh>
                    </Float>
                )
            })}
        </group>
    );
}

export function ThreeAboutMe() {
    return (
        <div className="w-full h-full min-h-[300px] flex items-center justify-center cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden relative">
            {/* Fallback gradient background to make the glassy materials pop */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/5 -z-10" />
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />

                {/* City preset gives nice glossy reflections */}
                <Environment preset="city" />

                <NeuralNodes />

                {/* Auto rotate very softly but allow user to grab */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
}
