import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Rizwan Ullah | Full Stack Software Engineer',
  description: 'Specializing in MERN stack development, building scalable web applications and high-performance APIs. Software Engineering Graduate from Islamia College Peshawar.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React Developer', 'Node.js', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Rizwan Ullah' }],
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#00ff88]/30 selection:text-white`}
      >
        <div id="particles-js" />
        <CursorTrail />
        {children}
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" async />
      </body>
    </html>
  );
}

