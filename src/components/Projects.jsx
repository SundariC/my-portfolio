import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.jpg"
// import Project2 from "../assets/Project2.jpg"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
  { 
    id: 1, 
    title: "Online Counseling App", 
    tech: "React • Node.js • MongoDB", 
    desc: "A secure platform for online mental health support and sessions.",
    summary: "Built a full-stack mental health platform that connects therapists with patients, ensuring end-to-end encryption for privacy.",
    features: ["Real-time Chat • Appointment Booking • Secure JWT Auth"],
    image: Project1,
    frontend: "https://github.com/SundariC/MP-Frontend",
    backend: "https://github.com/SundariC/MP-Backend",
    live: "https://mp-backend-1-82km.onrender.com/"
  },
  { 
    id: 2, 
    title: "Movie Ticket Booking • In Progress", 
    tech: "MERN Stack • Redux • Stripe", 
    desc: "Real-time seat selection and secure payment integration.",
    summary: "Developing a seamless movie booking experience with live seat availability and payment gateway integration.",
    features: ["Seat Selection • Payment Integration • Email Confirmation"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000",
    frontend: "#",
    backend: "#",
    live: "#"
  }
];

  return (
    <section id="project" className="relative min-h-screen py-32 overflow-hidden bg-[#050505]">
      
      {/* Background Text */}
      <motion.h1 
        style={{ 
          x: (mousePos.x - window.innerWidth / 2) * 0.05,
          y: (mousePos.y - window.innerHeight / 2) * 0.05,
        }}
        className="absolute inset-0 flex items-center justify-center text-[16vw] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter"
      >
        Projects
      </motion.h1>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-black uppercase text-white tracking-tighter">
            Featured <span className="text-[#7C3AED] italic text-glow">Work</span>
          </h2>
        </div>

        {/* Vertical Stack of Horizontal Cards */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="group relative flex flex-col md:flex-row items-center gap-8 p-4 md:p-8 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:border-[#7C3AED]/30 transition-all duration-500"
            >
              {/* Left Side: Image */}
              <div className="w-full md:w-2/5 h-64 overflow-hidden rounded-[30px] border border-white/10 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white text-xs font-black italic shadow-lg">
                  0{project.id}
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-3/5 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-[#7C3AED] transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-[#7C3AED] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    {project.tech}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium mb-8 max-w-md">
                    {project.desc}
                  </p>
                   <p className="text-gray-400 text-sm leading-relaxed font-medium mb-8 max-w-md">
                    {project.summary}
                  </p>
                   <p className="text-gray-400 text-sm leading-relaxed font-medium mb-8 max-w-md">
                    {project.features}
                  </p>
                </div>

                {/* Horizontal Links */}
                <div className="flex items-center gap-8 pt-6 border-t border-white/5">
                  <a href={project.frontend} target="_blank" rel="noreferrer" className="flex items-center gap-2 group/link">
                    <FaGithub className="text-gray-600 group-hover/link:text-[#7C3AED] transition-colors" />
                    <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest group-hover/link:text-white">Frontend</span>
                  </a>
                  
                  <a href={project.backend} target="_blank" rel="noreferrer" className="flex items-center gap-2 group/link">
                    <FaGithub className="text-gray-600 group-hover/link:text-[#7C3AED] transition-colors" />
                    <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest group-hover/link:text-white">Backend</span>
                  </a>

                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 group/link">
                    <FaExternalLinkAlt className="text-gray-600 group-hover/link:text-[#7C3AED] transition-colors text-[10px]" />
                    <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest group-hover/link:text-white">Live Link</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}