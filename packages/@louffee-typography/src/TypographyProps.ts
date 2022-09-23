import type * as React from 'react'

import type TypographyWeight from './TypographyWeight'
import type TypographyVariant from './TypographyVariant'

export default interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'style' | 'className' | 'color' | 'children'> {
  variant: TypographyVariant
  children: React.ReactNode
  weight?: TypographyWeight

  className?: string
  color?: string
}
