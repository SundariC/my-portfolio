import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  // Mouse position state add panniyachu
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]"
    >
      {/* Background text - Mouse move logic added here */}
      <motion.h1
        style={{ 
          x: (mousePos.x - window.innerWidth / 2) * 0.05, // Horizontal movement
          y: (mousePos.y - window.innerHeight / 2) * 0.05, // Vertical movement
        }}
        className="absolute inset-0 flex items-center justify-center text-[18vw] font-black text-white/5 select-none pointer-events-none"
      >
        ABOUT
      </motion.h1>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-purple-400 tracking-[0.4em] text-sm mb-6 uppercase">
            WHO I AM
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-8 uppercase text-white">
            Passionate <br />
            <span className="text-purple-400">MERN Developer</span>
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-md font-medium">
            I build modern, scalable and visually refined web applications.
            I focus on clean architecture, smooth interactions and premium
            user experience.
          </p>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl">
            <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-widest text-sm">Core Focus</h3>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li>• Frontend Excellence</li>
              <li>• Backend Architecture</li>
              <li>• Performance & UX</li>
              <li>• Real-world MERN Apps</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}