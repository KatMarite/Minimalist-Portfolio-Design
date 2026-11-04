import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ArrowUpRight, ArrowRight, ExternalLink, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PROJECTS, CATEGORIES } from '../data/projectsData';

export function FeaturedWork() {
    const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number]>('All');

    const filteredProjects = selectedCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter(project => project.category === selectedCategory);

    // The hero spotlight project
    const spotlightProject = PROJECTS.find(p => p.id === 1) || PROJECTS[0];
    
    // Remaining projects for the grid
    const gridProjects = filteredProjects;

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
                            Selected Portfolio • 11 Projects
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                            Featured Craft & Code
                        </h2>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
                        Real-world platforms, smart mobility systems, and high-conversion e-commerce stores designed and engineered for scale.
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

                {/* Spotlight Card - If "All" or "Web Apps & Platforms" is selected */}
                {(selectedCategory === 'All' || selectedCategory === spotlightProject.category) && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12 rounded-[28px] overflow-hidden bg-white dark:bg-[#0c0f1a] border border-black/[0.08] dark:border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group relative"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                            {/* Left Image Showcase (7 cols) */}
                            <div className="lg:col-span-7 relative overflow-hidden bg-slate-100 dark:bg-slate-900/50 min-h-[320px] sm:min-h-[420px]">
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

                {/* Asymmetric Bento Projects Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {gridProjects
                            .filter(p => selectedCategory === 'All' ? p.id !== 1 : true)
                            .map((project, index) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group rounded-3xl bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5"
                                >
                                    <div>
                                        {/* Image Container with Aspect Ratio */}
                                        <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                                            <ImageWithFallback
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                                <span className="text-white text-xs font-semibold flex items-center gap-1">
                                                    Visit {project.title} <ArrowUpRight size={14} />
                                                </span>
                                            </div>
                                            {/* Badge Top Corner */}
                                            <div className="absolute top-3 left-3 flex items-center gap-1.5">
                                                <span className="px-2.5 py-0.5 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider font-mono">
                                                    {project.badge || project.category}
                                                </span>
                                            </div>
                                            <div className="absolute top-3 right-3">
                                                <span className="px-2 py-0.5 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md text-slate-800 dark:text-slate-200 text-[10px] font-bold font-mono">
                                                    {project.year || '2025'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Project Content Body */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-xs font-semibold text-amber-600 dark:text-amber-400/90 mb-3">
                                                {project.tagline}
                                            </p>

                                            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack Chips */}
                                            <div className="flex flex-wrap gap-1 mb-2">
                                                {project.tags.slice(0, 4).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 4 && (
                                                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium text-slate-400">
                                                        +{project.tags.length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Footer */}
                                    <div className="px-6 pb-6 pt-2 border-t border-black/[0.04] dark:border-white/[0.05] flex items-center justify-between">
                                        <span className="text-[11px] font-medium text-slate-400">
                                            {project.category}
                                        </span>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors group/link"
                                        >
                                            <span>Visit Live</span>
                                            <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </motion.div>

                {/* View Archive CTA */}
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                    <Link
                        to="/projects"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white dark:bg-[#0e111d] border border-black/[0.08] dark:border-white/[0.1] text-slate-900 dark:text-white font-bold text-sm hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 hover:shadow-lg transition-all hover:-translate-y-0.5"
                    >
                        <span>Explore Full Archive (11 Projects)</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
