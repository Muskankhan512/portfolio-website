"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary font-mono mb-4">// 04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-foreground/80 mb-12 leading-relaxed">
          Although I'm not currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <form className="bg-panel border border-panel-border p-8 rounded-lg shadow-xl text-left max-w-xl mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-mono text-foreground/80 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-[#1f2937] border border-panel-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-mono text-foreground/80 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#1f2937] border border-panel-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-mono text-foreground/80 mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-[#1f2937] border border-panel-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Hello..."
            />
          </div>
          <button
            type="button"
            className="w-full px-6 py-3 border border-primary text-primary font-semibold rounded hover:bg-primary/10 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              alert("This is a placeholder. For a real portfolio, connect this form to Formspree or EmailJS.");
            }}
          >
            Say Hello
          </button>
        </form>
      </motion.div>
    </section>
  );
}
