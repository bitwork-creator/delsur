import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF3319',
          red2: '#E02200',
          dark: '#020202',
          cream: '#EDEDED',
        },
      },
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-dot': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
