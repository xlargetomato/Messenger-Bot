import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6F4FF',
          100: '#CDEAFE',
          200: '#9AD4FE',
          300: '#6BBFFD',
          400: '#35AAFD',
          500: '#0394FC',
          600: '#0277CA',
          700: '#025997',
          800: '#013B65',
          900: '#011E32',
        },
        azure: {
          50: '#E6F4FF',
          100: '#CDEAFE',
          200: '#9AD4FE',
          300: '#6BBFFD',
          400: '#35AAFD',
          500: '#0394FC',
          600: '#0277CA',
          700: '#025997',
          800: '#013B65',
          900: '#001523',
        },
      },
    },
  },
  plugins: [],
}
export default config
