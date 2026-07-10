import { NAV } from "@/app/constants";
import { ArrowRight } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
                <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                        SM
                    </span>
                    <span className="hidden sm:inline">Sanket Mistry</span>
                </a>
                <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
                    {NAV.map((n) => (
                        <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                            {n.label}
                        </a>
                    ))}
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                    Contact <ArrowRight className="h-3.5 w-3.5" />
                </a>
            </div>
        </header>
    );
}