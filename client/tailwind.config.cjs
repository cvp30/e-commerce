/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {},
    extend: {
      spacing: {
        '112': '28rem',
        '108': '27rem',
        '26': '6.4rem',
        '90': '22.5rem',
      }
    },
    colors: {
      'header': '#15161D',
      'red': '#D10024',
      'white': '#ffffff',
      'target': '#E4E7ED',
      'principal': '#2B2D42',
      'silver': '#d6d6d6',
      'dark': '#1e1f29',
      // 'principal': '#222831',
      'orange': '#FE661F',
      'background': '#f8f8f8',
      'slate': '#737B87',
      'star': '#ffd105',
      'card': '#fbb65c',
      'selected': '#737B87',
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}