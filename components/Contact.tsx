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

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const contactLinks = [
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rizwan-ullah-b74793290/',
      color: 'group-hover:text-blue-500'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      url: 'https://github.com/rizwanullah-dev',
      color: 'group-hover:text-white'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      url: 'mailto:rizwanullahicp0306@gmail.com',
      color: 'group-hover:text-[#00ff88]'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: false
    }));
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email),
      message: !formData.message.trim()
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      if (newErrors.email && formData.email.trim() !== '') {
        setSubmitError('Please enter a valid email address');
      } else {
        setSubmitError('Please fill in all fields');
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00ccff]/5 rounded-full blur-[120px] -z-10" />

      <div className="container">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-gradient-primary">Get In Touch</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Let&apos;s build something great together. I&apos;m currently open to full-stack engineering roles and freelance opportunities.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-[0.8fr,1.2fr] gap-12 lg:gap-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-white">Let&apos;s talk about everything!</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have a full-time opportunity, a freelance project, or just want to discuss web engineering, feel free to connect.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-xl flex items-center gap-4 group transition-all hover:border-[#00ff88]/30 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)] hover:-translate-y-0.5"
                >
                  <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-xl text-gray-500 transition-colors ${link.color}`}>
                    <i className={link.icon}></i>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">{link.label}</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#00ff88] transition-colors">Connect</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 sm:p-10 rounded-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-gray-500 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Rizwan Ullah"
                    className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:bg-white/10 transition-all ${errors.name
                        ? 'border-red-500/50 focus:border-red-500'
                        : 'border-white/10 focus:border-[#00ff88]/50'
                      }`}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-gray-500 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="rizwanullah@example.com"
                    className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:bg-white/10 transition-all ${errors.email
                        ? 'border-red-500/50 focus:border-red-500'
                        : 'border-white/10 focus:border-[#00ff88]/50'
                      }`}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-gray-500 uppercase tracking-wider">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className={`w-full p-4 bg-white/5 border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:bg-white/10 transition-all resize-none ${errors.message
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-white/10 focus:border-[#00ff88]/50'
                    }`}
                  required
                ></textarea>
              </div>

              {submitError && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm flex items-center gap-3">
                  <i className="fas fa-exclamation-circle" /> {submitError}
                </div>
              )}

              {submitSuccess && (
                <div className="p-4 bg-[#00ff88]/10 border border-[#00ff88]/50 rounded-xl text-[#00ff88] text-sm flex items-center gap-3">
                  <i className="fas fa-check-circle" /> Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className={`w-full group py-4 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${submitSuccess
                    ? 'bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)]'
                    : 'bg-[#00ff88] text-[#0a0a0a] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:-translate-y-0.5'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner animate-spin text-lg" />
                    <span>Sending...</span>
                  </>
                ) : submitSuccess ? (
                  <>
                    <i className="fas fa-check-circle text-lg animate-bounce" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-sm" />
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
