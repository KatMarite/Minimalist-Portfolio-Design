import { motion } from 'motion/react';

const CERTIFICATES = [
    {
        title: "AWS Certified Solutions Architect",
        year: "2024",
        issuer: "Amazon Web Services",
        description: "Professional-level certification demonstrating expertise in designing distributed systems on AWS, including architectural best practices and cloud infrastructure optimization."
    },
    {
        title: "Meta Front-End Developer Professional Certificate",
        year: "2023",
        issuer: "Meta (Facebook)",
        description: "Comprehensive program covering React, responsive web design, version control, and modern JavaScript frameworks with hands-on projects and industry-recognized credential."
    },
    {
        title: "Google UX Design Certificate",
        year: "2023",
        issuer: "Google",
        description: "Specialized training in user experience design principles, prototyping, wireframing, and user research methodologies to create intuitive and accessible digital experiences."
    },
    {
        title: "TypeScript Advanced Programming",
        year: "2022",
        issuer: "Udemy",
        description: "Advanced TypeScript concepts including generics, decorators, utility types, and building type-safe applications with strict mode and best practices."
    }
];

export function Certificates() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    };

    return (
        <section id="resume" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#030213]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-16">Certificates & Credentials</h2>

                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {CERTIFICATES.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white dark:bg-gray-900 p-8 rounded-[1.5rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:border-blue-100 dark:hover:border-blue-900 hover:shadow-md transition-all group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-blue-600 transition-colors">{cert.title}</h3>
                                <span className="text-gray-400 font-medium md:ml-4 whitespace-nowrap">{cert.year}</span>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-3">{cert.issuer}</p>
                            <p className="text-gray-500 leading-relaxed text-base">
                                {cert.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
