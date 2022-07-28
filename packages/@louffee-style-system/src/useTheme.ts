import { useTheme as useEmotionTheme } from '@emotion/react'

import LouTheme from './LouTheme'

function useTheme(): typeof LouTheme {
  const context = useEmotionTheme()

  if (typeof context === 'undefined') {
    throw new Error('useTheme(): no ThemeProvider could be found around the useTheme() call.')
  }

  return context
}

export default useTheme
