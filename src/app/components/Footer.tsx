import { Github, Linkedin, ArrowUp, Sparkles, Heart } from 'lucide-react';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-[#07080e] transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Brand & Copyright */}
                <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                    <div className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="Katleho Marite"
                            className="h-7 w-7 rounded-full object-cover ring-1 ring-amber-500/30"
                        />
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                            Katleho Marite
                        </span>
                    </div>

                    <span className="hidden sm:inline-block text-slate-300 dark:text-slate-700">•</span>

                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        © 2026 Crafted with precision, TypeScript & Three.js.
                    </p>
                </div>

                {/* Social Dock & Back to Top */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/KatMarite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
                        aria-label="GitHub Profile"
                    >
                        <Github size={18} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/katleho-marite-0282867b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-slate-200 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={18} />
                    </a>

                    <a
                        href="https://www.behance.net/katlehomarite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 hover:text-[#1769FF] dark:hover:text-[#1769FF] hover:bg-slate-200 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
                        aria-label="Behance Profile"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.5 11C8.88 11 10 9.88 10 8.5S8.88 6 7.5 6H3v5h4.5zM3 18h5c1.38 0 2.5-1.12 2.5-2.5S9.38 13 8 13H3v5zM1 4h6.5C9.43 4 11 5.57 11 7.5c0 1.12-.52 2.12-1.34 2.76C10.93 11 12 12.38 12 14c0 2.21-1.79 4-4 4H1V4zM15 6h6v1.5h-6V6zM18 20c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5h-7.5c.5 1.5 1.79 2.5 3.5 2.5 1.12 0 2-.5 2.5-1.25H23c-.75 2.16-2.79 3.75-5 3.75zM18 12c-1.38 0-2.57.81-3.12 2H21.12c-.55-1.19-1.74-2-3.12-2z" />
                        </svg>
                    </a>

                    {/* Back to top button */}
                    <button
                        onClick={scrollToTop}
                        className="ml-2 p-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-amber-600 dark:hover:bg-amber-400 transition-all hover:-translate-y-0.5 shadow-sm"
                        aria-label="Scroll to top of page"
                        title="Scroll to top"
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>

            </div>
        </footer>
    );
}
