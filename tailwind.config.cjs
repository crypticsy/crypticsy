/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'bg-primary': 'var(--bg-primary)',
          'bg-secondary': 'var(--bg-secondary)',
          'text-primary': 'var(--text-primary)',
          'text-secondary': 'var(--text-secondary)',
          'border-primary': 'var(--border-color)',
        },
        keyframes: {
          'blink': {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0' },
          },
          'fade-in-up': {
            '0%': {
              opacity: '0',
              transform: 'translateY(30px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            },
          },
          'fade-in': {
            '0%': {
              opacity: '0'
            },
            '100%': {
              opacity: '1'
            },
          },
        },
        animation: {
          'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
          'fade-in': 'fade-in 0.6s ease-out forwards',
        }
      }
    },
    plugins: [],
  }
  