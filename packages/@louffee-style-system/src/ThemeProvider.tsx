import * as React from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import LouTheme from './LouTheme'
import type ThemeProviderProps from './ThemeProviderProps'

const ThemeProvider = ({ children }: ThemeProviderProps): React.ReactElement => (
  <EmotionThemeProvider theme={LouTheme}>{children}</EmotionThemeProvider>
)

export default ThemeProvider
