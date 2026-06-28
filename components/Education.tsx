'use client';

import { useInView } from 'react-intersection-observer';

const coursework = [
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Object-Oriented Programming',
  'Web Technologies',
  'Software Engineering',
  'Computer Networks',
  'Operating Systems',
  'Project Management',
];

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#00ff88]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00ccff]/5 rounded-full blur-[120px] -z-10" />

      <div
        ref={ref}
        className={`container transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <h2 className="text-gradient-primary inline-block">Education</h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-full" />
        </div>

        {/* Education Card */}
        <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 hover:border-[#00ff88]/30 transition-all duration-300 relative overflow-hidden group">
          {/* Top border scan line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/50 to-transparent" />

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors">
                Bachelor of Science in Software Engineering
              </h3>
              <p className="text-[#00ff88] font-medium mt-1">
                Islamia College University Peshawar — Peshawar, Pakistan
              </p>
            </div>
            <span className="shrink-0 font-mono text-sm text-gray-400 bg-white/5 border border-white/10 px-4 py-1.5 rounded-lg self-start">
              2022 – 2026
            </span>
          </div>

          {/* Coursework */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-4">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:border-[#00ff88]/40 hover:text-white transition-all"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00ff88]/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
}
