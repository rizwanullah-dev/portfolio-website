'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { IconType } from 'react-icons';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaNpm,
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
  SiWebpack,
} from 'react-icons/si';

const skillsData = [
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React.js', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: FaGit },
  { name: 'Docker', icon: SiDocker },
  { name: 'Redis', icon: SiRedis },
  { name: 'Jest', icon: SiJest },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Postman', icon: SiPostman },
];

function AnimatedSkillsRow({
  skills,
  speed = 20,
  direction = 'left',
}: {
  skills: typeof skillsData;
  speed?: number;
  direction?: 'left' | 'right';
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let x = 0;

    const animate = () => {
      if (!paused) {
        x += direction === 'left' ? -speed / 60 : speed / 60;
        row.style.transform = `translateX(${x}px)`;

        const width = skills.length * 140;
        if (Math.abs(x) > width) x = 0;
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [paused, speed, direction, skills.length]);

  return (
    <div
      className="relative overflow-hidden h-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={rowRef} className="flex gap-6 absolute">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-4 bg-[#1E2732] border border-[#333] 
                       rounded-lg px-5 py-3 min-w-[140px] 
                       hover:border-[#00ff88] hover:scale-105
                       transition-all duration-300 group cursor-pointer"
          >
            <skill.icon className="text-2xl text-gray-400 group-hover:text-[#00ff88] transition-colors" />
            <span className="text-sm font-mono text-gray-300 group-hover:text-[#00ff88]">
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
    <section id="skills" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-[#00ff88] font-mono"></span> Skills & Technologies
        </h2>

        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <AnimatedSkillsRow
            skills={skillsData}
            speed={25}
            direction='left'
          />
        </div>

        <div
          className={`mt-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'
          }`}
        >
          <AnimatedSkillsRow
            skills={[...skillsData].reverse()} 
            speed={20}
            direction='right'
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-4 bg-[#1E2732] border border-[#333] 
                         rounded-xl px-5 py-4 hover:border-[#00ff88]
                         hover:scale-105 transition-all duration-300 group"
            >
              <skill.icon className="text-2xl text-gray-400 group-hover:text-[#00ff88]" />
              <span className="font-mono text-gray-300 group-hover:text-[#00ff88]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}