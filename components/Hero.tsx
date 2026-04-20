"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const words = [
    "Software Engineer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      setCurrentWord((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentWord === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, wordIndex]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth"
      });
    }
  };

  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/Rizwan2005khan", label: "GitHub" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/rizwan-ullah-b74793290", label: "LinkedIn" },
    { icon: "fab fa-facebook", url: "https://www.facebook.com/share/17rXqVgXcE", label: "Facebook" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#00ff88]/10 rounded-full blur-[120px] animate-pulse-subtle" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#00ccff]/10 rounded-full blur-[120px] animate-pulse-subtle delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* TEXT CONTENT */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-mono tracking-widest text-[#00ff88] bg-[#00ff88]/10 rounded-full border border-[#00ff88]/20">
                AVAILABLE FOR HIRE
              </span>
              <h1 className="leading-tight">
                <span className="block text-gray-400 font-light">Hi, I&apos;m</span>
                <span className="text-gradient-primary">Rizwan Ullah</span>
              </h1>
              
              <div className="min-h-[2.5rem] flex items-center justify-center lg:justify-start">
                <p className="font-mono text-xl sm:text-2xl text-gray-300">
                  {currentWord}<span className="text-[#00ff88] animate-blink ml-1">|</span>
                </p>
              </div>
            </div>

            <p className="text-[#a0a0a0] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transforming complex ideas into elegant digital solutions. Specialist in the 
              <span className="text-white px-2">MERN Stack</span> 
              building scalable, high-performance web applications with a focus on user experience.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-8 py-4 bg-[#00ff88] text-[#0a0a0a] font-bold rounded-xl hover:shadow-[0_0_25px_rgba(0,255,136,0.4)] hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <i className="fas fa-paper-plane" /> Let&apos;s Connect
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="px-8 py-4 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <i className="fas fa-code" /> View Projects
              </a>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#00ff88] text-xl transition-colors"
                  aria-label={link.label}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* CODE WINDOW */}
          <div className="relative group perspective-[1000px] hidden sm:block">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl border-white/10 group-hover:border-[#00ff88]/30 transition-all duration-500 transform hover:rotate-y-12">
              <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="ml-auto font-mono text-[10px] text-gray-500">DeveloperInfo.tsx</span>
              </div>
              <div className="p-6 font-mono text-xs sm:text-sm leading-7">
                <CodeLine n="01"><span className="text-[#ff79c6]">const</span> <span className="text-[#50fa7b]">developer</span> = &#123;</CodeLine>
                <CodeLine n="02">&nbsp;&nbsp;name: <span className="text-[#f1fa8c]">&apos;Rizwan Ullah&apos;</span>,</CodeLine>
                <CodeLine n="03">&nbsp;&nbsp;role: <span className="text-[#f1fa8c]">&apos;Full Stack Engineer&apos;</span>,</CodeLine>
                <CodeLine n="04">&nbsp;&nbsp;skills: [<span className="text-[#f1fa8c]">&apos;MERN Stack&apos;</span>, <span className="text-[#f1fa8c]">&apos;Next.js&apos;</span>],</CodeLine>
                <CodeLine n="05">&nbsp;&nbsp;passion: <span className="text-[#f1fa8c]">&apos;Clean Code&apos;</span>,</CodeLine>
                <CodeLine n="06">&nbsp;&nbsp;location: <span className="text-[#f1fa8c]">&apos;Pakistan&apos;</span></CodeLine>
                <CodeLine n="07">&#125;;</CodeLine>
                <div className="h-4 w-4 bg-[#00ff88]/50 animate-pulse ml-4 mt-2 rounded-sm" />
              </div>
            </div>
            {/* Background Glow for Card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00ff88]/20 to-[#00ccff]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}

function CodeLine({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 group/line">
      <span className="w-6 text-[#6272a4] text-right select-none">{n}</span>
      <span className="text-gray-300 group-hover/line:text-white transition-colors">{children}</span>
    </div>
  );
}

