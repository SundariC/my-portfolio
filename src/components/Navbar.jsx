import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Scroll pannumbothu navbar background and active link-ah mathura logic
  useEffect(() => {
    const handleScroll = () => {
      // Background blur change on scroll
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = ['about', 'skills', 'work', 'contact'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`fixed top-6 left-1/2 z-[100] w-[95%] md:w-fit min-w-[500px] transition-all duration-500 rounded-full flex justify-between items-center px-4 py-3 border ${
        scrolled ? 'bg-black/60 border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-white/5 border-white/5 backdrop-blur-md'
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2 pl-4">
        <div className="w-8 h-8 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)]">
          <span className="font-black italic text-white text-sm">S</span>
        </div>
      </div>

      {/* Nav Links (Desktop) */}
      <div className="hidden md:flex gap-2 mx-6">
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            className={`relative px-6 py-2 text-[10px] uppercase font-black tracking-[0.2em] transition-all duration-300 rounded-full ${
              activeSection === link.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {activeSection === link.id && (
              <motion.div 
                layoutId="nav-pill"
                className="absolute inset-0 bg-white/5 border border-white/10 rounded-full z-[-1]"
                transition={{ type: 'spring', duration: 0.6 }}
              />
            )}
            {link.name}
          </a>
        ))}
      </div>

      {/* Hire Me Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#7C3AED] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_10px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.5)] transition-all"
      >
        Hire Me
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;