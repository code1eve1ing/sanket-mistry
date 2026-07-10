import { CONTACT } from "@/app/constants";
import { Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Wrench className="h-3.5 w-3.5" />
          <span>Built by Sanket Mistry — {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground">Email</a>
          <a href={CONTACT.resume} download className="hover:text-foreground">Resume</a>
        </div>
      </div>
    </footer>
  );
}