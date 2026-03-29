'use client';

export default function Footer() {
  const footerLinks = [
    {
      icon: 'fab fa-github',
      url: 'https://github.com/Rizwan2005khan',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rizwan-ullah-b74793290/',
      color: 'hover:text-blue-500'
    },
    {
      icon: 'fab fa-facebook',
      label: 'facebook',
      url: 'https://www.facebook.com/share/17rXqVgXcE/',
      color: 'hover:text-blue-500'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      url: 'mailto:your.email@example.com',
      color: 'hover:text-red-500'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-[#0a0a0a] to-[#1a1a1a] border-t border-[#333] py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/2 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl text-[#00ff88] font-mono">Rizwan</span>
              <span className="text-xl text-white">Ullah</span>
            </div>
            <p className="text-[#b0b0b0] text-sm max-w-md">
              Building innovative solutions and crafting exceptional digital experiences through clean code and modern technologies.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`text-[#b0b0b0] text-2xl hover:text-[#00ff88] transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(0,255,136,0.3)] hover:scale-110 ${link.color}`}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#b0b0b0] text-sm text-center md:text-left">
            &copy; {currentYear} Rizwan Ullah. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[#666] text-sm">
            <span>Built with</span>
            <div className="flex gap-1">
              <span className="text-[#00ff88]">Next.js</span>
              <span>&</span>
              <span className="text-[#00ff88]">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}