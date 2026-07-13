import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-foreground/60">
      <div className="flex justify-center gap-6 mb-4 md:hidden">
        <a href="https://github.com/Muskankhan512" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xl">
          <FiGithub />
        </a>
        <a href="https://linkedin.com/in/muskan-bano988746319" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xl">
          <FiLinkedin />
        </a>
        <a href="mailto:muskan0khan512@gmail.com" className="hover:text-primary transition-colors text-xl">
          <FiMail />
        </a>
      </div>
      <p className="font-mono text-sm hover:text-primary transition-colors cursor-default">
        Designed & Built by Muskan Bano
      </p>
    </footer>
  );
}
