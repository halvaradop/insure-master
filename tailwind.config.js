/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        base: '900px'
      },
      height: {
        nav: 'calc(100vh - 5rem)'
      },
      fontFamily: {
        display: "'DM Serif Display', serif"
      },
      colors: {
        blue: 'hsl(216, 30%, 68%)',
        gray: 'hsl(0, 0%, 98%)',
        violet: {
          DEFAULT: 'hsl(256, 26%, 20%)',
          100: 'hsl(273, 4%, 51%)',
          200: 'hsl(270, 9%, 17%)'
        }
      },
    },
  },
  plugins: [],
}

