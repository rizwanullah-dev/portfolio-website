'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

// Type Definitions
interface ExperienceData {
  id: number;
  company: string;
  jobtitle: string;
  startYear: string;
  endYear: string;
  description?: string;
  technologies?: string[];
}

interface ExperienceCardProps extends ExperienceData {
  index: number;
  inView: boolean;
}

interface IllustrationProps {
  className?: string;
}

// ------------------ Illustrations ------------------ //

// Option 1: Modern Developer Dashboard Concept
function DeveloperDashboardIllustration({ className }: IllustrationProps) {
  return (
    <div className={`relative w-[320px] h-[400px] ${className || ''}`}>
      <svg viewBox="0 0 320 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ff88" />
            <stop offset="100%" stopColor="#0088ff" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="320" height="400" fill="#1a1a1a" rx="16" />
        
        {/* Terminal Window */}
        <g transform="translate(40, 50)">
          <rect width="240" height="120" rx="8" fill="#0a0a0a" stroke="url(#dashGrad)" strokeWidth="1.5" />
          
          {/* Terminal Header */}
          <rect x="0" y="0" width="240" height="24" rx="8 8 0 0" fill="#1a1a1a" />
          <circle cx="16" cy="12" r="4" fill="#ff5f56" />
          <circle cx="32" cy="12" r="4" fill="#ffbd2e" />
          <circle cx="48" cy="12" r="4" fill="#27ca3f" />
          
          {/* Terminal Content */}
          <text x="12" y="50" fill="#00ff88" fontFamily="'Monaco', 'Courier New', monospace" fontSize="10">
            <tspan x="12" dy="0">$ experience --list</tspan>
            <tspan x="12" dy="14">→ Teton Private Ltd (2022-Present)</tspan>
            <tspan x="12" dy="14">→ Fiverr Freelance (2021-2022)</tspan>
            <tspan x="12" dy="14">→ Personal Projects (2018-Present)</tspan>
            <tspan x="12" dy="14">$ status --current</tspan>
            <tspan x="12" dy="14" className="animate-pulse">🟢 Available for opportunities</tspan>
          </text>
        </g>
        
        {/* Code Editor */}
        <g transform="translate(60, 200)">
          <rect width="200" height="140" rx="8" fill="#0a0a0a" stroke="url(#codeGrad)" strokeWidth="1" opacity="0.8" />
          
          {/* Editor Header */}
          <rect x="0" y="0" width="200" height="24" rx="8 8 0 0" fill="#1a1a1a" />
          <text x="12" y="16" fill="#00ff88" fontFamily="monospace" fontSize="10">experience.js</text>
          
          {/* Code Content */}
          <text x="20" y="50" fill="#fff" fontFamily="'Monaco', 'Courier New', monospace" fontSize="10">
            <tspan x="20" dy="0" fill="#0088ff">const</tspan>
            <tspan dx="5" fill="#fff"> developer = </tspan>
            <tspan fill="#00ff88">{`{`}</tspan>
            <tspan x="20" dy="14" fill="#fff">  name: </tspan>
            <tspan fill="#00ff88">&quot;John Doe&quot;</tspan>
            <tspan x="20" dy="14" fill="#fff">  role: </tspan>
            <tspan fill="#00ff88">&quot;Full-Stack Dev&quot;</tspan>
            <tspan x="20" dy="14" fill="#fff">  stack: [</tspan>
            <tspan x="30" dy="14" fill="#00ff88">&quot;React&quot;, &quot;Node.js&quot;</tspan>
            <tspan x="20" dy="14" fill="#00ff88">  ]</tspan>
            <tspan x="20" dy="14" fill="#00ff88">{`}`}</tspan>
          </text>
        </g>
        
        {/* Floating Elements */}
        <g opacity="0.6">
          <circle cx="280" cy="80" r="8" fill="#00ff88" className="animate-pulse" />
          <circle cx="50" cy="350" r="6" fill="#0088ff" className="animate-pulse" style={{animationDelay: '0.3s'}} />
          <circle cx="280" cy="320" r="4" fill="#ff0080" className="animate-pulse" style={{animationDelay: '0.6s'}} />
        </g>
      </svg>
      
      <div className="absolute -inset-4 bg-gradient-to-br from-[#00ff88]/10 to-[#0088ff]/10 rounded-2xl blur-xl opacity-30"></div>
    </div>
  );
}

// Option 2: Interactive Skill Graph
function InteractiveSkillGraph({ className }: IllustrationProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skills = [
    { name: "React", level: 95, color: "#00ff88" },
    { name: "TypeScript", level: 90, color: "#0088ff" },
    { name: "Node.js", level: 85, color: "#00ff88" },
    { name: "Next.js", level: 80, color: "#0088ff" },
    { name: "AWS", level: 75, color: "#ff0080" },
    { name: "Docker", level: 70, color: "#00ff88" },
  ];

  return (
    <div className={`relative w-[300px] h-[400px] ${className || ''}`}>
      <svg viewBox="0 0 300 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skillGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="radialGrad">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="300" height="400" fill="#1a1a1a" rx="16" />
        
        {/* Background Glow */}
        <circle cx="150" cy="200" r="100" fill="url(#radialGrad)" />
        
        {/* Title */}
        <text x="150" y="40" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="14" fontWeight="bold">
          SKILL PROGRESS
        </text>
        <line x1="100" y1="50" x2="200" y2="50" stroke="url(#skillGrad)" strokeWidth="1" />
        
        {/* Skills Graph */}
        <g transform="translate(50, 80)">
          {skills.map((skill, index) => (
            <g 
              key={skill.name}
              transform={`translate(0, ${index * 40})`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="cursor-pointer transition-all duration-300"
            >
              {/* Skill Name */}
              <text 
                x="0" 
                y="20" 
                fill={hoveredSkill === skill.name ? skill.color : "#b0b0b0"}
                fontFamily="monospace" 
                fontSize="11"
                fontWeight={hoveredSkill === skill.name ? "bold" : "normal"}
                className="transition-all duration-300"
              >
                {skill.name}
              </text>
              
              {/* Progress Bar Background */}
              <rect x="80" y="10" width="140" height="10" rx="5" fill="#333" />
              
              {/* Progress Bar Fill */}
              <rect 
                x="80" 
                y="10" 
                width={140 * (skill.level / 100)} 
                height="10" 
                rx="5" 
                fill={skill.color}
                opacity={hoveredSkill === skill.name ? 1 : 0.7}
                className="transition-all duration-500"
              />
              
              {/* Animated Progress Indicator */}
              {hoveredSkill === skill.name && (
                <circle 
                  cx={80 + 140 * (skill.level / 100)} 
                  cy="15" 
                  r="4" 
                  fill={skill.color}
                  className="animate-pulse"
                />
              )}
              
              {/* Percentage */}
              <text 
                x="230" 
                y="20" 
                fill="#fff" 
                fontFamily="monospace" 
                fontSize="10"
                fontWeight="bold"
              >
                {skill.level}%
              </text>
              
              {/* Hover Effect */}
              {hoveredSkill === skill.name && (
                <rect 
                  x="75" 
                  y="5" 
                  width={150 * (skill.level / 100) + 10} 
                  height="20" 
                  rx="8" 
                  fill={skill.color}
                  opacity="0.1"
                  className="transition-all duration-300"
                />
              )}
            </g>
          ))}
        </g>
        
        {/* Current Focus */}
        <g transform="translate(50, 320)">
          <rect width="200" height="60" rx="8" fill="#1E2732" stroke="#00ff88" strokeWidth="1" />
          <text x="20" y="25" fill="#fff" fontFamily="monospace" fontSize="11">
            CURRENT FOCUS:
          </text>
          <text x="20" y="45" fill="#00ff88" fontFamily="monospace" fontSize="14" fontWeight="bold">
            Full-Stack Development
          </text>
        </g>
      </svg>
      
      <div className="absolute -inset-4 bg-gradient-to-b from-[#00ff88]/5 to-transparent rounded-2xl blur-xl opacity-20"></div>
    </div>
  );
}

// Option 3: Timeline Flow Visualization
function AnimatedTimelineFlow({ className }: IllustrationProps) {
  const timelineData = [
    { year: "2018", event: "Started Coding", color: "#00ff88" },
    { year: "2019", event: "First Projects", color: "#0088ff" },
    { year: "2020", event: "Open Source", color: "#00ff88" },
    { year: "2021", event: "Freelance Work", color: "#0088ff" },
    { year: "2022", event: "Full-Time Role", color: "#00ff88" },
    { year: "2023", event: "Senior Level", color: "#0088ff" },
  ];

  return (
    <div className={`relative w-[320px] h-[400px] ${className || ''}`}>
      <svg viewBox="0 0 320 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="dotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" />
            <stop offset="100%" stopColor="#0088ff" />
          </linearGradient>
        </defs>

        <rect width="320" height="400" fill="#1a1a1a" rx="16" />
        
        {/* Main Timeline Line */}
        <path 
          d="M160,50 C200,100 200,200 160,250 C120,300 120,350 160,350" 
          stroke="url(#timelineGrad)" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="5,5"
        />
        
        {/* Timeline Nodes */}
        {timelineData.map((item, index) => {
          const y = 60 + index * 45;
          const x = index % 2 === 0 ? 120 : 200;
          
          return (
            <g key={item.year} transform={`translate(${x}, ${y})`}>
              {/* Connecting Line */}
              <line 
                x1={index % 2 === 0 ? 40 : -40} 
                y1="0" 
                x2="0" 
                y2="0" 
                stroke={item.color} 
                strokeWidth="1" 
                opacity="0.4" 
                strokeDasharray="3,3"
              />
              
              {/* Node */}
              <circle r="8" fill={item.color} opacity="0.2" />
              <circle r="6" fill={item.color} className="animate-pulse" style={{animationDelay: `${index * 0.2}s`}} />
              <circle r="3" fill="#1a1a1a" />
              
              {/* Label */}
              <g transform={`translate(${index % 2 === 0 ? 45 : -45}, 0)`}>
                <rect 
                  width="100" 
                  height="30" 
                  rx="6" 
                  fill="#1E2732" 
                  stroke={item.color} 
                  strokeWidth="1"
                  opacity="0.8"
                  transform={`translate(${index % 2 === 0 ? 0 : -100}, -15)`}
                />
                <text 
                  x={index % 2 === 0 ? 10 : -90} 
                  y="4" 
                  textAnchor="start"
                  fill="#fff" 
                  fontFamily="monospace" 
                  fontSize="10"
                >
                  <tspan fontWeight="bold" fill={item.color}>{item.year}</tspan>
                  <tspan x={index % 2 === 0 ? 10 : -90} dy="12" fontSize="9">{item.event}</tspan>
                </text>
              </g>
            </g>
          );
        })}
        
        {/* Animated Flow Dots */}
        <circle cx="160" cy="200" r="4" fill="url(#dotGrad)">
          <animateMotion
            path="M160,50 C200,100 200,200 160,250 C120,300 120,350 160,350"
            dur="8s"
            repeatCount="indefinite"
            rotate="auto"
          />
        </circle>
        
        {/* Additional floating dot */}
        <circle cx="160" cy="200" r="3" fill="#00ff88" opacity="0.6">
          <animateMotion
            path="M160,50 C200,100 200,200 160,250 C120,300 120,350 160,350"
            dur="6s"
            repeatCount="indefinite"
            rotate="auto"
            begin="1s"
          />
        </circle>
      </svg>
      
      <div className="absolute -inset-4 bg-gradient-to-t from-[#00ff88]/10 to-transparent rounded-2xl blur-xl opacity-20"></div>
    </div>
  );
}

// Option 4: Minimalist Avatar with Stats
function DeveloperAvatarWithStats({ className }: IllustrationProps) {
  const stats = [
    { label: "Projects", value: "50+", color: "#00ff88" },
    { label: "Experience", value: "5+ yrs", color: "#0088ff" },
    { label: "Clients", value: "30+", color: "#ff0080" },
    { label: "Stack", value: "MERN", color: "#00ff88" },
  ];

  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  return (
    <div className={`relative w-[280px] h-[400px] ${className || ''}`}>
      <svg viewBox="0 0 280 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="avatarBg">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="280" height="400" fill="#1a1a1a" rx="16" />
        
        {/* Background Glow */}
        <circle cx="140" cy="120" r="80" fill="url(#avatarBg)" />
        
        {/* Avatar Circle */}
        <circle 
          cx="140" 
          cy="120" 
          r="60" 
          stroke="url(#avatarGrad)" 
          strokeWidth="2" 
          fill="none"
          className="animate-spin"
          style={{ animationDuration: '20s' }}
        />
        
        {/* Abstract Avatar */}
        <g transform="translate(140, 120)">
          {/* Head */}
          <circle r="25" fill="#1E2732" stroke="#00ff88" strokeWidth="1.5" />
          
          {/* Eyes */}
          <circle cx="-8" cy="-5" r="4" fill="#00ff88" className="animate-pulse" />
          <circle cx="8" cy="-5" r="4" fill="#00ff88" className="animate-pulse" style={{animationDelay: '0.5s'}} />
          
          {/* Code Symbol */}
          <g fill="none" stroke="#0088ff" strokeWidth="2">
            <path d="M-10,10 L-5,15 L-10,20" />
            <path d="M10,10 L5,15 L10,20" />
            <line x1="-5" y1="15" x2="5" y2="15" />
          </g>
        </g>
        
        {/* Stats Grid */}
        <g transform="translate(40, 220)">
          {stats.map((stat, index) => (
            <g 
              key={stat.label} 
              transform={`translate(${(index % 2) * 100}, ${Math.floor(index / 2) * 80})`}
              onMouseEnter={() => setHoveredStat(stat.label)}
              onMouseLeave={() => setHoveredStat(null)}
              className="cursor-pointer"
            >
              <rect 
                width="90" 
                height="60" 
                rx="8" 
                fill="#1E2732" 
                stroke={stat.color} 
                strokeWidth={hoveredStat === stat.label ? "2" : "1"}
                opacity={hoveredStat === stat.label ? 0.9 : 0.8}
                className="transition-all duration-300"
              />
              <text 
                x="45" 
                y="25" 
                textAnchor="middle" 
                fill="#fff" 
                fontFamily="monospace" 
                fontSize="16" 
                fontWeight="bold"
              >
                {stat.value}
              </text>
              <text 
                x="45" 
                y="45" 
                textAnchor="middle" 
                fill={stat.color} 
                fontFamily="monospace" 
                fontSize="10"
                fontWeight={hoveredStat === stat.label ? "bold" : "normal"}
              >
                {stat.label}
              </text>
              
              {/* Hover effect */}
              {hoveredStat === stat.label && (
                <circle 
                  cx="45" 
                  cy="55" 
                  r="2" 
                  fill={stat.color}
                  className="animate-pulse"
                />
              )}
            </g>
          ))}
        </g>
        
        {/* Status Indicator */}
        <g transform="translate(140, 360)">
          <circle r="4" fill="#00ff88" className="animate-pulse" />
          <text x="10" y="4" fill="#00ff88" fontFamily="monospace" fontSize="10" fontWeight="bold">
            Open to Work
          </text>
        </g>
      </svg>
      
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#00ff88]/10 via-transparent to-[#0088ff]/10 rounded-2xl blur-xl opacity-30"></div>
    </div>
  );
}

// Original Illustrations (for compatibility)
function ProfessionalCardStack({ className }: IllustrationProps) {
  return (
    <div className={`relative w-[280px] h-[380px] ${className || ''}`}>
      <svg viewBox="0 0 280 380" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <rect width="280" height="380" fill="#1a1a1a" rx="12" />
        
        {/* Professional Card Stack */}
        <g transform="translate(20, 30)">
          {/* Background Cards */}
          <rect x="0" y="20" width="240" height="280" rx="8" fill="#1E2732" opacity="0.3" />
          <rect x="0" y="10" width="240" height="280" rx="8" fill="#1E2732" opacity="0.6" />
          
          {/* Main Card */}
          <rect x="0" y="0" width="240" height="280" rx="8" 
                stroke="url(#cardGrad)" strokeWidth="1.5" fill="#1E2732" />
          
          {/* Card Header */}
          <rect x="20" y="20" width="200" height="40" rx="6" 
                fill="#00ff88" opacity="0.1" />
          <circle cx="40" cy="40" r="12" fill="#00ff88" opacity="0.2" />
          <path d="M35,35 L45,40 L35,45 Z" stroke="#00ff88" strokeWidth="1.5" fill="none" />
          
          {/* Content Lines */}
          <line x1="20" y1="80" x2="220" y2="80" stroke="#00ff88" strokeWidth="0.8" opacity="0.4" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#00ff88" strokeWidth="0.5" opacity="0.3" />
          <line x1="20" y1="120" x2="200" y2="120" stroke="#00ff88" strokeWidth="0.5" opacity="0.3" />
          <line x1="20" y1="150" x2="220" y2="150" stroke="#0088ff" strokeWidth="0.8" opacity="0.4" />
          <line x1="20" y1="170" x2="160" y2="170" stroke="#0088ff" strokeWidth="0.5" opacity="0.3" />
          <line x1="20" y1="190" x2="190" y2="190" stroke="#0088ff" strokeWidth="0.5" opacity="0.3" />
          <line x1="20" y1="220" x2="220" y2="220" stroke="#ff0080" strokeWidth="0.8" opacity="0.4" />
          
          {/* Status Indicators */}
          <circle cx="210" cy="40" r="4" fill="#00ff88" opacity="0.6" />
          <circle cx="225" cy="40" r="4" fill="#0088ff" opacity="0.4" />
          <circle cx="240" cy="40" r="4" fill="#ff0080" opacity="0.2" />
        </g>

        {/* Minimal Decorative Elements */}
        <g transform="translate(0, 0)" opacity="0.3">
          <circle cx="20" cy="20" r="2" fill="#00ff88" className="animate-pulse" />
          <circle cx="260" cy="60" r="1.5" fill="#0088ff" className="animate-pulse" style={{animationDelay: '0.5s'}} />
          <circle cx="40" cy="360" r="1" fill="#ff0080" className="animate-pulse" style={{animationDelay: '1s'}} />
        </g>
      </svg>

      <div className="absolute -inset-2 bg-gradient-to-br from-[#00ff88]/15 to-[#0088ff]/15 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SimpleTimelineVisualization({ className }: IllustrationProps) {
  return (
    <div className={`relative w-[280px] h-[380px] ${className || ''}`}>
      <svg viewBox="0 0 280 380" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="simpleTimeline" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <rect width="280" height="380" fill="#1a1a1a" rx="12" />
        
        {/* Timeline Line */}
        <line x1="140" y1="40" x2="140" y2="340" stroke="url(#simpleTimeline)" strokeWidth="2" />
        
        {/* Timeline Points */}
        <g>
          <circle cx="140" cy="80" r="8" fill="#00ff88" opacity="0.8" />
          <circle cx="140" cy="80" r="4" fill="#1a1a1a" />
          
          <circle cx="140" cy="190" r="8" fill="#0088ff" opacity="0.8" />
          <circle cx="140" cy="190" r="4" fill="#1a1a1a" />
          
          <circle cx="140" cy="300" r="8" fill="#ff0080" opacity="0.8" />
          <circle cx="140" cy="300" r="4" fill="#1a1a1a" />
        </g>

        {/* Simple Experience Cards */}
        <g transform="translate(40, 60)">
          <rect x="0" y="0" width="80" height="40" rx="6" 
                stroke="#00ff88" strokeWidth="1" fill="#1E2732" opacity="0.8" />
          <line x1="10" y1="15" x2="70" y2="15" stroke="#00ff88" strokeWidth="0.8" opacity="0.6" />
          <line x1="10" y1="25" x2="50" y2="25" stroke="#00ff88" strokeWidth="0.5" opacity="0.4" />
        </g>

        <g transform="translate(170, 170)">
          <rect x="0" y="0" width="80" height="40" rx="6" 
                stroke="#0088ff" strokeWidth="1" fill="#1E2732" opacity="0.8" />
          <line x1="10" y1="15" x2="70" y2="15" stroke="#0088ff" strokeWidth="0.8" opacity="0.6" />
          <line x1="10" y1="25" x2="60" y2="25" stroke="#0088ff" strokeWidth="0.5" opacity="0.4" />
        </g>

        <g transform="translate(40, 280)">
          <rect x="0" y="0" width="80" height="40" rx="6" 
                stroke="#ff0080" strokeWidth="1" fill="#1E2732" opacity="0.8" />
          <line x1="10" y1="15" x2="70" y2="15" stroke="#ff0080" strokeWidth="0.8" opacity="0.6" />
          <line x1="10" y1="25" x2="55" y2="25" stroke="#ff0080" strokeWidth="0.5" opacity="0.4" />
        </g>

        {/* Year Labels */}
        <text x="20" y="85" fill="#00ff88" fontSize="10" fontFamily="monospace" opacity="0.7">2022</text>
        <text x="200" y="195" fill="#0088ff" fontSize="10" fontFamily="monospace" opacity="0.7">2021</text>
        <text x="20" y="305" fill="#ff0080" fontSize="10" fontFamily="monospace" opacity="0.7">2018</text>
      </svg>

      <div className="absolute -inset-2 bg-gradient-to-t from-[#00ff88]/10 to-transparent rounded-2xl blur-xl opacity-30"></div>
    </div>
  );
}

function ModernGeometricIllustration({ className }: IllustrationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const element = containerRef.current;
    element.addEventListener('mousemove', handleMouseMove);

    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-[320px] h-[400px] group ${className || ''}`}
    >
      <svg viewBox="0 0 320 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="modernGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="radialGrad">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0088ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="320" height="400" fill="#1a1a1a" rx="12" />
        <circle
          cx={160 + (mousePosition.x - 0.5) * 30}
          cy={200 + (mousePosition.y - 0.5) * 30}
          r="120"
          fill="url(#radialGrad)"
          className="transition-all duration-300"
        />
        <g transform="translate(160, 200)">
          <g className="animate-spin" style={{ animationDuration: '20s' }}>
            <polygon
              points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30"
              stroke="url(#modernGradient1)"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

// ------------------ Experience Data ------------------ //

const professionalExperienceData: ExperienceData[] = [
  {
    id: 1,
    company: 'Teton Private Limited',
    jobtitle: 'Software Engineer I',
    startYear: 'Jan 2022',
    endYear: 'Present',
    description: 'Full-stack development with React, Node.js, and TypeScript. Building scalable web applications and microservices.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 2,
    company: 'Fiverr (Freelance)',
    jobtitle: 'Full-Stack Developer',
    startYear: 'Jun 2021',
    endYear: 'Jan 2022',
    description: 'Built custom web applications for international clients. Delivered projects ranging from MVP to enterprise solutions.',
    technologies: ['MERN Stack', 'Next.js', 'AWS', 'Docker', 'GraphQL', 'MongoDB'],
  },
  {
    id: 3,
    company: 'Personal Projects',
    jobtitle: 'Software Developer',
    startYear: '2018',
    endYear: 'Present',
    description: 'Continuous learning through building innovative solutions. Open source contributions and experimental projects.',
    technologies: ['Various Stacks', 'AI/ML', 'Cloud Services', 'Mobile Development', 'Blockchain'],
  },
];

// ------------------ Experience Card ------------------ //

function ProfessionalExperienceCard({
  company,
  jobtitle,
  startYear,
  endYear,
  description,
  technologies,
  index,
  inView,
}: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-[#1E2732] border border-[#333] rounded-xl p-6 
                 hover:border-[#00ff88] hover:shadow-lg hover:shadow-[#00ff88]/10 
                 transition-all duration-300 transform hover:-translate-y-1"
      style={{
        transitionDelay: `${index * 150}ms`,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        opacity: inView ? 1 : 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#00ff88]/20 to-[#0088ff]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#00ff88] transition-colors duration-300">
              {jobtitle}
            </h3>
            <h4 className="text-[#00ff88] font-medium text-sm mt-1">{company}</h4>
          </div>
          <div className="text-right">
            <span className="text-sm text-[#b0b0b0] font-mono bg-[#1a1a1a] px-3 py-1 rounded-lg border border-[#333]">
              {startYear} - {endYear}
            </span>
          </div>
        </div>

        {description && (
          <p className="text-[#b0b0b0] text-sm mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#00ff88]/10 text-[#00ff88] text-xs rounded-full border border-[#00ff88]/20 hover:bg-[#00ff88]/20 hover:border-[#00ff88]/40 hover:scale-105 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00ff88] rounded-tr-xl transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  );
}

// ------------------ Main Professional Experience Section ------------------ //

export default function ProfessionalExperience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const [selectedIllustration, setSelectedIllustration] = useState<
    'dashboard' | 'skills' | 'timeline' | 'avatar' | 'minimalist' | 'geometric'
  >('dashboard');

  const illustrations = {
    dashboard: DeveloperDashboardIllustration,
    skills: InteractiveSkillGraph,
    timeline: AnimatedTimelineFlow,
    avatar: DeveloperAvatarWithStats,
    minimalist: ProfessionalCardStack,
    geometric: ModernGeometricIllustration,
  };

  const CurrentIllustration = illustrations[selectedIllustration];

  const illustrationLabels = {
    dashboard: { label: 'Dashboard', icon: '💻' },
    skills: { label: 'Skills', icon: '📊' },
    timeline: { label: 'Timeline', icon: '📅' },
    avatar: { label: 'Profile', icon: '👨‍💻' },
    minimalist: { label: 'Cards', icon: '🃏' },
    geometric: { label: 'Geometric', icon: '✨' },
  };

  return (
    <section id="experience" className="min-h-screen py-14 sm:py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] scroll-mt-20">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid lg:grid-cols-[40%_60%] gap-16 items-start">
          {/* Left Side Illustration — hidden on mobile */}
          <div className="hidden lg:flex flex-col items-center lg:sticky lg:top-20 space-y-6">
            <div className="relative">
              <CurrentIllustration />
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00ff88]/20 to-[#0088ff]/20 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            </div>

            {/* Illustration Selector */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {(['dashboard', 'skills', 'timeline', 'avatar'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedIllustration(type)}
                  className={`px-3 py-1.5 text-xs rounded-full transition-all duration-300 flex items-center gap-2 ${
                    selectedIllustration === type
                      ? 'bg-[#00ff88] text-[#1a1a1a] font-semibold shadow-lg shadow-[#00ff88]/30'
                      : 'bg-[#1E2732] text-[#00ff88] border border-[#00ff88]/30 hover:border-[#00ff88] hover:scale-105 hover:shadow-md hover:shadow-[#00ff88]/10'
                  }`}
                >
                  <span>{illustrationLabels[type].icon}</span>
                  <span>{illustrationLabels[type].label}</span>
                </button>
              ))}
              
              {/* More Options Dropdown */}
              <div className="relative group">
                <button className="px-3 py-1.5 text-md rounded-full bg-[#1E2732] text-[#00ff88] border border-[#00ff88]/30 hover:border-[#00ff88] transition-all duration-300">
                  More +
                </button>
                <div className="absolute hidden group-hover:flex flex-col gap-1 mt-2 p-2 bg-[#1E2732] border border-[#00ff88]/30 rounded-lg z-50 min-w-[100px]">
                  {(['minimalist', 'geometric'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedIllustration(type)}
                      className={`px-3 py-1.5 text-xs rounded transition-all duration-300 flex items-center gap-2 ${
                        selectedIllustration === type
                          ? 'bg-[#00ff88] text-[#1a1a1a]'
                          : 'text-[#00ff88] hover:bg-[#00ff88]/10'
                      }`}
                    >
                      <span>{illustrationLabels[type].icon}</span>
                      <span>{illustrationLabels[type].label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Stats Summary */}
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E2732] rounded-lg border border-[#00ff88]/20">
                <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
                <span className="text-sm text-[#00ff88] font-mono">5+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Side Experience */}
          <div className="relative">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Professional <span className="text-[#00ff88]">Experience</span>
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#00ff88] to-[#0088ff] mb-4"></div>
              <p className="text-gray-400 text-md leading-relaxed max-w-2xl">
                A journey through software development, from early projects to professional roles.
                Each experience has contributed to my growth as a full-stack developer.
              </p>
            </div>

            <div className="space-y-4 relative">
              {/* Timeline line for desktop */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ff88] via-[#0088ff] to-[#ff0080] opacity-30 ml-[-2rem]"></div>
              
              {professionalExperienceData.map((exp, index) => (
                <ProfessionalExperienceCard
                  key={exp.id}
                  {...exp}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-16 pt-8 border-t border-[#333]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse mx-1" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <span className="text-[#00ff88] font-mono text-sm">Open to new opportunities</span>
                </div>
                
                <a
                  href="#contact"
                  className="px-6 py-2 lg:mr-10 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-[#1a1a1a] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Let&apos;s Connect
                </a>
              </div>
              
              {/* Additional Info */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 lg:mr-10">
                <div className="text-center p-3 bg-[#1E2732] rounded-lg border border-[#333]">
                  <div className="text-[#00ff88] text-sm font-mono">50+</div>
                  <div className="text-gray-400 text-xs mt-1">Projects</div>
                </div>
                <div className="text-center p-3 bg-[#1E2732] rounded-lg border border-[#333]">
                  <div className="text-[#00ff88] text-sm font-mono">30+</div>
                  <div className="text-gray-400 text-xs mt-1">Clients</div>
                </div>
                <div className="text-center p-3 bg-[#1E2732] rounded-lg border border-[#333]">
                  <div className="text-[#00ff88] text-sm font-mono">10+</div>
                  <div className="text-gray-400 text-xs mt-1">Technologies</div>
                </div>
                <div className="text-center p-3 bg-[#1E2732] rounded-lg border border-[#333]">
                  <div className="text-[#00ff88] text-sm font-mono">5+</div>
                  <div className="text-gray-400 text-xs mt-1">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0088ff]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}