import * as React from 'react'
import { useField } from '@louffee/canada-form'
import { useMemo, useCallback } from '@louffee/canada-global-hooks'
import Input from '@louffee/canada-input'

import type TextFieldProps from './TextFieldProps'

const TextField = React.memo<TextFieldProps>(
  ({
    name,
    startAdornment,
    endAdornment,
    label,
    format,
    parse,
    mask,
    autoComplete = 'off',
    onKeyDown,
    onChange: onChangeProperty,
    onBlur: onBlurProperty,
    onFocus: onFocusProperty,
    ...props
  }) => {
    const {
      attributes: { onChange, onBlur, onFocus, ...attributes },
      meta,
    } = useField(name, {
      parse: mask?.parse ?? parse,
      format: mask?.format ?? format,
    })

    const shouldRenderError = useMemo<boolean>(
      () =>
        // Checks whether the user has interacted with the field
        meta.touched &&
        // Checks whether the field has an error able to be rendered
        typeof meta.error === 'string' &&
        meta.error.length > 1,
      [meta.touched, meta.error],
    )

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
        onChangeProperty?.(event)
      },
      [onChange, onChangeProperty],
    )

    const handleBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        onBlur(event)
        onBlurProperty?.(event)
      },
      [onBlur, onBlurProperty],
    )

    const handleFocus = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        onFocus(event)
        onFocusProperty?.(event)
      },
      [onFocus, onFocusProperty],
    )

    const handleKeyDown = useCallback(
      (event?: React.KeyboardEvent<HTMLInputElement>) => {
        if (typeof onKeyDown === 'function') {
          onKeyDown(event)
        }

        if (typeof mask?.customKeyDownHandler === 'function') {
          mask.customKeyDownHandler(event)
        }
      },
      [mask, onKeyDown],
    )

    return (
      <Input
        /* eslint-disable react/jsx-props-no-spreading */
        {...props}
        {...attributes}
        /* eslint-enable react/jsx-props-no-spreading */
        autoComplete={autoComplete}
        label={label}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        onKeyDown={handleKeyDown}
        error={shouldRenderError ? meta.error : undefined}
      />
    )
  },
)

TextField.displayName = 'TextField'

export default TextField
