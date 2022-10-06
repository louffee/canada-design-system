import * as React from 'react'
import { styled } from '@louffee/canada-style-system'
import { useClasses } from '@louffee/canada-global-hooks'

import type CardProps from './CardProps'

// MARK: - Styles
type CardRootProps = Required<Pick<CardProps, 'radii' | 'elevation'>>
const CardRoot = styled('div')<CardRootProps>(({ theme, radii, elevation }) => ({
  backgroundColor: theme.colors.white,

  borderRadius: theme.radii[radii],
  boxShadow: theme.shadows[elevation],

  padding: theme.spacing.extraLarge,
}))

// MARK: - JSX
const Card = React.memo<CardProps>(({ children, radii, elevation, className, ...attributes }) => {
  const classes = useClasses('louffee-card', className)

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CardRoot className={classes} radii={radii} elevation={elevation} {...attributes}>
      {children}
    </CardRoot>
  )
})

Card.displayName = 'Card'

export default Card
