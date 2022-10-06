import * as React from 'react'
import { styled } from '@louffee/canada-style-system'

import type TypographyProps from './TypographyProps'

// MARK: - Styles
type TextProps = Required<Pick<TypographyProps, 'variant' | 'color'>> & Partial<Pick<TypographyProps, 'weight'>>
const Text = styled('span')<TextProps>(({ variant, theme, color, weight }) => {
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
  ({ variant, children, className = '', color = 'inherit', weight, as = 'span', ...props }) => {
    return (
      <Text
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        weight={weight}
        as={as}
        variant={variant}
        className={`louffee-typography-${variant} ${className}`}
        color={color}>
        {children}
      </Text>
    )
  },
)

Typography.displayName = 'Typography'

export default Typography
