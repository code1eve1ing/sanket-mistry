export const NAV = [
    { href: "#about", label: "About" },
    { href: "#stack", label: "Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
];

export const CONTACT = {
    email: "sanket.mistry@example.com",
    linkedin: "https://www.linkedin.com/in/sanket-mistry",
    github: "https://github.com/sanket-mistry",
    resume: "/resume.pdf",
  };

export const PROJECTS = [
    {
        name: "Creator Economy Platform",
        tagline: "OnlyFans-style subscription platform for content creators",
        description:
            "A full-scale creator monetization platform with subscriptions, paid messaging, media vaults, and payouts.",
        features: [
            "Subscription tiers & recurring billing",
            "Encrypted media vault with signed URLs",
            "Real-time chat & tipping via WebSockets",
            "Creator analytics dashboard",
            "Role-based access & moderation tools",
        ],
        stack: ["NestJS", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Next.js", "AWS S3"],
        challenges:
            "Handling high-concurrency media uploads and secure delivery while keeping payout ledgers consistent.",
        contribution:
            "Owned the subscriptions, messaging, and payout services end-to-end, including schema design and queue workers.",
    },
    {
        name: "CMS for OTT Streaming Platform",
        tagline: "Content management system powering a live OTT service",
        description:
            "An internal CMS to ingest, schedule, and publish video content across web and mobile OTT clients.",
        features: [
            "Bulk video ingestion & transcoding queue",
            "Multi-language metadata management",
            "Scheduling & publishing workflows",
            "Role-based editorial permissions",
            "Search & taxonomy management",
        ],
        stack: ["Node.js", "NestJS", "PostgreSQL", "BullMQ", "React", "AWS"],
        challenges:
            "Coordinating long-running transcoding jobs with editorial workflows without blocking the UI.",
        contribution:
            "Designed the job pipeline with BullMQ and built the editorial UI and permissions model.",
    },
    {
        name: "OTT Streaming Web App",
        tagline: "Consumer-facing streaming experience",
        description:
            "The viewer-facing web app for the OTT platform — browse catalogs, resume playback, and manage profiles.",
        features: [
            "Personalized home rails",
            "Adaptive video player integration",
            "Watchlist & continue-watching",
            "Multi-profile accounts",
            "Search with instant results",
        ],
        stack: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
        challenges:
            "Keeping the app fast on low-end devices while serving image-heavy catalog pages.",
        contribution:
            "Led frontend architecture, cut initial bundle size by 35%, and integrated the video playback pipeline.",
    },
    {
        name: "CRM Platform for Retail Businesses",
        tagline: "All-in-one retail operations & customer platform",
        description:
            "A CRM built for retail teams — combines analytics, inventory, orders, and in-store QR ordering in one workspace.",
        features: [
            "Analytics dashboard",
            "Inventory management",
            "Order management",
            "QR-based ordering for tables/counters",
            "Role-based access control",
            "JWT authentication",
            "PostgreSQL with Redis caching",
        ],
        stack: ["NestJS", "PostgreSQL", "Prisma", "Redis", "React", "TypeScript"],
        challenges:
            "Modeling multi-tenant inventory and keeping dashboards responsive under heavy analytical queries.",
        contribution:
            "Designed the multi-tenant schema, implemented RBAC, and added Redis-backed caching for hot endpoints.",
    },
];