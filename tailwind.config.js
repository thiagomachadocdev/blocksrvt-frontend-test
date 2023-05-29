/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans'],
    },
    extend: {
      colors: {
        'primary-text': '#202020',
        background: '#FBFBFB',
        border: '#CCCCCC',
        gray: '#242424',
        'gray-2': '#E9E9E9',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(90deg, rgba(161, 28, 243, 0.6) 0%, rgba(216, 53, 197, 0.6) 100%);',
        gray: '#242424',
      },
    },
  },
  plugins: [],
}

