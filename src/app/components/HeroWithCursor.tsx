import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const STATIC_PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 2
}));

export function HeroWithCursor() {
  const [isInHero, setIsInHero] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  // Use framer-motion values instead of React state to bypass re-renders on mousemove for heavy gradients
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth out the movement slightly with spring physics
  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  const gradientBg = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(37, 99, 235, 0.15), transparent 80%)`;
  const maskImg = useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, black, transparent)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        mouseX.set(mx);
        mouseY.set(my);
        // We set state to cause re-render only for the scatter particles logic
        setMousePosition({ x: mx, y: my });
      }
    };

    const handleMouseEnter = () => setIsInHero(true);
    const handleMouseLeave = () => setIsInHero(false);

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseenter', handleMouseEnter);
      heroElement.addEventListener('mouseleave', handleMouseLeave);

      // Initialize to center if mouse is not over yet but component loads
      const rect = heroElement.getBoundingClientRect();
      const initialMx = rect.width / 2;
      const initialMy = rect.height / 2;
      mouseX.set(initialMx);
      mouseY.set(initialMy);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseenter', handleMouseEnter);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section ref={heroRef} className="relative pt-32 pb-24 px-6 lg:px-12 overflow-hidden min-h-[85vh] flex items-center bg-white dark:bg-[#030213] cursor-default">
      {/* Animated gradient that follows cursor */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
          opacity: isInHero ? 0.4 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ background: gradientBg }}
      />

      {/* Grid pattern overlay that responds to cursor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(229, 229, 229, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229, 229, 229, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            WebkitMaskImage: maskImg,
            maskImage: maskImg,
          }}
          animate={{
            opacity: isInHero ? 0.8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Floating particles that react to cursor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {STATIC_PARTICLES.map((particle) => {
          const distanceX = mousePosition.x - (particle.x / 100) * (heroRef.current?.offsetWidth || 0);
          const distanceY = mousePosition.y - (particle.y / 100) * (heroRef.current?.offsetHeight || 0);
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          const maxDistance = 300;
          const force = Math.max(0, (maxDistance - distance) / maxDistance);

          const offsetX = isInHero ? (distanceX / distance) * force * -50 : 0;
          const offsetY = isInHero ? (distanceY / distance) * force * -50 : 0;

          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-blue-600"
              initial={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                x: offsetX,
                y: offsetY,
                opacity: isInHero ? 0.6 : 0.3,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: particle.delay * 0.1
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Intro Text */}
        <div className="flex flex-col justify-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-black dark:text-white mb-8 leading-[1.1] md:leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600">Katleho</span>
            <br />
            Marite,
            <br />
            Web Developer
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frontend Engineer crafting pixel-perfect, performant web experiences.
            <br className="hidden xl:block" />
            Specialized in React, TypeScript, and modern design systems.
          </motion.p>

          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full transition-all shadow-lg font-medium flex items-center gap-2 pointer-events-auto hover:-translate-y-1 hover:bg-gray-800 dark:hover:bg-gray-100"
            >
              View My Work <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Right Column - Code Terminal */}
        <div className="hidden lg:block relative z-10">
          {/* Animated border beam container */}
          <div className="relative group">
            {/* Rotating conic gradient border */}
            <div
              className="absolute -inset-[2px] rounded-[18px] overflow-hidden"
              style={{ padding: '2px' }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, transparent 40%, rgba(217, 119, 6, 0.6), rgba(245, 158, 11, 0.8), rgba(217, 119, 6, 0.6), transparent 60%, transparent)',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Static subtle border underneath for when the beam isn't covering */}
              <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-blue-100/50 via-transparent to-blue-100/50" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full rounded-2xl overflow-hidden backdrop-blur-md bg-white dark:bg-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              {/* Terminal Header */}
              <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-2 text-xs font-mono font-medium text-gray-500 dark:text-gray-400">katleho@portfolio:~</div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm leading-loose text-gray-800 dark:text-gray-200">
                <div className="flex">
                  <span className="w-8 select-none text-gray-300">1</span>
                  <div><span className="text-blue-600">const</span> developer = {'{'}</div>
                </div>
                <div className="flex">
                  <span className="w-8 select-none text-gray-300">2</span>
                  <div className="ml-4">name: <span className="text-green-600">"Katleho Marite"</span>,</div>
                </div>
                <div className="flex">
                  <span className="w-8 select-none text-gray-300">3</span>
                  <div className="ml-4">role: <span className="text-green-600">"Frontend Engineer"</span>,</div>
                </div>
                <div className="flex">
                  <span className="w-8 select-none text-gray-300">4</span>
                  <div className="ml-4">skills: {'['}</div>
                </div>
                <div className="flex">
                  <span className="w-8 select-none text-gray-300">5</span>
                  <div className="ml-8"><span className="text-orange-600">"React"</span>, <span className="text-orange-600">"TypeScript"</span>, <span className="text-orange-600">"Next.js"</span></div>
                </div>
                <div className="flex">
                  <span className="w-8 select-none text-gray-300">6</span>
                  <div className="ml-4">{']'},</div>
                </div>
                <div className="flex">
                  <span className="w-8 select-none text-gray-300">7</span>
                  <div className="ml-4">passion: <span className="text-green-600">"Building seamless UI/UX"</span></div>
                </div>
                <div className="flex">
                  <span className="w-8 select-none text-gray-300">8</span>
                  <div>{'}'};</div>
                </div>
                <div className="flex mt-4">
                  <span className="w-8 select-none text-gray-300">9</span>
                  <div>
                    developer.<span className="text-purple-600">deploy</span>()
                    <span className="inline-block w-2.5 h-4 ml-1 align-middle animate-pulse bg-black"></span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>{/* end group wrapper */}
        </div>
      </div>{/* end grid container */}
    </section>
  );
}
