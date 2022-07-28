import * as React from 'react'

import { styled, toRem } from '@louffee/style-system'
import { useDeveloperChecks } from '@louffee/global-hooks'
import Typography from '@louffee/typography'

import type ButtonProps from './ButtonProps'
import type ButtonSize from './ButtonSize'

const HEIGHT_PER_SIZE: { [K in ButtonSize]: string } = {
  small: toRem(24),
  medium: toRem(32),
  large: toRem(40),
}

const START_ICON_CLASS_NAME = 'louffee-soft-button-start-icon'
const END_ICON_CLASS_NAME = 'louffee-soft-button-end-icon'

const StyledButton = styled('button')<ButtonProps>(({ theme, disabled, size }) => ({
  color: theme.colors.primary.main,
  backgroundColor: theme.colors.primary[90],
  border: `${toRem(1)} solid ${theme.colors.primary[90]}`,
  borderRadius: theme.radii.small,

  minWidth: 140,

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all 300ms ease-in-out',

  paddingInline: toRem(16),
  paddingBlock: toRem(10),
  height: HEIGHT_PER_SIZE[size],

  fontWeight: theme.typography.fontWeightMedium,

  ...(disabled
    ? {
        pointerEvents: 'none',
        color: theme.colors.grey[0],
        backgroundColor: theme.colors.grey[90],
        borderColor: theme.colors.grey[90],
        cursor: 'not-allowed',
      }
    : {
        '&:hover': {
          backgroundColor: theme.colors.primary[100],
          borderColor: theme.colors.primary[100],
          cursor: 'pointer',
          boxShadow: theme.shadows.slight,
        },
      }),

  [`.${START_ICON_CLASS_NAME}`]: {
    marginRight: theme.spacing.small,
  },

  [`.${END_ICON_CLASS_NAME}`]: {
    marginLeft: theme.spacing.small,
  },
}))

const SoftButton: React.FC<ButtonProps> = ({
  children,
  className = '',
  disabled = false,
  size = 'medium',
  startIcon,
  endIcon,
  ...props
}) => {
  useDeveloperChecks({ children, className, disabled, size, startIcon, endIcon }, (componentProps) => {
    if (
      // Test whether the startIcon is valid to render
      typeof componentProps.startIcon === 'string' ||
      React.isValidElement(componentProps.startIcon) ||
      // Test whether the endIcon is valid to render
      typeof componentProps.endIcon === 'string' ||
      React.isValidElement(componentProps.endIcon)
    ) {
      return {
        type: 'warn',
        message: 'The startIcon and endIcon props should not be used together.',
      }
    }
  })

  return (
    <StyledButton
      {...props}
      className={`louffee-soft-button ${className}`}
      size={size}
      disabled={disabled}
      aria-disabled={disabled}>
      <Typography variant={size === 'small' ? 'bodySmall' : 'labelMedium'} aria-label={children?.toString()}>
        <i className={START_ICON_CLASS_NAME}>{startIcon}</i>
        {children}
        <i className={END_ICON_CLASS_NAME}>{endIcon}</i>
      </Typography>
    </StyledButton>
  )
}

export default SoftButton
