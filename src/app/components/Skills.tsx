import { Code, Layout, Palette, Database, Smartphone, Globe, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' as const } }
    };

    return (
        <section id="about" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#030213]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-16">Skills & Technologies</h2>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {[
                        { Icon: Code, name: "React" },
                        { Icon: Terminal, name: "TypeScript" },
                        { Icon: Layout, name: "Next.js" },
                        { Icon: Palette, name: "Tailwind CSS" },
                        { Icon: Database, name: "GraphQL" },
                        { Icon: Globe, name: "REST APIs" },
                        { Icon: Smartphone, name: "Responsive Design" },
                        { Icon: Code, name: "Git & GitHub" }
                    ].map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center gap-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-sm border border-transparent hover:border-gray-100 dark:hover:border-gray-800"
                            variants={itemVariants}
                        >
                            <skill.Icon size={40} strokeWidth={1.5} className="text-blue-600" />
                            <span className="text-black dark:text-white font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
