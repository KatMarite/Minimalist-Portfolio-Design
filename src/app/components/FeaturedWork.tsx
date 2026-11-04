import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PROJECTS, CATEGORIES } from '../data/projectsData';

export function FeaturedWork() {
    const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number]>('All');

    const filteredProjects = selectedCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter(project => project.category === selectedCategory);

    // Limit to the first 3 projects before the explore full archive button
    const featuredProjects = filteredProjects.slice(0, 3);
    const spotlightProject = featuredProjects[0];
    const gridProjects = featuredProjects.slice(1, 3);

    return (
        <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] dark:bg-[#07080e] relative transition-colors duration-300">
            {/* Ambient subtle glow */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono mb-2">
                            <Sparkles size={14} />
                            Featured Projects • 3 of {PROJECTS.length} Selected
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                            Featured Craft & Code
                        </h2>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
                        A curated look at recent production platforms, smart mobility systems, and high-impact digital products.
                    </p>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
                    {CATEGORIES.map((category) => {
                        const count = category === 'All' 
                            ? PROJECTS.length 
                            : PROJECTS.filter(p => p.category === category).length;
                        const isSelected = selectedCategory === category;

                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                                    isSelected
                                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md shadow-amber-500/10'
                                        : 'bg-white dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                                }`}
                            >
                                <span>{category}</span>
                                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                                    isSelected
                                        ? 'bg-white/20 dark:bg-black/20 text-white dark:text-slate-900 font-bold'
                                        : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                                }`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Project 1: Flagship Spotlight Card */}
                {spotlightProject && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-8 rounded-[28px] overflow-hidden bg-white dark:bg-[#0c0f1a] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group relative"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                            {/* Left Image Showcase (7 cols) */}
                            <div className="lg:col-span-7 relative overflow-hidden bg-slate-100 dark:bg-slate-900/50 min-h-[300px] sm:min-h-[400px]">
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 lg:opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                <ImageWithFallback
                                    src={spotlightProject.image}
                                    alt={spotlightProject.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                                        ★ Flagship Showcase
                                    </span>
                                    <span className="px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-extrabold uppercase font-mono">
                                        {spotlightProject.year}
                                    </span>
                                </div>
                            </div>

                            {/* Right Project Details (5 cols) */}
                            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider font-mono">
                                            {spotlightProject.category}
                                        </span>
                                        <span className="text-slate-300 dark:text-slate-700">•</span>
                                        <span className="text-xs text-slate-500 font-medium">
                                            {spotlightProject.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                        {spotlightProject.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                                        {spotlightProject.tagline}
                                    </p>

                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                        {spotlightProject.description}
                                    </p>

                                    {/* Architectural Highlights */}
                                    <div className="space-y-2 mb-6 pt-4 border-t border-black/[0.05] dark:border-white/[0.06]">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                                            Architecture Highlights
                                        </span>
                                        {spotlightProject.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                                                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech Stack Chips */}
                                    <div className="flex flex-wrap gap-1.5 mb-8">
                                        {spotlightProject.tags.map((tag) => (
                                            <span 
                                                key={tag}
                                                className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 border border-black/[0.04] dark:border-white/[0.06]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={spotlightProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto self-start px-6 py-3 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-sm hover:bg-amber-600 dark:hover:bg-amber-400 transition-all flex items-center justify-center gap-2 group/btn shadow-md hover:-translate-y-0.5"
                                >
                                    <span>Launch Live App</span>
                                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Projects 2 & 3: Two Column Grid */}
                {gridProjects.length > 0 && (
                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14"
                    >
                        <AnimatePresence>
                            {gridProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group rounded-[28px] bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5"
                                >
                                    <div>
                                        {/* Image Container with Aspect Ratio */}
                                        <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                                            <ImageWithFallback
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                                                <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                                                    Visit {project.title} <ArrowUpRight size={14} />
                                                </span>
                                            </div>
                                            {/* Top Corner Badges */}
                                            <div className="absolute top-4 left-4 flex items-center gap-1.5">
                                                <span className="px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider font-mono">
                                                    {project.badge || project.category}
                                                </span>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <span className="px-2.5 py-1 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md text-slate-800 dark:text-slate-200 text-[10px] font-bold font-mono">
                                                    {project.year || '2025'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Project Content Body */}
                                        <div className="p-6 sm:p-7">
                                            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-xs font-semibold text-amber-600 dark:text-amber-400/90 mb-3 font-mono">
                                                {project.tagline}
                                            </p>

                                            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack Chips */}
                                            <div className="flex flex-wrap gap-1.5 mb-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Footer */}
                                    <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-black/[0.04] dark:border-white/[0.05] flex items-center justify-between">
                                        <span className="text-xs font-medium text-slate-400">
                                            {project.category}
                                        </span>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors group/link"
                                        >
                                            <span>Visit Live</span>
                                            <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {/* Explore Full Archive CTA Section */}
                <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] shadow-sm text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                        <Layers size={24} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white mb-2">
                        Looking for more work?
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mb-6 leading-relaxed">
                        Explore the complete archive of {PROJECTS.length} platforms including fintech engines, talent ecosystems, and clinical research portals.
                    </p>

                    <Link
                        to="/projects"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-sm hover:bg-amber-600 dark:hover:bg-amber-400 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <span>Explore Full Archive ({PROJECTS.length} Projects)</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
