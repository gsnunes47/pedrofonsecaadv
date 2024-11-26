/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        customGold: '#DBAA62',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],  
    },
  },
  plugins: [],
}
}
  