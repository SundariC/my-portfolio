import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";
import { FaGithub, FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

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
      title: "Online Counseling App • Completed",
      tech: " Technology Used: HTML • MongoDB • Express.js • React.js • Node.js • JWT • Socket.io • Tailwind CSS.",
      desc: "A comprehensive MERN stack application designed to provide holistic mental health support.",
      summary:
        " Integrated real-time messaging to facilitate immediate peer-to-peer or professional support sessions •  Implemented a secure payment gateway to manage consultation fees and service subscriptions. •  Developed robust REST APIs using Node.js/Express and secured user data using JWT authentication.",
      features: [
        "Real-time Chat • Appointment Booking • Secure JWT Auth • Payment Integration",
      ],
      image: Project1,
      frontend: "https://github.com/SundariC/MP-Frontend",
      backend: "https://github.com/SundariC/MP-Backend",
      live: "https://mp-frontend-lemon.vercel.app/",
    },
    {
      id: 2,
      title: "Culinary Cloud • Full Stack Recipe App",
      tech: "Technology Used: React.js • Node.js • Express.js • MongoDB • Cloudinary • Tailwind CSS • Axios.",
      desc: "A dynamic platform for food enthusiasts to discover, create, and manage their favorite culinary recipes with image upload capabilities.",
      summary:
        "Built a robust backend using Node.js and Express to handle complex CRUD operations for recipe management • Integrated Cloudinary API for high-performance image hosting and seamless media uploads • Engineered a responsive UI with Tailwind CSS, ensuring a consistent user experience across all devices.",
      features: [
        "CRUD Operations • Image Upload (Cloudinary) • Category Filtering • Search Functionality",
      ],
      image: Project2,
      frontend: "https://github.com/SundariC/RA-Frontend",
      backend: "https://github.com/SundariC/RA-Backend",
      live: "https://ra-frontend-eight.vercel.app",
    },
    {
      id: 3,
      title: "Movie Ticket Booking • In Progress",
      tech: "MERN Stack • Redux • Stripe",
      desc: "Real-time seat selection and secure payment integration.",
      summary:
        "Developing a seamless movie booking experience with live seat availability and payment gateway integration.",
      features: ["Seat Selection • Payment Integration • Email Confirmation"],
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000",
      frontend: "https://github.com/SundariC/MB-Frontend",
      backend: "https://github.com/SundariC/MB-Backend",
      live: "https://mb-frontend-rho.vercel.app",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Advanced Full Stack Development (MERN)",
      provider: "IIT-M Pravartak & GUVI",
      date: "Completed 2025",
      skills:
        "HTML • Tailwind • Advanced JavaScript • MongoDB • Express.js • React.js • Node.js • REST APIs",
      credentialLink:
        "https://drive.google.com/file/d/1MY-MDOoNhvkRZ4F7NhBOjhLa7UqS22j8/view?usp=sharing",
    },
  ];

  return (
    <section
      id="project"
      className="relative min-h-screen py-32 overflow-hidden bg-[#050505]"
    >
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

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="group relative flex flex-col md:flex-row items-center gap-8 p-4 md:p-8 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:border-[#7C3AED]/30 transition-all duration-500"
            >
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

              <div className="w-full md:w-3/5 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-[#7C3AED] transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-[#7C3AED] text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                    {project.tech}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium mb-4 max-w-md">
                    {project.desc}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed font-medium mb-4 max-w-md italic">
                    {project.summary}
                  </p>
                  <p className="text-gray-500 text-[10px] leading-relaxed font-medium max-w-md">
                    {project.features}
                  </p>
                </div>

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

        {/* --- CERTIFICATIONS SECTION (CENTERED & SPACED) --- */}
        <div className="mt-32 flex justify-center w-full"> 
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative p-8 rounded-[35px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-xl flex flex-col gap-5 hover:border-[#7C3AED]/50 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] transition-all duration-500 max-w-2xl w-full"
            >
              <div className="flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] text-3xl group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-500 shadow-inner">
                  <FaCertificate />
                </div>
                <span className="text-[10px] font-black text-white/30 tracking-widest uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  {cert.date}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                  {cert.title}
                </h3>
                <p className="text-[#7C3AED] text-[11px] font-black uppercase tracking-[0.2em]">
                  {cert.provider}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {cert.skills.split(" • ").map((skill, i) => (
                    <span key={i} className="text-[9px] font-bold text-gray-400 border border-white/10 px-3 py-1 rounded-md bg-white/5 group-hover:border-[#7C3AED]/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-6 border-t border-white/5 flex justify-end">
                <a href={cert.credentialLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 group/btn px-5 py-2 rounded-full bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-300 border border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-widest">Verify Credential</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
              <div className="absolute -z-10 inset-0 bg-[#7C3AED]/0 group-hover:bg-[#7C3AED]/5 rounded-[35px] blur-3xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}