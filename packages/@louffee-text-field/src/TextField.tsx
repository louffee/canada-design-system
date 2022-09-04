import * as React from 'react'

import { useField } from '@louffee/canada-form'
import Input from '@louffee/canada-input'

import type TextFieldProps from './TextFieldProps'

const TextField = React.memo<TextFieldProps>(
  ({ name, startAdornment, endAdornment, label, format, parse, mask, autoComplete = 'off', ...props }) => {
    const { attributes, meta } = useField(name, { parse: mask?.parse ?? parse, format: mask?.format ?? format })

    const shouldRenderError = React.useMemo<boolean>(
      () =>
        // Checks whether the user has interacted with the field
        meta.touched &&
        // Checks whether the field has an error able to be rendered
        typeof meta.error === 'string' &&
        meta.error.length > 1,
      [meta.touched, meta.error],
    )

    return (
      <Input
        {...props}
        {...attributes}
        autoComplete={autoComplete}
        label={label}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        error={shouldRenderError ? meta.error : undefined}
      />
    )
  },
)

TextField.displayName = 'TextField'

export default TextField
