const colors = require('tailwindcss/colors')

module.exports = {
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
      white: '#ffffff'
    },
    extend: {
      
    },
  },
  plugins: [],
};
