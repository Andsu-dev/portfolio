/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        black: "#000000",
        neutral: {
          900: "#111111",
          800: "#1c1c1c",
          700: "#2d2d2d",
          600: "#3e3e3e", // Adicionado para footer text
          500: "#555555", // Adicionado para separador logo
          400: "#888888",
          300: "#cccccc",
        },
        white: "#ffffff",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['"Mona Sans"', "sans-serif"], // Definindo Mona Sans como padrão
        "mono-code": ['"Fira Mono"', "monospace"], // Definindo Fira Mono para código
      },
      backgroundImage: {
        "dot-pattern":
          "radial-gradient(circle, rgba(255, 255, 255, 0.05) 0.5px, transparent 0.5px)",
      },
      backgroundSize: {
        "dots-sm": "1.75rem 1.75rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
