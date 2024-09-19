/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: `"Inter", sans-serif`,
      },
      backgroundImage: {
        'hero': "url('/images/hero-bg.avif')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
