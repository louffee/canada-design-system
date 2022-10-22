import * as React from 'react'
import { styled } from '@louffee/canada-style-system'

import type CloseButtonProps from './CloseButtonProps'

// MARK: - Constants
const classes = {
  root: 'louffee-dialog-close-button',
  defaultContent: 'louffee-dialog-close-button-default-content',
}

// MARK: - Styles
const DefaultCloseButtonRoot = styled('button')(
  ({
    theme: {
      colors,
      radii,
      typography: {
        variants: {
          bodyLarge: { fontSize, fontWeight },
        },
      },
    },
  }) => ({
    backgroundColor: colors.grey[95],
    color: colors.black,

    outline: 'none',
    border: 'none',

    width: 32,
    height: 32,

    borderRadius: radii.rounded,

    fontSize,
    fontWeight,

    '&:hover': {
      backgroundColor: colors.grey[90],
    },
    transition: '200ms',
  }),
)

// MARK: - JSX
const CloseButton = React.memo<CloseButtonProps<HTMLButtonElement>>(({ closeButton, onClose }) => {
  if (typeof closeButton === 'function') {
    const closeButtonRenderedElement = closeButton({ onClose })

    if (!closeButtonRenderedElement) {
      return
    }

    return <React.Fragment>{closeButtonRenderedElement}</React.Fragment>
  }

  if (closeButton) {
    return <DefaultCloseButtonRoot className={classes.defaultContent}>X</DefaultCloseButtonRoot>
  }
})

CloseButton.displayName = 'CloseButton'

export default CloseButton
