import { HashRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#fafafa] dark:bg-[#07080e] text-slate-900 dark:text-slate-100 font-['Plus_Jakarta_Sans','Inter',sans-serif] selection:bg-amber-500 selection:text-slate-950 flex flex-col transition-colors duration-300">
        <Header />

        {/* Main Content routing */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </HashRouter>
  );
}
