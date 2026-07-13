"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Java Programming",
    issuer: "NPTEL, IIT Kharagpur",
  },
  {
    title: "Database Management Systems",
    issuer: "NPTEL, IIT Kharagpur",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL, IIT Kharagpur",
  },
  {
    title: "C and C++ Programming",
    issuer: "IIT Bombay (Spoken Tutorial Project)",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-2xl mr-2">//</span>
            Certifications
          </h2>
          <div className="h-px bg-panel-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-panel border border-panel-border p-6 rounded-lg hover:border-secondary transition-colors flex flex-col items-start group"
            >
              <div className="text-3xl text-primary mb-4 group-hover:text-secondary transition-colors">
                <FaCertificate />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="font-mono text-sm text-foreground/60 mt-auto border-t border-panel-border pt-4 w-full">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
