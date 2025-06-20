import { motion } from "framer-motion";

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
}) => (
  <section
    id={id}
    className={`py-16 md:py-24 border-b border-neutral-800 ${className}`}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="font-mono  text-2xl md:text-3xl font-bold text-white mb-10 md:mb-12 relative pl-4 after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-6 after:bg-white"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {title}
        <span className="text-neutral-700">.</span>
      </motion.h2>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
