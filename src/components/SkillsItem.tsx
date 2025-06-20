import { motion } from "framer-motion";
import type React from "react";

type Skill = {
  icon?: React.ElementType;
  name: string;
  level?: string;
};

const SkillItem = ({ name, icon: Icon }: Skill) => (
  <motion.div
    className="flex items-center bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full text-sm text-neutral-300 hover:border-neutral-600 hover:text-white transition-all duration-200"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.3 }}
  >
    {Icon && <Icon className="h-4 w-4 mr-2 text-neutral-500" />}
    {name}
  </motion.div>
);

export default SkillItem;
