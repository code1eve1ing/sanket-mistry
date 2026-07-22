export const NAV = [
    { href: "#about", label: "About" },
    { href: "#stack", label: "Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    // { href: "#case-studies", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
];

export const CONTACT = {
    email: "sanket.m.mistry@gmail.com",
    linkedin: "https://www.linkedin.com/in/sanket-mistry-swe",
    github: "https://github.com/code1eve1ing",
    contact: "+91 70411 39593",
  };

export const PROJECTS = [
    {
        name: "SalonHost (In Progress)",
        demo_link: "https://x-salon-client-v1.vercel.app/",
        repo_client_link: "https://github.com/code1eve1ing/salonhost-client",
        repo_server_link:"https://github.com/code1eve1ing/salonhost-server",
        tagline: "Create a professional salon website in minutes — no coding required",
        description:
            "A website builder designed specifically for salons and spas, allowing owners to launch beautiful websites using ready-made templates, customize their branding, and share their business online instantly.",
        features: [
            "Ready-made templates tailored for salons and spas",
            "Customizable logo, services, pricing, and photo gallery",
            "WhatsApp booking and direct customer contact",
            "Google Maps integration for salon locations",
            "Mobile-friendly design with custom subdomains",
        ],
        stack: ["Next.js", "Express.js", "MongoDB"],
        challenges:
            "Building a flexible template system that supports salon-specific customization while keeping the onboarding experience simple and fast for non-technical users.",
        contribution:
            "Designed and developed the platform end-to-end, including the website templates, customization flow, backend APIs, and deployment system for generating salon websites.",
    },
];