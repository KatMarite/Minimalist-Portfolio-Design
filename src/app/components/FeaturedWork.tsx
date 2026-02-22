import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function FeaturedWork() {
    return (
        <section id="work" className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-[#0a0a1a]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-16">Featured Work</h2>

                <div className="space-y-24">
                    {/* Project 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800"
                    >
                        <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
                            <div className="relative">
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        backgroundImage: `radial-gradient(circle, #e5e5e5 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px'
                                    }}
                                />
                                <div className="relative overflow-hidden rounded-[1.5rem]">
                                    <ImageWithFallback
                                        src="/blk hair.jpg"
                                        alt="Black Hair Website"
                                        className="w-full h-auto shadow-lg hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-black dark:text-white mb-4 hover:text-blue-600 transition-colors cursor-pointer">Black Hair</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                                    An e-commerce and lifestyle platform dedicated to natural hair care for ethnic African hair.
                                    The site combines a retail experience for plant-based, nourishing hair products with educational resources to empower users on their healthy hair journeys.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default">React Native</span>
                                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default">TypeScript</span>
                                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default">Redux</span>
                                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default">REST API</span>
                                    <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default">Firebase</span>
                                </div>
                                <a href="https://blackhair.africa" target="_blank" rel="noopener noreferrer" className="self-start bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors hover:shadow-lg hover:-translate-y-1 inline-block">
                                    See Project
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Projects 2, 3 & 4 - Three Column Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {/* Card 1 - Analytics Dashboard */}
                        <div className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-800 group hover:-translate-y-1">
                            <div className="relative overflow-hidden rounded-t-[2rem] h-48">
                                <ImageWithFallback
                                    src="/ebs.png"
                                    alt="EBS"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 transition-colors">Enashy's Business Solutions</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                                    A strategic marketing and brand consultancy specialising in experiential marketing, activations, PR, event production, and personal branding.
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">Next.js</span>
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">TypeScript</span>
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">Recharts</span>
                                </div>
                                <a href="https://enashysbusinesssolutions.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1">
                                    View Project <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Card 2 - E-Commerce Storefront */}
                        <div className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-800 group hover:-translate-y-1">
                            <div className="relative overflow-hidden rounded-t-[2rem] h-48">
                                <ImageWithFallback
                                    src="/carindaba.jpg"
                                    alt="Career Indaba"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 transition-colors">Career Indaba</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                                    A multiplatform employment and skills network serving the African labor market. This digital-first platform bridges the gap between job seekers and industry leaders through an "Opportunity Hub," career expos, and on-air coaching to drive sustainable economic growth.
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">React</span>
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">Stripe</span>
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">GraphQL</span>
                                </div>
                                <a href="https://careerindaba.org/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1">
                                    View Project <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Card 3 - Healthcare Patient Portal */}
                        <div className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-800 group hover:-translate-y-1">
                            <div className="relative overflow-hidden rounded-t-[2rem] h-48">
                                <ImageWithFallback
                                    src="/knit.png"
                                    alt="knit"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 transition-colors">Knit.cash</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                                    Automating the complex, manual financial workflows that keep bursars and finance managers at their desks late into the night.
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">Vue.js</span>
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">Node.js</span>
                                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">MongoDB</span>
                                </div>
                                <a href="https://knit.cash" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1">
                                    View Project <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-16 flex justify-center">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-black dark:text-white px-8 py-3 rounded-full hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all font-medium"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        View All Projects <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
