import { motion } from 'motion/react';
import { Rocket, Code2, Lightbulb, Users, Zap, Sparkles, Shield, CheckCircle2 } from 'lucide-react';

export function AboutMe() {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] dark:bg-[#07080e] relative transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono mb-2">
                            <Sparkles size={14} />
                            Background & Philosophy
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                            Crafting Digital Excellence
                        </h2>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
                        Merging AI-driven problem solving with modern web craftsmanship to build products that delight users and drive real business outcomes.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Left Column (5 cols) - Portrait & Status Bento */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        
                        {/* Portrait Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-3 rounded-3xl bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] shadow-sm overflow-hidden group relative min-h-[380px] flex flex-col"
                        >
                            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                                <img
                                    src="/profile.jpg"
                                    alt="Katleho Marite"
                                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                                    <div>
                                        <h3 className="text-xl font-extrabold text-white">Katleho Marite</h3>
                                        <p className="text-xs text-amber-300 font-medium">Frontend Engineer & Creative Technologist</p>
                                    </div>
                                </div>
                            </div>

                            {/* Status & Focus Bar */}
                            <div className="p-3 mt-1 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <div className="flex items-center gap-2 font-medium">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-slate-900 dark:text-white font-semibold">Available for Projects</span>
                                </div>
                                <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full font-semibold">
                                    Full-Stack & Frontend
                                </span>
                            </div>
                        </motion.div>

                        {/* Quick Metrics Pair */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="p-5 rounded-2xl bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] shadow-sm flex flex-col items-center justify-center text-center group hover:border-amber-500/40 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <Rocket size={20} />
                                </div>
                                <span className="text-2xl font-extrabold text-slate-950 dark:text-white font-mono">5+</span>
                                <span className="text-xs text-slate-500 font-medium">Years Experience</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="p-5 rounded-2xl bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] shadow-sm flex flex-col items-center justify-center text-center group hover:border-amber-500/40 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <Code2 size={20} />
                                </div>
                                <span className="text-2xl font-extrabold text-slate-950 dark:text-white font-mono">50+</span>
                                <span className="text-xs text-slate-500 font-medium">Projects Shipped</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column (7 cols) - Narrative & Value Pillars */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        
                        {/* Narrative Editorial Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] shadow-sm"
                        >
                            <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white mb-4">
                                Engineering with Curiosity & Conviction
                            </h3>

                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                                I am a passionate and results-driven frontend engineer and AI/ML enthusiast with a solid foundation across full-stack web development. I thrive in the intersection where <span className="text-amber-600 dark:text-amber-400 font-bold">intuitive interaction design</span> meets <span className="text-slate-900 dark:text-white font-bold">rigorous software architecture</span>.
                            </p>

                            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                                Whether building high-concurrency public transit applications with contactless NFC payments, architecting bespoke luxury e-commerce platforms, or engineering corporate learning ecosystems, my objective is always the same: <span className="underline decoration-amber-500 decoration-2 font-semibold text-slate-900 dark:text-white">deliver resilient, zero-friction software that solves real-world human needs</span>.
                            </p>
                        </motion.div>

                        {/* 4 Core Pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                            {[
                                {
                                    icon: Lightbulb,
                                    title: "Creative Problem Solving",
                                    desc: "Deconstructing complex business ambiguity into clean, componentized solutions.",
                                    color: "text-amber-500",
                                    bg: "bg-amber-500/10"
                                },
                                {
                                    icon: Users,
                                    title: "User-Centric Empathy",
                                    desc: "Designing experiences that feel natural, accessible, and deeply memorable.",
                                    color: "text-emerald-500",
                                    bg: "bg-emerald-500/10"
                                },
                                {
                                    icon: Zap,
                                    title: "Performance First",
                                    desc: "Optimizing bundle sizes, edge runtimes, and critical rendering paths.",
                                    color: "text-cyan-500",
                                    bg: "bg-cyan-500/10"
                                },
                                {
                                    icon: Shield,
                                    title: "Production Resilience",
                                    desc: "Strict TypeScript typing, testable abstractions, and long-term maintainability.",
                                    color: "text-indigo-500",
                                    bg: "bg-indigo-500/10"
                                }
                            ].map((card, idx) => {
                                const Icon = card.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.05 * (idx + 1) }}
                                        viewport={{ once: true }}
                                        className="p-5 rounded-2xl bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] shadow-sm flex flex-col justify-between group hover:border-amber-500/30 transition-all hover:-translate-y-0.5"
                                    >
                                        <div className={`w-9 h-9 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-950 dark:text-white mb-1">
                                                {card.title}
                                            </h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
