/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppins': ['Poppins', 'sans-serif'],
        'BebasNeue': ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
