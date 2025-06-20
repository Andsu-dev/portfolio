import type { Project } from "@/interfaces/project.interface";

export const projectsData: Project[] = [
  {
    title: "CoreSystem API",
    description: "API robusta para gerenciamento de dados mestres.",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    repoUrl: "#",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Interface Intuitiva X",
    description: "Dashboard analítico com foco em UX e visualização clara.",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    liveUrl: "#",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "AutomateFlow Engine",
    description: "Motor de automação para processos de marketing.",
    tags: ["Node.js", "N8N", "postgresSql, Nextjs"],
    repoUrl: "#",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
];
