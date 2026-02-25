import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface InteractiveParticlesProps {
    mousePosition: { x: number, y: number };
}

function InteractiveParticles({ mousePosition }: InteractiveParticlesProps) {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 5000;
    const { viewport } = useThree();

    const [positions, initialPositions] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const init = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Create a spherical galaxy / field shape
            const r = 30 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            let x = r * Math.sin(phi) * Math.cos(theta);
            let y = r * Math.sin(phi) * Math.sin(theta);
            let z = r * Math.cos(phi) - 5; // shift back slightly

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

        // Slow cinematic rotation
        pointsRef.current.rotation.y += delta * 0.03;
        pointsRef.current.rotation.x += delta * 0.01;

        const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

        // Target mouse position translated to world bounds
        const targetX = mousePosition.x * (viewport.width / 2) * 1.5;
        const targetY = mousePosition.y * (viewport.height / 2) * 1.5;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const ix = initialPositions[i3];
            const iy = initialPositions[i3 + 1];

            const currentX = pos[i3];
            const currentY = pos[i3 + 1];

            // Organic floating wave effect for life
            const timeWave = Math.sin(state.clock.elapsedTime * 0.5 + ix * 0.1) * 0.5;

            let destX = ix;
            let destY = iy + timeWave;

            // Apply mouse interaction if mouse is within valid bounds (not the default -1000 offscreen)
            if (mousePosition.x > -900) {
                const dx = currentX - targetX;
                const dy = currentY - targetY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const repelRadius = 5;

                // Particles repel from the mouse radially
                if (dist < repelRadius) {
                    const force = (repelRadius - dist) / repelRadius;
                    destX += (dx / dist) * force * 4;
                    destY += (dy / dist) * force * 4;
                }
            }

            // Interpolate smoothly to destination
            pos[i3] += (destX - pos[i3]) * 0.08;
            pos[i3 + 1] += (destY - pos[i3 + 1]) * 0.08;
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
                size={0.08}
                color="#f59e0b"    // Tailwind Amber 500
                transparent={true}
                opacity={0.4}
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
    // Convert mouse pixels to normalized -1 to +1 coordinates for the 3D scene
    const normalizedMouse = {
        x: containerSize.width ? (mousePosition.x / containerSize.width) * 2 - 1 : -1000,
        y: containerSize.height ? -(mousePosition.y / containerSize.height) * 2 + 1 : -1000
    };

    return (
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-60 dark:opacity-80 transition-opacity duration-1000">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                <InteractiveParticles mousePosition={normalizedMouse} />
            </Canvas>
        </div>
    );
}
