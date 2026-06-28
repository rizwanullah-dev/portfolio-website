'use client';

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
  SiGithubactions,
} from 'react-icons/si';

import { MdApi } from 'react-icons/md';

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
  { name: 'REST API', icon: MdApi, color: '#00ccff' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: FaGit, color: '#F05032' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/2 right-0 w-64 h-64 bg-[#00ccff]/5 rounded-full blur-[100px] -z-10" />

      <div className="container">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-gradient-primary">Skills &amp; Technologies</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to bring digital visions to life.
          </p>
        </div>

        {/* Static Grid for Details */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              style={{ transitionDelay: `${index * 40}ms` }}
              className={`flex flex-col items-center justify-center gap-4 glass-card p-6 sm:p-8 rounded-2xl group transition-all duration-500 hover:border-[#00ff88]/30 hover:shadow-[0_0_25px_rgba(0,255,136,0.15)] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative">
                <skill.icon
                  className="text-4xl text-gray-500 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 z-10 relative"
                  style={{ color: inView ? skill.color : undefined }}
                />
                <div
                  className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity rounded-full z-0"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              {/* Plain text label — required for ATS parsing */}
              <span className="text-xs font-mono font-medium text-gray-500 group-hover:text-white transition-colors text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}