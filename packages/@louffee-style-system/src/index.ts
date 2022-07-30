import type { CSSObject } from '@emotion/react'

import LouTheme from './LouTheme'
import ThemeProvider from './ThemeProvider'
import CacheProvider from './CacheProvider'
import keyframes from './keyframes'
import styled from './styled'
import useTheme from './useTheme'
import withTheme from './withTheme'
import css from './css'
import toRem from './toRem'

type LouThemeSchema = typeof LouTheme

declare module '@emotion/react' {
  interface Theme extends LouThemeSchema {}
  interface DefaultTheme extends LouThemeSchema {}
}

export {
  LouTheme,
  ThemeProvider,
  CacheProvider,
  keyframes,
  styled,
  useTheme,
  withTheme,
  css,
  toRem,
  CSSObject,
  LouThemeSchema,
}
