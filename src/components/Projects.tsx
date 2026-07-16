"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    title: "AskAngel",
    description: "A production-grade AI chatbot with real-time streaming, JWT authentication, and LLM tool-calling. Integrated voice input, image/PDF analysis, AI image generation, and live web search. Built 12+ features including personas, bookmarks, and chat sharing with a responsive UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Groq API", "Tavily API"],
    github: "https://github.com/Muskankhan512/AskAngel",
    live: null,
    image: null,
  },
  {
    title: "Naaz Amusement",
    description: "A full-stack ticket booking platform for a multi-city amusement business, integrating Razorpay payments with automated QR-ticket generation. Features a location-based dynamic pricing system, admin panel, and a gate-scan verification system to prevent ticket misuse.",
    tech: ["Next.js", "React", "MongoDB", "Razorpay API", "Vercel"],
    github: "https://github.com/Muskankhan512/naaz-amusement-website",
    live: "https://naazamusement.com",
    image: "/naaz-amusement.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-2xl mr-2">// 03.</span>
            Some Things I've Built
          </h2>
          <div className="h-px bg-panel-border flex-1 max-w-xs" />
        </div>

        <div className="grid gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative grid md:grid-cols-12 items-center gap-8 group"
            >
              {/* Project Image */}
              <div className={`md:col-span-7 ${idx % 2 !== 0 ? 'md:order-2' : ''} h-full min-h-[300px] relative rounded-lg overflow-hidden bg-panel border border-panel-border group-hover:border-primary/50 transition-colors`}>
                 <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-20 pointer-events-none" />
                 {project.image ? (
                   <Image 
                     src={project.image}
                     alt={project.title}
                     fill
                     sizes="(max-width: 768px) 100vw, 60vw"
                     className="object-cover object-top mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 z-10"
                   />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-foreground/20 font-mono text-6xl z-10 relative">
                      &lt;{project.title.substring(0,2)} /&gt;
                   </div>
                 )}
              </div>

              {/* Project Info */}
              <div className={`md:col-span-5 ${idx % 2 !== 0 ? 'md:text-left md:order-1' : 'md:text-right'} z-20`}>
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-6 hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className={`bg-panel border border-panel-border p-6 rounded-lg shadow-xl mb-6 text-foreground/80 leading-relaxed ${idx % 2 !== 0 ? 'md:mr-[-50px]' : 'md:ml-[-50px]'} relative group-hover:border-primary/50 transition-colors`}>
                  {project.description}
                </div>

                <ul className={`flex flex-wrap gap-4 font-mono text-xs text-foreground/60 mb-6 ${idx % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center gap-4 ${idx % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary text-xl transition-colors">
                      <FiGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary text-xl transition-colors">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
