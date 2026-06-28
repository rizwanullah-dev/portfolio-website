'use client';

export default function Footer() {
  const footerLinks = [
    {
      icon: 'fab fa-github',
      url: 'https://github.com/rizwanullah-dev',
      label: 'GitHub',
      color: 'hover:text-white'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rizwan-ullah-b74793290/',
      color: 'hover:text-blue-500'
    },
    {
      icon: 'fas fa-globe',
      label: 'Portfolio',
      url: 'https://portfolio-website-pi-five-73.vercel.app',
      color: 'hover:text-[#00ccff]'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      url: 'mailto:rizwanullahicp0306@gmail.com',
      color: 'hover:text-[#00ff88]'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff88]/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#00ccff]/5 rounded-full blur-[100px] -z-10" />

      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16">
          {/* Brand Section */}
          <div className="text-center lg:text-left space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-2 font-mono text-2xl font-bold">
              <span className="text-[#00ff88]">Rizwan</span>
              <span className="text-white">Ullah</span>
              <span className="text-[#00ff88]">|</span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Crafting exceptional digital experiences through clean code and modern technologies. 
              Dedicated to building scalable solutions that matter.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl text-gray-500 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 ${link.color} hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]`}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-gray-600">
          <p>
            &copy; {currentYear} Rizwan Ullah. Made with <span className="text-[#00ff88] animate-pulse">❤</span> in Pakistan
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              Built with <span className="text-white">Next.js 16</span>
            </span>
            <span className="flex items-center gap-2">
              Styled with <span className="text-white">Tailwind</span>
            </span>
          </div>
        </div>

        {/* ATS keyword line — plain DOM text for recruiter bots */}
        <p className="mt-6 text-center text-[10px] font-mono text-gray-700 leading-relaxed">
          BS Software Engineering Graduate · Islamia College University Peshawar · 2026 · MERN Stack · TypeScript · Full Stack Developer · Available for hire
        </p>
      </div>
    </footer>
  );
}