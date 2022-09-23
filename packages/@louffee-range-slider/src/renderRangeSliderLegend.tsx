import * as React from 'react'
import { isReactComponent } from '@louffee/canada-react-utils'

import RangeSliderDefaultLegend from './RangeSliderDefaultLegend/RangeSliderDefaultLegend'
import type RangeSliderLegendProps from './RangeSliderLegendProps'
import type RangeSliderProps from './RangeSliderProps'
import type RangeSliderLegendComponentType from './RangeSliderLegendComponentType'
import RangeSliderLegendRenderFunction from './RangeSliderLegendRenderFunction'

function renderRangeSliderLegend({
  legend,
  max,
  min,
  type,
  value,
}: Required<Pick<RangeSliderProps, 'min' | 'max' | 'legend'>> &
  Required<Pick<RangeSliderLegendProps, 'value' | 'type'>>): React.ReactElement | undefined {
  if (legend === true) {
    return <RangeSliderDefaultLegend value={value} max={max} min={min} type={type} />
  }

  if (isReactComponent(legend)) {
    const LegendComponent = legend as RangeSliderLegendComponentType

    return <LegendComponent value={value} max={max} min={min} type={type} />
  }

  if (typeof legend === 'function') {
    const legendRenderFunction = legend as RangeSliderLegendRenderFunction

    return legendRenderFunction({ max, min, type, value })
  }
}

export default renderRangeSliderLegend
