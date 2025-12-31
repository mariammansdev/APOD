/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Mono", "Space Mono Fallback", "monospace"],
        exo2: ["'Exo 2'", "system-ui", "sans-serif"],
      }
    }
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['fantasy', 'dark'],
  },
};
