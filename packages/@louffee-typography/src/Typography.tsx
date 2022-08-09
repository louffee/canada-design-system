import * as React from 'react'

import { styled } from '@louffee/canada-style-system'

import elementsPerVariantMap from './elementsPerVariantMap'

import type TypographyProps from './TypographyProps'

const Span = styled('span')<Required<Pick<TypographyProps, 'variant' | 'color'>>>(({ variant, theme, color }) => ({
  ...theme.typography.variants[variant],
  fontFamily: theme.typography.fontFamily,
  color,
}))

const Typography = React.memo<TypographyProps>(({ variant, children, className = '', color = 'inherit', ...props }) => {
  const elementType = React.useMemo<React.ElementType>(
    () => elementsPerVariantMap[variant] as React.ElementType,
    [variant],
  )

  return (
    <Span
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      variant={variant}
      as={elementType}
      className={`louffee-typography-${variant} ${className}`}
      color={color}>
      {children}
    </Span>
  )
})

Typography.displayName = 'Typography'

export default Typography
