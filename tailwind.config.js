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
      screens: {
        lg: "1280px",
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
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    themes: [],
  },
};
