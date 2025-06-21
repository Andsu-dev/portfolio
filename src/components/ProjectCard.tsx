import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
  comingSoon?: boolean;
};

const ProjectCard = ({
  title,
  description,
  tags,
  liveUrl,
  repoUrl,
  imageUrl,
  comingSoon = false,
}: ProjectProps) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`rounded-md p-6 group transition-colors duration-300 flex flex-col relative overflow-hidden ${
        theme === "dark"
          ? "bg-neutral-900 border border-neutral-800 hover:border-neutral-600"
          : "bg-white border border-neutral-200 hover:border-neutral-400"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {imageUrl && (
        <div
          className={`relative w-full h-40 mb-4 rounded-sm overflow-hidden border ${
            theme === "dark" ? "border-neutral-700" : "border-neutral-300"
          }`}
        >
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
      )}
      <h3
        className={`text-lg font-semibold mb-1 group-hover:text-neutral-100 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm mb-4 flex-grow min-h-[40px] ${
          theme === "dark" ? "text-neutral-400" : "text-neutral-600"
        }`}
      >
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-0.5 text-xs rounded-full border ${
              theme === "dark"
                ? "bg-neutral-800 text-neutral-400 border-neutral-700"
                : "bg-neutral-100 text-neutral-600 border-neutral-300"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className={`flex space-x-3 mt-auto pt-3 border-t ${
          theme === "dark" ? "border-neutral-800" : "border-neutral-200"
        }`}
      >
        {liveUrl && !comingSoon && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs hover:underline flex items-center ${
              theme === "dark"
                ? "text-neutral-400 hover:text-white"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            Ver Demo <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        )}
        {repoUrl && !comingSoon && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs hover:underline flex items-center ${
              theme === "dark"
                ? "text-neutral-400 hover:text-white"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            Repositório <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        )}
      </div>
      {comingSoon && (
        <div
          className={`absolute w-full inset-0 flex items-center justify-center backdrop-blur-[4px] z-10 ${
            theme === "dark" ? "bg-black/60" : "bg-white/60"
          }`}
        >
          <div
            className={`border rounded-lg px-10 py-3 text-center shadow-lg ${
              theme === "dark"
                ? "bg-white border-neutral-700"
                : "bg-white border-neutral-300"
            }`}
          >
            <span
              className={`text-lg font-bold ${
                theme === "dark" ? "text-black" : "text-black"
              }`}
            >
              Coming Soon
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
