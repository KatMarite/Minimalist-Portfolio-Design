import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { LiveStatus } from './LiveStatus';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="py-12 px-6 lg:px-12 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#030213]">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 pb-12 mb-8 border-b border-gray-200 dark:border-white/10">
                <LiveStatus />
            </div>
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex flex-col items-center gap-4 md:items-start text-center md:text-left">
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                        © 2026 Katleho Marite.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        Designed with simplicity and modern aesthetics.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/KatMarite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-white/10 rounded-full text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/20 hover:shadow-md transition-all hover:-translate-y-1"
                        aria-label="GitHub"
                    >
                        <Github size={22} strokeWidth={1.5} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/katleho-marite-0282867b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-white/10 rounded-full text-gray-600 dark:text-gray-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-gray-100 dark:hover:bg-white/20 hover:shadow-md transition-all hover:-translate-y-1"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={22} strokeWidth={1.5} />
                    </a>
                    <a
                        href="https://www.behance.net/katlehomarite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-white/10 rounded-full text-gray-600 dark:text-gray-300 hover:text-[#1769FF] dark:hover:text-[#1769FF] hover:bg-gray-100 dark:hover:bg-white/20 hover:shadow-md transition-all hover:-translate-y-1"
                        aria-label="Behance"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 11C8.88 11 10 9.88 10 8.5S8.88 6 7.5 6H3v5h4.5zM3 18h5c1.38 0 2.5-1.12 2.5-2.5S9.38 13 8 13H3v5zM1 4h6.5C9.43 4 11 5.57 11 7.5c0 1.12-.52 2.12-1.34 2.76C10.93 11 12 12.38 12 14c0 2.21-1.79 4-4 4H1V4zM15 6h6v1.5h-6V6zM18 20c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5h-7.5c.5 1.5 1.79 2.5 3.5 2.5 1.12 0 2-.5 2.5-1.25H23c-.75 2.16-2.79 3.75-5 3.75zM18 12c-1.38 0-2.57.81-3.12 2H21.12c-.55-1.19-1.74-2-3.12-2z" />
                        </svg>
                    </a>


                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="ml-4 p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:-translate-y-1 shadow-sm"
                        aria-label="Back to Top"
                    >
                        <ArrowUp size={22} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
