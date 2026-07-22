import { Briefcase, MapPin } from "lucide-react";
import Section from "../common/Section";

const experience = [
  {
    company: "Albiorix Technology Pvt. Ltd.",
    role: "Software Engineer",
    location: "Ahmedabad, Gujarat",
    period: "Jun 2025 — Jun 2026",
    points: [
      "Built 25+ RESTful APIs using Node.js, NestJS, and Express.js, enabling seamless frontend-backend communication",
      "Optimized application performance through PostgreSQL indexing, API caching, and frontend optimizations, reducing response times by up to 50%",
      "Integrated AI-powered capabilities using OpenAI, Claude, and Gemini APIs to automate business workflows and enhance application intelligence",
      "Implemented JWT-based authentication and role-based authorization, strengthening application security and user access management",
      "Used Git for version control and contributed to Agile development, ensuring the timely delivery of features and bug fixes",
    ],
  },
  {
    company: "Rayo Innovations Pvt. Ltd.",
    role: "Software Developer",
    location: "Ahmedabad, Gujarat",
    period: "Nov 2023 — Jan 2025",
    points: [
      "Designed and developed scalable REST APIs using Express.js and MongoDB to support multiple business modules with secure authentication",
      "Developed responsive React.js components for customer-facing modules, improving UI consistency and reducing duplicate code across multiple pages",
      "Developed real-time communication features using WebSockets and Socket.IO, enabling instant notifications and live data synchronization",
      "Designed and optimized MongoDB collections and queries, reducing API response time for frequently accessed endpoints",
      "Collaborated with senior developers during feature development, participating in code reviews and following coding standards",
    ],
  },
  {
    company: "Rayo Innovations Pvt. Ltd.",
    role: "Software Developer Intern",
    location: "Ahmedabad, Gujarat",
    period: "Jul 2023 — Oct 2023",
    points: [
      "Built RESTful APIs with Node.js and Express.js, enabling secure and efficient communication between frontend and backend systems",
      "Developed responsive user interface components using React.js, improving application usability and ensuring a consistent experience across desktop and mobile devices",
      "Integrated frontend applications with backend APIs, reducing manual data handling and providing a smooth end-to-end user experience"
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional Experience">
      <div className="space-y-5">
        {experience.map((e) => (
          <div
            key={e.company + e.period}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-primary">
                  <Briefcase className="h-4 w-4 shrink-0" />
                  <span className="truncate text-sm font-medium">{e.role}</span>
                </div>
                <h3 className="mt-1 text-lg font-semibold">{e.company}</h3>
                <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {e.location}
                </div>
              </div>
              <div className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                {e.period}
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              {e.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}