import React, { useState } from 'react';
import { playHoverSound, playClickSound, playCoinSound, playPowerUpSound } from '../utils/soundEffects';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    playClickSound();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "dc1cc774-427a-4055-ad6d-acd7be06ef2e", // Your API Key
          subject: "Portfolio Retro Contact",
          from_name: "Pixel Portfolio",
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        playPowerUpSound();
        setFormData({ name: '', email: '', message: '' });
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-green-500 font-terminal relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Monitor Frame */}
        <div className="bg-[#222] p-4 sm:p-8 rounded-xl border-t-8 border-l-8 border-gray-700 border-b-8 border-r-8 border-gray-800 shadow-2xl relative">
            
            {/* Screen */}
            <div className="bg-black p-6 sm:p-10 min-h-[500px] border-4 border-[#333] relative shadow-inner flex flex-col justify-center">
                
                <div className="mb-8 border-b border-green-800 pb-4">
                    <h2 className="font-pixel text-xl sm:text-3xl text-white mb-2">TERMINAL_CONTACT_UPLINK</h2>
                    <p className="text-green-600 flex items-center gap-2">
                       STATUS: {status === 'idle' ? 'AWAITING INPUT...' : status === 'sending' ? 'TRANSMITTING...' : status === 'success' ? 'DATA UPLOADED.' : 'CONNECTION ERROR.'}
                       <span className="animate-blink block w-2 h-4 bg-green-500"></span>
                    </p>
                </div>

                {status === 'success' ? (
                  <div className="flex-grow flex flex-col items-center justify-center text-center animate-pulse">
                    <div className="border-4 border-green-500 p-8 mb-4">
                      <h3 className="font-pixel text-2xl text-white mb-4">MISSION ACCOMPLISHED</h3>
                      <p className="font-terminal text-xl">MESSAGE TRANSMITTED SUCCESSFULLY.</p>
                      <p className="font-terminal text-sm mt-4 text-green-700">AUTO-RESET IN 5 SECONDS...</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-2 md:items-center">
                          <label htmlFor="name" className="whitespace-nowrap min-w-[100px] text-white opacity-80">&gt; ENTER NAME:</label>
                          <input 
                              type="text" 
                              id="name" 
                              name="name" 
                              value={formData.name}
                              onChange={handleChange}
                              required
                              disabled={status === 'sending'}
                              className="bg-transparent border-b-2 border-green-800 focus:border-green-400 text-green-400 w-full outline-none font-terminal text-xl py-1 px-2 disabled:opacity-50"
                              autoComplete="off"
                              onFocus={playHoverSound}
                          />
                      </div>

                      <div className="flex flex-col md:flex-row gap-2 md:items-center">
                          <label htmlFor="email" className="whitespace-nowrap min-w-[100px] text-white opacity-80">&gt; ENTER EMAIL:</label>
                          <input 
                              type="email" 
                              id="email" 
                              name="email" 
                              value={formData.email}
                              onChange={handleChange}
                              required
                              disabled={status === 'sending'}
                              className="bg-transparent border-b-2 border-green-800 focus:border-green-400 text-green-400 w-full outline-none font-terminal text-xl py-1 px-2 disabled:opacity-50"
                              autoComplete="off"
                              onFocus={playHoverSound}
                          />
                      </div>

                      <div className="flex flex-col gap-2">
                          <label htmlFor="message" className="text-white opacity-80">&gt; ENTER MESSAGE:</label>
                          <textarea 
                              id="message" 
                              name="message" 
                              value={formData.message}
                              onChange={handleChange}
                              required
                              disabled={status === 'sending'}
                              rows={5}
                              className="bg-[#0a0a0a] border-2 border-green-800 focus:border-green-400 text-green-400 w-full outline-none font-terminal text-xl p-4 mt-2 resize-none disabled:opacity-50"
                              onFocus={playHoverSound}
                          ></textarea>
                      </div>

                      <button 
                          type="submit" 
                          disabled={status === 'sending'}
                          className="mt-8 bg-green-700 text-black font-pixel text-sm px-8 py-4 hover:bg-green-500 hover:scale-105 transition-all w-full md:w-auto disabled:bg-gray-700 disabled:text-gray-400 disabled:hover:scale-100"
                          onMouseEnter={playHoverSound}
                      >
                          {status === 'sending' ? '[ TRANSMITTING... ]' : '[ TRANSMIT DATA ]'}
                      </button>
                  </form>
                )}

                <div className="mt-8 pt-4 border-t border-green-900 text-xs text-green-800 flex justify-between">
                    <span>ENCRYPTION: ENABLED</span>
                    <span>PORT: 8080</span>
                </div>
            </div>
        </div>

        {/* Monitor Stand */}
        <div className="w-1/3 h-12 bg-gray-800 mx-auto mt-0 border-l-8 border-r-8 border-gray-900"></div>
        <div className="w-1/2 h-4 bg-gray-800 mx-auto rounded-t-full"></div>

      </div>
    </section>
  );
};

export default Contact;