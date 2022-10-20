/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'app':'#0e2a40',
        'main':'#111827',
        'sidebar':'#000000',
        'card-color':'#1b3967'
      }
    },
  },
  plugins: [],
}
