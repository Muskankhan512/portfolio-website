import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <div className="bg-dot-pattern min-h-screen relative selection:bg-primary/30 selection:text-primary">
      {/* Social Sidebar (Desktop) */}
      <div className="hidden md:flex flex-col items-center fixed left-10 bottom-0 z-50 gap-6">
        <div className="flex flex-col gap-6 text-foreground/60 text-xl">
          <a href="https://github.com/Muskankhan512" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:-translate-y-1 transition-all">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/muskan-bano988746319" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:-translate-y-1 transition-all">
            <FiLinkedin />
          </a>
        </div>
        <div className="w-px h-24 bg-foreground/60 mt-2" />
      </div>

      {/* Email Sidebar (Desktop) */}
      <div className="hidden md:flex flex-col items-center fixed right-10 bottom-0 z-50 gap-6">
        <a 
          href="mailto:muskan0khan512@gmail.com" 
          className="hover:text-primary hover:-translate-y-1 transition-all font-mono text-sm tracking-widest text-foreground/60"
          style={{ writingMode: 'vertical-rl' }}
        >
          muskan0khan512@gmail.com
        </a>
        <div className="w-px h-24 bg-foreground/60 mt-2" />
      </div>

      <Navbar />
      
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
