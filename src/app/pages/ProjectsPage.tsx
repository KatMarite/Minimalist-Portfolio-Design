import { useState, useMemo } from 'react';
import { ArrowLeft, ArrowUpRight, Search, Sparkles, Filter, Layers } from 'lucide-react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ThreeHeroShape } from '../components/ThreeHeroShape';
import { PROJECTS, CATEGORIES, Project } from '../data/projectsData';

export function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number]>('All');

    const filteredProjects = useMemo(() => {
        return PROJECTS.filter((project) => {
            const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch = 
                !query ||
                project.title.toLowerCase().includes(query) ||
                project.tagline.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.tags.some(tag => tag.toLowerCase().includes(query));

            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] dark:bg-[#07080e] min-h-screen transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                
                {/* Back to Home Button */}
                <div className="mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-2 px-3 rounded-full hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
                    >
                        <ArrowLeft size={16} />
                        <span>Return to Overview</span>
                    </Link>
                </div>

                {/* Hero Archive Header */}
                <header className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-black/[0.06] dark:border-white/[0.08] pb-12">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono mb-3">
                            <Layers size={14} />
                            Complete Engineering Index • 11 Projects
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-4">
                            Archive <span className="text-slate-300 dark:text-slate-700">/</span> Works
                        </h1>
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                            A comprehensive registry of full-stack platforms, smart mobility ecosystems, e-commerce storefronts, and research hubs built between 2023 and 2026.
                        </p>
                    </div>

                    <div className="lg:col-span-5 h-[260px] sm:h-[320px] rounded-3xl bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] overflow-hidden p-2 relative shadow-sm">
                        <div className="absolute top-3 left-4 z-10 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            Interactive 3D Geometric Knot
                        </div>
                        <ThreeHeroShape />
                    </div>
                </header>

                {/* Search & Category Filter Controls */}
                <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    
                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {CATEGORIES.map((category) => {
                            const isSelected = selectedCategory === category;
                            const count = category === 'All'
                                ? PROJECTS.length
                                : PROJECTS.filter(p => p.category === category).length;

                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                                        isSelected
                                            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm'
                                            : 'bg-white dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                                    }`}
                                >
                                    <span>{category}</span>
                                    <span className="text-[10px] opacity-70 font-mono">({count})</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Live Search Input */}
                    <div className="relative w-full md:w-72">
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Filter by keyword or stack..."
                            className="w-full pl-9 pr-4 py-2 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-[#0c0f1a] text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                </div>

                {/* Results Count Bar */}
                <div className="mb-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>
                        Showing <strong className="text-slate-900 dark:text-white">{filteredProjects.length}</strong> of {PROJECTS.length} indexed projects
                    </span>
                    {searchQuery && (
                        <span>
                            Filtered by query: <span className="font-mono text-amber-500">"{searchQuery}"</span>
                        </span>
                    )}
                </div>

                {/* Projects Bento Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="group rounded-[28px] bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5"
                            >
                                <div>
                                    {/* Image Container with Aspect Ratio */}
                                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                                        <ImageWithFallback
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                            <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                                                Open live site <ArrowUpRight size={16} />
                                            </span>
                                        </div>
                                        {/* Top Badges */}
                                        <div className="absolute top-4 left-4 flex items-center gap-2">
                                            <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider font-mono">
                                                {project.badge || project.category}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className="px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-md text-slate-900 dark:text-white text-xs font-bold font-mono">
                                                {project.year || '2025'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Block */}
                                    <div className="p-6 sm:p-8">
                                        <div className="flex items-center justify-between gap-4 mb-1">
                                            <h3 className="text-2xl font-bold text-slate-950 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>

                                        <p className="text-xs font-semibold text-amber-600 dark:text-amber-400/90 mb-3 font-mono">
                                            {project.tagline}
                                        </p>

                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        {/* Architectural highlights */}
                                        <div className="space-y-1.5 mb-6">
                                            {project.highlights.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-black/[0.04] dark:border-white/[0.06]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Link Footer */}
                                <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-black/[0.04] dark:border-white/[0.05] mt-2">
                                    <span className="text-xs font-medium text-slate-400">
                                        Category: {project.category}
                                    </span>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-950 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                                    >
                                        <span>Visit Live Platform</span>
                                        <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center rounded-3xl bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] p-8">
                        <Sparkles size={32} className="mx-auto text-amber-500 mb-3 opacity-60" />
                        <h4 className="text-lg font-bold text-slate-950 dark:text-white mb-1">
                            No projects matched your criteria
                        </h4>
                        <p className="text-sm text-slate-500 mb-4">
                            Try adjusting your search query or selecting a different category.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            className="px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}

            </div>
        </main>
    );
}
