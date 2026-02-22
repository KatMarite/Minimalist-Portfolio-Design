import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Custom View Transitions CSS injected for the sweeping animation
const styles = `
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 2;
}
.dark::view-transition-old(root) {
  z-index: 2;
}
.dark::view-transition-new(root) {
  z-index: 1;
}
`;

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Dark mode is the default unless user explicitly chose light
        if (localStorage.getItem('theme') === 'light') {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        } else {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = (e: React.MouseEvent) => {
        const nextDark = !isDark;
        setIsDark(nextDark);

        if (nextDark) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        if (!document.startViewTransition) {
            // Fallback for browsers that do not support View Transitions
            document.documentElement.classList.toggle('dark', nextDark);
            return;
        }

        // Calculate the maximum circle radius needed to cover the screen
        const x = e.clientX;
        const y = e.clientY;
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            document.documentElement.classList.toggle('dark', nextDark);
        });

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];

            document.documentElement.animate(
                { clipPath: nextDark ? clipPath : [...clipPath].reverse() },
                {
                    duration: 600,
                    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                    pseudoElement: nextDark ? '::view-transition-new(root)' : '::view-transition-old(root)',
                }
            );
        });
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <button
                onClick={toggleTheme}
                className="relative p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm"
                aria-label="Toggle Theme"
            >
                <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        {isDark ? (
                            <motion.div
                                key="moon"
                                initial={{ y: -20, opacity: 0, rotate: -90 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: 20, opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                                className="absolute"
                            >
                                <Moon size={18} strokeWidth={2} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="sun"
                                initial={{ y: -20, opacity: 0, rotate: -90 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: 20, opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                                className="absolute"
                            >
                                <Sun size={18} strokeWidth={2} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </button>
        </>
    );
}
