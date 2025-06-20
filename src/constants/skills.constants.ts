import type { Skill } from "@/interfaces/skill.interface";

export const skillsData: { category: string; items: Skill[] }[] = [
  {
    category: "Backend & Dados",
    items: [
      { name: "Java / Spring Boot" },
      { name: "Node.js / TypeScript" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "REST APIs" },
      { name: "Docker" },
    ],
  },
  {
    category: "Frontend & UX/UI",
    items: [
      { name: "React / Next/ Vite" },
      { name: "Vue" },
      { name: "JavaScript" },
      { name: "HTML5 / CSS3" },
      { name: "Tailwind CSS" },
      { name: "Figma" },
    ],
  },
  {
    category: "IA & Automação",
    items: [
      { name: "OpenAI API" },
      { name: "LangChain" },
      { name: "N8N" },
      { name: "Zapier" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS" },
      { name: "Google Cloud" },
      { name: "Git" },
      { name: "CI/CD" },
    ],
  },
];
