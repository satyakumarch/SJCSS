import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0f2044",
          foreground: "#ffffff",
          light: "#1a3a6e",
        },
        secondary: {
          DEFAULT: "#f0f4f8",
          foreground: "#0f2044",
        },
        accent: {
          DEFAULT: "#c8922a",
          foreground: "#ffffff",
          light: "#f0c060",
        },
        gold: {
          DEFAULT: "#c8922a",
          light: "#f0c060",
          dark: "#9a6e1a",
        },
        navy: {
          DEFAULT: "#0f2044",
          light: "#1a3a6e",
          dark: "#081530",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-down": "fade-down 0.6s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
        "slide-in": "slide-in 0.6s ease-out both",
        "slide-right": "slide-right 0.6s ease-out both",
        "scale-in": "scale-in 0.5s ease-out both",
        shimmer: "shimmer 2s linear infinite",
      },
      boxShadow: {
        card: "0 4px 20px rgba(15, 32, 68, 0.08)",
        "card-hover": "0 8px 30px rgba(15, 32, 68, 0.15)",
        gold: "0 4px 20px rgba(200, 146, 42, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
