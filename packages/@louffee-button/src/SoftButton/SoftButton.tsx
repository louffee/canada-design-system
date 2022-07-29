import * as React from 'react'

import { styled, toRem } from '@louffee/style-system'
import { useDeveloperChecks } from '@louffee/global-hooks'
import Typography from '@louffee/typography'
import CircularProgress from '@louffee/circular-progress'

import computeButtonGenericStyles from '../computeButtonGenericStyles'

import type SoftButtonProps from './SoftButtonProps'

const START_ICON_CLASS_NAME = 'louffee-soft-button-start-icon'
const END_ICON_CLASS_NAME = 'louffee-soft-button-end-icon'

const StyledButton = styled('button')<SoftButtonProps>(({ theme, disabled, size, isLoading = false }) => ({
  color: theme.colors.primary.main,
  backgroundColor: theme.colors.primary[90],
  border: `${toRem(1)} solid ${theme.colors.primary[90]}`,

  ...computeButtonGenericStyles(theme, { size, disabled }),

  fontWeight: theme.typography.fontWeightMedium,

  ...(disabled && {
    color: theme.colors.grey[0],
    backgroundColor: theme.colors.grey[90],
    borderColor: theme.colors.grey[90],
  }),

  ...(isLoading && { pointerEvents: 'none' }),

  ...(!(isLoading && disabled) && {
    cursor: 'pointer',

    '&:hover': {
      boxShadow: theme.shadows.slight,
      backgroundColor: theme.colors.primary[100],
      borderColor: theme.colors.primary[100],
    },
  }),

  [`.${START_ICON_CLASS_NAME}`]: {
    marginRight: theme.spacing.small,
  },

  [`.${END_ICON_CLASS_NAME}`]: {
    marginLeft: theme.spacing.small,
  },
}))

const SoftButton: React.FC<SoftButtonProps> = ({
  children,
  className = '',
  disabled = false,
  size = 'medium',
  startIcon,
  endIcon,
  isLoading = false,
  ...props
}) => {
  useDeveloperChecks({ children, className, disabled, size, startIcon, endIcon }, (componentProps) => {
    if (
      // Test whether the startIcon is valid to render
      typeof componentProps.startIcon === 'string' ||
      (React.isValidElement(componentProps.startIcon) &&
        // Test whether the endIcon is valid to render
        typeof componentProps.endIcon === 'string') ||
      React.isValidElement(componentProps.endIcon)
    ) {
      return {
        type: 'warn',
        message: [
          'The startIcon and endIcon props should not be used together.',
          'Having both of them simultaneously might distract the user from taking the action due to the overdose of UI distracting elements.',
        ].join(' '),
      }
    }

    if (
      // Validate whether the children is either a string or a React element
      typeof componentProps.children !== 'string' &&
      !React.isValidElement(componentProps.children)
    ) {
      return {
        type: 'error',
        message: 'The children prop should be a string or a valid React element.',
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
        {isLoading && (
          <i className={START_ICON_CLASS_NAME}>
            <CircularProgress size={12} radii={5} thickness={2} />
          </i>
        )}
        {children}
        <i className={END_ICON_CLASS_NAME}>{endIcon}</i>
      </Typography>
    </StyledButton>
  )
}

export default SoftButton