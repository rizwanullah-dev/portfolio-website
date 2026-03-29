"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // For external links like /blog
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-300
        backdrop-blur-md
        border-b border-[#333]
        ${isScrolled
          ? "bg-[rgba(10,10,10,0.95)] shadow-[0_2px_20px_rgba(0,255,136,0.12)]"
          : "bg-[rgba(10,10,10,0.85)]"
        }
      `}
    >
      <div className="w-full px-10 py-2">
        <div className="flex items-center justify-between">
          {/* Your original logo styling preserved */}
          <div className="font-mono py-3 px-20 text-xl sm:text-2xl font-bold">
            <span className="text-xl sm:text-3xl md:text-5xl lg:text-2xl text-[#00ff88]">
              Rizwan
            </span>{" "}
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-2xl text-white">
              Ullah
            </span>
            <span className="animate-blink ml-1 text-[#00ff88] md:text-3xl lg:text-2xl">
              |
            </span>
          </div>

          {/* Desktop Menu  */}
          <ul className="hidden px-20 md:flex items-center gap-8 lg:gap-10 ml-auto">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="
                    relative
                    text-sm md:text-base lg:text-lg
                    font-lg
                    text-[#b0b0b0]
                    transition-all duration-300
                    hover:text-[#00ff88]
                    group
                  "
                >
                  {item.label}
                  <span
                    className="
                      absolute -bottom-2 left-0
                      h-[2px] w-0
                      bg-[#00ff88]
                      transition-all duration-300
                      group-hover:w-full
                      group-hover:shadow-[0_0_10px_rgba(0,255,136,0.35)]
                    "
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button  */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-[5px]"
          >
            <span
              className={`h-[3px] w-6 bg-white transition-all ${
                isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`h-[3px] w-6 bg-white transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[3px] w-6 bg-white transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu  */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${isMenuOpen
              ? "max-h-64 opacity-100 mt-4 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
            }
          `}
        >
          <ul className="flex flex-col gap-3 rounded-xl bg-[#1a1a1a] p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="
                    block py-1 px-2 rounded-md
                    text-[#b0b0b0] font-medium
                    transition-all duration-300
                    hover:text-[#00ff88]
                    hover:bg-[rgba(0,255,136,0.05)]
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}