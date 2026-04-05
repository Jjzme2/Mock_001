import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        coal:  '#1a1714',
        ember: {
          DEFAULT: '#c0622f',
          dark:    '#a3501f',
          light:   '#e8a47a',
          muted:   '#f5ede5',
        },
        warm:  '#f5f0e8',
        cream: '#faf7f2',
        stone: '#7a756e',
        parchment: '#e8e2d9',
      },
      spacing: {
        'nav': '72px',
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        'line-grow': {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up':   'fade-up 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'fade-in':   'fade-in 0.6s ease forwards',
        bob:         'bob 2s ease-in-out infinite',
        'line-grow': 'line-grow 0.4s ease forwards',
        marquee:     'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
