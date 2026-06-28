'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { particlesConfig } from './lib/particles-config';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

interface WindowWithParticles {
  particlesJS?: (id: string, config: unknown) => void;
}

export default function Home() {
  useEffect(() => {
    const win = window as unknown as WindowWithParticles;
    if (typeof window !== 'undefined' && win.particlesJS) {
      win.particlesJS('particles-js', particlesConfig);
    }
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}