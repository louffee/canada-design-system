import * as React from 'react'
import { styled, toRem } from '@louffee/canada-style-system'
import { useMemo } from '@louffee/canada-global-hooks'

import type RangeSliderLegendProps from '../RangeSliderLegendProps'

// MARK: - Styles
const ElevatedLegend = styled('legend')<{ isThumb: boolean }>(({ theme, isThumb }) => ({
  padding: theme.spacing.small,
  backgroundColor: 'rgba(0, 0, 0, 0.02)',
  borderRadius: theme.radii.medium,

  ...theme.typography.variants.bodySmall,

  ...(isThumb && {
    fontWeight: theme.typography.fontWeightMedium,
  }),

  width: toRem(50),
}))

// MARK: - JSX
const RangeSliderDefaultLegend = ({ max, min, type, value }: RangeSliderLegendProps) => {
  const valueToDisplay = useMemo<number>(() => {
    const valuePerType: { [TType in RangeSliderLegendProps['type']]: number } = { max, min, thumb: value }

    return valuePerType[type]
  }, [max, min, type, value])

  return (
    <ElevatedLegend className='flex justify-center align-center' isThumb={type === 'thumb'}>
      {valueToDisplay}
    </ElevatedLegend>
  )
}

export default RangeSliderDefaultLegend
