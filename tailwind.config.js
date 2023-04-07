/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        coffee: '#dbc1ac'
      },
      screens: {
        tablet: { max: '1110px' },
        laptop: '1110px',
        desktop: '1280px',
        mobile: { max: '400px' }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-300px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        closeSlideDown: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-300px)' }
        },

        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '75%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(0%)' }
        },

      },
      gridAutoColumns: {
        max100: '100%'
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
        closeSlideDown: 'closeSlideDown .4s ease-in-out',
        marquee: 'marquee 40s linear infinite',
      }
    }
  },
  plugins: []
};
