import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface InteractiveParticlesProps {
    mousePosition: { x: number, y: number };
}

function InteractiveParticles({ mousePosition }: InteractiveParticlesProps) {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 3500;
    const { viewport } = useThree();

    const [positions, initialPositions] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const init = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Create an elliptical galaxy field shape
            const r = 26 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            let x = r * Math.sin(phi) * Math.cos(theta);
            let y = r * Math.sin(phi) * Math.sin(theta) * 0.7; // slight vertical compression
            let z = r * Math.cos(phi) - 6;

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;

            init[i * 3] = x;
            init[i * 3 + 1] = y;
            init[i * 3 + 2] = z;
        }
        return [pos, init];
    }, [count]);

    useFrame((state, delta) => {
        if (!pointsRef.current) return;

        // Slow celestial rotation
        pointsRef.current.rotation.y += delta * 0.02;
        pointsRef.current.rotation.x += delta * 0.008;

        const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

        // Target mouse position translated to scene viewport
        const targetX = mousePosition.x * (viewport.width / 2) * 1.3;
        const targetY = mousePosition.y * (viewport.height / 2) * 1.3;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const ix = initialPositions[i3];
            const iy = initialPositions[i3 + 1];

            const currentX = pos[i3];
            const currentY = pos[i3 + 1];

            // Gentle organic oscillation
            const timeWave = Math.sin(state.clock.elapsedTime * 0.4 + ix * 0.15) * 0.35;

            let destX = ix;
            let destY = iy + timeWave;

            // Apply interactive cursor deflection
            if (mousePosition.x > -900) {
                const dx = currentX - targetX;
                const dy = currentY - targetY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const repelRadius = 4.5;

                if (dist < repelRadius && dist > 0.01) {
                    const force = (repelRadius - dist) / repelRadius;
                    destX += (dx / dist) * force * 3.5;
                    destY += (dy / dist) * force * 3.5;
                }
            }

            pos[i3] += (destX - pos[i3]) * 0.07;
            pos[i3 + 1] += (destY - pos[i3 + 1]) * 0.07;
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.07}
                color="#f59e0b" // Amber accent
                transparent={true}
                opacity={0.45}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

export function ThreeHeroBackground({
    mousePosition,
    containerSize
}: {
    mousePosition: { x: number, y: number },
    containerSize: { width: number, height: number }
}) {
    const normalizedMouse = {
        x: containerSize.width ? (mousePosition.x / containerSize.width) * 2 - 1 : -1000,
        y: containerSize.height ? -(mousePosition.y / containerSize.height) * 2 + 1 : -1000
    };

    return (
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-40 dark:opacity-75 transition-opacity duration-700">
            <Canvas camera={{ position: [0, 0, 14], fov: 55 }}>
                <InteractiveParticles mousePosition={normalizedMouse} />
            </Canvas>
        </div>
    );
}
