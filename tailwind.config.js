const colors = require('tailwindcss/colors')

module.exports = {
  // darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: colors.violet,
      secondary: colors.fuchsia,
      success: colors.emerald,
      danger: colors.rose,
      slate: colors.slate,
      gray: colors.gray,
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
