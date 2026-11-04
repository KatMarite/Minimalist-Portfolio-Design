import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ThreeHeroShape } from '../components/ThreeHeroShape';

// Reusing the same project data to simulate a full portfolio list
const PROJECTS = [
    {
        id: 1,
        title: "Black Hair",
        description: "An e-commerce and lifestyle platform dedicated to natural hair care for ethnic African hair. The site combines a retail experience for plant-based, nourishing hair products with educational resources to empower users on their healthy hair journeys.",
        tags: ["React Native", "TypeScript", "Redux", "REST API", "Firebase"],
        image: "/blk hair.jpg",
        link: "https://blackhair.africa"
    },
    {
        id: 2,
        title: "Enashy's Business Solutions",
        description: "A strategic marketing and brand consultancy specialising in experiential marketing, activations, PR, event production, and personal branding.",
        tags: ["Next.js", "TypeScript", "Recharts"],
        image: "/ebs.png",
        link: "https://enashysbusinesssolutions.com/"
    },
    {
        id: 3,
        title: "Career Indaba",
        description: "A multiplatform employment and skills network serving the African labor market. This digital-first platform bridges the gap between job seekers and industry leaders through an \"Opportunity Hub,\" career expos, and on-air coaching to drive sustainable economic growth.",
        tags: ["React", "Stripe", "GraphQL"],
        image: "/carindaba.jpg",
        link: "https://careerindaba.org/"
    },
    {
        id: 4,
        title: "Knit.cash",
        description: "Automating the complex, manual financial workflows that keep bursars and finance managers at their desks late into the night.",
        tags: ["Vue.js", "Node.js", "MongoDB"],
        image: "/knit.png",
        link: "https://knit.cash"
    },
    {
        id: 5,
        title: "Think Career RPO",
        description: "A strategic Recruitment Process Outsourcing (RPO) and talent acquisition platform. It offers an end-to-end ecosystem for employers—including career assessments, pre-employment verification, and employer branding—designed to build resilient, high-performing workforces.",
        tags: ["Python", "React", "OpenAI API", "FastAPI", "Redis"],
        image: "/RPO.jpg",
        link: "https://thinkcareerrpo.com/"
    },
    {
        id: 6,
        title: "South African Immunology Society",
        description: "The digital home of the South African Immunology Society, a professional hub for scientists and clinicians. The platform facilitates collaboration on immunological research, provides exclusive member content, and hosts educational webinars to advance medical science in South Africa",
        tags: ["Next.js", "Mapbox", "Prisma", "Supabase", "Cloudinary"],
        image: "/saimmu.jpg",
        link: "https://saimmunology.org.za/"
    },
    {
        id: 7,
        title: "Engagemint Labs",
        description: "A full-service digital agency combining technology, creativity, and strategy to develop innovative software solutions and digital marketing experiences that help brands connect, businesses evolve, and ideas become reality.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "/engagemint.jpg",
        link: "https://engagemint-labs.vercel.app/"
    },
    {
        id: 8,
        title: "Designed by Barbz",
        description: "A premium fashion e-commerce platform with a sleek UI/UX design. The store offers new arrivals, tops, bottoms, dresses, sets, and jackets, with a consultation booking feature — built around the philosophy that fashion is about the story you choose to tell.",
        tags: ["Shopify", "UI/UX Design", "E-Commerce", "Figma"],
        image: "/barbz.jpg",
        link: "https://designedbybarbz.co.za/"
    },
    {
        id: 9,
        title: "Urban Pulse — TBS App",
        description: "A next-gen transit app modernising daily commuting in Tshwane with seamless NFC payments, AI-driven route optimisation, and real-time fleet tracking — putting the future of public transport in commuters' hands.",
        tags: ["React", "TypeScript", "Cloudflare Workers", "NFC", "AI"],
        image: "/urbanpulse.jpg",
        link: "https://tbs-app.katlehomarite.workers.dev/"
    },
    {
        id: 10,
        title: "Dr. Mavis Mazhura",
        description: "A professional website for a Leadership Psychologist and Behavioural Science Expert. The platform showcases keynotes, books, media, and services focused on developing sustainable leadership — helping organisations shift from burnout to aligned, influential performance.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "CMS"],
        image: "/drmavis.jpg",
        link: "https://www.drmavismazhura.co.za/"
    },
    {
        id: 11,
        title: "Think Career Academy",
        description: "An online learning platform dedicated to transforming industries through people. The academy offers professional development courses, career insights, and a structured sign-up and login experience to help learners and organisations grow.",
        tags: ["Next.js", "TypeScript", "LMS", "Tailwind CSS"],
        image: "/thinkcareeracademy.jpg",
        link: "https://thinkcareeracademy.co.za/"
    }
];

export function ProjectsPage() {
    return (
        <main className="pt-32 pb-24 px-6 lg:px-12 bg-white dark:bg-[#030213] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">Archive <span className="text-gray-400">/</span> Projects</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                            A collection of my recent work, featuring full-stack applications, interactive dashboards, and scalable web solutions.
                        </p>
                    </div>
                    <div className="flex-1 w-full h-[300px] md:h-[400px]">
                        <ThreeHeroShape />
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="group flex flex-col bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 text-base leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto"
                                >
                                    View Project <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
