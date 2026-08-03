import { Cloud, Code2, Cpu, Database, Layers, Server, Sparkles } from "lucide-react";
import Section from "../common/Section";

const techStack = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "NestJS", "Django", "FastAPI", "BullMQ", "REST APIs", " Socket.IO", "JWT Authentication", "RBAC Authorization", "OAuth 2.0",],
  },
  {
    title: "Frontend",
    icon: Layers,
    items: ["React", "Next.js", "Redux", "Zustand", "Tailwind CSS", "Shadcn/ui"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Mongoose", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    items: ["AWS (EC2, S3)", "CI/CD"],
  },
  {
    title: "Others",
    icon: Cpu,
    items: ["Git", "GitHub"],
  },
];

export default function TechStack() {
  return (
    <Section id="stack" eyebrow="Tech Stack" title="Tools I work with">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl border border-dashed border-border bg-card/50 p-5 text-sm text-muted-foreground">
        <Sparkles className="h-4 w-4 text-primary" />
        <span className="font-medium text-foreground">Currently learning:</span>
        {["Microservices Architecture", "Docker", "Kubernetes"].map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs text-accent-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </Section>
  );
}
