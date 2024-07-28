/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
        },
        textPrimary: {
          DEFAULT: 'var(--color-textPrimary)',
        },
        textHover: {
          DEFAULT: 'var(--color-textHover)'
        },
        buttonHover: {
          DEFAULT: 'var(--color-buttonHover)'
        },
        secondaryButtonHover: {
          DEFAULT: 'var(--color-secondaryButtonHover)'
        },
        darkerPrimary: {
          DEFAULT: 'var(--color-darkerPrimary)'
        },
        darkerSecondary: {
          DEFAULT: 'var(--color-darkerSecondary)'
        }
      },
    },
  },
  plugins: [],
};
