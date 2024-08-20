/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      robotoRegular: ['Roboto Regular', 'sans-serif'],
      robotoMedium: ['Roboto Medium', 'sans-serif'],
      robotoBold: ['Roboto Bold', 'sans-serif'],
      montserratRegular: ['Montserrat Regular', 'sans-serif'],
      montserratBold: ['Montserrat Bold', 'sans-serif'],
      montserratSemibold: ['Montserrat SemiBold', 'sans-serif'],

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
        test :  '#FAFAFB',
        pageBackground : '#F8F9FA',
        heroBackground: '#F2F2F2',
        textColor: '#333333',
        subheading: '#666666',
        buttonBackground: '#007BFF',
        OfferSectionBackground: '#EFEFEF',
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