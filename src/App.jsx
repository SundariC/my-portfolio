import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import NetworkStatus from "./components/NetworkStatus";

export default function App() {
  return (
    <div className="bg-[#050505] text-white relative overflow-hidden">
      
      {/* Global UX */}
      <CustomCursor />
      <NetworkStatus />

      {/* Site sections */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
