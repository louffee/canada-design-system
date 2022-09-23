import type * as React from 'react'

import type RangeSliderLegendComponentType from './RangeSliderLegendComponentType'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type RangeSliderLegendProps from './RangeSliderLegendProps'
import type RangeSliderRenderFunction from './RangeSliderLegendRenderFunction'

type HTMLInputAttributes = React.InputHTMLAttributes<HTMLInputElement>
type OmittedHTMLInputAttributes = Omit<
  HTMLInputAttributes,
  | 'value'
  | 'min'
  | 'max'
  | 'type'
  | 'autoComplete'
  | 'autoCorrect'
  | 'autoSave'
  | 'pattern'
  | 'spellCheck'
  | 'name'
  | 'multiple'
  | 'accept'
>
type RequiredPickedHTMLInputAttributes = Required<Pick<HTMLInputAttributes, 'name'>>

interface RangeSliderProps extends OmittedHTMLInputAttributes, RequiredPickedHTMLInputAttributes {
  /**
   * The minimum value of the slider.   It defaults to 0.
   *
   * @default 0
   */
  min?: number

  /**
   * The maximum value of the slider.   It defaults to 100.
   *
   * @default 100
   */
  max: number

  /**
   * The default value of the slider.  It defaults to the minimum value.
   *
   * @default min
   *
   * @see {@link min}
   */
  defaultValue?: number

  /**
   * The legend is a small description of the maximum, minimum and current values.
   *
   * Whether a `true` is passed, the default legend is used.   But it is also
   * allowed to declare a render function with the given {@link RangeSliderLegendProps}
   * or a custom component type with the given {@link RangeSliderLegendProps}.
   *
   * @see {@link RangeSliderLegendProps}
   * @see {@link RangeSliderLegendComponentType}
   *
   * @default false
   */
  legend?: boolean | RangeSliderRenderFunction | RangeSliderLegendComponentType

  label?: React.ReactNode
}

export default RangeSliderProps
