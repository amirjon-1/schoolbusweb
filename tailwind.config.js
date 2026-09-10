/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FACC15',
          'yellow-light': '#FDE047',
          'yellow-dark': '#EAB308',
          'yellow-muted': 'rgba(250, 204, 21, 0.15)',
          'yellow-muted-strong': 'rgba(250, 204, 21, 0.25)',
        },
        neutral: {
          850: '#1C1917',
          750: '#292524',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 12px 40px -8px rgba(0, 0, 0, 0.12)',
        glow: '0 0 0 1px rgba(250, 204, 21, 0.2), 0 8px 24px -4px rgba(250, 204, 21, 0.15)',
        'glow-lg': '0 0 0 1px rgba(250, 204, 21, 0.35), 0 16px 48px -8px rgba(250, 204, 21, 0.25)',
        glass: '0 4px 24px -4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)',
        'glass-lg': '0 12px 40px -8px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.7)',
        'glass-hover': '0 20px 60px -12px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.8)',
      },
    },
  },
  plugins: [],
}
