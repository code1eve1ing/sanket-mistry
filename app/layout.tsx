import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://sanket-mistry-swe.vercel.app/"; 

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Sanket Mistry | Software Engineer",
    template: "%s | Sanket Mistry",
  },

  description:
    "Software Engineer specializing in Node.js, React, Next.js, TypeScript, PostgreSQL, MongoDB, and AI-powered applications. Explore my projects, experience, and technical expertise.",

  keywords: [
    "Sanket Mistry",
    "Software Engineer",
    "Full Stack Developer",
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "MongoDB",
    "Express.js",
    "NestJS",
    "REST API",
    "AI",
    "OpenAI",
    "Claude",
    "Gemini",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Sanket Mistry",
      url: SITE_URL,
    },
  ],

  creator: "Sanket Mistry",

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Sanket Mistry | Software Engineer",
    description:
      "Explore my portfolio featuring full-stack projects, AI integrations, and modern web applications built with Next.js, React, Node.js, and TypeScript.",
    siteName: "Sanket Mistry Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanket Mistry - Software Engineer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanket Mistry | Software Engineer",
    description:
      "Full Stack Software Engineer building scalable web applications with Next.js, React, Node.js, TypeScript, PostgreSQL, MongoDB, and AI.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: SITE_URL,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
