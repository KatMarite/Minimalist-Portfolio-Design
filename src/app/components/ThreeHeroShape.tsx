import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function AbstractShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={meshRef}>
                {/* A cool torus knot */}
                <torusKnotGeometry args={[1, 0.35, 128, 32]} />
                <meshStandardMaterial color="#c2c2c2" roughness={0.1} metalness={0.8} />
            </mesh>
            <mesh position={[2, 1, -2]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#a0a0a0" roughness={0.2} metalness={0.5} />
            </mesh>
            <mesh position={[-2, -1, -1]}>
                <icosahedronGeometry args={[0.7, 0]} />
                <meshStandardMaterial color="#606060" roughness={0.3} metalness={0.7} />
            </mesh>
        </Float>
    );
}

export function ThreeHeroShape() {
    return (
        <div className="w-full h-full min-h-[300px] md:min-h-[400px] cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <PresentationControls
                    global
                    zoom={0.8}
                    rotation={[0, -Math.PI / 8, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 2, Math.PI / 2]}
                    config={{ mass: 2, tension: 400 }}
                    snap={{ mass: 4, tension: 300 }}
                >
                    <AbstractShape />
                </PresentationControls>
                <ContactShadows resolution={512} position={[0, -2.5, 0]} opacity={0.3} scale={10} blur={2} far={4} color="#000000" />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
