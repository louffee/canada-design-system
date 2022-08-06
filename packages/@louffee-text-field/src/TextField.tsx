/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

import { useField } from '@louffee/form'
import { useTheme } from '@louffee/style-system'
import Input from '@louffee/input'
import Typography from '@louffee/typography'

import type TextFieldProps from './TextFieldProps'

const TextField = React.memo<TextFieldProps>(
  ({ name, startAdornment, endAdornment, size = 'medium', label, format, parse, ...props }) => {
    const { attributes, meta } = useField(name, { parse, format })
    const {
      colors: { error },
    } = useTheme()

    return (
      <>
        <Input
          {...props}
          {...attributes}
          label={label}
          size={size}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
        />
        {typeof meta.error === 'string' && meta.error.length > 1 && (
          <Typography variant="bodySmall" color={error.main}>
            {meta.error}
          </Typography>
        )}
      </>
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
