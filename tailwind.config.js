/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oryon: {
          navy: '#061B35',
          deep: '#082B4C',
          tech: '#0877B9',
          cyan: '#16C8E8',
          coral: '#FF684A',
          coralHover: '#FF5430',
          grey: '#D9E4ED',
          darkBg: '#041021',
          surface: '#0A2544',
          surfaceLight: '#0E335C',
          border: 'rgba(22, 200, 232, 0.18)',
          borderSubtle: 'rgba(8, 119, 185, 0.25)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(22, 200, 232, 0.35)',
        'glow-blue': '0 0 35px -5px rgba(8, 119, 185, 0.45)',
        'glow-coral': '0 0 25px -3px rgba(255, 104, 74, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
