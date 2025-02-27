/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        'blue-neon': '#00C2FF',
        'purple-neon': '#8A2BE2',
        'myBlack': '#0A0A0A',
      },
    },
  },
  plugins: [],
}