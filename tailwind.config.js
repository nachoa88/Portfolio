/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      fontSize: {
        xxs: '.625rem',
      },
      backgroundColor: {
        'primary': '#f1f5f9',      // Light mode: nav, footer, sections - bg-slate-100
        'primary-dark': '#1f2937', // Dark mode: nav, footer, sections - bg-gray-800
        'secondary': '#f3f4f6',    // Light mode: spaces between - bg-gray-100
        'secondary-dark': '#374151' // Dark mode: spaces between - bg-gray-700
      },
      textColor: {
        'primary': '#082F49',         // Light mode - sky-950
        'primary-dark': '#e2e8f0',    // Dark mode - gray-200
        'secondary': '#0c4a6e',       // Light mode - sky-900
        'secondary-dark': '#d1d5db',  // Dark mode - gray-300
      }
    },
  },
  plugins: [],
}