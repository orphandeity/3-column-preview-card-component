/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        '_bright-orange': '#e38826',
        '_dark-cyan': '#006970',
        '_very-dark-cyan': '#004241',
        '_very-light-gray': '#f2f2f2',
      },
      fontFamily: {
        sans: ["'Lexend Deca'", 'sans-serif'],
        cursive: ["'Big Shoulders Display'", 'cursive'],
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
}
