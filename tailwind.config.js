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
        coffee: '#dbc1ac',
        coffee2: '#964315'
      },
      screens: {
        mobile: { max: '500px' },
        tabletTemp: { max: '1110px', min: '500px' },
        tablet: { max: '1110px' },
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
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '90%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        slideUpTag: {
          '0%': { transform: 'translateY(150px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
        closeSlideDown: 'closeSlideDown .4s ease-in-out',
        marquee: 'marquee 40s linear infinite',
        slideUpTag: 'slideUpTag 1s ease-in-out'
      },
      gridTemplateColumns: {
        13: 'repeat(auto-fit, minmax(200px,1fr))',
        14: '1fr 1fr 1fr 1fr',
        15: '1fr 1fr',
        16: '1fr',
        17: '1fr 1fr 1fr'
      },
      gridTemplateRows: {
        7: '300px 60px 300px',
        8: '500px 500px 500px',
        9: '500px 500px 500px 500px 500px 500px',
        10: '200px 200px'
      },
      gridAutoColumns: {
        max100: '100%'
      },
      gridTemplateAreas: {
        layoutDesktop: ['h1 h1 h2 h3', 'h4 h5 h2 h3', 'h4 h5 h6 h6'],
        layoutTablet: ['h1 h2', 'h3 h4', 'h5 h6'],
        layoutMobile: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        layoutMagazine: [
          'h1 h1 h2',
          'h1 h1 h3'
        ],
        layoutMagazine2: [
          'h1 h1',
          'h1 h1',
          'h2 h3'
        ],
      },
      backgroundImage: {
        parallax: 'url(\"https://images.unsplash.com/photo-1507226983735-a838615193b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80\")'
      }

    }
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')]
};
