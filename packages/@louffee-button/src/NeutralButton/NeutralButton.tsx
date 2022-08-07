import * as React from 'react'

import { styled } from '@louffee/canada-style-system'
import Typography from '@louffee/canada-typography'

import buttonConstants from '../buttonConstants'
import computeButtonGenericStyles from '../computeButtonGenericStyles'

import type NeutralButtonProps from './NeutralButtonProps'

// Unfortunately we've got an overlapping problem with the native attributes and
// the OutlinedButtonProps we couldn't solve yet.
// todo: fix this somehow =/
// @ts-expect-error
const StyledButton = styled('button')<NeutralButtonProps>(({ theme, size, disabled, fullWidth }) => {
  const genericStyles = computeButtonGenericStyles(theme, { size, disabled, fullWidth })

  return {
    ...genericStyles,

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.grey[99],

    backgroundColor: theme.colors.grey[99],
    color: theme.colors.black,

    ...(disabled && {
      color: theme.colors.grey[80],
      backgroundColor: theme.colors.grey[95],
      borderColor: theme.colors.grey[95],
    }),

    '&:hover': {
      backgroundColor: theme.colors.grey.main,
      borderColor: theme.colors.grey.main,
    },
  }
})

const NeutralButton: React.FC<NeutralButtonProps> = ({
  children,
  size = 'medium',
  className = '',
  startIcon,
  endIcon,
  fullWidth = false,
  disabled = false,
  ...props
}) => (
  <StyledButton
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    size={size}
    fullWidth={fullWidth}
    disabled={disabled}
    aria-disabled={disabled}
    className={`louffee-neutral-button ${className}`}>
    <Typography variant="bodySmall" aria-label={children?.toString()}>
      <i className={buttonConstants.START_ICON_CLASS_NAME}>{startIcon}</i>
      {children}
      <i className={buttonConstants.END_ICON_CLASS_NAME}>{endIcon}</i>
    </Typography>
  </StyledButton>
)

export default NeutralButton
