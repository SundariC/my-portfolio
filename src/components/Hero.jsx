import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const { scrollY } = useScroll();
  const yScroll = useTransform(scrollY, [0, 300], [0, -80]);

  // Mouse Position Logic for Background Text & Glow
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center">
      
      {/* 1. Animated Background Text (Follows Mouse) */}
      <motion.div
        style={{ 
          y: yScroll,
          x: (mousePos.x - window.innerWidth / 2) * 0.05,
          rotateX: (mousePos.y - window.innerHeight / 2) * -0.01,
          rotateY: (mousePos.x - window.innerWidth / 2) * 0.01,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <h1 className="text-[22vw] font-black text-white/[0.03] uppercase tracking-tighter">
          Developer
        </h1>
      </motion.div>

      {/* 2. Interactive Cursor Glow Layer */}
      <div 
        className="fixed w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none z-0 hidden md:block"
        style={{ 
          left: mousePos.x - 300, 
          top: mousePos.y - 300,
          transition: 'left 0.2s ease-out, top 0.2s ease-out' 
        }}
      />

      {/* 3. Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        {/* LEFT CONTENT: Text & Typing */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* <span className="text-[#A78BFA] font-mono tracking-[0.4em] text-xs md:text-sm mb-6 block uppercase font-bold italic">
            // MERN Stack Architect 
          </span> */}

          <h1 className="text-7xl md:text-[9vw] font-black leading-[0.8] tracking-tighter mb-8 text-white uppercase">
            S<span className="text-[#7C3AED] italic drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]">UNDAR</span>I
          </h1>

          <div className="text-gray-400 text-xl md:text-2xl max-w-lg mb-12 font-medium leading-relaxed">
            Hi, I’m Sundari. I build modern, responsive, and <br className="hidden md:block"/>
            <span className="text-white border-b-2 border-[#7C3AED] pb-1 inline-block mt-2">
              <TypeAnimation
                sequence={[
                  'scalable web applications.', 2000,
                  'performance driven UIs.', 2000,
                  'full-stack solutions.', 2000
                ]}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mb-12">
            <button id="work" className="px-10 py-5 bg-[#7C3AED] text-white rounded-full text-xs font-black tracking-widest hover:scale-110 transition shadow-[0_0_40px_rgba(124,58,237,0.4)] uppercase">
              View Work
            </button>
            <button className="px-10 py-5 border border-white/20 rounded-full text-xs font-black tracking-widest hover:bg-white hover:text-black transition uppercase">
             Resume
            </button>
          </div>

          {/* Social Icons */}
          {/* <div className="flex gap-8 text-2xl text-white/30">
            <FaGithub className="hover:text-[#7C3AED] transition-all cursor-pointer hover:-translate-y-1" />
            <FaLinkedin className="hover:text-[#7C3AED] transition-all cursor-pointer hover:-translate-y-1" />
          </div> */}
        </motion.div>

        {/* RIGHT SIDE: Animated Avatar Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center mt-10 md:mt-0"
        >
          <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[480px] rounded-[50px] bg-gradient-to-br from-[#7C3AED]/20 to-black border border-white/10 backdrop-blur-3xl p-6">
            
            <div className="w-full h-full rounded-[40px] bg-[#030014] flex items-center justify-center overflow-hidden border border-white/5 shadow-inner group">
               {/* Grayscale Icon that glows on hover */}
               <span className="text-white/10 text-9xl group-hover:text-[#7C3AED]/30 transition-all duration-700 group-hover:scale-110">👩‍💻</span>
            </div>

            {/* FLOATING BADGES */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -right-6 bg-[#7C3AED] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_20px_40px_rgba(124,58,237,0.3)]"
            >
              MERN
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -bottom-6 -left-6 bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl"
            >
              Creative
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 4. Subtle Scroll Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>

    </section>
  );
}