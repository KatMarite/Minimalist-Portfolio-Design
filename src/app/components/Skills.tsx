import { Code2, Sparkles, Cpu, Layers, Palette, Terminal, Database, Globe, Smartphone, Cloud, Workflow, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { ThreeSkillsCloud } from './ThreeSkillsCloud';

const SKILL_PILLARS = [
  {
    pillar: "01",
    title: "Frontend & Architecture",
    description: "Component-driven engineering with uncompromising focus on performance, strict typing, and accessible interaction models.",
    icon: Code2,
    skills: ["React 19 / 18", "Next.js 15", "TypeScript (Strict)", "Tailwind CSS v4", "State Management (Redux/Zustand)", "Responsive Design (Mobile-First)"]
  },
  {
    pillar: "02",
    title: "Creative Tech & Motion",
    description: "Immersive 3D environments, physics-based springs, and fluid micro-interactions that elevate standard UI into digital art.",
    icon: Palette,
    skills: ["Three.js", "React Three Fiber (R3F)", "Framer Motion", "GSAP Kinetics", "WebGL Shaders", "Interactive Canvases"]
  },
  {
    pillar: "03",
    title: "Edge, Cloud & APIs",
    description: "Sub-millisecond serverless runtimes, relational & document stores, and robust API contracts powering modern platforms.",
    icon: Cloud,
    skills: ["Cloudflare Workers", "Node.js & Express", "Python & FastAPI", "Supabase & PostgreSQL", "Firebase & Firestore", "REST & GraphQL APIs"]
  },
  {
    pillar: "04",
    title: "E-Commerce & Optimization",
    description: "Monetization pipelines, custom e-commerce liquid storefronts, and rigorous Core Web Vitals audits for enterprise stability.",
    icon: Workflow,
    skills: ["Shopify Liquid & Storefronts", "Stripe Checkout & Billing", "Lighthouse 100 Auditing", "Git & CI/CD Pipelines", "Figma to Code", "Vite & Modern Tooling"]
  }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#090b14] relative transition-colors duration-300">
            {/* Background subtle mesh glow */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono mb-2">
                            <Cpu size={14} />
                            Tech Radar & Engineering Capabilities
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                            Core Technologies & Stack
                        </h2>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
                        A curated toolkit honed through 5+ years of shipping commercial web apps, high-throughput APIs, and creative interactive products.
                    </p>
                </div>

                {/* Main Content Layout: 4 Pillars + 3D Interactive Canvas */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
                    
                    {/* 4 Skill Bento Cards (7 cols) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {SKILL_PILLARS.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-3xl bg-[#fafafa] dark:bg-[#0e111d] border border-black/[0.06] dark:border-white/[0.08] hover:border-amber-500/40 dark:hover:border-amber-500/40 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Icon size={20} />
                                        </div>
                                        <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500">
                                            {item.pillar}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-bold text-slate-950 dark:text-white mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/[0.04] dark:border-white/[0.05]">
                                        {item.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 border border-black/[0.04] dark:border-white/[0.06]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* 3D Interactive Floating Geometric Canvas (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                        <div className="w-full h-[360px] sm:h-[440px] rounded-3xl bg-[#fafafa] dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] overflow-hidden relative shadow-sm flex items-center justify-center p-4">
                            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping"></span>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    Interactive 3D Studio • Drag to rotate
                                </span>
                            </div>

                            <ThreeSkillsCloud />

                            <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/[0.05] dark:border-white/[0.08] text-center">
                                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                                    WebGL, R3F & Procedural Shaders
                                </p>
                                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                                    Optimized 60fps render loop with zero layout thrashing
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
