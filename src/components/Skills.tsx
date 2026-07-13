"use client";

import { motion } from "framer-motion";
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiMongoose, SiNextdotjs, SiTailwindcss, SiMysql, SiPostman } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const skillCategories = [
  {
    title: "Core",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    title: "Familiar With",
    skills: [
      { name: "Java (basics)", icon: <FaJava /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <TbBrandVscode /> },
      { name: "MySQL Workbench", icon: <SiMysql /> },
      { name: "Linux", icon: <FaLinux /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-2xl mr-2">// 02.</span>
            Skills & Technologies
          </h2>
          <div className="h-px bg-panel-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-panel border border-panel-border p-6 rounded-lg hover:border-primary transition-colors group"
            >
              <h3 className="text-xl font-mono text-foreground mb-6 group-hover:text-primary transition-colors">
                &lt;{category.title} /&gt;
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-[#1f2937] px-3 py-2 rounded-md text-sm text-foreground/80 hover:text-primary hover:bg-[#374151] transition-all cursor-default"
                  >
                    <span className="text-lg text-secondary">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
