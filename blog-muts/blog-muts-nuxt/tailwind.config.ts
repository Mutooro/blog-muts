import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0a0b0f',
        },
        surface: {
          DEFAULT: '#111318',
          2: '#181b22',
          3: '#1f2330',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.07)',
          2: 'rgba(255, 255, 255, 0.12)',
        },
        text: {
          1: '#e8eaf2',
          2: '#a8abbe',
          3: '#7a7e91',
          4: '#4a4e62',
        },
        accent: {
          DEFAULT: '#6366f1',
          lt: '#818cf8',
          glow: 'rgba(99, 102, 241, 0.15)',
        },
        teal: '#14b8a6',
        amber: '#f59e0b',
        green: '#22c55e',
        coral: '#f87171',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
      },
      borderRadius: {
        DEFAULT: '8px',
        '12px': '12px',
        '20px': '20px',
      },
      animation: {
        'count-up': 'countUp 1.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
