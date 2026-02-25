import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

// An array of modern desktop/developer related geometries
function FloatingItems() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Very slow drifting of the whole group
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Central big shape - perhaps a cool abstract code bracket or torus */}
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
                <mesh position={[0, 0, 0]}>
                    <torusGeometry args={[1.5, 0.4, 32, 64]} />
                    <meshStandardMaterial
                        color="#3b82f6" // blue-600
                        roughness={0.1}
                        metalness={0.8}
                        envMapIntensity={1}
                    />
                </mesh>
            </Float>

            {/* Orbiting geometric primitives representing different tools */}

            {/* React / Atom representation */}
            <Float speed={3} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[2.5, 1.5, -1]}>
                    <octahedronGeometry args={[0.6]} />
                    <meshStandardMaterial color="#f59e0b" roughness={0.2} metalness={0.5} wireframe={true} />
                </mesh>
            </Float>

            {/* Data / Database cylinder */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
                <mesh position={[-2, 2, 0.5]}>
                    <cylinderGeometry args={[0.5, 0.5, 1.2, 32]} />
                    <meshStandardMaterial color="#ec4899" roughness={0.3} metalness={0.6} />
                </mesh>
            </Float>

            {/* Logic / Component box */}
            <Float speed={2.5} rotationIntensity={3} floatIntensity={2}>
                <mesh position={[1.5, -2, 1]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshStandardMaterial color="#10b981" roughness={0.1} metalness={0.2} />
                </mesh>
            </Float>

            {/* Design / UI sphere */}
            <Float speed={2} rotationIntensity={1} floatIntensity={3}>
                <mesh position={[-2.5, -1, -1.5]}>
                    <sphereGeometry args={[0.7, 32, 32]} />
                    <meshStandardMaterial color="#8b5cf6" roughness={0} metalness={1} envMapIntensity={2} />
                </mesh>
            </Float>

            {/* Small floating particles for extra detail */}
            <Particles />
        </group>
    );
}

function Particles() {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 100;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, [])

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.1;
            pointsRef.current.rotation.x += delta * 0.1;
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.06} color="#60a5fa" transparent opacity={0.6} sizeAttenuation={true} />
        </points>
    )
}

export function ThreeSkillsCloud() {
    return (
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative cursor-pointer">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />

                {/* Soft, beautiful studio lighting map applied to all materials */}
                <Environment preset="studio" />

                <FloatingItems />

                {/* Let the user rotate the whole scene easily but softly auto-rotate */}
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    autoRotate={true}
                    autoRotateSpeed={1}
                    dampingFactor={0.05}
                />
            </Canvas>
        </div>
    );
}
