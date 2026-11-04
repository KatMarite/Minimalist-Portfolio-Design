import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 25);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle smooth section scroll when navigating
    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollTo) {
            const id = location.state.scrollTo;
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 90;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
                navigate('/', { replace: true, state: {} });
            }, 120);
        }
    }, [location, navigate]);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);

        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleResumeDownload = () => {
        window.open('/Katleho Marite CV.pdf', '_blank');
        setMobileMenuOpen(false);
    };

    const handleHomeClick = () => {
        if (location.pathname !== '/') navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navigateToProjects = () => {
        navigate('/projects');
        window.scrollTo(0, 0);
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 px-4 sm:px-6 lg:px-8">
            <nav className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
                scrolled
                    ? 'bg-white/80 dark:bg-[#0c0f1a]/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)]'
                    : 'bg-white/50 dark:bg-[#0c0f1a]/50 backdrop-blur-md border border-black/[0.04] dark:border-white/[0.04]'
            }`}>
                {/* Brand / Avatar */}
                <div className="flex items-center gap-3 cursor-pointer group" onClick={handleHomeClick}>
                    <div className="relative">
                        <img
                            src="/logo.png"
                            alt="Katleho Marite"
                            className="h-9 w-9 rounded-full object-cover ring-2 ring-amber-500/30 group-hover:ring-amber-500 group-hover:scale-105 transition-all shadow-sm"
                        />
                        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#0c0f1a]"></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                            Katleho Marite
                            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-md border border-amber-500/20">
                                Dev
                            </span>
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                            Frontend & Creative Tech
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-1 text-sm font-medium">
                    <button
                        onClick={() => scrollToSection('work')}
                        className="px-3.5 py-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-all"
                    >
                        Work
                    </button>

                    <button
                        onClick={() => scrollToSection('skills')}
                        className="px-3.5 py-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-all"
                    >
                        Skills
                    </button>

                    <button
                        onClick={() => scrollToSection('about')}
                        className="px-3.5 py-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-all"
                    >
                        About
                    </button>

                    <button
                        onClick={() => scrollToSection('credentials')}
                        className="px-3.5 py-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-all"
                    >
                        Credentials
                    </button>

                    <button
                        onClick={navigateToProjects}
                        className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                            location.pathname === '/projects'
                                ? 'text-amber-600 dark:text-amber-400 font-semibold bg-amber-500/10'
                                : 'text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                        }`}
                    >
                        Archive
                        <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-1.5 py-0.2 rounded-full font-mono text-slate-600 dark:text-slate-400">11</span>
                    </button>
                </div>

                {/* Right Action Island */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleResumeDownload}
                        className="hidden lg:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-400 transition-all hover:-translate-y-0.5"
                    >
                        <FileDown size={14} />
                        <span>CV</span>
                    </button>

                    <ThemeToggle />

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-amber-600 dark:hover:bg-amber-400 dark:hover:text-slate-950 transition-all hover:shadow-md hover:scale-105 active:scale-95"
                    >
                        <span>Let's Talk</span>
                        <ArrowUpRight size={14} />
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-3xl bg-white/95 dark:bg-[#0c0f1a]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="space-y-1">
                        <button
                            onClick={() => scrollToSection('work')}
                            className="w-full text-left px-4 py-2.5 rounded-xl font-medium text-slate-800 dark:text-slate-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center justify-between"
                        >
                            <span>Featured Work</span>
                            <Sparkles size={16} className="text-amber-500" />
                        </button>

                        <button
                            onClick={() => scrollToSection('skills')}
                            className="w-full text-left px-4 py-2.5 rounded-xl font-medium text-slate-800 dark:text-slate-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                        >
                            Skills & Stack
                        </button>

                        <button
                            onClick={() => scrollToSection('about')}
                            className="w-full text-left px-4 py-2.5 rounded-xl font-medium text-slate-800 dark:text-slate-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                        >
                            About & Philosophy
                        </button>

                        <button
                            onClick={() => scrollToSection('credentials')}
                            className="w-full text-left px-4 py-2.5 rounded-xl font-medium text-slate-800 dark:text-slate-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                        >
                            Credentials
                        </button>

                        <button
                            onClick={navigateToProjects}
                            className="w-full text-left px-4 py-2.5 rounded-xl font-medium text-slate-800 dark:text-slate-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center justify-between"
                        >
                            <span>All Projects Archive</span>
                            <span className="text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full font-mono font-bold">11</span>
                        </button>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
                        <button
                            onClick={handleResumeDownload}
                            className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-white/10 font-semibold text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                        >
                            <FileDown size={16} />
                            Download Resume (PDF)
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                        >
                            <span>Get in Touch</span>
                            <ArrowUpRight size={16} />
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
