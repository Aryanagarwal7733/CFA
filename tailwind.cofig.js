/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
  extend: {
    colors: {
      kalpiGreen: "#4CAF50",
      kalpiDarkGreen: "#3d8b40",
    },
    },
  },
  fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'], // or use 'Poppins'/'DM Sans'
    },
}
