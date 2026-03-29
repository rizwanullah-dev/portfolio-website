'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const contactLinks = [
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rizwan-ullah-b74793290/',
      color: 'hover:text-blue-500'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      url: 'https://github.com/Rizwan2005khan',
      color: 'hover:text-gray-300'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-12 text-center">
          <span className="text-[#00ff88] font-mono"></span> Get In Touch
        </h2>
        
        <div ref={ref} className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-[#00ff88]">Let's Connect</h3>
            <p className="text-lg text-[#b0b0b0] mb-4 leading-relaxed">
              I'm always interested in collaborating on interesting projects, 
              speaking at events, or helping developers level up their skills.
            </p>
            
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 text-[#b0b0b0] p-4 bg-[#1a1a1a] border border-[#333] rounded-lg hover:text-[#00ff88] hover:border-[#00ff88] hover:translate-x-2 transition-all duration-300 group ${link.color}`}
                >
                  <i className={`${link.icon} text-2xl w-8 text-center`}></i>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-4">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-[#0a0a0a] border border-[#333] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all duration-300"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-[#0a0a0a] border border-[#333] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all duration-300"
                />
              </div>
              
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-[#0a0a0a] border border-[#333] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all duration-300 resize-none"
                ></textarea>
              </div>
              
              {submitError && (
                <div className="p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-300 text-sm">
                  {submitError}
                </div>
              )}
              
              {submitSuccess && (
                <div className="p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-[#0a0a0a] font-semibold rounded-lg shadow-[0_4px_15px_rgba(0,255,136,0.3)] hover:shadow-[0_8px_25px_rgba(0,255,136,0.5)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}