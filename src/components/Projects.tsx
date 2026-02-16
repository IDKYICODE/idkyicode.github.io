import React from 'react';
import { ExternalLink } from 'lucide-react';
import { playHoverSound, playClickSound, playCoinSound } from '../utils/soundEffects';

// IMPORT YOUR LOCAL IMAGES HERE
// Make sure these paths match your actual project structure
import vrEducationImg from '../assets/GURUKUL.jpeg'; 
import aiInterviewerImg from '../assets/interview.png';
import gazeKeyboardImg from '../assets/gaze.png';
import essayGraderImg from '../assets/essay_grading.png';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  type: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "VR Education Platform GURUKUL",
    type: "WEBXR APP",
    description: "Virtual Reality environments using WebXR with AI-assisted chatbot integrated classroom and blockchain backend.",
    tags: ["WebXR", "AI Chatbot", "Blockchain"],
    image: vrEducationImg, // Used local import
    link: "https://github.com/IDKYICODE/YOUR_REPO_NAME"
  },
  {
    id: 2,
    title: "AI Interviewer",
    type: "AI SYSTEM",
    description: "AI-based interview platform with real-time Microsoft Teams integration and ElevenLabs text-to-speech capabilities.",
    tags: ["AI/ML", "MS Teams", "ElevenLabs"],
    image: aiInterviewerImg, // Used local import
    link: "https://github.com/IDKYICODE/interview-system"
  },
  {
    id: 3,
    title: "Gaze Keyboard",
    type: "COMPUTER VISION",
    description: "Virtual keyboard tracking user's gaze movement to navigate keys and select upon blinking using computer vision.",
    tags: ["OpenCV", "Python", "Computer Vision"],
    image: gazeKeyboardImg, // Used local import
    link: "https://github.com/IDKYICODE/Gaze-based-Keyboard"
  },
  {
    id: 4,
    title: "Essay Grader",
    type: "NLP MODEL",
    description: "Automatic essay grading utilizing neural networks to evaluate essays based on vocabulary and grammar analysis.",
    tags: ["Neural Networks", "TensorFlow", "NLP"],
    image: essayGraderImg, // Used local import
    link: "https://github.com/IDKYICODE/YOUR_REPO_NAME"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#151515] relative border-t-4 border-black">
        {/* Brick Pattern Background */}
        <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(335deg, rgba(255,255,255,0.1) 23px, transparent 23px),
            linear-gradient(155deg, rgba(255,255,255,0.1) 23px, transparent 23px),
            linear-gradient(335deg, rgba(255,255,255,0.1) 23px, transparent 23px),
            linear-gradient(155deg, rgba(255,255,255,0.1) 23px, transparent 23px)`,
            backgroundSize: '58px 58px',
            backgroundColor: '#111',
            backgroundPosition: '0px 2px, 4px 35px, 29px 31px, 34px 6px'
        }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-3xl md:text-5xl text-white mb-4 shadow-white drop-shadow-md">
            PROJECT ARCADE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative"
              onMouseEnter={playHoverSound}
            >
               {/* Cabinet/Card Shape */}
               <div className="absolute -inset-2 bg-gray-800 rounded-none transform translate-x-2 translate-y-2"></div>
               <div className="relative bg-[#222] border-4 border-white p-2 h-full flex flex-col">
                 
                 {/* Header Strip */}
                 <div className="bg-black text-retro-green font-pixel text-[10px] p-2 flex justify-between items-center mb-2 border-b-2 border-gray-700">
                   <span>GAME: {project.title.toUpperCase()}</span>
                   <span>TYPE: {project.type}</span>
                 </div>

                 {/* Screen/Image */}
                 <div className="relative aspect-video overflow-hidden border-4 border-black mb-4 group-hover:border-retro-green transition-colors">
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                   />
                   <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-all flex items-center justify-center">
                       <span className="font-pixel text-white text-xs opacity-100 group-hover:opacity-0 transition-opacity">
                           [ LOCKED ]
                       </span>
                   </div>
                 </div>

                 {/* Description */}
                 <div className="flex-grow p-4 bg-[#1a1a1a]">
                   <p className="font-terminal text-lg text-gray-300 mb-4 h-20 overflow-hidden">
                       {project.description}
                   </p>
                   <div className="flex flex-wrap gap-2 mb-6">
                       {project.tags.map(tag => (
                           <span key={tag} className="px-2 py-1 bg-gray-800 border border-gray-600 text-retro-green font-pixel text-[8px] uppercase">
                               {tag}
                           </span>
                       ))}
                   </div>
                 </div>

                 {/* Buttons */}
                 <div className="mt-auto p-2 flex justify-between items-center bg-black border-t-2 border-gray-700">
                     <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-red-600 border-b-4 border-red-800 active:border-b-0 active:translate-y-1" onClick={playClickSound}></div>
                        <div className="w-8 h-8 rounded-full bg-blue-600 border-b-4 border-blue-800 active:border-b-0 active:translate-y-1" onClick={playClickSound}></div>
                     </div>
                     <a 
                       href={project.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="font-pixel text-[10px] text-white hover:text-retro-green flex items-center gap-2"
                       onClick={playCoinSound}
                       onMouseEnter={playHoverSound}
                     >
                       START GAME <ExternalLink size={12} />
                     </a>
                 </div>

               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;