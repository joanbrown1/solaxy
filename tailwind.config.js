/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // White
        secondary: "#F7A916",
      },
      width: {
        sidebar: "223px",
      },
      fontFamily: {
        inter: ['Inter var', 'sans'], // Default font family
        poppins: ['Poppins', 'sans'], // Custom font family (Poppins)
      }
    },
  },
  plugins: [require('flowbite/plugin'),
 
],
}

