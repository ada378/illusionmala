/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FCFAF7',
          100: '#F5EFE6',
          200: '#EADECC',
          300: '#DAC6B0',
          400: '#C7AC92',
        },
        saffron: {
          500: '#DC2626',
          600: '#B91C1C',
          700: '#991B1B',
          800: '#7F1D1D',
          900: '#450A0A',
        },
        amber: {
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
          800: '#78350F',
        },
        royal: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.03)' },
        },
      },
      boxShadow: {
        'warm-sm': '0 2px 10px rgba(180, 83, 9, 0.08)',
        'warm-md': '0 4px 20px rgba(180, 83, 9, 0.12)',
        'warm-lg': '0 10px 30px rgba(180, 83, 9, 0.18)',
        'card': '0 10px 30px -5px rgba(15, 23, 42, 0.05)',
      },
    },
  },
  plugins: [],
}
