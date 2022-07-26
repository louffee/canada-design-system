import * as React from 'react'
import { styled, useTheme } from '@louffee/canada-style-system'
import { useMemo } from '@louffee/canada-global-hooks'
import Icon from '@louffee/canada-icon'
import Typography from '@louffee/canada-typography'

import type InputProps from './InputProps'

// MARK: - Styles
const InputContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  height: 'fit-content',
})

const InputBody = styled('div')<{ hasError: boolean }>(({ theme, hasError }) => ({
  display: 'flex',
  flex: 1,

  boxSizing: 'border-box',

  backgroundColor: theme.colors.white,

  height: 40,

  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.colors.grey[70],

  borderRadius: 7,
  padding: theme.spacing.medium,

  transition: '300ms',

  fontSize: 14,
  lineHeight: '110%',

  input: {
    flex: 1,
    border: 'none !important',
    outline: 'none !important',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    color: 'inherit',
    background: 'transparent !important',

    height: '100%',
  },

  'input::placeholder': {
    color: theme.colors.grey[50],
  },

  '&:focus, &:hover, &:active, &:focus-within': {
    borderColor: theme.colors.primary[60],
    backgroundColor: theme.colors.primary[95],
  },

  ...(hasError && {
    borderColor: theme.colors.error.main,
    backgroundColor: theme.colors.error.light,
  }),
}))

// MARK: - JSX
const Input = ({
  name,
  startAdornment,
  endAdornment,
  placeholder,
  label,
  error,
  ...props
}: InputProps): React.ReactElement | undefined => {
  const { colors } = useTheme()

  const hasError = useMemo(() => typeof error === 'string' && error.length > 0, [error])
  const labelID = useMemo(() => `${name}-label`, [name])

  return (
    <InputContainer className='louffee-input'>
      {typeof label === 'string' ? (
        <label
          htmlFor={name}
          id={labelID}
          className='louffee-input-label m-b-3 flex align-center justify-between'
          aria-label={label?.toString()}>
          {typeof label === 'string' ? (
            <Typography variant='labelLarge' color={hasError ? colors.error.main : colors.black}>
              {label}
            </Typography>
          ) : (
            label
          )}
          {hasError && (
            <Typography variant='bodySmall' color={colors.error.main} className='louffee-input-error-message'>
              {error}
            </Typography>
          )}
        </label>
      ) : (
        label
      )}
      <InputBody hasError={hasError}>
        {startAdornment}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input name={name} aria-labelledby={labelID} placeholder={placeholder} {...props} />
        {endAdornment}
        {hasError && (
          <i
            className='border-2 border-solid border-error-main radii-50 h-18 w-18 flex align-center justify-center louffee-input-error-icon'
            title='There is an error. Please read the information below the field'>
            <Icon name='exclamation-circle-outlined' color={colors.error.main} size={14} />
          </i>
        )}
      </InputBody>
    </InputContainer>
  )
}

export default Input
