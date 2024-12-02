import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#0D8112', // Green color for title and buttons
        secondary: '#585858', // Gray color for message
        lightGrey: '#c6c6c6',
        katkinPink: '#FFB8EF',
        katkinDarkPink: '#773E75',
      },
    },
  },
  plugins: [],
} satisfies Config;
