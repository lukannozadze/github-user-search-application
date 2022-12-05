/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xsm: "400px",
        xxsm: "200px",
      },
    },
  },
  plugins: [],
};
