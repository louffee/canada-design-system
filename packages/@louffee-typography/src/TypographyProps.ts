import type * as React from 'react'
import type { LouThemeSchema } from '@louffee/canada-style-system'

import type TypographyWeight from './TypographyWeight'

export default interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'style' | 'className' | 'color' | 'children'> {
  variant: keyof LouThemeSchema['typography']['variants']
  children: React.ReactNode
  weight?: TypographyWeight

  className?: string
  color?: string
}
