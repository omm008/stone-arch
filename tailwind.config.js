/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        blueprint: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#6c757d",
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#0a0c0d",
        },
        accent: {
          line: "#2c3e50",
          grid: "#e8eaed",
          text: "#1a1a1a",
        },
      },
      spacing: {
        tick: "0.25rem",
        measure: "1.5rem",
      },
    },
  },

  plugins: [],
};
