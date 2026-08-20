import { ArrowRight, FileText, Github, Linkedin, Mail, Phone } from "lucide-react";
import Section from "../common/Section";
import { CONTACT } from "@/app/constants";

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  external,
  download,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  download?: boolean;
}) {
  const className =
    "group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/40 hover:bg-accent/40";

  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
        <Icon className="h-5 w-5" />
      </span>

      <div className="min-w-0 flex-1">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>

        <div className="truncate text-sm font-medium text-foreground">
          {value}
        </div>
      </div>
      {href && 
      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
      }
    </>
  );

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...(download ? { download: true } : {})}
      className={className}
    >
      {content}
    </a>
  );
}

export default function Contact() {
    return (
      <Section id="contact" eyebrow="Contact" title="Let's build something together">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Have a role or project in mind?
            </h3>
            <p className="mt-2 text-muted-foreground">
            I'm currently open to backend and full-stack opportunities.
              {/* The fastest way to reach me is email — I usually reply within a day. */}
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <ContactLink
              icon={Mail}
              label="Email"
              value={CONTACT.email}
            />
            <ContactLink
              icon={Phone}
              label="Contact"
              value={CONTACT.contact}
            />
            <ContactLink
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/sanket-mistry-swe"
              href={CONTACT.linkedin}
              external
            />
            {/* <ContactLink
              icon={Github}
              label="GitHub"
              value="github.com/code1eve1ing"
              href={CONTACT.github}
              external
            /> */}
            
          </div>
        </div>
      </Section>
    );
  }