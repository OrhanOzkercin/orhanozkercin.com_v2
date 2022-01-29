const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./componesnts/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },

    extend: {
      colors: {
        primary: "#22d3ee",
        "text-color": colors.slate[400],
      },
      boxShadow: ({ theme }) => ({
        "primary-button": `inset 0 0 0 2px ${theme("colors.primary")}`,
      }),

      fontFamily: {
        logo: ["Mea Culpa", "cursive"],
        pofuduk: ["Nunito", "sans-serif"],
        element: ["Dancing Script", "sans-serif"],
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
