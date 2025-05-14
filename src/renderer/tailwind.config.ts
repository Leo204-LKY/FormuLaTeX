import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '1080px': '1080px',
        '100px': '100px',
      },
    },
  },
  plugins: [],
};

export default config;
