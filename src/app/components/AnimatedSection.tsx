import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'left' | 'right';
    className?: string;
}

export function AnimatedSection({ children, delay = 0, direction = 'up', className = '' }: AnimatedSectionProps) {
    const directionMap = {
        up: { y: 60, x: 0 },
        left: { y: 0, x: -60 },
        right: { y: 0, x: 60 },
    };

    const offset = directionMap[direction];

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: offset.y,
                x: offset.x,
                scale: 0.98
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1
            }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
