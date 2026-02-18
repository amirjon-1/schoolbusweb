export const theme = {
  colors: {
    brandYellow: '#FACC15',
    brandYellowLight: '#FDE047',
    brandYellowDark: '#EAB308',
    brandYellowMuted: 'rgba(250, 204, 21, 0.15)',
    white: '#FFFFFF',
    black: '#0C0A09',
    gray: {
      50: '#FAFAF9',
      100: '#F5F5F4',
      200: '#E7E5E4',
      300: '#D6D3D1',
      400: '#A8A29E',
      500: '#78716C',
      600: '#57534E',
      700: '#44403C',
      800: '#292524',
      900: '#1C1917',
    },
  },
  spacing: {
    section: 'clamp(4rem, 8vw, 6rem)',
    container: 'min(1200px, calc(100vw - 2rem))',
  },
  radii: {
    '2xl': '1rem',
    xl: '0.75rem',
  },
} as const
