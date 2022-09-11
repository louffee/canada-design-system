import LouTheme from './LouTheme'

type LouThemeSchema = typeof LouTheme

declare module '@emotion/react' {
  interface Theme extends LouThemeSchema {}
  interface DefaultTheme extends LouThemeSchema {}
}

export { LouThemeSchema }

export { default as LouTheme } from './LouTheme'
export { default as ThemeProvider } from './ThemeProvider'
export { default as CacheProvider } from './CacheProvider'
export { default as keyframes } from './keyframes'
export { default as styled } from './styled'
export { default as useTheme } from './useTheme'
export { default as withTheme } from './withTheme'
export { default as css } from './css'
export { default as toRem } from './toRem'
export type { CSSObject } from '@emotion/react'
