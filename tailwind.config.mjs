/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121221",
        foreground: "#e3e0f6",

        primary: "#ffb1c0",
        "primary-container": "#ff4c83",
        "primary-fixed": "#ffd9df",
        "primary-fixed-dim": "#ffb1c0",

        secondary: "#e6feff",
        "secondary-container": "#00f4fe",
        "secondary-fixed": "#63f7ff",
        "secondary-fixed-dim": "#00dce5",

        tertiary: "#ecb2ff",
        "tertiary-container": "#cf5cff",
        "tertiary-fixed": "#f8d8ff",
        "tertiary-fixed-dim": "#ecb2ff",

        surface: "#121221",
        "surface-dim": "#121221",
        "surface-bright": "#383848",
        "surface-container-lowest": "#0d0d1c",
        "surface-container-low": "#1a1a2a",
        "surface-container": "#1e1e2e",
        "surface-container-high": "#292839",
        "surface-container-highest": "#343344",
        "surface-variant": "#343344",

        "on-surface": "#e3e0f6",
        "on-surface-variant": "#e4bdc3",

        "on-primary": "#660029",
        "on-primary-container": "#5a0023",

        "on-secondary": "#003739",
        "on-secondary-container": "#006c71",

        "on-tertiary": "#520071",
        "on-tertiary-container": "#480063",

        outline: "#ab888e",
        "outline-variant": "#5b3f44",

        "surface-tint": "#ffb1c0",

        error: "#ffb4ab",
        "error-container": "#93000a",
        "on-error": "#690005",
        "on-error-container": "#ffdad6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        headline: ["var(--font-sora)", "Sora", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
    },
  },
  plugins: [],
};
