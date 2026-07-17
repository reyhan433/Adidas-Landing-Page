/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        adidas: {
          black: '#000000',
          white: '#FFFFFF',
          gray: '#757575',
          'light-gray': '#F5F5F5',
          'dark-gray': '#333333',
        },
      },
    },
  },
  plugins: [],
};