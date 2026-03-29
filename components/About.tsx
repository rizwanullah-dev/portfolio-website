'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const aboutData = {
  title: "Who I Am ?",
  description1: "Hello! I'm Rizwan Ullah, a passionate Full Stack Developer specializing in MERN and PERN stacks, based in Peshawar, Pakistan.",
  description2: "As a Software Engineering graduate from Islamia College Peshawar, I combine academic excellence with hands-on experience. My expertise spans building scalable web applications, RESTful APIs, and implementing modern development practices. I thrive on transforming complex problems into elegant, efficient solutions using cutting-edge technologies.",
  achievements: [
    "BS Software Engineering Graduate",
    "50+ Hours of Coding Weekly",
    "10+ Real-world Projects Delivered",
    "Open Source Contributor"
  ]
};

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rizwan_Ullah_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-[80vh] relative py-20 px-4 bg-gradient-to-b from-transparent to-[#0a0a0a]/50">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div 
        ref={ref}
        className={`max-w-[1200px] mx-auto transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        } relative z-10`}
      >
        

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-5xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#0088ff] font-mono">
              {aboutData.title}
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg sm:text-xl lg:text-sm text-[#b0b0b0] leading-relaxed font-sans">
                {aboutData.description1}
              </p>
              
              <p className="text-lg sm:text-xl lg:text-sm text-[#b0b0b0] leading-relaxed font-sans">
                {aboutData.description2}
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {aboutData.achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 bg-[#1a1a1a]/50 border border-[#333] rounded-lg hover:border-[#00ff88] transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
                  <span className="text-[#b0b0b0] text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleDownloadCV}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-[#0a0a0a] font-semibold rounded-lg shadow-[0_4px_20px_rgba(0,255,136,0.4)] hover:shadow-[0_8px_30px_rgba(0,255,136,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </button>
          </div>

          {/* Right Side - Image with Professional Elements */}
          <div className="flex justify-center lg:justify-center ">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px]">
                <Image
                  src="/image.png" 
                  alt="Rizwan Ullah - Professional Portrait"
                  fill
                  className="object-cover rounded-2xl border-4 border-[#00ff88] shadow-2xl hover:shadow-[0_0_40px_rgba(0,255,136,0.3)] transition-shadow duration-500"
                  priority
                />
                
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#00ff88] to-[#0088ff] rounded-2xl blur-xl opacity-30 animate-pulse -z-10"></div>
                
                {/* Corner Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#00ff88] to-[#0088ff] px-4 py-2 rounded-lg">
                  <span className="text-[#0a0a0a] font-mono text-xs font-bold">SOFTWARE ENGINEER</span>
                </div>
              </div>

              {/* Skill Icons Around Image */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 bg-[#1a1a1a] border border-[#333] px-6 py-3 rounded-full">
                {['React', 'Node', 'MongoDB', 'TypeScript'].map((tech, index) => (
                  <span 
                    key={tech} 
                    className="text-[#00ff88] font-mono text-sm hover:text-white transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}