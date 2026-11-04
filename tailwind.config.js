/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FFE066',
          DEFAULT: '#F5B800',
          metallic: '#D9A514',
          dark: '#B38605',
          muted: 'rgba(245, 184, 0, 0.15)',
        },
        automotive: {
          black: '#050505',
          surface: '#0D0D0D',
          card: '#141414',
          border: '#242424',
          gray: '#171717',
          lightgray: '#2C2C2C',
          textMuted: '#9CA3AF',
        }
      },
      fontFamily: {
        heading: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5B800 0%, #D9A514 50%, #B38605 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D9A514 0%, #FFE066 50%, #D9A514 100%)',
        'dark-radial': 'radial-gradient(circle at center, #171717 0%, #050505 100%)',
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(245, 184, 0, 0.15)',
        'gold-md': '0 4px 20px rgba(245, 184, 0, 0.25)',
        'gold-lg': '0 10px 30px rgba(245, 184, 0, 0.35)',
        'dark-card': '0 8px 32px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
