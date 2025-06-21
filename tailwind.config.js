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
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
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
