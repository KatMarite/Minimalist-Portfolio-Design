import { motion } from 'motion/react';
import { Rocket, Code2, Lightbulb, Users, Zap, Layout } from 'lucide-react';

export function AboutMe() {
    return (
        <section id="about" className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-[#0a0a1a]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-16">About Me</h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column (5/12) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Photo Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-900 rounded-[2rem] p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex-1 relative overflow-hidden group min-h-[400px]"
                        >
                            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-100">
                                <img
                                    src="/profile.jpg"
                                    alt="Profile Portrait"
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* Stats Cards Row */}
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow"
                            >
                                <Rocket className="text-blue-600" size={28} />
                                <div className="text-center">
                                    <h4 className="text-3xl font-bold text-black dark:text-white mb-1">5+</h4>
                                    <p className="text-sm text-gray-500 font-medium">Years Experience</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow"
                            >
                                <Code2 className="text-blue-600" size={28} />
                                <div className="text-center">
                                    <h4 className="text-3xl font-bold text-black dark:text-white mb-1">50+</h4>
                                    <p className="text-sm text-gray-500 font-medium">Projects Completed</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column (7/12) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        {/* Big text card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-100 dark:border-gray-800"
                        >
                            <h3 className="text-3xl font-bold text-blue-600 mb-6">Crafting Digital Excellence</h3>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                A passionate and results driven AI/ML enthusiast with a strong foundation in full-stack web development. I specialize in building <span className="text-blue-600 font-bold">data-driven applications</span> and models that <span className="text-green-600 font-bold">solve real-world problems.</span> My career objective is to leverage my skills in machine learning, Python, and modern web frameworks to contribute to innovative projects in a collaborative environment.
                            </p>
                        </motion.div>

                        {/* 4 smaller cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                            {[
                                {
                                    icon: Lightbulb,
                                    title: "Creative Problem Solving",
                                    desc: "Turning complex challenges into elegant solutions",
                                    color: "text-purple-600",
                                    bg: "bg-purple-100"
                                },
                                {
                                    icon: Users,
                                    title: "User-Centric Design",
                                    desc: "Building experiences that users love and remember",
                                    color: "text-green-600",
                                    bg: "bg-green-100"
                                },
                                {
                                    icon: Zap,
                                    title: "High Performance",
                                    desc: "Optimizing applications for lightning-fast speeds",
                                    color: "text-blue-600",
                                    bg: "bg-blue-100"
                                },
                                {
                                    icon: Layout,
                                    title: "Scalable Architecture",
                                    desc: "Designing systems that grow with your business",
                                    color: "text-orange-600",
                                    bg: "bg-orange-100"
                                }
                            ].map((card, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-5 hover:shadow-md transition-shadow group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <card.icon className={card.color} size={28} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-black dark:text-white mb-2">{card.title}</h4>
                                        <p className="text-gray-500 font-medium leading-relaxed max-w-[250px]">{card.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
