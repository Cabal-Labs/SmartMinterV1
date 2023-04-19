/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      '1100': '1100px',
      '550': '550px',
      'mob': '75%',
    },
    maxHeight: {
      'mob': '75%',
    },
    minWidth: {
      'none': 'none',
    },
    Width:{
      '300': '300px',
      
    },

    extend: {
      colors: {
        'nav-color': 'rgba(0, 0, 0, 0.4)',
        'b-color-hover': 'rgba(255, 255, 255, 0.2)',
        'b-color-active': 'rgba(255, 255, 255, 0.4)',
        'b-color-mobile': 'rgba(217, 217, 217, 0.35);',
        'b-color-0.7': 'rgba(217, 217, 217, 0.7)',
        'smart-blue': 'rgba(0, 42, 50, 1)',
        'smart-blue-hover': 'rgba(0, 42, 50, 0.7)',
      }

    },
  },
  plugins: [],
}

