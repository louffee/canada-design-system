import type * as React from 'react'

import type TypographyWeight from './TypographyWeight'
import type TypographyVariant from './TypographyVariant'
import type TypographyElementTypeAs from './TypographyElementTypeAs'

interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'style' | 'className' | 'color' | 'children'> {
  variant: TypographyVariant
  children: React.ReactNode
  weight?: TypographyWeight
  as?: TypographyElementTypeAs

  className?: string
  color?: string
}

export default TypographyProps
