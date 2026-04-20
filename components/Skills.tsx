'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiVercel,
  SiPostman,
  SiDocker,
  SiRedis,
  SiJest,
} from 'react-icons/si';

const skillsData = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: FaGit, color: '#F05032' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Jest', icon: SiJest, color: '#C21325' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
];

function AnimatedSkillsRow({
  skills,
  speed = 25,
  direction = 'left',
}: {
  skills: typeof skillsData;
  speed?: number;
  direction?: 'left' | 'right';
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden h-24 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div 
        ref={rowRef} 
        className={`flex gap-6 absolute whitespace-nowrap ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationPlayState: paused ? 'paused' : 'running', animationDuration: `${60 - speed}s` }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="inline-flex items-center gap-3 glass-card px-6 py-4 rounded-xl group cursor-pointer"
          >
            <skill.icon className="text-2xl transition-all duration-300 group-hover:scale-125" style={{ color: skill.color }} />
            <span className="text-sm font-mono font-medium text-gray-300 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/2 right-0 w-64 h-64 bg-[#00ccff]/5 rounded-full blur-[100px] -z-10" />

      <div className="container">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-gradient-primary">Skills & Technologies</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to bring digital visions to life.
          </p>
        </div>

        <div
          ref={ref}
          className={`space-y-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <AnimatedSkillsRow
            skills={skillsData.slice(0, 9)}
            speed={30}
            direction='left'
          />
          <AnimatedSkillsRow
            skills={skillsData.slice(9)}
            speed={25}
            direction='right'
          />
        </div>

        {/* Static Grid for Desktop Details */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-24">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`flex flex-col items-center justify-center gap-4 glass-card p-8 rounded-2xl group transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative">
                <skill.icon className="text-4xl text-gray-500 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 z-10 relative" style={{ color: inView ? skill.color : undefined }} />
                <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity rounded-full z-0" style={{ backgroundColor: skill.color }} />
              </div>
              <span className="text-xs font-mono font-medium text-gray-500 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
    </section>
  );
}