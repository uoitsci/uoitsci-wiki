import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'darker-blue' : '#042A4B',
        'future-blue': '#003C71',
        'medium-blue' : '#005793',
        'simcoe-blue' : '#0077CA',
        'tech-tangerine' : '#E75D2A'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
