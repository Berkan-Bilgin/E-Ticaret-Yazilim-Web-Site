/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1200px",
      },
    },
    extend: {
      fontSize: {
        xxs: "0.375rem",
        "18px": "1.125rem",
        md18: "1.125rem",
        xs12: "0.75rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: {
          primary: "#333333",
          primaryHover: "#555555",
          secondary: "#555555",
          muted: "#777777",
          inverse: "#ffffff",
        },
        primary: {
          light: "#0A9B74",
          DEFAULT: "#0A9B74",
          dark: "#004ba0",
        },
        secondary: {
          light: "#FFD202",
          DEFAULT: "#FFD202",
          dark: "#c51162",
        },
        tertiary: {
          light: "#e0e0e0",
          DEFAULT: "#9e9e9e",
          dark: "#616161",
        },
        success: "#4caf50",

        danger: "#f44336",
        warning: "#ff9800",
        info: "#2196f3",
        highlight: "#ffeb3b",
        accent: "#ff5722",
        neutral: "#333333",
        neutralHover: "#555555",
        border: {
          primary: "#0A9B74",
          secondary: "#FFD202",
          muted: "#e0e0e0",
        },
        shadow: {
          primary: "rgba(0, 75, 160, 0.5)",
          secondary: "rgba(197, 17, 98, 0.5)",
        },
        background: {
          light: "#f5f5f5",
          dark: "#333333",
          muted: "#e0e0e0",
          alt: "#ffffff",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    themes: [],
  },
};
