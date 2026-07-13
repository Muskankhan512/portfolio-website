"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "// 01. About", href: "#about" },
  { name: "// 02. Skills", href: "#skills" },
  { name: "// 03. Projects", href: "#projects" },
  { name: "// 04. Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-primary font-mono text-xl font-bold tracking-tighter">
          MB<span className="text-secondary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-mono text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="/Muskan_Bano_Resume.pdf"
            download="Muskan_Bano_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border border-primary text-primary px-4 py-2 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-panel border-b border-panel-border py-4 px-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-foreground/80 hover:text-primary py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Muskan_Bano_Resume.pdf"
            download="Muskan_Bano_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center border border-primary text-primary px-4 py-2 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            Resume
          </a>
        </motion.div>
      )}
    </header>
  );
}
