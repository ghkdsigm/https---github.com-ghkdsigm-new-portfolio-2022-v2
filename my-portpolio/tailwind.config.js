/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Tailwindcss 3.0 default is 'media',  'class'
  theme: {
    extend: {
      colors:{
        primary: '#1DA1F2',
        dark: '#1a91da',
        light: '#a5d0f5',
        lighter: '#D4E5F4',

        'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
      },
      container: {
        // screen: {
        //   '3xl': { max: '1800px' },
        // },
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '0rem',
        },
      },
    },
  },
  plugins: [],
}
