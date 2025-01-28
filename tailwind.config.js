/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1921px', // Breakpoint personalizado para resoluciones mayores a 1920x1080
      },
    },
  },
  plugins: [],
};
