/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        'custom-green':'#054E32',
        'custom-blue':'#1D2B4F',
        'custom-gray':'#808080'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],

        
      },
    },

  },
  plugins: [],
}
