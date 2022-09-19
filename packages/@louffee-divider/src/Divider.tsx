import * as React from 'react'
import { styled, useTheme, toRem, type CSSObject } from '@louffee/canada-style-system'
import { useDeveloperChecks, useMemo } from '@louffee/canada-global-hooks'

import type DividerProps from './DividerProps'

// MARK: - Styles

const propertyNameByDirection: {
  [Attribute in DividerProps['direction']]: keyof CSSObject
} = {
  horizontal: 'height',
  vertical: 'width',
}

const propertyNameOfContrastToFill: {
  [Attribute in DividerProps['direction']]: keyof CSSObject
} = {
  horizontal: 'width',
  vertical: 'height',
}

const Separator = styled('div')<Required<Pick<DividerProps, 'direction' | 'color' | 'weight'>>>(
  ({ color, direction, weight }) => {
    const borderProperty = propertyNameByDirection[direction]
    const fillProperty = propertyNameOfContrastToFill[direction]

    return {
      backgroundColor: color,
      [borderProperty]: toRem(weight),
      [fillProperty]: '100%',
    }
  },
)

// MARK: - JSX
const Divider = React.memo<DividerProps>(({ direction, weight, color }) => {
  useDeveloperChecks({ direction, weight }, (componentProps) => {
    if (componentProps.weight > 1) {
      return {
        message: [
          'Divider: Horizontal dividers cannot have a weight smaller than 1 pixel-sized value.',
          'Have in mind that the weight will be converted to rem units.',
        ].join(' '),
        type: 'error',
      }
    }

    const isDirectionValid = ['horizontal', 'vertical'].includes(componentProps.direction)

    if (!isDirectionValid) {
      return {
        message: 'Divider: Invalid direction value. It must be either "horizontal" or "vertical".',
        type: 'error',
      }
    }
  })

  const {
    colors: { grey },
  } = useTheme()
  const colorOrThemeDrivenDefault = useMemo(() => color ?? grey[90], [color, grey])

  return <Separator color={colorOrThemeDrivenDefault} direction={direction} weight={weight} />
})

export default Divider
