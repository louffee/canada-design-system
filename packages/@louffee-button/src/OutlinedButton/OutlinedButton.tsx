import * as React from 'react'

import { styled } from '@louffee/style-system'
import Typography from '@louffee/typography'

import buttonConstants from '../buttonConstants'
import computeButtonGenericStyles from '../computeButtonGenericStyles'

import type OutlinedButtonProps from './OutlinedButtonProps'

// Unfortunately we've got an overlapping problem with the native attributes and
// the OutlinedButtonProps we couldn't solve yet.
// todo: fix this somehow =/
// @ts-expect-error
const StyledButton = styled('button')<OutlinedButtonProps>(({ theme, size, disabled, fullWidth }) => {
  const genericStyles = computeButtonGenericStyles(theme, { size, disabled, fullWidth })

  return {
    ...genericStyles,

    borderWidth: 1,
    borderStyle: 'solid',
    color: theme.colors.primary.main,
    borderColor: theme.colors.primary.main,
    backgroundColor: theme.colors.white,

    '&:hover': {
      color: theme.colors.white,
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
    },

    ...(disabled && {
      color: theme.colors.grey[80],
      backgroundColor: theme.colors.grey[95],
      borderColor: theme.colors.grey[90],
    }),
  }
})

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  children,
  size = 'medium',
  disabled = false,
  className = '',
  startIcon,
  endIcon,
  fullWidth = false,
  ...props
}) => (
  <StyledButton
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className={`louffee-outlined-button ${className}`}
    size={size}
    fullWidth={fullWidth}
    disabled={disabled}
    aria-disabled={disabled}>
    <Typography variant="bodySmall" aria-label={children?.toString()}>
      <i className={buttonConstants.START_ICON_CLASS_NAME}>{startIcon}</i>
      {children}
      <i className={buttonConstants.END_ICON_CLASS_NAME}>{endIcon}</i>
    </Typography>
  </StyledButton>
)

export default OutlinedButton
