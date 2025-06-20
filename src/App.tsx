"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import InteractiveParticleNetwork from "./components/interactive-particle-network";
import { Logo } from "./components/Logo";
import ProjectCard from "./components/ProjectCard";
import SectionWrapper from "./components/SectionWrapper";
import SkillItem from "./components/SkillsItem";
import { Button } from "./components/ui/button";
import { aboutText } from "./constants/about.constants";
import { navItems } from "./constants/navLinks.constants";
import { projectsData } from "./constants/projects.constants";
import { skillsData } from "./constants/skills.constants";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-neutral-300 selection:bg-white selection:text-black">
      <div className="fixed inset-0 -z-20 h-full w-full bg-black bg-dot-pattern bg-dots-sm"></div>
      <InteractiveParticleNetwork />
      <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden space-x-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="font-mono-code text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-400 hover:text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-sm border-b border-neutral-800">
            <nav className="flex flex-col px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="font-mono-code text-sm uppercase tracking-wider block py-2 text-neutral-300 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section
          id="hero"
          className="h-[calc(80vh)] md:h-[calc(70vh)] flex items-center border-b border-neutral-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Anderson Medeiros<span className="text-neutral-700">.</span>
            </motion.h1>
            <motion.p
              className="font-mono text-lg md:text-xl text-neutral-400 mt-3 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full-Stack Developer <span className="text-neutral-700">_</span>{" "}
              Building digital products focused on quality, innovation, and
              simplicity.
            </motion.p>
          </div>
        </section>

        <SectionWrapper id="about" title="about_me">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" text-base md:text-lg leading-relaxed text-neutral-300 space-y-4 font-mono"
          >
            <p>{aboutText}</p>
          </motion.div>
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper id="skills" title="key_skills">
          <div className="space-y-8">
            {skillsData.map((skillCategory) => (
              <div key={skillCategory.category}>
                <h3 className="font-mono-code text-sm uppercase tracking-wider text-neutral-500 mb-4">
                  {skillCategory.category}
                </h3>
                <div className="flex cursor-pointer flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <SkillItem
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="projects" title="selected_projects">
          <div className="grid cursor-pointer sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, i) => (
              <ProjectCard comingSoon {...project} key={project.title + i} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="education" title="education">
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-neutral-300 font-sans">
            <div>
              <h3 className="font-mono-code text-sm uppercase tracking-wider text-neutral-500 mb-1">
                Graduation
              </h3>
              <p>Technologist in Systems Analysis and Development</p>
              <p className="text-neutral-400 text-sm">
                University of Southern Santa Catarina (UNISUL) — 2023 - 2025
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="contact" title="contact" className="border-b-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <p className="text-lg text-neutral-300 mb-6 font-sans">
              {" "}
              Ready to discuss your next project or opportunity? I'd love to
              hear from you.
            </p>
            <ContactForm />
            <p className="text-sm flex items-center gap-2 text-neutral-500 mt-6 font-sans">
              {" "}
              Or find me on{" "}
              <a
                href="https://www.linkedin.com/in/anderson-medeiros-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 flex gap-2 items-center hover:text-white underline"
              >
                LinkedIn <Linkedin size={20} />
              </a>
              or
              <a
                href="https://github.com/Andsu-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 flex gap-2 items-center hover:text-white underline"
              >
                Github <Github size={20} />
              </a>
              .
            </p>
          </motion.div>
        </SectionWrapper>
      </main>

      <footer className="py-8 bg-black border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Logo className="justify-center flex mb-3" />
          <p className="font-mono-code text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Anderson Medeiros{" "}
            <span className="text-neutral-700">|</span> Design & Code.
          </p>
        </div>
      </footer>
    </div>
  );
}
