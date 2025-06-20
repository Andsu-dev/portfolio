export const Logo = ({ className }: { className?: string }) => {
  return (
    <a
      href="#"
      className={`font-mono-code text-xl font-bold tracking-tighter ${className}`}
    >
      <span className="text-white">AM</span>
      <span className="text-neutral-500">DEV</span>
    </a>
  );
};
