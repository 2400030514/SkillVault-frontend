/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-dashboard': 'linear-gradient(to bottom right, #6610f2, #000000, #6f42c1)'
      }
    }
  },
  plugins: []
};