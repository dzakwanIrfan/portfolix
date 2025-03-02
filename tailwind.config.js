/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)', 
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out', 
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        'blue-neon': '#00C2FF',
        'purple-neon': '#8A2BE2',
        'myBlack': '#0A0A0A',
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}