/** @type {import('tailwindcss').Config} */

module.exports = {
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
          DEFAULT: '#0D9488',
        },
        secondary: {
          DEFAULT: '#374151',
        },
        accent: {
          DEFAULT: '#E5E7EB',
        },
        textPrimary: {
          DEFAULT: '#1F2937',
        },
      }
    },
  },
  plugins: [],
};
