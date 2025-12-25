import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse move logic for background "CONNECT" text
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setShowSuccess(true);
      setEmail("");
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#050505] py-24 border-t border-white/5 overflow-hidden">
      
      {/* 1. Background Motion Text (Connect) */}
      <motion.h1 
        style={{ 
          x: (mousePos.x - window.innerWidth / 2) * 0.05,
          y: (mousePos.y - window.innerHeight / 2) * 0.05,
        }}
        className="absolute inset-0 flex items-center justify-center text-[20vw] font-black text-white/[0.02] select-none uppercase tracking-tighter pointer-events-none"
      >
        Connect
      </motion.h1>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side: Text & Navbar Links */}
          <div className="text-left">
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-8 leading-none">
              READY TO <br /> <span className="text-[#7C3AED] italic text-glow">COLLABORATE?</span>
            </h3>
            
            {/* Quick Links (Navbar items) */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
              {["Home", "About", "Skills", "Work"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-[#7C3AED] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Real Social Icons */}
            <div className="flex gap-6 text-2xl text-white/20">
              <a href="#" className="hover:text-[#7C3AED] transition-all hover:-translate-y-1"><FaGithub /></a>
              <a href="#" className="hover:text-[#7C3AED] transition-all hover:-translate-y-1"><FaLinkedin /></a>
              <a href="#" className="hover:text-[#7C3AED] transition-all hover:-translate-y-1"><FaInstagram /></a>
              <a href="#" className="hover:text-[#7C3AED] transition-all hover:-translate-y-1"><FaTwitter /></a>
            </div>
          </div>

          {/* Right Side: Glassmorphism Form */}
          <div className="relative">
            <div className="p-8 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-3xl">
              <p className="text-gray-400 text-sm mb-6 font-medium">Have a project in mind? Drop your mail below.</p>
              <form onSubmit={handleSend} className="relative flex flex-col gap-4">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-sm text-white outline-none focus:border-[#7C3AED]/50 transition-all"
                />
                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-[#7C3AED] text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg hover:bg-[#6D28D9] transition-all disabled:opacity-50"
                >
                  {isSending ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
       {/* --- BACK TO TOP ADDED HERE --- */}
       <div className="mt-20 flex justify-center">
            <motion.div 
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              {/* <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center relative group-hover:border-[#7C3AED]/50 transition-all">
                <span className="text-white text-lg group-hover:text-[#7C3AED]">↑</span>
              </div> */}
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-600 group-hover:text-white transition-colors">
                Back to Top
              </span>
            </motion.div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600">
          <p className="text-[10px] font-mono uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Sundari — Developer Portfolio
          </p>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest">
            {/* Social Links... */}
          </div>
        </div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50 }}
            className="fixed bottom-10 right-6 z-[10000]"
          >
            <div className="bg-[#0B0B0F]/90 border border-[#7C3AED]/40 p-5 rounded-3xl shadow-[0_20px_50px_rgba(124,58,237,0.2)] flex items-center gap-4 backdrop-blur-2xl">
              <div className="bg-[#7C3AED] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(124,58,237,0.5)]">✓</div>
              <div className="text-left leading-none">
                <p className="text-white font-black text-xs uppercase tracking-widest">Mail Sent Successfully</p>
                <p className="text-gray-500 text-[9px] mt-1 font-bold uppercase tracking-tighter">Sundari will reach out soon!</p>
              </div>
            </div>
          </motion.div>
          
        )}
      </AnimatePresence>
         
    </footer>
  );
}