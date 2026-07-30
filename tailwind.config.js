/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005b9f', // Modern blue (Patient)
          50: '#f0f7ff',
          100: '#e0f0fe',
          500: '#0070c0',
          600: '#005b9f',
          900: '#003a6c',
        },
        docPrimary: {
          DEFAULT: '#0EA5E9',
          50: '#F0F9FF',
          100: '#E0F2FE',
          900: '#0C4A6E',
        },
        teal: {
          DEFAULT: '#0d9488',
          50: '#f0fdfa',
          500: '#14b8a6',
          900: '#134e4a',
        },
        docSecondary: '#14B8A6',
        secondary: '#E8846B',
        background: '#F8FAFC',
        doctorAccent: '#6366F1',
        success: '#22C55E',
        alert: '#F59E0B',
        warning: '#F59E0B',
        danger: '#EF4444',
        emergency: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 30px rgba(239, 68, 68, 0.8)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
