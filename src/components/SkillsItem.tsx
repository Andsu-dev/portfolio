import { motion } from "framer-motion";
import type React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "../contexts/ThemeContext";

type Skill = {
  icon?: React.ElementType;
  name: string;
  level?: string;
};

const SkillItem = ({ name, icon: Icon }: Skill) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={cn(
        "flex items-center px-4 py-2 rounded-full text-sm transition-all duration-200",
        theme === "dark"
          ? "bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white"
          : "bg-neutral-100 border border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:text-black",
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      {Icon && (
        <Icon
          className={cn(
            "h-4 w-4 mr-2",
            theme === "dark" ? "text-neutral-500" : "text-neutral-600",
          )}
        />
      )}
      {name}
    </motion.div>
  );
};

export default SkillItem;
