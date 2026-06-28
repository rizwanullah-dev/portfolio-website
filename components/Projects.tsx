'use client';

import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  github: string;
  external: string;
  tech: string[];
  category: string;
  year: string;
  flagship?: boolean;
}

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      title: 'Smart Healthcare Ecosystem',
      subtitle: 'SaaS Appointment & Diagnostic Platform',
      description:
        'Architected a multi-tenant SaaS healthcare platform connecting patients, doctors, labs, and pharmacies across 3 role-based portals behind an Nginx reverse-proxy gateway. Integrated AI-powered prescription OCR (Gemini + Groq with automatic fallback) and WebRTC telemedicine (Jitsi SDK) for live video consultations. Built a voice-activated appointment booking channel (Vapi.ai) and automated SMS/email reminders via Twilio. Engineered Redis caching and BullMQ job queues for async processing; containerised the full stack with Docker Compose and automated CI/CD via GitHub Actions.',
      github: 'https://github.com/rizwanullah-dev',
      external: '#',
      tech: [
        'TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis',
        'Docker', 'Python', 'Gemini AI', 'Groq', 'WebRTC', 'Jitsi',
        'Twilio', 'Vapi.ai', 'GitHub Actions', 'Nginx',
      ],
      category: 'SaaS · Healthcare',
      year: '2025',
      flagship: true,
    },
    {
      title: 'Project Management System',
      description:
        'Designed a normalised PostgreSQL schema (7+ tables) with FK constraints and indexes. Built 3-tier RBAC (Admin/Member/Viewer) enforced at middleware and UI levels. Developed analytics endpoints aggregating task completion rates and member metrics, surfaced as a real-time progress dashboard.',
      github: 'https://github.com/rizwanullah-dev/project-management.git',
      external: '#',
      tech: [
        'TypeScript', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL',
        'Prisma ORM', 'JWT', 'RBAC', 'Tailwind CSS', 'Clerk',
      ],
      category: 'SaaS',
      year: '2025',
    },
    {
      title: 'SleepTracker — Sleep Analytics Web Application',
      description:
        'Built a full-stack sleep tracking app on Next.js App Router using Server Actions and revalidatePath for real-time dashboard updates without client-side fetch overhead. Integrated Clerk authentication with automated user-sync middleware and an analytics dashboard computing monthly averages and trends via interactive Chart.js visualisations.',
      github: 'https://github.com/rizwanullah-dev',
      external: '#',
      tech: [
        'TypeScript', 'Next.js 16', 'React 19', 'Prisma ORM', 'PostgreSQL',
        'Clerk Auth', 'Chart.js',
      ],
      category: 'Full Stack',
      year: '2025',
    },
    {
      title: 'E-Commerce Web Application',
      description:
        'Built a full-featured e-commerce platform with product catalogue, persistent cart with server-side stock validation, and a full order lifecycle pipeline (Pending → Shipped → Delivered). Engineered an admin CRUD dashboard for products, orders, and users behind JWT-authenticated protected routes.',
      github: 'https://github.com/rizwanullah-dev/E-Commerce-Website.git',
      external: '#',
      tech: [
        'TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB',
        'JWT', 'REST API', 'Tailwind CSS',
      ],
      category: 'E-Commerce',
      year: '2025',
    },
    {
      title: 'Car Rental Management Platform',
      description:
        'A production-grade car rental platform managing the full vehicle rental lifecycle — real-time availability checking, dynamic pricing based on category and date range, and a 2-tier RBAC system (User/Admin) with 20+ RESTful API endpoints and JWT-authenticated route guards.',
      github: 'https://github.com/rizwanullah-dev/Car-Rental-.git',
      external: '#',
      tech: [
        'TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB',
        'JWT', 'RBAC', 'REST API', 'Tailwind CSS',
      ],
      category: 'SaaS · E-Commerce',
      year: '2025',
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00ff88]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00ccff]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-gradient-primary">Featured Projects</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A showcase of my recent work, blending technical complexity with intuitive design.
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* GitHub CTA Row */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            These are my featured projects. See all my repositories and open-source work:
          </p>
          <a
            href="https://github.com/rizwanullah-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 hover:border-[#00ff88]/30 hover:-translate-y-1 transition-all"
          >
            <i className="fab fa-github text-lg" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 20;
    const rotateY = (x - centerX) / 20;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        glass-card p-8 rounded-2xl relative overflow-hidden group
        transition-all duration-700 ease-out
        ${project.flagship ? 'md:col-span-2' : ''}
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
      style={{
        transitionDelay: `${index * 150}ms`,
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(${rotation.x !== 0 ? '-5px' : '0'})`,
        boxShadow: rotation.x !== 0 ? '0 20px 40px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      {/* Flagship badge */}
      {project.flagship && (
        <div className="absolute top-4 right-4 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0a0a0a] bg-[#00ff88] rounded-full z-10">
          Flagship
        </div>
      )}

      {/* Decorative glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #00ff88, transparent 60%)`,
        }}
      />

      {/* Top Header */}
      <div className="flex justify-between items-start mb-6 text-sm">
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-[#00ff88]/10 text-[#00ff88] rounded-full border border-[#00ff88]/20 font-mono text-[10px]">
            {project.category}
          </span>
          <span className="px-3 py-1 bg-white/5 text-gray-500 rounded-full border border-white/5 font-mono text-[10px]">
            {project.year}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all duration-300"
            title="View Code"
          >
            <i className="fab fa-github text-sm" />
            <span>View Code</span>
          </a>
          {project.external && project.external !== '#' && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20 text-xs font-medium text-[#00ff88] hover:bg-[#00ff88]/20 hover:border-[#00ff88]/40 transition-all duration-300"
              title="Live Demo"
            >
              <i className="fas fa-external-link-alt text-sm" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="space-y-2">
        <h3 className="text-white group-hover:text-[#00ff88] transition-colors tracking-tight">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-[#00ff88]/70 text-sm font-medium">{project.subtitle}</p>
        )}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-500 pt-1">
          {project.description}
        </p>
      </div>

      {/* Footer Tags — plain text for ATS */}
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
        {project.tech.map((tech: string) => (
          <span
            key={tech}
            className="text-[10px] font-mono text-gray-500 px-2 py-1 bg-white/5 rounded-md hover:text-[#00ff88] transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}