"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["B.Tech CSE Student", "MERN Stack Developer", "Freelance Web Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 50);
      }
    } else {
      if (displayText === currentRole) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Muskan Bano.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground/60 mb-6 h-[1.2em]">
            I am a <span className="text-secondary">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-foreground/80 max-w-xl mb-8 leading-relaxed text-lg">
            I'm a computer science student passionate about building full-stack web applications using the MERN stack, with a strong foundation in Java as well. Currently studying at Arya College of Engineering, Jaipur.
          </p>
          
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-[#0a0e14] font-semibold rounded hover:bg-primary-dark transition-colors"
            >
              Check out my work!
            </a>
            <a
              href="/Muskan_Bano_Resume.pdf"
              download="Muskan_Bano_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-secondary text-secondary font-semibold rounded hover:bg-secondary/10 transition-colors"
            >
              Get Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          {/* Decorative glowing blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[80px]" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/20 rounded-full blur-[80px]" />
          
          {/* Terminal / Code Card */}
          <div className="relative bg-panel border border-panel-border rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-[#1f2937] px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 font-mono text-xs text-foreground/60">Muskan.js</span>
            </div>
            <div className="p-6 font-mono text-sm sm:text-base overflow-x-auto text-foreground/80">
              <pre>
                <code className="language-javascript">
                  <span className="text-secondary">const</span> <span className="text-primary">developer</span> = {'{\n'}
                  {'  '}name: <span className="text-green-400">"Muskan Bano"</span>,\n
                  {'  '}role: <span className="text-green-400">"MERN Stack Developer"</span>,\n
                  {'  '}skills: [<span className="text-green-400">"MongoDB"</span>, <span className="text-green-400">"Express"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"Node.js"</span>],\n
                  {'  '}<span className="text-blue-400">buildFuture</span>: <span className="text-secondary">function</span>() {'{\n'}
                  {'    '}console.<span className="text-blue-400">log</span>(<span className="text-green-400">"Crafting digital experiences..."</span>);\n
                  {'  '}{'}\n'}
                  {'}'};
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
