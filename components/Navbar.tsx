"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`
        fixed top-0 inset-x-0 z-[100]
        transition-all duration-500
        ${isScrolled 
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "bg-transparent py-5"
        }
      `}
    >
      <div className="container flex items-center justify-between">
        {/* LOGO */}
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-1 font-mono text-xl sm:text-2xl font-bold"
        >
          <span className="text-[#00ff88] group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)] transition-all">Rizwan</span>
          <span className="text-white">Ullah</span>
          <span className="animate-blink text-[#00ff88]">|</span>
        </a>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full
                    ${isActive 
                      ? "text-[#00ff88] bg-[#00ff88]/10" 
                      : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00ff88] rounded-full blur-[1px]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
        >
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2 bg-[#00ff88]" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-[#00ff88]" : ""}`} />
        </button>

        {/* MOBILE OVERLAY */}
        <div 
          className={`
            fixed inset-0 z-[105] md:hidden
            bg-[#0a0a0a]/95 backdrop-blur-2xl
            transition-all duration-500 ease-in-out
            ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
          `}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li 
                  key={item.href}
                  className={`transition-all duration-500 delay-[${idx * 100}ms] ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`
                      text-3xl font-bold tracking-tighter transition-all
                      ${isActive ? "text-[#00ff88] scale-110" : "text-gray-500 hover:text-white"}
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          
          {/* Decorative Background for Mobile Menu */}
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#00ff88]/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-[#00ccff]/10 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>
      </div>
    </nav>
  );
}