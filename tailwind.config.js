/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "165px",
      },
    },
    colors: {
      coltext: "rgba(255, 255, 255, 0.60)",
      white: "#fff",
    },
    fontFamily: {
      roobert: ["Roobert TRIAL", "sans-serif"],
    },
  },
  plugins: [],
};
