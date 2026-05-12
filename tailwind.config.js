/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // For Next.js app directory
    './pages/**/*.{js,ts,jsx,tsx}',     // For traditional pages directory
    './components/**/*.{js,ts,jsx,tsx}',// For components
  ],
  darkMode: 'class', // Use class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
