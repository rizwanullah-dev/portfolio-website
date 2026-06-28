import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";

// Headings — geometric, bold, modern
const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// Body text — industry-standard readability
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Code / mono — for code windows and tech tags
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Rizwan Ullah | Full Stack Developer | MERN Stack | Next.js | TypeScript',
  description: 'Software Engineering graduate from Islamia College University Peshawar (2022–2026) specialising in MERN, PERN, and Next.js full-stack development. Experienced in TypeScript, RESTful APIs, Docker, Redis, JWT, RBAC, and AI integrations. Available for junior Software Engineer and Full-Stack Developer roles.',
  keywords: [
    'Full Stack Developer', 'MERN Stack Developer', 'PERN Stack', 'Next.js Developer',
    'React Developer', 'Node.js Developer', 'TypeScript', 'Express.js', 'MongoDB',
    'PostgreSQL', 'REST API', 'Docker', 'Redis', 'JWT', 'RBAC',
    'Software Engineer Pakistan', 'Software Engineering Graduate',
    'Islamia College Peshawar', 'Remote Developer',
  ],
  authors: [{ name: 'Rizwan Ullah' }],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rizwan Ullah",
  "jobTitle": "Full Stack Software Engineer",
  "description": "MERN Stack and Next.js Full Stack Developer. BS Software Engineering graduate from Islamia College University Peshawar (2026). Specialising in TypeScript, React.js, Node.js, MongoDB, PostgreSQL, Docker, and REST API design.",
  "url": "https://portfolio-website-pi-five-73.vercel.app",
  "email": "rizwanullahicp0306@gmail.com",
  "telephone": "+92-306-9675420",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Peshawar",
    "addressCountry": "PK"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Islamia College University Peshawar"
  },
  "knowsAbout": [
    "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js",
    "Express.js", "MongoDB", "PostgreSQL", "Docker", "Redis",
    "REST API", "MERN Stack", "PERN Stack", "Full Stack Development"
  ],
  "sameAs": [
    "https://github.com/rizwanullah-dev",
    "https://www.linkedin.com/in/rizwan-ullah-b74793290"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#00ff88]/30 selection:text-white`}
      >
        <div id="particles-js" />
        <CursorTrail />
        {children}
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" async />
      </body>
    </html>
  );
}
