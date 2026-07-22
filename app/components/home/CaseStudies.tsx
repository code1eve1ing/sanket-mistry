import { ShieldCheck, Target, Zap } from "lucide-react";
import Section from "../common/Section";

const caseStudies = [
    {
      title: "Authentication System",
      icon: ShieldCheck,
      problem: "Users needed a secure login that worked across web and mobile clients without friction.",
      solution:
        "Implemented JWT authentication with short-lived access tokens and rotating refresh tokens stored in httpOnly cookies.",
      challenges:
        "Managing token expiry across tabs, secure refresh flow, and preventing replay attacks.",
      result:
        "Reduced unauthorized access attempts significantly while keeping the login experience seamless.",
    },
    {
      title: "API Latency Optimization",
      icon: Zap,
      problem: "Key endpoints were taking 800ms+ under load, hurting user experience.",
      solution:
        "Added Redis caching for hot reads, tuned Postgres indexes, and moved heavy work to BullMQ workers.",
      challenges:
        "Choosing safe cache invalidation boundaries and avoiding stale reads on user-critical data.",
      result: "Cut average API latency by 40% and stabilized p95 response times under peak traffic.",
    },
    {
      title: "MongoDB Query Optimization",
      icon: Target,
      problem: "A listing endpoint scanned full collections and took ~2s per request.",
      solution:
        "Introduced compound indexes, cursor-based pagination, and projected only required fields.",
      challenges:
        "Migrating live data safely and validating index selectivity under real workloads.",
      result: "Query time dropped from 2s to 200ms — a 10x improvement.",
    },
  ];

function CaseRow({
    label,
    value,
    highlight,
  }: {
    label: string;
    value: string;
    highlight?: boolean;
  }) {
    return (
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </dt>
        <dd
          className={
            "mt-1 leading-relaxed " +
            (highlight ? "text-foreground font-medium" : "text-foreground/80")
          }
        >
          {value}
        </dd>
      </div>
    );
  }

export default function CaseStudies() {
    return (
      <Section id="case-studies" eyebrow="Case Studies" title="Problems I've solved">
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold">{c.title}</h3>
                </div>
                <dl className="mt-5 space-y-4 text-sm">
                  <CaseRow label="Problem" value={c.problem} />
                  <CaseRow label="Solution" value={c.solution} />
                  <CaseRow label="Challenges" value={c.challenges} />
                  <CaseRow label="Result" value={c.result} highlight />
                </dl>
              </div>
            );
          })}
        </div>
      </Section>
    );
  }