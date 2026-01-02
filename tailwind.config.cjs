/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Mono", "Space Mono Fallback", "monospace"],
        exo2: ["'Exo 2'", "system-ui", "sans-serif"],
      },
      keyframes: {
        zoomIn: {
          '0%': {
            transform: 'scale(0.1)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        }
      },
      animation: {
        'zoom-in': 'zoomIn 1s ease-out forwards'
      }
    }
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['fantasy', 'night'],
  },
};
