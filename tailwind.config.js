/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { darkSlateGray: '#112C41' },
      fontFamily: { oswald: 'Oswald', sans: ' sans-serif' },
    },
  },
  plugins: [],
};
