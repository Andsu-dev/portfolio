import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
};

const ProjectCardMinimal = ({
  title,
  description,
  tags,
  liveUrl,
  repoUrl,
  imageUrl,
}: ProjectProps) => (
  <motion.div
    className="bg-neutral-900 border border-neutral-800 rounded-md p-6 group hover:border-neutral-600 transition-colors duration-300 flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
  >
    {imageUrl && (
      <div className="relative w-full h-40 mb-4 rounded-sm overflow-hidden border border-neutral-700">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
    )}
    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-neutral-100">
      {title}
    </h3>
    <p className="text-neutral-400 text-sm mb-4 flex-grow min-h-[40px]">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 text-xs bg-neutral-800 text-neutral-400 rounded-full border border-neutral-700"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex space-x-3 mt-auto pt-3 border-t border-neutral-800">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 hover:text-white hover:underline flex items-center"
        >
          Ver Demo <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      )}
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 hover:text-white hover:underline flex items-center"
        >
          Repositório <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      )}
    </div>
  </motion.div>
);

export default ProjectCardMinimal;
