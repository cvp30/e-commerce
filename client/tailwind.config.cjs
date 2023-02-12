/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
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
        '128': '32rem'
      }
    },
    colors:{
      'principal': '#222831',
      'orange': '#FE661F',
      'background': '#f3f4f6',
      'white': '#ffffff',
      'slate': '#737B87',
      'star': '#ffd105',
      'card': '#fbb65c'
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}