export default function Section({
    id,
    eyebrow,
    title,
    children,
  }: {
    id: string;
    eyebrow: string;
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <section id={id} className="border-t border-border/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-primary">
                {eyebrow}
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
            </div>
          </div>
          {children}
        </div>
      </section>
    );
  }