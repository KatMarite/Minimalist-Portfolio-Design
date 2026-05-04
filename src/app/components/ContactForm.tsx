import { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '3719907c-18c6-47f4-976d-906c4889594e',
                    subject: `New message from ${formData.name} — Portfolio Contact`,
                    from_name: formData.name,
                    ...formData
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
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
        <section id="contact" className="py-24 px-6 lg:px-12 overflow-hidden bg-gray-50 dark:bg-[#0a0a1a]">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-blue-600 mb-16"
                >
                    Get In Touch
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm"
                    >
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-black dark:text-white mb-2 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all hover:bg-gray-50 dark:hover:bg-gray-800 bg-white dark:bg-gray-800 dark:text-white shadow-sm"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-black dark:text-white mb-2 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all hover:bg-gray-50 dark:hover:bg-gray-800 bg-white dark:bg-gray-800 dark:text-white shadow-sm"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-black dark:text-white mb-2 font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-all hover:bg-gray-50 dark:hover:bg-gray-800 bg-white dark:bg-gray-800 dark:text-white shadow-sm"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <div className="flex flex-col items-end gap-3">
                            <motion.button
                                whileHover={status === 'idle' ? { scale: 1.05 } : {}}
                                whileTap={status === 'idle' ? { scale: 0.95 } : {}}
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className={`px-8 py-3 rounded-xl transition-colors flex items-center gap-2 shadow-sm font-medium ${status === 'success'
                                        ? 'bg-green-600 text-white cursor-default'
                                        : status === 'error'
                                            ? 'bg-red-600 text-white'
                                            : 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100'
                                    } disabled:opacity-70`}
                            >
                                {status === 'loading' && (
                                    <>
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending...
                                    </>
                                )}
                                {status === 'success' && (
                                    <>
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Message Sent!
                                    </>
                                )}
                                {status === 'error' && (
                                    <>
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        Failed — Try Again
                                    </>
                                )}
                                {status === 'idle' && (
                                    <>
                                        <Mail size={20} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
