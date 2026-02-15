import React from 'react';
import { Cpu, Database, Layout } from 'lucide-react';
import { playHoverSound } from '../utils/soundEffects';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      icon: <Layout className="w-8 h-8 mb-4 text-yellow-400" />,
      skills: [
        "React", "Next.js", "Tailwind CSS", "Three.js", "WebXR", "TypeScript"
      ]
    },
    {
      title: "BACKEND",
      icon: <Database className="w-8 h-8 mb-4 text-blue-400" />,
      skills: [
        "Node.js", "Express", "MongoDB", "Cassandra", "SQL", "REST APIs"
      ]
    },
    {
      title: "AI / ML",
      icon: <Cpu className="w-8 h-8 mb-4 text-purple-400" />,
      skills: [
        "Python", "TensorFlow", "OpenCV", "Gen AI"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#222] text-white border-t-4 border-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(#4ade80 2px, transparent 2px)', 
            backgroundSize: '30px 30px' 
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block border-4 border-white bg-blue-800 px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
            <h2 className="font-pixel text-2xl sm:text-4xl text-white drop-shadow-md">
              TECH LOADOUT
            </h2>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-black border-4 border-gray-600 p-2 shadow-[8px_8px_0_0_#000] hover:translate-y-[-4px] transition-transform duration-300"
              onMouseEnter={playHoverSound}
            >
               <div className="border-2 border-dashed border-gray-700 p-6 h-full bg-[#111] relative flex flex-col items-center">
                  
                  {/* Category Title */}
                  <div className="flex flex-col items-center mb-6 border-b-2 border-gray-800 pb-4 w-full">
                     {category.icon}
                     <h3 className="font-pixel text-sm sm:text-base text-center text-retro-green tracking-wider">
                        {category.title}
                     </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap justify-center gap-3 w-full">
                    {category.skills.map((skill) => (
                      <span key={skill} className="font-terminal text-lg px-3 py-2 bg-gray-900 border border-gray-600 text-gray-300 hover:bg-retro-green hover:text-black hover:border-retro-green transition-all cursor-default shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>

               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;