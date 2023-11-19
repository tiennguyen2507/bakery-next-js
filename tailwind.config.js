/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {},
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "serif"],
        mono: ["Poppins", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
