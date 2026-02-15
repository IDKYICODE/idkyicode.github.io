import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Gamepad2, Briefcase, Cpu, Mail } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { playHoverSound, playClickSound } from './utils/soundEffects';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#hero', icon: <Terminal size={16} /> },
    { name: 'PROJECTS', href: '#projects', icon: <Gamepad2 size={16} /> },
    { name: 'EXPERIENCE', href: '#experience', icon: <Briefcase size={16} /> },
    { name: 'SKILLS', href: '#skills', icon: <Cpu size={16} /> },
    { name: 'CONTACT', href: '#contact', icon: <Mail size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white font-terminal selection:bg-retro-green selection:text-black relative overflow-x-hidden">
      {/* CRT Overlay Effect */}
      <div className="fixed inset-0 crt-overlay z-[100] pointer-events-none h-screen w-screen"></div>
      <div className="fixed inset-0 scanline z-[99] pointer-events-none"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-2 ${scrolled ? 'bg-[#000]/90 border-retro-green py-2' : 'bg-transparent border-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div 
              className="font-pixel text-sm sm:text-base lg:text-lg text-white hover:text-retro-green cursor-pointer transition-colors"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span className="text-retro-green">&gt;</span> AYUSH_SINGH
              <span className="animate-blink">_</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-pixel text-[10px] lg:text-xs hover:text-retro-green transition-colors flex items-center gap-2 group"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-retro-green">[</span>
                  {item.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-retro-green">]</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-retro-green"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                playClickSound();
              }}
              onMouseEnter={playHoverSound}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b-2 border-white absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-4 font-pixel text-xs hover:bg-white hover:text-black transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    playClickSound();
                  }}
                  onMouseEnter={playHoverSound}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-retro-green py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-terminal text-xl text-gray-400">
            © {new Date().getFullYear()} Ayush Singh. <span className="text-retro-green">ALL RIGHTS RESERVED.</span>
          </p>
          <p className="font-pixel text-[10px] mt-4 text-gray-600">
            BUILT WITH REACT_OS v18.0
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;