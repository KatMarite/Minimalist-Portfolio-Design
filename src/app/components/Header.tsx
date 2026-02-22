import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle scroll when navigating from another page
    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollTo) {
            const id = location.state.scrollTo;
            // timeout ensures DOM is ready
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
                // Clear the state so it doesn't try to scroll again on reload
                navigate('/', { replace: true, state: {} });
            }, 100);
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
            const headerOffset = 80;
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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding,box-shadow] duration-300 ${scrolled ? 'bg-white/95 dark:bg-[#030213]/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/10 py-2' : 'bg-transparent py-4'}`}>
            <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Profile Avatar */}
                <div className="flex items-center gap-4">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover cursor-pointer hover:scale-105 transition-transform shadow-sm"
                        onClick={handleHomeClick}
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    <button onClick={() => navigateToProjects()} className={`hover:text-blue-600 transition-colors ${location.pathname === '/projects' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}>
                        Projects
                    </button>

                    <button onClick={() => scrollToSection('about')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                        About
                    </button>
                    <button onClick={handleResumeDownload} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                        Resume
                    </button>
                    <ThemeToggle />
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="ml-2 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-sm"
                    >
                        Contact Me
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors text-black dark:text-white"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full border-t border-gray-100 dark:border-white/10 bg-white/95 dark:bg-[#030213]/95 backdrop-blur-md shadow-lg">
                    <div className="px-6 py-6 space-y-4 font-medium dark:text-white">
                        <button
                            onClick={() => navigateToProjects()}
                            className={`block w-full text-left py-2 transition-colors ${location.pathname === '/projects' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                            Projects
                        </button>

                        <button
                            onClick={() => scrollToSection('about')}
                            className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={handleResumeDownload}
                            className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Resume
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="block w-full text-center py-3 mt-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
