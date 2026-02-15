import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { playHoverSound, playClickSound, playTypeSound, playPowerUpSound } from '../utils/soundEffects';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "INITIALIZING PORTFOLIO... LOADING PROJECTS... WELCOME, USER.";
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      // Randomly play type sound to mimic keyboard clatter
      if (Math.random() > 0.5) playTypeSound(); 
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative pt-20 pb-10">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 text-center flex-grow flex flex-col justify-center">
        {/* Terminal Loading Text */}
        <div className="font-pixel text-xs sm:text-sm md:text-base text-retro-green mb-8 h-12">
          <span className="mr-2">&gt;</span>
          {text}
          <span className="animate-blink">_</span>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-1000 transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block border-4 border-white p-2 mb-6 bg-black">
            <h1 className="font-pixel text-3xl sm:text-5xl md:text-7xl leading-tight bg-white text-black p-4">
              AYUSH SINGH
            </h1>
          </div>
          
          <h2 className="font-terminal text-2xl sm:text-3xl md:text-4xl text-gray-400 mb-8 uppercase tracking-widest">
            Full Stack Developer <span className="text-retro-green">&amp;</span> AI Enthusiast
          </h2>

          <p className="max-w-2xl mx-auto font-terminal text-xl text-gray-300 mb-12 leading-relaxed">
            Specializing in immersive web experiences, immersive WebXR environments, and innovative AI solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#projects" 
              className="group relative inline-block"
              onMouseEnter={playHoverSound}
              onClick={playPowerUpSound}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white translate-x-2 translate-y-2"></div>
              <div className="relative border-2 border-white bg-retro-green text-black px-8 py-4 font-pixel text-xs sm:text-sm hover:-translate-y-1 hover:translate-x-1 transition-transform flex items-center gap-2">
                [ VIEW WORK ]
              </div>
            </a>

            <a 
              href="#contact" 
              className="group relative inline-block"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gray-700 translate-x-2 translate-y-2"></div>
              <div className="relative border-2 border-gray-700 bg-black text-white px-8 py-4 font-pixel text-xs sm:text-sm hover:-translate-y-1 hover:translate-x-1 transition-transform flex items-center gap-2">
                CONTACT ME <ArrowRight size={14} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Now relative to flow but pushed to bottom */}
      <div className={`mt-16 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
         <div className="font-pixel text-[10px] text-gray-500 animate-bounce text-center">
           SCROLL_DOWN
           <div className="mt-2 w-4 h-4 border-r-2 border-b-2 border-gray-500 rotate-45 mx-auto"></div>
         </div>
      </div>
    </section>
  );
};

export default Hero;