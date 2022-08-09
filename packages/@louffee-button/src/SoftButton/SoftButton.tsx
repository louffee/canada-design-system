import * as React from 'react'

import { styled, toRem } from '@louffee/canada-style-system'
import { useDeveloperChecks } from '@louffee/canada-global-hooks'
import Typography from '@louffee/canada-typography'
import CircularProgress from '@louffee/canada-circular-progress'

import getSoftButtonThemeColors from './getSoftButtonThemeColors'

import buttonConstants from '../buttonConstants'
import computeButtonGenericStyles from '../computeButtonGenericStyles'

import type SoftButtonProps from './SoftButtonProps'

const StyledButton = styled('button')<SoftButtonProps>(({ theme, disabled, size, isLoading, color, fullWidth }) => {
  const { disabled: disabledStyle, enabled: enabledStyle, hover: hoverStyle } = getSoftButtonThemeColors(theme)[color]

  const genericStyles = computeButtonGenericStyles(theme, { size, disabled, fullWidth })

  return {
    ...genericStyles,
    ...enabledStyle,

    borderStyle: 'solid',
    borderWidth: toRem(1),

    fontWeight: theme.typography.fontWeightMedium,

    ...(disabled && { ...disabledStyle }),

    ...(isLoading && { pointerEvents: 'none' }),

    ...(!(isLoading && disabled) && {
      '&:hover': {
        ...hoverStyle,
      },
    }),

    [`.${buttonConstants.START_ICON_CLASS_NAME}`]: {
      marginRight: theme.spacing.small,
    },

    [`.${buttonConstants.END_ICON_CLASS_NAME}`]: {
      marginLeft: theme.spacing.small,
    },
  }
})

const SoftButton = React.memo<SoftButtonProps>(
  ({
    children,
    className = '',
    disabled = false,
    size = 'medium',
    startIcon,
    endIcon,
    color = 'primary',
    isLoading = false,
    fullWidth = false,
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
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        className={`louffee-soft-button ${className}`}
        color={color}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled}
        aria-disabled={disabled}>
        <Typography
          variant={size === 'small' || disabled ? 'bodySmall' : 'labelMedium'}
          aria-label={children?.toString()}>
          <i className={buttonConstants.START_ICON_CLASS_NAME}>{startIcon}</i>
          {isLoading && (
            <i className={buttonConstants.START_ICON_CLASS_NAME}>
              <CircularProgress size={12} radii={5} thickness={2} />
            </i>
          )}
          {children}
          <i className={buttonConstants.END_ICON_CLASS_NAME}>{endIcon}</i>
        </Typography>
      </StyledButton>
    )
  },
)

SoftButton.displayName = 'SoftButton'

export default SoftButton
