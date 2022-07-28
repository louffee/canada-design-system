import * as React from 'react'

import { styled } from '@louffee/style-system'

import elementsPerVariantMap from './elementsPerVariantMap'

import type TypographyProps from './TypographyProps'

const InnerTypography = styled('span')<Required<Pick<TypographyProps, 'variant'>>>(({ variant, theme }) => ({
  ...theme.typography.variants[variant],
}))

const Typography = React.memo<TypographyProps>(({ variant, children, className = '', color = 'inherit', ...props }) => {
  const elementType = React.useMemo<React.ElementType>(
    () => elementsPerVariantMap[variant] as React.ElementType,
    [variant]
  )

  return (
    <InnerTypography {...props} variant={variant} as={elementType}>
      {children}
    </InnerTypography>
  )
})

Typography.displayName = 'Typography'

export default Typography
