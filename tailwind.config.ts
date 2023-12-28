import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        primaryDark: 'rgba(255,255,255, 0.7);',
        secondary: '#6DE4E8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        radialBlack:
          'linear-gradient(225.95deg, #ffffff 0%, #6d6d6d 0%, #11101d 91.61%)',
        blueRadial:
          'linear-gradient(90deg, #6de4e8 0%, rgba(0, 178, 218, 0.6) 95.83%)',
        blueLight:
          'linear-gradient(90deg, #6de4e8 0%, rgba(255, 255, 255, 0.86) 95.83% )',
      },
      boxShadow: {
        dark: '0px 20px 100px -10px rgba(66, 71, 91, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
