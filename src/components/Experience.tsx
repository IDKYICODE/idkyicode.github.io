import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { playHoverSound } from '../utils/soundEffects';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Full Stack Development Intern",
      company: "Equax AI",
      location: "Hyderabad, Telangana",
      period: "Nov 2025 - Jan 2026",
      desc: "Schema designing and development of conversation management using Cassandra for Gen AI product.",
      tech: ["Cassandra", "Gen AI", "Schema Design"],
      icon: <Briefcase size={20} />
    },
    {
      role: "Full Stack Development Intern",
      company: "The Audience Street Inc",
      location: "Hyderabad, Telangana",
      period: "Jan 2025 - Mar 2025",
      desc: "Created and deployed full-stack applications using MERN Stack. Developed responsive web applications.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      icon: <Briefcase size={20} />
    },
    {
      role: "Bachelor of Technology",
      company: "Gokaraju Rangaraju Institute",
      location: "CSE Department",
      period: "2022 - 2026",
      desc: "CGPA: 8.8. Focused on Full Stack Development, Machine Learning, and AI technologies.",
      tech: ["Computer Science", "AI/ML", "Data Structures"],
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#f0f0f0] text-black relative overflow-hidden">
       {/* Graph Paper Background */}
       <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
       }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Responsive Heading - Removed absolute transform centering */}
        <div className="text-center mb-16">
            <h2 className="font-pixel text-2xl sm:text-3xl md:text-5xl text-black uppercase border-b-4 border-black inline-block pb-4 break-words max-w-full">
              Experience_Log
            </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-6 relative group"
              onMouseEnter={playHoverSound}
            >
              
              {/* Icon Box - Hidden on mobile, visible on medium screens+ */}
              <div className="hidden md:flex flex-col items-center">
                 <div className="w-16 h-16 bg-black text-white flex items-center justify-center border-4 border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,0.3)] z-10 shrink-0">
                    {exp.icon}
                 </div>
                 {index !== experiences.length - 1 && (
                    <div className="w-2 bg-black flex-grow mt-2 opacity-20 group-hover:opacity-100 transition-opacity"></div>
                 )}
              </div>

              {/* Content Card */}
              <div className="flex-1 w-full">
                <div className="bg-white border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 w-full">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 border-b-2 border-dashed border-gray-300 pb-2">
                        <div>
                            <h3 className="font-pixel text-sm md:text-base leading-snug mb-1 uppercase break-words">{exp.role}</h3>
                            <h4 className="font-terminal text-lg sm:text-xl text-gray-600 font-bold">{exp.company}</h4>
                        </div>
                        <div className="font-pixel text-[10px] text-white bg-black px-2 py-1 mt-2 md:mt-0 inline-block text-center self-start md:self-auto">
                            {exp.period}
                        </div>
                    </div>
                    
                    <p className="font-terminal text-base sm:text-lg mb-4 text-gray-800">
                        {exp.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {exp.tech.map(t => (
                            <span key={t} className="px-2 py-1 border-2 border-black font-terminal font-bold text-xs sm:text-sm hover:bg-black hover:text-white transition-colors">
                                #{t}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;