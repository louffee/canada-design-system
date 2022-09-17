import * as React from 'react'
import { styled } from '@louffee/canada-style-system'
import Typography from '@louffee/canada-typography'

import buttonConstants from '../buttonConstants'
import computeButtonGenericStyles from '../computeButtonGenericStyles'

import type ContainedButtonProps from './ContainedButtonProps'

const StyledButton = styled('button')<ContainedButtonProps>(({ disabled, fullWidth, theme }) => {
  const genericStyles = computeButtonGenericStyles(theme, { disabled, fullWidth })

  return {
    ...genericStyles,

    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: theme.colors.primary[20],
    borderColor: theme.colors.primary[20],
    color: theme.colors.white,

    '&:hover': {
      backgroundColor: theme.colors.primary[30],
      borderColor: theme.colors.primary[30],
    },

    // For some reason, the disabled style state from computeButtonGenericStyles is not being applied
    // to this case.
    // todo: investigate why this is happening, then fix it.
    ...(disabled && {
      color: theme.colors.grey[80],
      backgroundColor: theme.colors.grey[95],
      borderColor: theme.colors.grey[90],
      cursor: 'not-allowed',
      pointerEvents: 'none',
    }),
  }
})

const ContainedButton = React.memo<ContainedButtonProps>(
  ({ children, disabled = false, className = '', startIcon, endIcon, fullWidth = false, ...props }) => (
    <StyledButton
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={`louffee-outlined-button ${className}`}
      fullWidth={fullWidth}
      disabled={disabled}
      aria-disabled={disabled}>
      <Typography variant='bodySmall' aria-label={children?.toString()}>
        <i className={buttonConstants.START_ICON_CLASS_NAME}>{startIcon}</i>
        {children}
        <i className={buttonConstants.END_ICON_CLASS_NAME}>{endIcon}</i>
      </Typography>
    </StyledButton>
  ),
)

ContainedButton.displayName = 'ContainedButton'

export default ContainedButton
