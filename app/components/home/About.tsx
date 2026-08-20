import Section from "../common/Section";

function AboutCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-border bg-card p-5">
            <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {label}
            </div>
            <div className="mt-1.5 text-base font-medium text-foreground">{value}</div>
        </div>
    );
}

export default function About() {
    return (
        <Section id="about" eyebrow="About" title="About Me">
            <div className="grid gap-10 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <p className="text-lg leading-relaxed text-foreground/85">
                        Software Engineer with 2.5 years of experience building production-grade web
                        applications across frontend and backend. I enjoy designing scalable APIs,
                        improving application performance, and creating intuitive user interfaces.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        I'm currently looking for backend or full-stack opportunities where I can
                        contribute to impactful products.
                    </p>
                    <div className="mt-8">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Large-scale projects I've worked on
                        </h3>
                        <ul className="mt-3 space-y-2 text-foreground/85">
                            {[
                                "Inventory + Finance Module of ERP System",
                                "Content Creator platform",
                                "UI + DB Design for an OTT platform",
                            ].map((p) => (
                                <li key={p} className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="space-y-3">
                    <AboutCard label="Experience" value="2.5 years" />
                    <AboutCard label="Specialization" value="Scalable/Available Backend Services" />
                    <AboutCard label="Looking for" value="Backend or Full-stack Roles" />
                </div>
            </div>
        </Section>
    );
}
