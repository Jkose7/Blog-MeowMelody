/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode" : 'class',
  theme: {
    extend: {
      colors : {
        'primary-color' : "#FFFFEC",
        'second-color'  : "#1a1a1a",
      },
      fontFamily : {
        'titulos' : ['Playfair Display','Arial', 'sans-serif'],
        'subtitle' : ['Poppins','Arial', 'sans-serif'],
        'texto' : ['Raleway','Arial', 'sans-serif'],
        'text-alt' : ['DM Sans','Arial', 'sans-serif'],
        'texto2' : ['Oswald','Arial', 'sans-serif']
      },
      screens: {
        'minicel' : '250px',
        'celular' : '300px'
      }
    },
  },
  plugins: [],
}

