import { cn } from "@/lib/utils";
import { useTheme } from "../contexts/ThemeContext";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "font-mono-code text-xl font-bold tracking-tighter",
        className,
      )}
    >
      <span className={cn(theme === "dark" ? "text-white" : "text-black", "")}>
        AM
      </span>
      <span className="text-neutral-500">DEV</span>
    </div>
  );
};
