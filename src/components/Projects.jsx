import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
  { id: 1, title: "Next-Gen SaaS", tech: "MERN Stack", desc: "Premium dashboard architecture." },
  { id: 2, title: "E-Commerce Pro", tech: "React • Redux", desc: "High-performance shopping experience." },
  { id: 3, title: "AI Portfolio", tech: "Framer • Node", desc: "Interactive AI-driven user interface." },
];

  return (
    <section id="work" className="relative min-h-screen py-32 overflow-hidden bg-[#050505]">
      
      {/* 1. Background Text with Motion */}
      <motion.h1 
        style={{ 
          x: (mousePos.x - window.innerWidth / 2) * 0.05,
          y: (mousePos.y - window.innerHeight / 2) * 0.05,
        }}
        className="absolute inset-0 flex items-center justify-center text-[16vw] font-black text-white/5 select-none pointer-events-none uppercase tracking-tighter"
      >
        Projects
      </motion.h1>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[#7C3AED] font-mono tracking-[0.4em] text-xs uppercase mb-4 block font-bold">Concept Portfolio</span>
          <h2 className="text-5xl font-black uppercase text-white tracking-tighter">
            Featured <span className="text-[#7C3AED] italic">Work</span>
          </h2>
        </div>

        {/* 2. Compact Grid Layout (3 Columns) */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-2xl hover:border-[#7C3AED]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Status Badge */}
              <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="w-10 h-10 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] text-sm font-black italic">
                  0{project.id}
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-gray-500 font-black uppercase tracking-widest">
                  In Progress
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 font-medium">
                  {project.desc}
                </p>
                <div className="text-[#7C3AED] text-[10px] font-black uppercase tracking-widest">
                  {project.tech}
                </div>
              </div>

              {/* Subtle Arrow Icon */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-gray-600 font-bold uppercase group-hover:text-white transition-colors">Github Link</span>
                <span className="text-gray-600 group-hover:translate-x-1 group-hover:text-[#7C3AED] transition-all">→</span>
                <span className="text-[10px] text-gray-600 font-bold uppercase group-hover:text-white transition-colors">Deploy Link</span>
                <span className="text-gray-600 group-hover:translate-x-1 group-hover:text-[#7C3AED] transition-all">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}