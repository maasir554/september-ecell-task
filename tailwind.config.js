/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero-bg":"radial-gradient(100% 159.69% at 100% 100%, #120E3D 0%, #000000 100%);",
        "hero-text-gredient":"linear-gradient(180deg, #00E0FF 0%, rgba(0, 224, 255, 0.5) 100%);"
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary": "#00E0FF",
        "secondary": "#0044F2"
      },

      fontFamily:{
        "roboto" : ['Roboto', ...defaultTheme.fontFamily.sans],
        "poppins" : ['Poppins', ...defaultTheme.fontFamily.sans],
        "caveat" : '"Caveat", cursive'
      }
    },
  },
  plugins: [],
};
