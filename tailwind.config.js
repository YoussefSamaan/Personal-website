/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll-down': {
          '0%': { transform: 'translateY(calc(100vh + -1 * 33vh * var(--movie-cards-count) - calc(var(--movie-cards-count) / 3 * 2vh)))' },
          '100%': { transform: 'translateY(0vh)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0vh)' },
          '100%': { transform: 'translateY(calc(-1 * 33vh * var(--movie-cards-count) - calc(var(--movie-cards-count) / 3 * 2vh)))' },
        },
      },
      animation: {
        'scroll-down': 'scroll-down var(--animation-time) linear infinite',
        'scroll-up': 'scroll-up var(--animation-time) linear infinite',
      },
    },
  },
  plugins: [],
};
