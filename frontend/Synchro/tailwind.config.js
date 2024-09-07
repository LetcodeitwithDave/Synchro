/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      rubikRegalar:  ['Rubik Regular', 'sans-serif'],
      
    },
    extend: {

      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        spin: 'spin 1s linear infinite',
      },

      borderColor: {
        customColor1: '#007BFF',  // Custom color (lightblue)
      },
      colors: {
        sidebarBg: 	'#f6f6f6'
      },

      textDecorationColor: {
        decorationColor: '#007BFF',
      },

      backgroundImage: {
        'header': "url('assets/images/pxfuel.jpg')",
      },
    },
  },
  plugins: [],
}