import * as React from 'react'
import { useClasses } from '@louffee/canada-global-hooks'
import { styled } from '@louffee/canada-style-system'

import type DialogContentProps from './DialogContentProps'

// MARK: - Constants
const classes = {
  root: 'louffee-dialog-content',
}

// MARK: - Styles
const DialogContentRoot = styled('div')(({ theme: { breakpoints, spacing } }) => ({
  overflow: 'auto',

  maxHeight: '70vh',
  maxWidth: '80vw',
  minWidth: '60vw',

  paddingInline: spacing.medium,

  [`@media (max-width: ${breakpoints.sm}px)`]: {
    maxWidth: '100vw',
    maxHeight: '100vw',
  },
}))

// MARK: - JSX
const DialogContent = ({ children, className, ...attributes }: DialogContentProps): React.ReactElement => {
  const rootClass = useClasses(classes.root, className)

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DialogContentRoot className={rootClass} {...attributes}>
      {children}
    </DialogContentRoot>
  )
}

export default DialogContent
