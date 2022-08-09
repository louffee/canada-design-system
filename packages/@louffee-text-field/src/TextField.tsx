/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'

import { useField } from '@louffee/canada-form'
import { useTheme } from '@louffee/canada-style-system'
import Icon from '@louffee/canada-icon'
import Typography from '@louffee/canada-typography'
import Input from '@louffee/canada-input'

import type TextFieldProps from './TextFieldProps'

const TextField = React.memo<TextFieldProps>(
  ({ name, startAdornment, endAdornment, size = 'medium', label, format, parse, autoComplete = 'off', ...props }) => {
    const { attributes, meta } = useField(name, { parse, format })
    const {
      colors: { error },
    } = useTheme()

    return (
      <div className='louffee-text-field flex flex-col g-3'>
        <Input
          {...props}
          {...attributes}
          autoComplete={autoComplete}
          label={label}
          size={size}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
        />
        {typeof meta.error === 'string' && meta.error.length > 1 && (
          <div className='flex align-center radii-6 mt-3 bg-error-light px-6 per-width-100 left--2 relative'>
            <div className='mx-3 flex align-center justify-center p-3 m-4 radii-5 bg-primary-100'>
              <Icon name='lock' color={error.main} />
            </div>

            <Typography variant='bodySmall' color={error.main}>
              {meta.error}
            </Typography>
          </div>
        )}
      </div>
    )
  },
)

TextField.displayName = 'TextField'

export default TextField
