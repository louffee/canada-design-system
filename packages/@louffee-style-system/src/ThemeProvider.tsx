import * as React from 'react'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import LouTheme from './LouTheme'

interface Props {
  children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => (
  <EmotionThemeProvider theme={LouTheme}>{children}</EmotionThemeProvider>
)

export default ThemeProvider
