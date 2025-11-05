import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './menu/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        // reduce body (base) by 1px: default 16px -> 15px
        base: ['0.9375rem', { lineHeight: '1.5' }], // 15px
        // reduce 2xl by 2px: default 24px -> 22px
        '2xl': ['1.375rem', { lineHeight: '1.5' }], // 22px
        // reduce 3xl by 2px: default 30px -> 28px
        '3xl': ['1.75rem', { lineHeight: '1.25' }], // 28px
      }
    }
  },
  plugins: []
} satisfies Config
