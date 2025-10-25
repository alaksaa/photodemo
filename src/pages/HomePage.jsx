import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import QuestionBank from '@/components/QuestionBank';
import MockTests from '@/components/MockTests';
import Discussions from '@/components/Discussions';
import MemoryTraining from '@/components/MemoryTraining';
import Analytics from '@/components/Analytics';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'courses', 'question-bank', 'mock-tests', 'discussions', 'memory-training', 'analytics', 'about'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>PhotonSpace - Master Physics. Train Your Mind. Explore the Universe.</title>
        <meta name="description" content="Advanced physics learning platform with interactive courses, question banks, mock tests, and brain training exercises for physics students." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        <ParticleBackground />
        <Navigation activeSection={activeSection} isHomePage={true} />
        
        <main>
          <Hero />
          <Courses />
          <QuestionBank />
          <MockTests />
          <Discussions />
          <MemoryTraining />
          <Analytics />
          <About />
          <Newsletter />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;