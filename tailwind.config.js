/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './App.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  // removed blog folder references after blog removal
    './*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#5c4942',
        'brand-accent': '#f8a9a4',
        'brand-light': '#dbc9c4',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'libre-baskerville': ['"Libre Baskerville"', 'serif'],
        'lora': ['Lora', 'serif'],
        'source-serif': ['"Source Serif Pro"', 'serif'],
        'amatic': ['"Amatic SC"', 'cursive'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 80s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    }
  },
  plugins: [],
}
