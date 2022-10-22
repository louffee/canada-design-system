import * as React from 'react'
import { useClasses } from '@louffee/canada-global-hooks'
import { styled } from '@louffee/canada-style-system'

import type DialogFooterProps from './DialogFooterProps'

// MARK: - Constants
const classes = {
  root: 'louffee-dialog-footer',
}

// MARK: - Styles
const DialogFooterRoot = styled('div')(({ theme: { spacing } }) => ({
  paddingInline: spacing.medium,
  marginTop: spacing.large,
  marginBottom: spacing.extraSmall,

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: spacing.large,
}))

// MARK: - JSX
const DialogFooter = ({ children, className, ...attributes }: DialogFooterProps): React.ReactElement => {
  const rootClass = useClasses(classes.root, className)

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DialogFooterRoot className={rootClass} {...attributes}>
      {children}
    </DialogFooterRoot>
  )
}

export default DialogFooter
