import * as React from 'react'
import { styled } from '@louffee/canada-style-system'

import elementsPerVariantMap from './elementsPerVariantMap'
import type TypographyProps from './TypographyProps'

// MARK: - Styles
const Span = styled('span')<
  Required<Pick<TypographyProps, 'variant' | 'color'>> & Partial<Pick<TypographyProps, 'weight'>>
>(({ variant, theme, color, weight }) => {
  const { fontWeight, ...settings } = theme.typography.variants[variant]

  return {
    ...settings,
    fontWeight: `${weight ?? fontWeight} !important`,
    fontFamily: theme.typography.fontFamily,
    color,
  }
})

// MARK: - JSX
const Typography = React.memo<TypographyProps>(
  ({ variant, children, className = '', color = 'inherit', weight = 400, ...props }) => {
    const elementType = React.useMemo<React.ElementType>(
      () => elementsPerVariantMap[variant] as React.ElementType,
      [variant],
    )

    return (
      <Span
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        weight={weight}
        as={elementType}
        variant={variant}
        className={`louffee-typography-${variant} ${className}`}
        color={color}>
        {children}
      </Span>
    )
  },
)

Typography.displayName = 'Typography'

export default Typography
