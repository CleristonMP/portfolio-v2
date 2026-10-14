/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0b0e14',
        surfaceLow: '#10131a',
        surfaceHigh: '#22262f',
        cyan: '#69daff',
        violet: '#ac89ff',
        ink: '#ecedf6',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
