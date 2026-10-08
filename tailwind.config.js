/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#dc143c',
        'rose-deep': '#be123c',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-grid': "linear-gradient(to right, #f0abfc08 1px, transparent 1px), linear-gradient(to bottom, #f0abfc08 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-40': '40px 40px',
      },
      boxShadow: {
        'crimson': '0 10px 40px -10px rgba(220, 20, 60, 0.3)',
        'crimson-lg': '0 20px 60px -15px rgba(220, 20, 60, 0.4)',
        'lime': '0 10px 30px -10px rgba(132, 204, 22, 0.3)',
      },
    },
  },
  plugins: [],
}
