export interface Project {
  id: number;
  title: string;
  tagline: string;
  category: 'Web Apps & Platforms' | 'E-Commerce' | 'Client & Brand';
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
  year?: string;
  badge?: string;
}

export const CATEGORIES = ['All', 'Web Apps & Platforms', 'E-Commerce', 'Client & Brand'] as const;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Urban Pulse — TBS App",
    tagline: "Next-Gen Urban Transit & Seamless NFC Ticketing",
    category: "Web Apps & Platforms",
    description: "Modernizing daily commuting across Tshwane with real-time transit fleet tracking, instant contactless NFC tap payments, and AI-driven route optimization tailored for municipal commuters.",
    highlights: ["Contactless NFC payment engine", "Real-time fleet & route telematics", "Edge-optimized Cloudflare Workers backend"],
    tags: ["React", "TypeScript", "Cloudflare Workers", "NFC", "Tailwind CSS", "AI Routing"],
    image: "/urbanpulse.jpg",
    link: "https://tbs-app.katlehomarite.workers.dev/",
    featured: true,
    year: "2026",
    badge: "Smart Transit"
  },
  {
    id: 2,
    title: "Think Career Academy",
    tagline: "Enterprise EdTech Platform for Continuous Upskilling",
    category: "Web Apps & Platforms",
    description: "An online learning management ecosystem built to transform industries through people. Features structured course pathways, interactive video content, student portfolios, and corporate skill validation.",
    highlights: ["Custom LMS learning architecture", "Cohort management & analytics", "Fluid onboarding with enterprise authentication"],
    tags: ["Next.js", "TypeScript", "LMS", "Tailwind CSS", "REST API", "Framer Motion"],
    image: "/thinkcareeracademy.jpg",
    link: "https://thinkcareeracademy.co.za/",
    featured: true,
    year: "2026",
    badge: "EdTech Platform"
  },
  {
    id: 3,
    title: "Engagemint Labs",
    tagline: "High-Impact Digital Agency & Engineering Studio",
    category: "Client & Brand",
    description: "Full-service digital studio combining technology, creativity, and strategy. Built with buttery-smooth micro-interactions, dark aesthetic design, and high-conversion software architecture.",
    highlights: ["Interactive 3D brand storytelling", "Sub-second page speeds", "Custom design system implementation"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/engagemint.jpg",
    link: "https://engagemint-labs.vercel.app/",
    featured: true,
    year: "2025",
    badge: "Agency Showcase"
  },
  {
    id: 4,
    title: "Designed by Barbz",
    tagline: "Luxury Fashion Atelier & Bespoke E-Commerce Store",
    category: "E-Commerce",
    description: "An editorial haute-couture e-commerce experience. Combines an interactive lookbook, bespoke consultation booking portal, and seamless multi-currency checkout designed around the brand mantra of narrative fashion.",
    highlights: ["Editorial luxury aesthetics", "Interactive consultation appointment scheduler", "High-conversion checkout pipeline"],
    tags: ["Shopify", "UI/UX Design", "E-Commerce", "Liquid", "Figma"],
    image: "/barbz.jpg",
    link: "https://designedbybarbz.co.za/",
    featured: true,
    year: "2025",
    badge: "Luxury Retail"
  },
  {
    id: 5,
    title: "Dr. Mavis Mazhura",
    tagline: "Executive Leadership Psychology & Keynote Portal",
    category: "Client & Brand",
    description: "A digital hub for renowned Leadership Psychologist Dr. Mavis Mazhura. Showcases corporate keynotes, published literature, leadership scorecards, and high-level organizational advisory offerings.",
    highlights: ["Interactive leadership assessment scorecard", "Media & keynote speaker press kit", "Accessible, SEO-first architecture"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "SEO Engine"],
    image: "/drmavis.jpg",
    link: "https://www.drmavismazhura.co.za/",
    year: "2025",
    badge: "Executive Advisory"
  },
  {
    id: 6,
    title: "Black Hair",
    tagline: "E-Commerce & Community for Natural Ethnic Hair Care",
    category: "E-Commerce",
    description: "An e-commerce and lifestyle platform dedicated to ethnic African hair care. Merges a retail experience for plant-based nourishing products with interactive hair porosity guides and community education.",
    highlights: ["Interactive hair regimen quiz", "Integrated inventory & fulfillment", "Mobile-optimized progressive web app"],
    tags: ["React Native", "TypeScript", "Redux", "REST API", "Firebase"],
    image: "/blk hair.jpg",
    link: "https://blackhair.africa",
    year: "2024",
    badge: "Retail & Community"
  },
  {
    id: 7,
    title: "Knit.cash",
    tagline: "Automated Financial & Bursar Reconciliation Engine",
    category: "Web Apps & Platforms",
    description: "Fintech automation platform streamlining manual financial workflows for bursars and enterprise finance teams. Automates reconciliation, fee distribution, and compliance tracking.",
    highlights: ["Zero-touch financial reconciliation", "Audit-ready compliance reporting", "Secure role-based access control"],
    tags: ["Vue.js", "Node.js", "MongoDB", "Express", "Fintech APIs"],
    image: "/knit.png",
    link: "https://knit.cash",
    year: "2024",
    badge: "Fintech Platform"
  },
  {
    id: 8,
    title: "Career Indaba",
    tagline: "Pan-African Employment & Opportunity Hub",
    category: "Web Apps & Platforms",
    description: "A multi-platform employment and skills network connecting thousands of African job seekers with industry leaders through live career expos, digital opportunity feeds, and mentorship channels.",
    highlights: ["High-volume opportunity filter engine", "Stripe payment integration for premium coaching", "GraphQL API data pipeline"],
    tags: ["React", "GraphQL", "Stripe", "Next.js", "Tailwind CSS"],
    image: "/carindaba.jpg",
    link: "https://careerindaba.org/",
    year: "2024",
    badge: "Labor Market"
  },
  {
    id: 9,
    title: "Enashy's Business Solutions",
    tagline: "Experiential Brand Strategy & Production Consultancy",
    category: "Client & Brand",
    description: "Digital presence for a strategic marketing consultancy specializing in experiential activations, PR campaigns, large-scale event production, and executive personal branding.",
    highlights: ["Interactive project case-study gallery", "Recharts performance dashboards", "Motion-driven UI interactions"],
    tags: ["Next.js", "TypeScript", "Recharts", "Framer Motion", "Tailwind CSS"],
    image: "/ebs.png",
    link: "https://enashysbusinesssolutions.com/",
    year: "2024",
    badge: "Brand Strategy"
  },
  {
    id: 10,
    title: "Think Career RPO",
    tagline: "End-to-End Talent Acquisition & Recruitment Pipeline",
    category: "Web Apps & Platforms",
    description: "A strategic Recruitment Process Outsourcing ecosystem featuring automated psychometric assessments, background verifications, and custom employer branding tools to build high-performance workforces.",
    highlights: ["Automated applicant scoring system", "FastAPI microservices architecture", "Redis-cached candidate indexing"],
    tags: ["Python", "FastAPI", "React", "OpenAI API", "Redis", "Docker"],
    image: "/RPO.jpg",
    link: "https://thinkcareerrpo.com/",
    year: "2023",
    badge: "Talent Tech"
  },
  {
    id: 11,
    title: "South African Immunology Society",
    tagline: "Scientific Research Network & Clinical Member Portal",
    category: "Client & Brand",
    description: "Digital headquarters of SAIS, providing African scientists and clinicians a secure portal for immunology research collaboration, exclusive member journals, and accredited CPD webinar events.",
    highlights: ["Member authentication with Supabase", "Interactive national researcher map", "Cloudinary media asset pipeline"],
    tags: ["Next.js", "Prisma", "Supabase", "Cloudinary", "Mapbox", "TypeScript"],
    image: "/saimmu.jpg",
    link: "https://saimmunology.org.za/",
    year: "2023",
    badge: "Scientific Hub"
  }
];

