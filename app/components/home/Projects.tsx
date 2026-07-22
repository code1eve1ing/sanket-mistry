import { ExternalLink, Github } from "lucide-react";
import Section from "../common/Section";
import { PROJECTS } from "@/app/constants";

export default function Projects() {
    return (
        <Section id="projects" eyebrow="Featured Projects" title="Selected work">
            <div className="grid gap-6 lg:grid-cols-2">
                {PROJECTS.map((p) => (
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
                                    href={p.demo_link}
                                    target="_blank"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                                >
                                    <ExternalLink className="h-3.5 w-3.5" /> Live demo
                                </a>
                                <a
                                    href={p.repo_client_link}
                                    target="_blank"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
                                >
                                    <Github className="h-3.5 w-3.5" /> Client
                                </a>
                                <a
                                    href={p.repo_server_link}
                                    target="_blank"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
                                >
                                     Server
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}