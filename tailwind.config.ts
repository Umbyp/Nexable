import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:          '#0B0F19',
        'surface':   '#111827',
        'surface-2': '#1F2937',
        'surface-3': '#374151',
        line:        '#1F2937',
        'line-2':    '#374151',

        accent: {
          DEFAULT: '#4F8CFF',
          400: '#73A5FF',
          500: '#4F8CFF',
          600: '#2563EB',
        },
        accent2: {
          DEFAULT: '#8B5CF6',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        accent3: { DEFAULT: '#00D4FF' },

        text: {
          DEFAULT: '#F9FAFB',
          1: '#F9FAFB',
          2: '#94A3B8',
          3: '#64748B',
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
        'glow-accent':  '0 0 0 1px rgba(79,140,255,0.3), 0 12px 40px rgba(79,140,255,0.25)',
        'glow-accent2': '0 0 0 1px rgba(139,92,246,0.3), 0 12px 40px rgba(139,92,246,0.25)',
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
