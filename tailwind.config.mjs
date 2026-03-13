/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          teal: '#1d6a72',
          'teal-light': '#e6f4f5',
          'teal-glow': 'rgba(29,106,114,0.5)',
          navy: '#0a1628',
          'navy-mid': '#0d1f3c',
          warm: '#f2ede8',
          'warm-dark': '#d4cfc9',
          text: '#2d2926',
          muted: '#6b6460',
        },
      },
      boxShadow: {
        'neu-raised': '8px 8px 16px #d4cfc9, -8px -8px 16px #ffffff',
        'neu-pressed': 'inset 4px 4px 8px #d4cfc9, inset -4px -4px 8px #ffffff',
        'neu-sm': '4px 4px 8px #d4cfc9, -4px -4px 8px #ffffff',
        'teal-glow': '0 0 24px rgba(29,106,114,0.5)',
      },
    },
  },
  plugins: [],
};
