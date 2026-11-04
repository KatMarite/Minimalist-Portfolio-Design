import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

const CERTIFICATES = [
    {
        title: "AWS Certified Solutions Architect",
        year: "2024",
        issuer: "Amazon Web Services (AWS)",
        badge: "Cloud Architecture",
        description: "Professional-level certification demonstrating expertise in designing distributed, cost-effective, and fault-tolerant cloud infrastructures on AWS following the Well-Architected Framework.",
        skills: ["Cloud Architecture", "Distributed Systems", "Security & VPC", "High Availability"]
    },
    {
        title: "Meta Front-End Developer Professional Certificate",
        year: "2023",
        issuer: "Meta (Facebook)",
        badge: "Frontend Engineering",
        description: "Rigorous specialization covering advanced React, component life-cycles, responsive design patterns, version control, automated testing, and web application architecture.",
        skills: ["React & Hooks", "UI/UX Architecture", "Jest Testing", "Modern JavaScript"]
    },
    {
        title: "Google UX Design Certificate",
        year: "2023",
        issuer: "Google",
        badge: "Human-Centered Design",
        description: "Specialized training in user experience design, wireframing, high-fidelity Figma prototyping, usability testing, and inclusive design for web and mobile touchpoints.",
        skills: ["User Research", "Figma Prototyping", "Information Architecture", "Design Systems"]
    },
    {
        title: "TypeScript Advanced Programming",
        year: "2022",
        issuer: "Udemy",
        badge: "Type Systems",
        description: "Deep dive into TypeScript compiler architecture, generics, mapped types, conditional types, decorators, and building bulletproof type-safe libraries.",
        skills: ["Generics & Utility Types", "AST & Type Inference", "Strict Mode Engineering", "Decoupled Architecture"]
    }
];

export function Certificates() {
    return (
        <section id="credentials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#090b14] relative transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono mb-2">
                            <Award size={14} />
                            Verified Credentials & Accreditations
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                            Certifications & Mastery
                        </h2>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
                        Industry-validated accreditations from world-class technology organizations spanning cloud architecture, frontend systems, and design.
                    </p>
                </div>

                {/* 2x2 Bento Grid for Certificates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {CERTIFICATES.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-7 rounded-3xl bg-[#fafafa] dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] shadow-sm hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                                            <ShieldCheck size={18} />
                                        </span>
                                        <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                            <CheckCircle2 size={12} />
                                            Verified Credential
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                                        {cert.year}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                    {cert.title}
                                </h3>

                                <p className="text-xs font-bold text-amber-600 dark:text-amber-400/90 mb-3">
                                    {cert.issuer}
                                </p>

                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                    {cert.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.06] flex flex-wrap gap-1.5">
                                {cert.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-black/[0.04] dark:border-white/[0.06]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
