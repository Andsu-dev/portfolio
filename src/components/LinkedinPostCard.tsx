import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type LinkedInPostProps = {
  id: string;
  text: string;
  imageUrl?: string;
  likes?: number;
  comments?: number;
  timestamp: string;
  postUrl: string;
};

const LinkedInPostCard = ({ post }: { post: LinkedInPostProps }) => (
  <motion.div
    className="bg-neutral-900 border border-neutral-800 rounded-md p-5 group hover:border-neutral-600 transition-colors duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
  >
    {post.imageUrl && (
      <div className="relative w-full h-40 mb-3 rounded-sm overflow-hidden border border-neutral-700">
        <img
          src={post.imageUrl || "/placeholder.svg"}
          alt="Post image"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
        />
      </div>
    )}
    <p className="text-neutral-300 text-sm mb-3 line-clamp-4">{post.text}</p>
    <div className="flex justify-between items-center text-xs text-neutral-500 mt-auto pt-3 border-t border-neutral-800">
      <span>{post.timestamp}</span>
      <a
        href={post.postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:underline flex items-center"
      >
        Ver no LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
      </a>
    </div>
  </motion.div>
);

export default LinkedInPostCard;
