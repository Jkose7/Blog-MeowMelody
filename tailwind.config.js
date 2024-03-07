/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-color' : "#faf6de",
        'second-color'  : "#5e2129",
        'third-color' : "#170a0a"
      },
      fontFamily : {
        'titulos' : ['Playfair Display','Arial', 'sans-serif'],
        'subtitle' : ['Poppins','Arial', 'sans-serif'],
        'texto' : ['Raleway','Arial', 'sans-serif'],
        'text-alt' : ['DM Sans','Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

