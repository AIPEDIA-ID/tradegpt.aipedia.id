/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'w-4', 'w-5', 'h-4', 'h-5',
    'text-orange-400', 'text-green-400',
    'from-orange-400', 'to-orange-600',
    'from-orange-500', 'to-orange-700',
    // Button classes
    'block', 'bg-gradient-to-r', 'text-white', 'font-medium', 'rounded-lg',
    'transition-all', 'duration-200', 'hover:shadow-lg', 'hover:shadow-orange-500/25',
    'text-center', 'bg-white/10', 'hover:bg-white/20', 'border', 'border-white/20',
    'hover:border-orange-500/30',
    // Card classes
    'group', 'p-6', 'rounded-xl', 'bg-gradient-to-br', 'from-orange-500/10',
    'to-orange-600/5', 'backdrop-blur-sm', 'border-orange-500/30',
    'hover:border-orange-500/50', 'relative', 'overflow-hidden',
    'bg-white/5', 'border-white/10', 'hover:border-white/20'
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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