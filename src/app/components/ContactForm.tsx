import { useState } from 'react';
import { Mail, Send, Check, Copy, Sparkles, MessageSquare, ArrowUpRight, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const PROJECT_TYPES = [
    "Full-Stack Web App",
    "Frontend Engineering",
    "E-Commerce / Shopify",
    "Design System & UI/UX",
    "Advisory / Contract"
];

export function ContactForm() {
    const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("katlehomarite@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '3719907c-18c6-47f4-976d-906c4889594e',
                    subject: `New Inquiry [${projectType}] from ${formData.name}`,
                    from_name: formData.name,
                    project_type: projectType,
                    ...formData
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 6000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] dark:bg-[#07080e] relative transition-colors duration-300">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono mb-2">
                            <MessageSquare size={14} />
                            Get In Touch • Collaboration & Hiring
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                            Let's Build Something Great
                        </h2>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
                        Have an ambitious project, a new venture, or an engineering role in mind? I'm currently open to select high-impact opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column (5 cols) - Contact Dossier */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="p-8 rounded-3xl bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
                            <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-2">
                                Direct Contact & Channels
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Reach out directly via email or connect through my professional developer profiles.
                            </p>

                            <div className="space-y-4 mb-6">
                                {/* Email Row */}
                                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <span className="text-[11px] text-slate-400 block font-medium">Email Address</span>
                                            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white select-all">
                                                katlehomarite@gmail.com
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleCopyEmail}
                                        className="p-2 rounded-lg bg-white dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-slate-300 transition-colors"
                                        title="Copy email to clipboard"
                                    >
                                        {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                                    </button>
                                </div>

                                {/* Location & Response Time */}
                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06]">
                                        <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold mb-1">
                                            <MapPin size={14} /> Location
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                                            Johannesburg, SA (GMT+2)
                                        </span>
                                    </div>

                                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06]">
                                        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                                            <Clock size={14} /> Availability
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                                            Immediate / Q1 2026
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Profiles Grid */}
                            <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.06]">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-3">
                                    Professional Profiles
                                </span>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="https://github.com/KatMarite"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 rounded-xl text-center text-xs font-semibold bg-slate-100 dark:bg-white/[0.06] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/katleho-marite-0282867b/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 rounded-xl text-center text-xs font-semibold bg-slate-100 dark:bg-white/[0.06] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://www.behance.net/katlehomarite"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 rounded-xl text-center text-xs font-semibold bg-slate-100 dark:bg-white/[0.06] text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                                    >
                                        Behance
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (7 cols) - Interactive Message Form */}
                    <div className="lg:col-span-7">
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0c0f1a] border border-black/[0.06] dark:border-white/[0.08] shadow-sm relative overflow-hidden"
                        >
                            {/* Project Type Selectors */}
                            <div className="mb-6">
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                                    What are you looking to collaborate on?
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {PROJECT_TYPES.map((type) => {
                                        const isSelected = projectType === type;
                                        return (
                                            <button
                                                type="button"
                                                key={type}
                                                onClick={() => setProjectType(type)}
                                                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                                    isSelected
                                                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                                                        : 'bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                                                }`}
                                            >
                                                {type}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Name & Email inputs */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-slate-50/50 dark:bg-[#121624] text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                                        placeholder="Jane Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-slate-50/50 dark:bg-[#121624] text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                                        placeholder="jane@company.com"
                                    />
                                </div>
                            </div>

                            {/* Message input */}
                            <div className="mb-6">
                                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                                    Project Scope & Details
                                </label>
                                <textarea
                                    id="contact-message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-slate-50/50 dark:bg-[#121624] text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
                                    placeholder="Tell me about your goals, timelines, or requirements..."
                                />
                            </div>

                            {/* Submit Button & Status indicator */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <span className="text-[11px] text-slate-400 order-2 sm:order-1">
                                    ⚡ Secure 256-bit encrypted transmission
                                </span>

                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 order-1 sm:order-2 shadow-md ${
                                        status === 'success'
                                            ? 'bg-emerald-500 text-white cursor-default'
                                            : status === 'error'
                                                ? 'bg-rose-500 text-white'
                                                : 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-amber-600 dark:hover:bg-amber-400'
                                    } disabled:opacity-80`}
                                >
                                    {status === 'loading' && (
                                        <>
                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            <span>Sending Message...</span>
                                        </>
                                    )}
                                    {status === 'success' && (
                                        <>
                                            <CheckCircle2 size={16} />
                                            <span>Message Sent Successfully!</span>
                                        </>
                                    )}
                                    {status === 'error' && (
                                        <span>Error Sending. Please Retry.</span>
                                    )}
                                    {status === 'idle' && (
                                        <>
                                            <span>Send Inquiry</span>
                                            <Send size={15} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.form>
                    </div>

                </div>

            </div>
        </section>
    );
}
