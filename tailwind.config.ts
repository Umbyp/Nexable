import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // === Nexable v1 — Dark + Phosphor Lime ===
        bg:          '#0A0A0D',
        'surface':   '#111114',
        'surface-2': '#1A1A1F',
        'surface-3': '#22232A',
        line:        '#22232A',
        'line-2':    '#2C2D35',

        accent: {
          DEFAULT: '#C5FA5A',
          400: '#C5FA5A',
          500: '#A8E33B',
          600: '#88BF27',
        },
        accent2: {
          DEFAULT: '#9B7BFF',
          400: '#B59BFF',
          500: '#9B7BFF',
          600: '#8261F0',
        },
        accent3: { DEFAULT: '#FF8A4C' },

        text: {
          DEFAULT: '#E8E8EC',
          1: '#E8E8EC',
          2: '#9CA0A8',
          3: '#5C5F68',
        },
      },
      fontFamily: {
        sans:  ['Geist', '"IBM Plex Sans Thai"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono:  ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display':   ['clamp(56px, 9vw, 128px)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'h-section': ['clamp(40px, 5vw, 64px)',  { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      boxShadow: {
        'soft':         '0 1px 2px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)',
        'card':         '0 4px 16px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.5)',
        'lift':         '0 24px 60px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.4)',
        'glow-accent':  '0 0 0 1px rgba(197,250,90,0.3), 0 12px 40px rgba(197,250,90,0.25)',
        'glow-accent2': '0 0 0 1px rgba(155,123,255,0.3), 0 12px 40px rgba(155,123,255,0.25)',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'reveal-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'live-blink': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
        'typing': {
          '0%, 80%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '40%':           { opacity: '1',   transform: 'scale(1)'   },
        },
        'marquee': {
          'from': { transform: 'translateX(0)' },
          'to':   { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'reveal-up':  'reveal-up 0.8s ease-out forwards',
        'live-blink': 'live-blink 1.4s ease-in-out infinite',
        'typing':     'typing 1.4s ease-in-out infinite',
        'marquee':    'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
