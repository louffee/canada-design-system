import * as React from 'react'

import { LouTheme } from '@louffee/style-system'

export default interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'style' | 'className' | 'color' | 'children'> {
  variant: keyof typeof LouTheme['typography']['variants']
  children: React.ReactNode

  className?: string
  color?: string
}
