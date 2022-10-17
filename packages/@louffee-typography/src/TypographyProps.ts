import type * as React from 'react'

import type TypographyWeight from './TypographyWeight'
import type TypographyVariant from './TypographyVariant'
import type TypographyElementTypeAs from './TypographyElementTypeAs'

type HTMLElementAttributes = React.HTMLAttributes<HTMLElement>
type OmittedHTMLElementAttributes = Omit<HTMLElementAttributes, 'style' | 'className' | 'color' | 'children'>

interface TypographyProps extends OmittedHTMLElementAttributes {
  variant: TypographyVariant
  children: React.ReactNode
  weight?: TypographyWeight
  as?: TypographyElementTypeAs

  className?: string
  color?: string
}

export default TypographyProps
