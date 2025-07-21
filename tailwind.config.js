// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'bg-blur': 'background-color, backdrop-filter',
      },
      textShadow: {
        glow: '0 0 2px #fff',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '100%': {
            backgroundPosition: '100% 50%',
          },
        }
      },
      animation: {
        gradient: 'gradient 5s linear infinite',
      },
      colors: {
        bluetheme: {
          50: '#e5e6fb',
          100: '#c2c3f6',
          200: '#9ea1f1',
          300: '#7a7eec',
          400: '#565ce7',
          500: '#0104cf', // cor base
          600: '#0003CF',
          700: '#0003A4',
          800: '#000282',
          900: '#000260',
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}
