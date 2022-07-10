/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat"],
      },
      colors: {
        main: ["#fbe831"],
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
