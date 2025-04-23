/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        full: '100%',
        '100px': '100px',
      },
      weight: {
        full: '100%',
      },
    },
  },
  plugins: [],
};
