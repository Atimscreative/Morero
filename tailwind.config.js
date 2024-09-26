/** @type {import('tailwindcss').Config} */
// "./**/*.{html,js}",

module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: `"Inter", sans-serif`,
      },
      backgroundImage: {
        hero: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.5)),url('/images/excavator.webp')",
      },
      colors: {
        main: {
          50: "#fef8ee",
          100: "#feefd6",
          200: "#fcdbac",
          300: "#f9c078",
          400: "#f69b41",
          500: "#f37e1c",
          600: "#d55d11", // main
          700: "#bd4b11",
          800: "#963c16",
          900: "#793315",
          950: "#411809",
        },
        secondary: {
          50: "#f3faf9",
          100: "#d6f1ea",
          200: "#ace3d7",
          300: "#7bcdbe",
          400: "#50b1a3",
          500: "#369689",
          600: "#29786f",
          700: "#24615b",
          800: "#214e4a", // main
          900: "#1f423e",
          950: "#0d2624",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          overflow: "scroll",
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none", // Chrome, Safari, and Edge
        },
      });
    },
  ],
};
