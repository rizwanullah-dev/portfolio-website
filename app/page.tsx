'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { particlesConfig } from './lib/particles-config';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).particlesJS) {
      (window as any).particlesJS('particles-js', particlesConfig);
    }
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}