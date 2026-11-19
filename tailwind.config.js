/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shoukBg: '#FAF7F2',
        shoukDark: '#120D0E',
        shoukGold: '#C5A059',
        shoukGoldDark: '#9E7830',
        shoukBurgundy: '#5C1827',
        shoukBurgundyLight: '#7A1C2E',
        shoukCream: '#FFFDF9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}

