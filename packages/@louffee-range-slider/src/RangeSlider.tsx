import * as React from 'react'
import Typography from '@louffee/canada-typography'
import { type LouThemeSchema, styled, toRem, type CSSObject, useTheme } from '@louffee/canada-style-system'
import { useDeveloperChecks, useClasses, useCallback, useMemo } from '@louffee/canada-global-hooks'
import { useField } from '@louffee/canada-form'

import type RangeSliderProps from './RangeSliderProps'
import renderRangeSliderLegend from './renderRangeSliderLegend'

// MARK: - Constants
const THUMB_SIZE = 18

// MARK: - Styles
const createThumbStyles = ({ colors, radii, spacing, transitions, shadows }: LouThemeSchema): CSSObject => ({
  WebkitAppearance: 'none',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: colors.white,
  borderRadius: radii.rounded,

  backgroundColor: colors.white,

  padding: spacing.medium,
  boxShadow: shadows.slight,

  height: toRem(THUMB_SIZE),
  width: toRem(THUMB_SIZE),

  transition: transitions.smooth,

  cursor: 'pointer',
})

const createTrackStyles = ({ colors, radii, spacing, transitions }: LouThemeSchema): CSSObject => ({
  WebkitAppearance: 'none',

  backgroundColor: colors.primary[90],
  borderRadius: radii.rounded,

  padding: spacing.extraSmall,

  transition: transitions.smooth,
})

const Slider = styled.input(({ theme }) => {
  const thumbStyles = createThumbStyles(theme)
  const trackStyles = createTrackStyles(theme)

  return {
    // Reset the default appearance, so we can use the customized input range.
    WebkitAppearance: 'none',
    width: '100%',
    background: 'transparent',

    '&:focus': {
      outline: 'none',
    },

    /* WebKit & Blink engines */
    '&::-webkit-slider-thumb': thumbStyles,
    '&::-webkit-slider-runnable-track': trackStyles,

    /* Mozilla Firefox browsers */
    '&::-moz-range-thumb': {
      ...thumbStyles,
      padding: 'none',
      marginInline: toRem(4),
    },
    '&::-moz-range-track': {
      ...trackStyles,
      height: `calc(${toRem(THUMB_SIZE)} + ${theme.spacing.extraSmall})`,
    },
    '&::-ms-fill-upper': trackStyles,
    '&::-ms-fill-lower': trackStyles,

    /* Old and haunting Internet Explorer */
    '&::-ms-thumb': thumbStyles,
    '&::-ms-track': trackStyles,
  }
})

// MARK: - JSX
const RangeSlider = ({
  min = 0,
  max = 100,
  defaultValue = min,
  name,
  className,
  onBlur: onBlurProperty,
  onChange: onChangeProperty,
  onFocus: onFocusProperty,
  legend = false,
  label,
  ...props
}: RangeSliderProps): React.ReactElement | null => {
  const {
    attributes: { value, onBlur, onChange, onFocus },
    meta: { error },
  } = useField<number>(name, { initialValue: defaultValue })
  const { colors } = useTheme()

  useDeveloperChecks({ min, max, defaultValue }, (componentProps) => {
    if (
      // Checks whether the min and max properties are numbers
      typeof componentProps.min !== 'number' ||
      typeof componentProps.max !== 'number' ||
      // Checks whether the min value is greater than the max value
      componentProps.min > componentProps.max
    ) {
      return {
        type: 'error',
        message:
          'RangeSlider: The min and max properties must be numbers and the min value must be less than the max value.',
      }
    }
  })

  const classes = useClasses('louffee-range-slider', className, error && 'louffee-range-slider-error')

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      onBlur(event)
      onBlurProperty?.(event)
    },
    [onBlur, onBlurProperty],
  )

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event)
      onChangeProperty?.(event)
    },
    [onChange, onChangeProperty],
  )

  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      onFocus(event)
      onFocusProperty?.(event)
    },
    [onFocus, onFocusProperty],
  )

  const labelID = useMemo(() => `${name}-label`, [name])
  const hasError = useMemo(() => typeof error === 'string' || React.isValidElement(error), [error])

  return (
    <div className='flex flex-col per-width-100 gap-3'>
      <div className='flex align-center justify-between'>
        {typeof label === 'string' ? (
          <label
            htmlFor={name}
            id={labelID}
            className='louffee-range-slider-label m-b-3 fle align-center justify-between'>
            <Typography variant='labelLarge' color={hasError ? colors.error.main : colors.black}>
              {label}
            </Typography>
          </label>
        ) : (
          label
        )}
        {hasError && (
          <Typography variant='bodySmall' color={colors.error.main} className='louffee-range-slider-error-message'>
            {error}
          </Typography>
        )}
      </div>
      {legend && (
        <div className='flex align-items justify-between'>
          {renderRangeSliderLegend({ legend, max, min, type: 'min', value: Number(value) })}
          {renderRangeSliderLegend({ legend, max, min, type: 'max', value: Number(value) })}
        </div>
      )}
      <Slider
        name={name}
        type='range'
        min={min}
        max={max}
        value={value}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        className={classes}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {value !== defaultValue && legend && (
        <div className='flex align-center justify-center per-width-100'>
          {renderRangeSliderLegend({ legend, max, min, type: 'thumb', value: Number(value) })}
        </div>
      )}
    </div>
  )
}

export default RangeSlider
