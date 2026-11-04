import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import { ArrowRight, Copy, Check, Terminal, Sparkles, Code2, Cpu, ShieldCheck } from 'lucide-react';
import { ThreeHeroBackground } from './ThreeHeroBackground';

export function HeroWithCursor() {
  const [isInHero, setIsInHero] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'config' | 'stack' | 'vitals'>('config');

  // Mouse motion values for silky smooth reactive glow
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28 });

  const gradientBg = useMotionTemplate`radial-gradient(700px circle at ${springX}px ${springY}px, rgba(245, 158, 11, 0.12), transparent 75%)`;
  const maskImg = useMotionTemplate`radial-gradient(450px circle at ${springX}px ${springY}px, black, transparent)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        mouseX.set(mx);
        mouseY.set(my);
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

      const rect = heroElement.getBoundingClientRect();
      const initialMx = rect.width / 2;
      const initialMy = rect.height / 2;
      mouseX.set(initialMx);
      mouseY.set(initialMy);

      setContainerSize({ width: heroElement.offsetWidth, height: heroElement.offsetHeight });
    }

    const handleResize = () => {
      if (heroRef.current) {
        setContainerSize({
          width: heroRef.current.offsetWidth,
          height: heroRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseenter', handleMouseEnter);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("katlehomarite@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section 
      ref={heroRef} 
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center bg-[#fafafa] dark:bg-[#07080e] cursor-default transition-colors duration-300"
    >
      {/* Ambient background glow following cursor */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ opacity: isInHero ? 0.7 : 0.2 }}
        transition={{ duration: 0.4 }}
        style={{ background: gradientBg }}
      />

      {/* Modern Cyber Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="w-full h-full cyber-grid"
          style={{
            WebkitMaskImage: maskImg,
            maskImage: maskImg,
          }}
          animate={{ opacity: isInHero ? 0.8 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Ambient decorative glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 dark:bg-amber-500/[0.07] rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/10 dark:bg-indigo-500/[0.05] rounded-full blur-3xl pointer-events-none"></div>

      {/* 3D Particle Atmosphere */}
      <ThreeHeroBackground mousePosition={mousePosition} containerSize={containerSize} />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Hero Content (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.1] shadow-sm backdrop-blur-md self-start mb-5 sm:mb-6 max-w-full"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300 truncate">
              AVAILABLE FOR NEW PROJECTS • JOHANNESBURG & REMOTE
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Engineering <span className="gradient-text-amber">digital craft</span> with high-performance code.
          </motion.h1>

          {/* Subtitle / Pitch */}
          <motion.p
            className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Katleho Marite</strong> — Frontend Engineer & Creative Technologist. I specialize in building responsive, scalable platforms, high-conversion design systems, and fluid web experiences.
          </motion.p>

          {/* Action CTAs & Quick Email Copy */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-sm hover:bg-amber-600 dark:hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
            >
              <span>Explore Selected Works</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={copyEmailToClipboard}
              className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-slate-800 dark:text-slate-200 font-semibold text-sm hover:border-amber-500/50 hover:bg-slate-50 dark:hover:bg-white/[0.1] transition-all flex items-center justify-center gap-2 shadow-sm"
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-slate-400" />
                  <span className="truncate">katlehomarite@gmail.com</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Quick Metrics Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-10 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-start gap-4 sm:gap-8 text-xs text-slate-500 dark:text-slate-400 font-medium"
          >
            <div>
              <span className="block text-lg sm:text-xl font-bold text-slate-900 dark:text-white">5+ Years</span>
              Production Exp.
            </div>
            <div className="hidden sm:block w-px h-8 bg-black/[0.06] dark:bg-white/[0.08]"></div>
            <div>
              <span className="block text-lg sm:text-xl font-bold text-slate-900 dark:text-white">11 Platforms</span>
              Live Portfolio
            </div>
            <div className="hidden sm:block w-px h-8 bg-black/[0.06] dark:bg-white/[0.08]"></div>
            <div>
              <span className="block text-lg sm:text-xl font-bold text-slate-900 dark:text-white">100%</span>
              Pixel & Vitals
            </div>
          </motion.div>
        </div>

        {/* Right Column - Interactive Developer Console (5 cols) */}
        <div className="lg:col-span-5 relative w-full">
          
          {/* Animated conic border beam */}
          <div className="relative group w-full">
            <div className="absolute -inset-[1.5px] rounded-[22px] overflow-hidden" style={{ padding: '1.5px' }}>
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, transparent 40%, rgba(245, 158, 11, 0.7), rgba(251, 191, 36, 0.9), rgba(245, 158, 11, 0.7), transparent 60%, transparent)',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-amber-500/20 via-transparent to-amber-500/20" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full rounded-[20px] overflow-hidden backdrop-blur-xl bg-white/90 dark:bg-[#0c0f18]/90 border border-black/[0.06] dark:border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              {/* Terminal Window Header */}
              <div className="px-3 sm:px-4 py-3 flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] bg-slate-100/70 dark:bg-[#121624]/70">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400/80"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400/80"></div>
                  <span className="ml-1 sm:ml-2 text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Terminal size={12} />
                    katleho.dev
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-black/[0.04] dark:bg-white/[0.06] p-0.5 rounded-lg text-[9px] sm:text-[10px] font-mono">
                  <button
                    onClick={() => setActiveTab('config')}
                    className={`px-1.5 sm:px-2 py-0.5 rounded ${activeTab === 'config' ? 'bg-white dark:bg-white/10 text-amber-600 dark:text-amber-400 font-bold shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    profile.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-1.5 sm:px-2 py-0.5 rounded ${activeTab === 'stack' ? 'bg-white dark:bg-white/10 text-amber-600 dark:text-amber-400 font-bold shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    stack.json
                  </button>
                  <button
                    onClick={() => setActiveTab('vitals')}
                    className={`px-1.5 sm:px-2 py-0.5 rounded ${activeTab === 'vitals' ? 'bg-white dark:bg-white/10 text-amber-600 dark:text-amber-400 font-bold shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                  >
                    vitals.log
                  </button>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed select-text min-h-[280px] sm:min-h-[290px] flex flex-col justify-between overflow-x-auto max-w-full">
                {activeTab === 'config' && (
                  <div className="space-y-1 text-slate-700 dark:text-slate-300">
                    <div><span className="text-amber-600 dark:text-amber-400 font-bold">interface</span> <span className="text-cyan-600 dark:text-cyan-400">Engineer</span> {'{'}</div>
                    <div className="pl-3 sm:pl-4">name: <span className="text-emerald-600 dark:text-emerald-400">"Katleho Marite"</span>;</div>
                    <div className="pl-3 sm:pl-4">role: <span className="text-emerald-600 dark:text-emerald-400">"Frontend & Creative Tech"</span>;</div>
                    <div className="pl-3 sm:pl-4">location: <span className="text-emerald-600 dark:text-emerald-400">"Johannesburg, SA"</span>;</div>
                    <div className="pl-3 sm:pl-4">focus: <span className="text-emerald-600 dark:text-emerald-400">"Web Apps • Design Systems • 3D"</span>;</div>
                    <div className="pl-3 sm:pl-4">status: <span className="text-emerald-600 dark:text-emerald-400">"Available for Projects"</span>;</div>
                    <div>{'}'};</div>
                    <div className="pt-2 text-slate-400 dark:text-slate-500 text-[11px]">// Shipping fast, resilient user interfaces</div>
                    <div className="pt-1 text-amber-600 dark:text-amber-400">
                      export default Katleho; <span className="inline-block w-2 h-4 bg-amber-500 animate-pulse align-middle"></span>
                    </div>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-1 text-slate-700 dark:text-slate-300">
                    <div>{'{'}</div>
                    <div className="pl-3 sm:pl-4">"core": <span className="text-cyan-600 dark:text-cyan-400">["React", "Next.js", "TypeScript"]</span>,</div>
                    <div className="pl-3 sm:pl-4">"styling": <span className="text-cyan-600 dark:text-cyan-400">["Tailwind v4", "Design Systems"]</span>,</div>
                    <div className="pl-3 sm:pl-4">"creative": <span className="text-cyan-600 dark:text-cyan-400">["Three.js", "R3F", "Framer Motion"]</span>,</div>
                    <div className="pl-3 sm:pl-4">"cloud": <span className="text-cyan-600 dark:text-cyan-400">["Cloudflare", "Supabase", "Vercel"]</span>,</div>
                    <div className="pl-3 sm:pl-4">"e_commerce": <span className="text-cyan-600 dark:text-cyan-400">["Shopify Liquid", "Stripe"]</span></div>
                    <div>{'}'}</div>
                    <div className="pt-2 text-slate-400 dark:text-slate-500 text-[11px]">// High cohesion, low latency</div>
                  </div>
                )}

                {activeTab === 'vitals' && (
                  <div className="space-y-2 text-slate-700 dark:text-slate-300">
                    <div className="flex items-center justify-between text-xs pb-1 border-b border-black/[0.04] dark:border-white/[0.06]">
                      <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck size={14} /> Performance
                      </span>
                      <span className="font-bold text-emerald-500">100 / 100</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pb-1 border-b border-black/[0.04] dark:border-white/[0.06]">
                      <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck size={14} /> Accessibility (a11y)
                      </span>
                      <span className="font-bold text-emerald-500">100 / 100</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pb-1 border-b border-black/[0.04] dark:border-white/[0.06]">
                      <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck size={14} /> Best Practices
                      </span>
                      <span className="font-bold text-emerald-500">100 / 100</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pb-1">
                      <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck size={14} /> SEO Score
                      </span>
                      <span className="font-bold text-emerald-500">100 / 100</span>
                    </div>
                    <div className="pt-2 text-[10px] sm:text-[11px] text-amber-600 dark:text-amber-400 bg-amber-500/10 p-2 rounded-lg font-mono">
                      ✓ Zero layout shifts (CLS &lt; 0.01) • Sub-second FCP
                    </div>
                  </div>
                )}

                {/* Terminal Footer Bar */}
                <div className="pt-3 mt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Code2 size={12} className="text-amber-500" />
                    TypeScript strict mode
                  </span>
                  <span className="flex items-center gap-1">
                    <Cpu size={12} className="text-emerald-500" />
                    Vite 6 HMR Ready
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
