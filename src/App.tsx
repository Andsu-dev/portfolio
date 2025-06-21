"use client";

import { motion } from "framer-motion";
import { FolderGit2, Github, Linkedin, Menu, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ContactForm from "./components/ContactForm";
import InteractiveParticleNetwork from "./components/interactive-particle-network";
import { Logo } from "./components/Logo";
import ProjectCard from "./components/ProjectCard";
import SectionWrapper from "./components/SectionWrapper";
import SkillItem from "./components/SkillsItem";
import { ThemeToggle } from "./components/ThemeToggle";
import { Button } from "./components/ui/button";
import { aboutText } from "./constants/about.constants";
import { navItems } from "./constants/navLinks.constants";
import { projectsData } from "./constants/projects.constants";
import { skillsData } from "./constants/skills.constants";
import { useTheme } from "./contexts/ThemeContext";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

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
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-primary-foreground">
      <div
        className={cn(
          "fixed inset-0 -z-30 h-full w-full bg-dot-pattern bg-dots-sm",
          theme === "dark" ? "bg-black" : "bg-white",
        )}
      ></div>
      <InteractiveParticleNetwork />
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b backdrop-blur-sm",
          theme === "dark"
            ? "bg-black/80 border-neutral-800"
            : "bg-white/80 border-neutral-200",
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden space-x-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={cn(
                  "font-mono-code text-xs uppercase tracking-wider transition-colors duration-200",
                  theme === "dark"
                    ? "text-neutral-400 hover:text-white"
                    : "text-neutral-600 hover:text-black",
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  theme === "dark"
                    ? "text-neutral-400 hover:text-white"
                    : "text-neutral-600 hover:text-black",
                )}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div
            className={cn(
              "md:hidden absolute top-16 left-0 w-full backdrop-blur-sm border-b",
              theme === "dark"
                ? "bg-black/95 border-neutral-800"
                : "bg-white/95 border-neutral-200",
            )}
          >
            <nav className="flex flex-col px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    "font-mono-code text-sm uppercase tracking-wider block py-2",
                    theme === "dark"
                      ? "text-neutral-300 hover:text-white"
                      : "text-neutral-700 hover:text-black",
                  )}
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
          className={cn(
            "h-[calc(80vh)] md:h-[calc(70vh)] flex items-center border-b",
            theme === "dark" ? "border-neutral-800" : "border-neutral-200",
          )}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <motion.h1
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl font-mono font-bold leading-tight",
                theme === "dark" ? "text-white" : "text-black",
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Anderson Medeiros
              <span
                className={cn(
                  theme === "dark" ? "text-neutral-700" : "text-neutral-300",
                )}
              >
                .
              </span>
            </motion.h1>
            <motion.p
              className={cn(
                "font-mono text-lg md:text-xl mt-3 max-w-2xl",
                theme === "dark" ? "text-neutral-400" : "text-neutral-600",
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full-Stack Developer{" "}
              <span
                className={cn(
                  theme === "dark" ? "text-neutral-700" : "text-neutral-300",
                )}
              >
                _
              </span>{" "}
              Building digital products focused on quality, innovation, and
              simplicity.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                className={cn(
                  "font-mono px-6 py-3 text-base transition",
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-black/10 text-black hover:bg-black/20",
                )}
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FolderGit2 size={20} />
                See Projects
              </Button>
              <Button>
                <a
                  href="https://www.linkedin.com/in/anderson-medeiros-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 font-mono px-6 py-3 rounded-sm transition",
                    theme === "dark" ? "text-white" : "text-black",
                  )}
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
              </Button>
              <Button>
                <a
                  href="https://github.com/Andsu-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-2 font-mono px-6 py-3 rounded-sm transition",
                    theme === "dark" ? "text-white" : "text-black",
                  )}
                >
                  <Github size={20} /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        <SectionWrapper id="about" title="about_me">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "text-base md:text-lg leading-relaxed space-y-4 font-mono",
              theme === "dark" ? "text-white" : "text-black",
            )}
          >
            <p>{aboutText}</p>
          </motion.div>
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper id="skills" title="key_skills">
          <div className="space-y-8">
            {skillsData.map((skillCategory) => (
              <div key={skillCategory.category}>
                <h3
                  className={cn(
                    "font-mono-code text-sm uppercase tracking-wider mb-4",
                    theme === "dark" ? "text-neutral-500" : "text-neutral-600",
                  )}
                >
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

        <SectionWrapper id="projects" title="my_projects">
          <div className="grid cursor-pointer sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, i) => (
              <ProjectCard comingSoon {...project} key={project.title + i} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="education" title="education">
          <div
            className={cn(
              "space-y-4 text-base md:text-lg leading-relaxed font-sans",
              theme === "dark" ? "text-white" : "text-black",
            )}
          >
            <div>
              <h3
                className={cn(
                  "font-mono-code text-sm uppercase tracking-wider mb-1",
                  theme === "dark" ? "text-neutral-500" : "text-neutral-600",
                )}
              >
                Graduation
              </h3>
              <p>Technologist in Systems Analysis and Development</p>
              <p
                className={cn(
                  "text-sm",
                  theme === "dark" ? "text-neutral-400" : "text-neutral-600",
                )}
              >
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
            <p
              className={cn(
                "text-lg mb-6 font-sans",
                theme === "dark" ? "text-white" : "text-black",
              )}
            >
              {" "}
              Ready to discuss your next project or opportunity? I'd love to
              hear from you.
            </p>
            <ContactForm />
            <p
              className={cn(
                "text-sm flex items-center gap-2 mt-6 font-sans",
                theme === "dark" ? "text-neutral-500" : "text-neutral-600",
              )}
            >
              {" "}
              Or find me on{" "}
              <a
                href="https://www.linkedin.com/in/anderson-medeiros-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex gap-2 items-center underline",
                  theme === "dark"
                    ? "text-neutral-400 hover:text-white"
                    : "text-neutral-600 hover:text-black",
                )}
              >
                LinkedIn <Linkedin size={20} />
              </a>
              or
              <a
                href="https://github.com/Andsu-dev"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex gap-2 items-center underline",
                  theme === "dark"
                    ? "text-neutral-400 hover:text-white"
                    : "text-neutral-600 hover:text-black",
                )}
              >
                Github <Github size={20} />
              </a>
              .
            </p>
          </motion.div>
        </SectionWrapper>
      </main>

      <footer
        className={cn(
          "py-8 border-t",
          theme === "dark"
            ? "bg-black border-neutral-800"
            : "bg-white border-neutral-200",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Logo className="justify-center flex mb-3" />
          <p
            className={cn(
              "font-mono-code text-xs",
              theme === "dark" ? "text-neutral-600" : "text-neutral-500",
            )}
          >
            &copy; {new Date().getFullYear()} Anderson Medeiros{" "}
            <span
              className={cn(
                theme === "dark" ? "text-neutral-700" : "text-neutral-400",
              )}
            >
              |
            </span>{" "}
            Design & Code.
          </p>
        </div>
      </footer>
    </div>
  );
}
