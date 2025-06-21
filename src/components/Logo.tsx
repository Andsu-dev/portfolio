import { useTheme } from "../contexts/ThemeContext";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  const { theme } = useTheme();

  return (
    <div className={`flex items-center ${className}`}>
      <span
        className={`font-mono text-lg font-bold ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Anderson
        <span
          className={theme === "dark" ? "text-neutral-700" : "text-neutral-300"}
        >
          .
        </span>
      </span>
    </div>
  );
};
