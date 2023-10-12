import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {

      'bg_img': "url('../assets/bg1.jpg')",


    },

    backgroundColor:{
      'bg': 'rgba(9, 9, 9, 0.41)',
      'bg_2': 'rgba(9, 9, 9, 0.59)',
      'background': '#000B1D',
      'primary': '#6246EA',
      'headline': '#FFFFFE',
      'paragraph': '#A7A9BE',
      'navlink_hover': '#717171',
    },



    extend: {
      colors: {
        'background': '#000B1D',
        'primary': '#6246EA',
        'headline': '#FFFFFE',
        'paragraph': '#A7A9BE',
        'navlink_hover': '#717171',

      }
    
    },
  },
  plugins: [],
}
export default config
