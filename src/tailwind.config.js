module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 56s linear infinite',
      },
      colors: {
        pink: {
          audius: '#CC0FE0',
        },
        purple: {
          audius: '#7E1BCC',
        },
      },
    },
  },
  plugins: [],
}
