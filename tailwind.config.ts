import type { Config } from 'tailwindcss'
import { COLORS } from './src/styles/theme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      ibmPlexSansThaiLooped: ['IBM Plex Sans Thai Looped', 'sans-serif'],
    },
    extend: {
      colors: COLORS,
    },
  },
  plugins: [],
}
export default config
