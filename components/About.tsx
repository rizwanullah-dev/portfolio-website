'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const aboutData = {
  title: "Who I Am ?",
  description1: "Hello! I'm Rizwan Ullah, a passionate Software Engineer and Full Stack Developer focused on MERN and PERN stacks, based in Peshawar, Pakistan.",
  description2: "In my Software Engineering journey, I combine my academic excellence with hands-on experience. My expertise is building scalable web applications, RESTful APIs, and implementing modern development practices. I enjoy building things that actually work well and are easy to maintain.",
  achievements: [
    { label: "Graduated", value: "BS Software Eng. (2026)", icon: "fas fa-graduation-cap" },
    { label: "Stack", value: "MERN & PERN", icon: "fas fa-layer-group" },
    { label: "Projects", value: "4+ Production Projects", icon: "fas fa-rocket" },
    { label: "Code", value: "Weekly 50h+", icon: "fas fa-code" }
  ]
};

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [imageError, setImageError] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Rizwan_Ullah_CV.pdf';
    link.download = 'Rizwan_Ullah_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Rizwan_Ullah_Resume_1Page.pdf';
    link.download = 'Rizwan_Ullah_Resume_1Page.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ff88]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00ccff]/5 rounded-full blur-[120px]" />
      </div>

      <div 
        ref={ref}
        className={`container transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* TEXT CONTENT */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-gradient-primary inline-block">
                {aboutData.title}
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-full" />
            </div>
            
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                {aboutData.description1}
              </p>
              <p className="leading-relaxed">
                {aboutData.description2}
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {aboutData.achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="glass-card p-4 rounded-xl flex flex-col items-center text-center gap-2 group"
                >
                  <i className={`${achievement.icon} text-[#00ff88] text-xl group-hover:scale-110 transition-transform`} />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">{achievement.label}</span>
                    <span className="text-xs font-bold text-white">{achievement.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDownloadCV}
                className="group relative px-6 py-4 bg-white/5 border border-white/10 hover:border-[#00ff88]/50 rounded-xl transition-all duration-300 overflow-hidden flex-1 sm:flex-initial"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 font-bold text-white group-hover:text-[#00ff88] transition-colors whitespace-nowrap">
                  <i className="fas fa-download" /> Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 to-[#00ccff]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button 
                onClick={handleDownloadResume}
                className="group relative px-6 py-4 bg-white/5 border border-white/10 hover:border-[#00ccff]/50 rounded-xl transition-all duration-300 overflow-hidden flex-1 sm:flex-initial"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 font-bold text-white group-hover:text-[#00ccff] transition-colors whitespace-nowrap">
                  <i className="fas fa-download" /> Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ccff]/10 to-[#00ff88]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Main Image Decoration */}
              <div className={`absolute -inset-4 bg-gradient-to-tr from-[#00ff88]/20 to-[#00ccff]/20 blur-2xl animate-pulse-subtle ${imageError ? 'rounded-full' : 'rounded-3xl'}`} />
              
              <div className={`relative ${imageError ? 'w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px]' : 'w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] lg:w-[350px] lg:h-[450px]'}`}>
                <div className={`absolute inset-0 border-2 border-white/10 -rotate-6 group-hover:rotate-0 transition-transform duration-500 ${imageError ? 'rounded-full' : 'rounded-3xl'}`} />
                <div className={`absolute inset-0 border-2 border-[#00ff88]/30 rotate-3 group-hover:rotate-0 transition-transform duration-500 ${imageError ? 'rounded-full' : 'rounded-3xl'}`} />
                
                <div className={`relative h-full w-full overflow-hidden border-4 border-white/10 shadow-2xl transition-all duration-500 ${imageError ? 'rounded-full' : 'rounded-3xl'}`}>
                  {!imageError ? (
                    <Image
                      src="/rizwan.png" 
                      alt="Rizwan Ullah"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                      priority
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0a0f0d] to-[#030504] w-full h-full">
                      <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-br from-[#00ff88]/10 to-[#00ccff]/10 border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,136,0.15)] relative overflow-hidden group">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-[#00ff88] to-[#00ccff] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                        <span className="text-5xl sm:text-6xl font-black text-gradient-primary tracking-widest relative z-10 select-none">
                          RU
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay Gradient (only for image, not for initials fallback) */}
                  {!imageError && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                  )}
                  
                  {/* Floating Tech Badges */}
                  {!imageError && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                      <i className="fab fa-react text-[#00d8ff]" />
                      <i className="fab fa-node-js text-[#68a063]" />
                      <i className="fab fa-js text-[#f7df1e]" />
                      <i className="fas fa-database text-[#47a248]" />
                    </div>
                  )}
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-[#00ff88]/50 rounded-tr-xl" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-[#00ccff]/50 rounded-bl-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
