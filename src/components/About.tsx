"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-2xl mr-2">// 01.</span>
            About Me
          </h2>
          <div className="h-px bg-panel-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-foreground/80 leading-relaxed text-lg">
          <div>
            <p className="mb-6">
              Hello! My name is Muskan, and I enjoy creating things that live on the internet. 
              My interest in backend development started when I realized the power of robust 
              data handling and seamless server-side processing.
            </p>
            <p className="mb-6">
              Fast-forward to today, and I am pursuing my B.Tech in Computer Science at 
              <span className="text-primary"> Arya College of Engineering, Jaipur </span> 
              (2023–2027) with a stellar CGPA of 9.10. My primary focus is building accessible, 
              inclusive products and scalable digital experiences.
            </p>
            <p>
              I also have hands-on experience working as a freelance web developer, creating 
              business websites that integrate complex features like payment gateways and 
              location-based pricing models.
            </p>
          </div>
          
          <div className="relative group w-full max-w-sm mx-auto md:mx-0">
            {/* Image Placeholder or styling element */}
            <div className="relative z-10 w-full aspect-square bg-panel rounded-lg border-2 border-primary overflow-hidden hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300">
               <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-20" />
               <Image
                 src="/muskan.jpg"
                 alt="Muskan Bano"
                 fill
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-cover object-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
               />
            </div>
            {/* Shadow decoration */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-lg z-0 transition-transform duration-300 group-hover:translate-y-2 group-hover:translate-x-2" />
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-4">
            Education Timeline
            <div className="h-px bg-panel-border flex-1" />
          </h3>
          <div className="relative border-l border-panel-border ml-3 md:ml-4 space-y-10">
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full left-[-8.5px] top-1.5 ring-4 ring-background" />
              <p className="font-mono text-sm text-secondary mb-1">2023 - 2027</p>
              <h4 className="text-xl font-bold text-foreground mb-1">B.Tech Computer Science</h4>
              <p className="text-foreground/80 mb-2">Arya College of Engineering, Jaipur</p>
              <p className="text-primary font-mono text-sm">CGPA: 9.10/10</p>
            </div>
            <div className="relative pl-8 group hover:-translate-y-1 transition-transform">
              <div className="absolute w-3 h-3 bg-panel-border group-hover:bg-secondary transition-colors rounded-full left-[-6.5px] top-1.5 ring-4 ring-background" />
              <p className="font-mono text-sm text-secondary mb-1">2022</p>
              <h4 className="text-lg font-bold text-foreground mb-1">Senior Secondary (Class XII), Science</h4>
              <p className="text-foreground/80 mb-2">UP Board</p>
              <p className="text-primary font-mono text-sm">Score: 73.00%</p>
            </div>
            <div className="relative pl-8 group hover:-translate-y-1 transition-transform">
              <div className="absolute w-3 h-3 bg-panel-border group-hover:bg-secondary transition-colors rounded-full left-[-6.5px] top-1.5 ring-4 ring-background" />
              <h4 className="text-lg font-bold text-foreground mb-1">Secondary (Class X)</h4>
              <p className="text-foreground/80 mb-2">UP Board</p>
              <p className="text-primary font-mono text-sm">Score: 79.50%</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
