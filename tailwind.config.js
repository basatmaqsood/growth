/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': '#00df9a',
      'green-dark': '#00ff99',
      'gray-light': '#c0c0c0',
      'gray': '#808080',
      'bgc': '#000300',
      'black':'#000',
      'black-light':'#222',
    },
  },
  plugins: [],
}

