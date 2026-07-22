import { Download, FileText } from "lucide-react";
import Section from "../common/Section";

const CONTACT = {
    email: "sanket.mistry@example.com",
    linkedin: "https://www.linkedin.com/in/sanket-mistry",
    github: "https://github.com/sanket-mistry",
    resume: "/resume.pdf",
  };

export default function Resume() {
    return (
      <Section id="resume" eyebrow="Resume" title="Grab a copy">
        <div
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--color-accent) 60%, var(--color-card)), var(--color-card))",
          }}
        >
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                My full resume, one click away
              </h3>
              <p className="mt-3 text-muted-foreground">
                A concise PDF covering my experience, tech stack, and highlighted projects — everything a hiring manager needs at a glance.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/85">
                {[
                  "3 years of full-stack experience",
                  "Backend focus: Node.js, NestJS, PostgreSQL, MongoDB",
                  "Shipped projects across creator economy, OTT, and retail",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <a
                href={CONTACT.resume}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href={CONTACT.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <FileText className="h-4 w-4" /> View in browser
              </a>
            </div>
          </div>
        </div>
      </Section>
    );
  }