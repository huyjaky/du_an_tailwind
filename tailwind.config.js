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
        tablet: {'max': '1110px'},
        laptop: '1110px',
        desktop: '1280px'
      },
      keyframes: {
        slideDown: {
          '0%': {transform: 'translateY(-50%)'},
          '100%': {transform: 'translateY(0%)'}
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out'
      },
      transformOrigin: {
        slideDown: '100px'
      }
    }
  },
  plugins: []
};
