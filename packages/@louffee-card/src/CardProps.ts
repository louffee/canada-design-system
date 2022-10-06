import type * as React from 'react'

import type CardRadii from './CardRadii'
import type CardElevation from './CardElevation'

type HTMLDivElementAttributes = React.HTMLAttributes<HTMLDivElement>

interface CardProps extends HTMLDivElementAttributes {
  children: React.ReactNode

  elevation?: CardElevation
  radii?: CardRadii
}

export default CardProps
