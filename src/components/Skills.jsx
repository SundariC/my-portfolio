import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Express", level: 70 },
  { name: "Tailwindcss", level: 80 },
  { name: "Postman", level: 90 },
  { name: "MongoDB", level: 70 },
  { name: "Git", level: 90 },
];

export default function Skills() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="skills" className="relative min-h-screen py-40 overflow-hidden bg-[#050505]">
      
      {/* 1. Background Text with Mouse Motion */}
      <motion.h1 
        style={{ 
          x: (mousePos.x - window.innerWidth / 2) * 0.05,
          y: (mousePos.y - window.innerHeight / 2) * 0.05,
        }}
        className="absolute inset-0 flex items-center justify-center text-[18vw] font-black text-white/5 select-none pointer-events-none uppercase"
      >
        SKILLS
      </motion.h1>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-black mb-20 uppercase tracking-tighter"
        >
          <span className="text-[#7C3AED]">Technical</span> Strength
        </motion.h2>

        {/* 2. Grid Layout: Left 3 | Right 3 */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover="hover"
              key={skill.name}
              className="relative p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#7C3AED]/50 transition-colors"
            >
              <div className="flex justify-between mb-4 items-center">
                <h3 className="font-black uppercase tracking-widest text-xs text-gray-300">{skill.name}</h3>
                <motion.span
                  variants={{
                    hover: { opacity: 1, scale: 1.1 },
                  }}
                  initial={{ opacity: 0.5 }}
                  className="text-[#7C3AED] font-mono text-sm font-bold"
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  variants={{
                    hover: { width: `${skill.level}%` },
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}