import * as React from 'react'

import { styled, toRem } from '@louffee/style-system'
import { isReactElement } from '@louffee/react-utils'
import Typography from '@louffee/typography'

import inputConstants from './inputConstants'

import type InputProps from './InputProps'

const InputWrapper = styled('div')<Pick<InputProps, 'size'> & { shouldPadLeft: boolean; shouldPadRight: boolean }>(
  ({ theme, size, shouldPadLeft, shouldPadRight }) => ({
    display: 'flex',
    alignItems: 'center',

    backgroundColor: theme.colors.white,
    borderWidth: toRem(2),
    borderRadius: theme.radii.medium,
    borderStyle: 'solid',
    borderColor: theme.colors.grey[99],

    paddingLeft: shouldPadLeft ? theme.spacing.extraSmall : theme.spacing.small,
    paddingRight: shouldPadRight ? theme.spacing.extraSmall : theme.spacing.small,
    paddingBlock: 0,

    transition: 'all 0.2s ease-in-out',

    marginLeft: -3,

    width: '100%',
    height: inputConstants.HEIGHT_PER_SIZE[size],

    '&:hover, &:active, &:focus, & > input:hover, & > input:active, & > input:focus': {
      borderColor: theme.colors.primary[40],
    },

    input: {
      flex: 1,
      border: 0,
      outline: 0,
      padding: 0,
      margin: 0,
      background: 'transparent',

      color: theme.colors.black,
      fontSize: theme.typography.variants.bodySmall.fontSize,
      fontFamily: theme.typography.fontFamily,
    },
  })
)

const Input: React.FC<InputProps> = ({
  startAdornment,
  endAdornment,
  onFocus,
  onBlur,
  name,
  label,
  size = 'medium',
  ...props
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>()

  const handleFocus = React.useCallback(
    (event?: React.FocusEvent<HTMLInputElement>) => {
      wrapperRef.current?.focus()

      onBlur?.(event)
    },
    [onBlur]
  )

  const handleBlur = React.useCallback(
    (event?: React.FocusEvent<HTMLInputElement>) => {
      wrapperRef.current?.blur()

      onFocus?.(event)
    },
    [onFocus]
  )

  return (
    <>
      {typeof label === 'string' ? (
        <label>
          <Typography variant="labelMedium">{label}</Typography>
        </label>
      ) : (
        label
      )}
      <InputWrapper
        ref={wrapperRef}
        size={size}
        shouldPadLeft={typeof startAdornment === 'string' || isReactElement(startAdornment)}
        shouldPadRight={typeof endAdornment === 'string' || isReactElement(endAdornment)}>
        {startAdornment}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input {...props} name={name} onFocus={handleFocus} onBlur={handleBlur} />
        {endAdornment}
      </InputWrapper>
    </>
  )
}

export default Input
