import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "../contexts/ThemeContext";

const SectionWrapper = ({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { theme } = useTheme();

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 border-b",
        className,
        theme === "dark" ? "border-neutral-800" : "border-neutral-200",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={cn(
            "font-mono text-2xl md:text-3xl font-bold mb-10 md:mb-12 relative pl-4 after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-6",
            theme === "dark"
              ? "text-white after:bg-white"
              : "text-black after:bg-black",
          )}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {title}
          <span
            className={
              theme === "dark" ? "text-neutral-700" : "text-neutral-300"
            }
          >
            .
          </span>
        </motion.h2>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
