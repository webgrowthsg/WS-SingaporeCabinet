/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7f4",
          100: "#dceee5",
          200: "#bbe0cf",
          300: "#8acbac",
          400: "#56b08c",
          500: "#2f9474",
          600: "#21765d",
          700: "#1c5e4b",
          800: "#184b3e",
          900: "#143d33",
        },
        wood: {
          50: "#faf7f2",
          100: "#f3ebdf",
          200: "#e7d5be",
          300: "#d6b896",
          400: "#c79c73",
          500: "#bc875c",
          600: "#a6704d",
          700: "#885641",
          800: "#6f4636",
          900: "#5a3a2e",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
