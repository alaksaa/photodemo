import React from 'react';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              PhotonSpace
            </span>
            <p className="text-gray-400 mt-4 text-sm">
              Master Physics. Train Your Mind. Explore the Universe.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('courses')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Courses
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('mock-tests')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Mock Tests
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('question-bank')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Question Bank
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('discussions')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Discussions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('analytics')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Analytics
                </button>
              </li>
              <li>
                <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                  FAQ
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>contact@photonspace.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 PhotonSpace. All rights reserved. Built with passion for physics education.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;