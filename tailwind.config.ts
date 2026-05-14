import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Page canvas — warm off-white
        canvas: "#F1F1EF",
        // Card / panel surface
        surface: "#FFFFFF",
        // Primary text
        ink: {
          DEFAULT: "#0E0E0E",
          soft: "#1F1F1F",
        },
        // Muted / secondary text
        muted: {
          DEFAULT: "#9A9A9A",
          soft: "#B8B8B8",
          strong: "#6B6B6B",
        },
        // Brand accent — the orange used for /title, Live, Leave, ticks, etc.
        accent: {
          DEFAULT: "#EE5A2C",
          hover: "#D94F23",
          soft: "#FDE7DE",
        },
        // Online presence dot
        presence: "#22C55E",
        // Borders / dividers
        line: {
          DEFAULT: "#EAEAEA",
          soft: "#F0F0EE",
        },
      },
      fontFamily: {
        sans: ["var(--font-plex)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        // All radii flattened to 0 per design spec — sharp, brutalist grid.
        // Avatars are square too (user confirmed).
        // The presence dot keeps its circle via inline style override only.
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        card: "0px",
        full: "0px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.04)",
        lift: "0 4px 12px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-out",
        "pulse-dot": "pulse-dot 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
