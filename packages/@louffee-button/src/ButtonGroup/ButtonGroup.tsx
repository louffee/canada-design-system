import * as React from 'react'
import { styled, toRem } from '@louffee/canada-style-system'
import { useDeveloperChecks } from '@louffee/canada-global-hooks'

import SoftButton from '../SoftButton/SoftButton'
import OutlinedButton from '../OutlinedButton/OutlinedButton'
import NeutralButton from '../NeutralButton/NeutralButton'
import type ButtonProps from '../ButtonProps'

import type ButtonGroupProps from './ButtonGroupProps'

const BUTTON_DISPLAY_NAMES = new Set([SoftButton.displayName, OutlinedButton.displayName, NeutralButton.displayName])

const StyledGroup = styled('div')<ButtonGroupProps>(({ column }) => ({
  display: 'flex',
  flexDirection: column ? 'column' : 'row',
  justifyContent: column ? 'center' : 'flex-end',
  maxWidth: column ? '100%' : 'fit-content',
  gap: toRem(4),
}))

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, column = false, className = '' }) => {
  useDeveloperChecks({ children }, (componentProps) => {
    if (React.Children.count(componentProps.children) < 1) {
      return {
        type: 'warn',
        message: 'It is recommended ButtonGroup to contain at least one child.',
      }
    }

    React.Children.forEach(componentProps.children, (child) => {
      const elementChild = child as React.ReactElement<{ children?: React.ReactNode }> & { type?: React.ComponentType }

      if (
        // Check whether the exotic child has a string-type displayName
        typeof elementChild?.type?.displayName === 'string' &&
        // Verify if the exoticSecondChildInTree display name is neither SoftButton, OutlinedButton or NeutralButton
        !BUTTON_DISPLAY_NAMES.has(elementChild?.type?.displayName)
      ) {
        return {
          type: 'error',
          message:
            'ButtonGroup cannot contain children which are not type of SoftButton, OutlinedButton or NeutralButton.',
        }
      }
    })
  })

  return (
    <StyledGroup className={`louffee-button-group ${className}`} column={column}>
      {React.Children.map(children, (child) => {
        const elementChild = child as React.ReactElement<{ children?: React.ReactNode }> & {
          type?: React.ComponentType
        }

        if (BUTTON_DISPLAY_NAMES.has(elementChild?.type?.displayName)) {
          return React.cloneElement<Pick<ButtonProps, 'fullWidth'>>(elementChild as React.ReactElement, {
            fullWidth: true,
          })
        }
      })}
    </StyledGroup>
  )
}

export default ButtonGroup
