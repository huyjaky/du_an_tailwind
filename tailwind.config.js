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
        tablet: { 'max': '1110px' },
        laptop: '1110px',
        desktop: '1280px'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-300px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        closeSlideDown: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-300px)' }
        }
      },
      backgroundImage: {
        coffeeImg: 'url(\"https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80\")'
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
        closeSlideDown: 'closeSlideDown .4s ease-in-out'
      }
    }
  },
  plugins: []
};
