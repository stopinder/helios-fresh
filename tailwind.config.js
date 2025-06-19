/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        helioMidnight: '#0B1120',
        helioIndigo: '#1B263B',
        helioMist: '#A5B4FC',
        helioLavender: '#CDB4DB',
        helioAqua: '#A0E7E5',
        helioGold: '#FFD700',
        helioGlass: 'rgba(255, 255, 255, 0.07)',
        helioGlassBlue: 'rgba(79, 118, 187, 0.12)', // celestial blue glass
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Libre Baskerville"', 'serif'],
      },
    },
  },
  plugins: [],
}



