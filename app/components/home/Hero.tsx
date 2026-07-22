import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 20%, color-mix(in oklab, var(--color-accent) 60%, transparent), transparent 70%), radial-gradient(50% 40% at 90% 10%, color-mix(in oklab, var(--color-primary) 25%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Open to Backend & Full Stack roles
        </div>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Sanket Mistry
        </h1>
        <p className="mt-4 text-xl text-foreground/80 sm:text-2xl">
          Backend-Focused <span className="text-primary font-bold">Software Engineer</span>
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          2.5 years of experience building scalable web applications using React, Next.js,
          Node.js, NestJS, PostgreSQL, MongoDB, and TypeScript.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}