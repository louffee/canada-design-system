import toRem from './toRem'

const FONT_WEIGHT_BOLD = 'bold'
const FONT_WEIGHT_SEMIBOLD = '600'
const FONT_WEIGHT_MEDIUM = '500'
const FONT_WEIGHT_REGULAR = '400'
const FONT_WEIGHT_LIGHT = '300'
const FONT_WEIGHT_BLACK = '900'

const LouTheme = {
  colors: {
    primary: {
      main: '#A92A2A',
      '100': '#FFFFFF',
      '99': '#FFFBFF',
      '95': '#FFEDEB',
      '90': '#FFE5E5',
      '80': '#FFB3AD',
      '70': '#FF8981',
      '60': '#F3605A',
      '50': '#D14743',
      '40': '#D14743',
      '30': '#8D1419',
      '20': '#68000A',
      '10': '#410004',
      '0': '#000000',
    },
    secondary: {
      main: '#E6E6E6',
      '100': '#FFFFFF',
      '99': '#F6FEFF',
      '95': '#D0F8FF',
      '90': '#97F0FF',
      '80': '#4FD8EB',
      '70': '#4FD8EB',
      '60': '#00A0B0',
      '50': '#008391',
      '40': '#008391',
      '30': '#004F58',
      '20': '#00363D',
      '10': '#001F24',
      '0': '#000000',
    },
    grey: {
      main: '#E6E6E6',
      '100': '#FFFFFF',
      '99': '#EEE',
      '95': '#DDD',
      '90': '#CCC',
      '80': '#BBB',
      '70': '#AAA',
      '60': '#999',
      '50': '#888',
      '40': '#777',
      '30': '#666',
      '20': '#555',
      '10': '#444',
      '0': '#333',
    },
    error: {
      main: '#BA1A1A',
      light: '#FFE5E5',
      dark: '#A92A2A',
    },
    white: '#fefefe',
    black: '#141414',
  },
  radii: {
    small: 4,
    medium: 7,
    large: 12,
    rounded: 9999,
  },
  spacing: {
    extraSmall: toRem(4),
    small: toRem(6),
    medium: toRem(8),
    large: toRem(12),
    extraLarge: toRem(16),
    huge: toRem(32),
    massive: toRem(48),
  },
  shadows: {
    slight: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  },
  transitions: {
    smooth: 'all 300ms ease-in-out',
    timing: '200ms',
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Inter, Helvetica, Arial, "Apple Color Emoji", sans-serif',
    fontWeightBold: FONT_WEIGHT_BOLD,
    fontWeightMedium: FONT_WEIGHT_MEDIUM,
    fontWeightRegular: FONT_WEIGHT_REGULAR,
    fontWeightLight: FONT_WEIGHT_LIGHT,

    variants: {
      displayLarge: {
        fontSize: 57,
        fontWeight: FONT_WEIGHT_REGULAR,
        lineHeight: '100% !important',
      },
      displayMedium: {
        fontSize: 45,
        fontWeight: FONT_WEIGHT_REGULAR,
        lineHeight: '100% !important',
      },
      displaySmall: {
        fontSize: 36,
        fontWeight: FONT_WEIGHT_REGULAR,
        lineHeight: '100% !important',
      },
      headlineLarge: {
        fontSize: 32,
        fontWeight: FONT_WEIGHT_BLACK,
        lineHeight: '100% !important',
      },
      headlineMedium: {
        fontSize: 28,
        fontWeight: FONT_WEIGHT_SEMIBOLD,
        lineHeight: '100% !important',
      },
      headlineSmall: {
        fontSize: 24,
        fontWeight: FONT_WEIGHT_SEMIBOLD,
        lineHeight: '100% !important',
      },
      titleLarge: {
        fontSize: 22,
        fontWeight: FONT_WEIGHT_BLACK,
        lineHeight: '100% !important',
      },
      titleMedium: {
        fontSize: 16,
        fontWeight: FONT_WEIGHT_BOLD,
        lineHeight: '100% !important',
      },
      titleSmall: {
        fontSize: 14,
        fontWeight: FONT_WEIGHT_BOLD,
        lineHeight: '100% !important',
      },
      labelLarge: {
        fontSize: 14,
        fontWeight: FONT_WEIGHT_SEMIBOLD,
        lineHeight: '110% !important',
      },
      labelMedium: {
        fontSize: 12,
        fontWeight: FONT_WEIGHT_REGULAR,
        lineHeight: '110% !important',
      },
      labelSmall: {
        fontSize: 11,
        fontWeight: FONT_WEIGHT_REGULAR,
        lineHeight: '110% !important',
      },
      bodyLarge: {
        fontSize: 16,
        fontWeight: FONT_WEIGHT_REGULAR,
        lineHeight: '110% !important',
      },
      bodyMedium: {
        fontSize: 14,
        fontWeight: FONT_WEIGHT_REGULAR,
        lineHeight: '110% !important',
      },
      bodySmall: {
        fontSize: 12,
        fontWeight: FONT_WEIGHT_REGULAR,
        lineHeight: '110% !important',
      },
    },
  },
}

export default LouTheme
