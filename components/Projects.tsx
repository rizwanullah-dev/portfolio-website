'use client';

import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  description: string;
  github: string;
  external: string;
  tech: string[];
  category: string;
  year: string;
}

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'Project Management Platform',
      description: 'A full-featured project management platform supporting teams, task assignments, role-based access, progress tracking, and real-time updates. Built with PERN stack and scalable backend architecture.',
      github: 'https://github.com/rizwanullah-dev/project-management.git',
      external: '#',
      tech: ['JavaScript', 'PostgreSQL', 'React', 'Prisma', 'TailwindCSS', 'Clerk', 'Inngest'], 
      category: 'SaaS',
      year: '2025' 
    },
    {
      title: 'E-Commerce Web Application',
      description: 'A feature-complete e-commerce platform covering product discovery, persistent cart with server-side stock validation, a full order lifecycle pipeline (Pending → Shipped → Delivered), and an admin CRUD dashboard for products, orders, and users.',
      github: 'https://github.com/rizwanullah-dev/E-Commerce-Website.git',
      external: '#',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'Tailwind CSS'], 
      category: 'E-Commerce',
      year: '2025' 
    },
    {
      title: 'Car Rental Management Platform',
      description: 'A production-grade car rental platform managing the full vehicle rental lifecycle — real-time availability checking, dynamic pricing based on category and date range, and a 2-tier RBAC system (User/Admin) with 20+ RESTful API endpoints and JWT-authenticated route guards.',
      github: 'https://github.com/rizwanullah-dev/Car-Rental-.git',
      external: '#',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'], 
      category: 'SaaS / E-Commerce',
      year: '2025' 
    },
    {
      title: 'AI Resume Generator',
      description: 'An intelligent resume builder creating ATS-optimized, professional resumes. Features include customizable templates, role-specific content generation, AI-assisted suggestions, and instant PDF exports.',
      github: 'https://github.com/rizwanullah-dev/Ai-Resume-Generator.git',
      external: '#',
      tech: ['JavaScript', 'React', 'MongoDB', 'Express', 'Node.js', 'Redux', 'TailwindCSS', 'Gamini API'], 
      category: 'Productivity',
      year: '2025' 
    }
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
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }: { 
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
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(${rotation.x !== 0 ? '-5px' : '0'})`,
        boxShadow: rotation.x !== 0 ? '0 20px 40px rgba(0,0,0,0.4)' : 'none'
      }}
    >
      {/* Decorative localized glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #00ff88, transparent 60%)`
        }}
      />
      
      {/* Top Header */}
      <div className="flex justify-between items-start mb-8 text-sm">
        <div className="flex gap-2">
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
      <div className="space-y-4">
        <h3 className="text-white group-hover:text-[#00ff88] transition-colors tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
          {project.description}
        </p>
      </div>
      
      {/* Footer Tags */}
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
        {project.tech.map((tech: string) => (
          <span 
            key={tech}
            className="text-[10px] font-mono text-gray-500 px-2 py-1 bg-white/5 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}