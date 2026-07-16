"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaCode } from "react-icons/fa";

export default function Achievements() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-2xl mr-2">//</span>
            Achievements
          </h2>
          <div className="h-px bg-panel-border flex-1 max-w-xs" />
        </div>

        <div className="grid gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-panel border border-panel-border p-8 rounded-lg flex items-start gap-6 hover:border-secondary transition-colors"
          >
            <div className="text-4xl text-secondary flex-shrink-0 pt-1">
              <FaTrophy />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">1st Place at Build CUSTOM Hackathon</h3>
              <p className="text-primary font-mono text-sm mb-4">Team Skyline</p>
              <p className="text-foreground/80 leading-relaxed">
                Demonstrated strong problem-solving skills and teamwork by developing an innovative solution 
                under strict time constraints. Successfully presented the project to a panel of judges, 
                securing the first-place victory.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-panel border border-panel-border p-8 rounded-lg flex items-start gap-6 hover:border-secondary transition-colors"
          >
            <div className="text-4xl text-secondary flex-shrink-0 pt-1">
              <FaAward />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Academic Excellence</h3>
              <p className="text-primary font-mono text-sm mb-4">CGPA: 9.10/10</p>
              <p className="text-foreground/80 leading-relaxed">
                Consistently ranked among the top performers across the B.Tech Computer Science program, 
                demonstrating a strong grasp of core theoretical concepts and their practical applications.
              </p>
            </div>
          </motion.div>


        </div>
      </motion.div>
    </section>
  );
}
