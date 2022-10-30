const { fontFamily } = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './src/**/*.tsx'], theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      maxWidth: {
        large: "1200px"
      },
      colors: {
        "light-1": "#F1F1F1",
        "light-2": "#BDBDBD",
        "light-3": "#969696",
        "light-4": "#808080",

        "dark-1": "#191919",
        "dark-focus": "#242424",
        "dark-2": "#121212",
        "dark-3": "#1A1A1A",

        "highlight": "#E16A27",
      }
    },
  },
  plugins: [],
}
