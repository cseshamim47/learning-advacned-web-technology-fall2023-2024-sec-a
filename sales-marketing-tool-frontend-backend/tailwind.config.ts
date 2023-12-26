import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        popns: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto-condensed)'],
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
