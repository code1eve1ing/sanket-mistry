import { ExternalLink, Github } from "lucide-react";
import Section from "../common/Section";
const projects = [
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

export default function Projects() {
    return (
        <Section id="projects" eyebrow="Featured Projects" title="Selected work">
            <div className="grid gap-6 lg:grid-cols-2">
                {projects.map((p) => (
                    <article
                        key={p.name}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
                    >
                        <div
                            aria-hidden
                            className="relative h-44 w-full border-b border-border"
                            style={{
                                background:
                                    "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 25%, var(--color-card)), color-mix(in oklab, var(--color-accent) 70%, var(--color-card)))",
                            }}
                        >
                            <div className="absolute inset-0 grid place-items-center text-primary-foreground/80">
                                <span className="rounded-full bg-background/40 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                                    {p.name}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                            <p className="mt-1 text-sm text-primary">{p.tagline}</p>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                {p.description}
                            </p>

                            <div className="mt-5">
                                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Features
                                </div>
                                <ul className="mt-2 grid gap-1.5 text-sm text-foreground/85 sm:grid-cols-2">
                                    {p.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2">
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                                <div>
                                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Challenges
                                    </div>
                                    <p className="mt-1 text-foreground/80">{p.challenges}</p>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        My contribution
                                    </div>
                                    <p className="mt-1 text-foreground/80">{p.contribution}</p>
                                </div>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-1.5">
                                {p.stack.map((s) => (
                                    <span
                                        key={s}
                                        className="inline-flex items-center rounded-md bg-accent px-2 py-0.5 text-xs text-accent-foreground"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                                >
                                    <ExternalLink className="h-3.5 w-3.5" /> Live demo
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
                                >
                                    <Github className="h-3.5 w-3.5" /> GitHub
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}