/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    borderWidth: {
      '1': '1px',
    },
    
    extend: {
      width: {
        '95': '95%',
        '70': '70%',
        '30': '30%',
        '39': '39%',
      },
      spacing: {
        'ideal': '30.5px',
        'ideal_desktop':'35px',
        'left': '10%',
      },
    },
  },
  plugins: [],
}