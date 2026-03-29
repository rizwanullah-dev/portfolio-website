'use client';

import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'AI Website Builder',
      description: 'An AI-powered website builder that generates complete, responsive websites from user prompts. Features include automated layout generation, component structure creation, and dynamic content optimization.',
      github: 'https://github.com/Rizwan2005khan/AI-website-builder.git',
      external: '#',
      tech: ['TypeScript', 'React', 'TailwindCSS'], 
      category: 'AI/ML',
      year: '2025' 
    },
    {
      title: 'Project Management Platform',
      description: 'A full-featured project management platform supporting teams, task assignments, role-based access, progress tracking, and real-time updates. Built with PERN stack and scalable backend architecture.',
      github: 'https://github.com/Rizwan2005khan/project-management.git',
      external: '#',
      tech: ['JavaScript', 'PostgreSQL', 'React', 'Prisma', 'TailwindCSS', 'Clerk', 'Inngest'], 
      category: 'SaaS',
      year: '2025' 
    },
    {
      title: 'AI Resume Generator',
      description: 'An intelligent resume builder creating ATS-optimized, professional resumes. Features include customizable templates, role-specific content generation, AI-assisted suggestions, and instant PDF exports.',
      github: 'https://github.com/Rizwan2005khan/Ai-Resume-Generator.git',
      external: '#',
      tech: ['JavaScript', 'React', 'MongoDB', 'Express', 'Node.js', 'Redux', 'TailwindCSS', 'Gamini API'], 
      category: 'Productivity',
      year: '2025' 
    },
    {
      title: 'Sleep Tracker App',
      description: 'A Next.js-based sleep tracking application that helps users log sleep patterns, analyze sleep quality, and visualize insights using interactive charts.',
      github: 'https://github.com/Rizwan2005khan/Sleep-tracker-next.git',
      external: '#', 
      tech: ['Next.js', 'TailwindCSS', 'Geist Font'], 
      category: 'HealthTech',
      year: '2025' 
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-[#00ff88] font-mono"></span> Featured Projects
        </h2>
        
        {/* Removed decorative header and background elements to match original style */}
        
        <div ref={ref} className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView }: { 
  project: any; 
  index: number; 
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  };

  return (
    <div 
      ref={cardRef}
      className={`bg-[#0a0a0a] border border-[#333] rounded-xl p-8 transition-all duration-300 relative overflow-hidden group hover:border-[#00ff88] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transform: transform
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      
      {/* Project Header */}
      <div className="flex justify-between items-center mb-6"> {/* Changed items-start to items-center */}
        <div className="text-3xl text-[#00ff88]">
          <i className="fas fa-folder"></i> {/* Original icon */}
        </div>
        <div className="flex gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#b0b0b0] text-xl hover:text-[#00ff88] transition-colors duration-300" // Removed hover:scale
          >
            <i className="fab fa-github"></i> {/* Original icon */}
          </a>
          {/* Only show external link if there's a valid URL */}
          {project.external !== '#' && (
            <a 
              href={project.external} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#b0b0b0] text-xl hover:text-[#00ff88] transition-colors duration-300" // Removed hover:scale
            >
              <i className="fas fa-external-link-alt"></i> {/* Original icon */}
            </a>
          )}
        </div>
      </div>
      
      {/* Project Title */}
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00ff88] transition-colors duration-300">
        {project.title}
      </h3>
      
      {/* Project Description */}
      <p className="text-[#b0b0b0] mb-6 leading-relaxed">
        {project.description}
      </p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech: string) => (
          <span 
            key={tech}
            className="bg-[#2a2a2a] text-[#b0b0b0] px-3 py-1 rounded-md text-sm font-mono" // Original styling
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}