'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const stats = [
  { value: '4+', label: 'Production\nProjects' },
  { value: '50h+', label: 'Weekly\nCoding' },
  { value: '2+', label: 'Years\nExperience' },
  { value: '2026', label: 'Graduation\nYear' },
];

const highlights = [
  { icon: 'fas fa-graduation-cap', text: 'BS Software Engineering — Islamia College University Peshawar' },
  { icon: 'fas fa-layer-group', text: 'MERN · PERN · Next.js full-stack specialist' },
  { icon: 'fas fa-map-marker-alt', text: 'Peshawar, Pakistan — Open to remote & on-site roles' },
  { icon: 'fas fa-circle-check', text: 'Available for Junior Software Engineer & Full-Stack roles' },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [imageError, setImageError] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Rizwan_Ullah_Resume.pdf';
    link.download = 'Rizwan_Ullah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00ff88]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00ccff]/5 rounded-full blur-[140px]" />
      </div>

      <div
        ref={ref}
        className={`container transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
      >
        {/* ── Section label ── */}

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-start">

          {/* ── LEFT: Text content ── */}
          <div className="space-y-10">

            {/* Heading */}
            <div>
              <h2 className="text-gradient-primary leading-tight mb-3">
                Building the web,<br />one stack at a time.
              </h2>
              <p className="text-[#00ff88] font-mono text-sm tracking-wide">
                Full Stack Software Engineer · Pakistan
              </p>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">Rizwan Ullah</span>, a software engineer
                passionate about building products that solve real problems. With expertise across the
                full stack — from React and Next.js on the frontend to Node.js, Express, PostgreSQL,
                and MongoDB on the backend — I focus on writing clean, maintainable, and performant code.
              </p>
              <p>
                I graduated with a <span className="text-white font-medium">BS in Software Engineering</span> from{' '}
                <span className="text-white font-medium">Islamia College University Peshawar</span> in 2026,
                and I have been applying that foundation to real production systems — including a multi-tenant
                SaaS healthcare platform, project management tools, and AI-integrated applications.
              </p>
              <p>
                I believe great software is about more than just making things work — it&apos;s about
                architecture decisions, developer experience, and building for scale from day one.
              </p>
            </div>

            {/* Highlights list */}
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-gray-400">
                  <i className={`${item.icon} text-[#00ff88] mt-0.5 shrink-0 w-4 text-center`} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleDownloadCV}
                className="group flex items-center gap-2.5 px-6 py-3 bg-[#00ff88] text-[#0a0a0a] font-bold rounded-xl hover:bg-[#00ff88]/90 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,255,136,0.35)] transition-all duration-300"
              >
                <i className="fas fa-download text-sm" />
                Download CV
              </button>
              <a
                href="#contact"
                className="group flex items-center gap-2.5 px-6 py-3 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 hover:border-[#00ff88]/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <i className="fas fa-paper-plane text-sm text-[#00ff88]" />
                Let&apos;s Talk
              </a>
            </div>
          </div>

          {/* ── RIGHT: Image + Stats ── */}
          <div className="flex flex-col gap-8 lg:items-end w-full">

            {/* Photo card */}
            <div className="relative group mx-auto lg:ml-auto lg:mr-0 w-full max-w-sm">
              {/* Glow rings */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#00ff88]/30 to-[#00ccff]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#00ff88]/30 transition-colors duration-500 bg-[#0f0f0f]">
                {/* Decorative top bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.03]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-auto text-[10px] font-mono text-gray-600">rizwan-ullah.jpg</span>
                </div>

                {/* Image area */}
                <div className="relative aspect-[4/5] w-full">
                  {!imageError ? (
                    <Image
                      src="/rizwan.png"
                      alt="Rizwan Ullah — Full Stack Software Engineer"
                      fill
                      className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                      priority
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0d1a12] to-[#050e0a]">
                      <span className="text-6xl font-black text-gradient-primary tracking-widest select-none">
                        RU
                      </span>
                    </div>
                  )}

                  {/* Bottom overlay name plate */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-16 pb-5 px-5">
                    <p className="text-white font-bold text-lg leading-tight">Rizwan Ullah</p>
                    <p className="text-[#00ff88] text-xs font-mono mt-0.5">Full Stack Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 lg:max-w-sm lg:ml-auto w-full">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-3 flex flex-col items-center text-center gap-1 group hover:border-[#00ff88]/30 transition-colors"
                >
                  <span className="text-xl font-bold text-gradient-primary">{stat.value}</span>
                  <span className="text-[9px] uppercase tracking-widest text-gray-500 leading-tight whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
