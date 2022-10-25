import * as React from 'react'
import { styled, toRem } from '@louffee/canada-style-system'
import { useClasses } from '@louffee/canada-global-hooks'

import useBackdropControls from './useBackdropControls/useBackdropControls'
import CloseButton from './CloseButton/CloseButton'
import DialogTitle from './DialogTitle/DialogTitle'
import DialogContent from './DialogContent/DialogContent'
import DialogFooter from './DialogFooter/DialogFooter'
import type DialogProps from './DialogProps'
import type DialogCloseEventHandler from './DialogCloseEventHandler'

// MARK: - Constants
const classes = {
  root: 'louffee-dialog',
  backdrop: 'louffee-dialog-backdrop',
  closeButton: 'louffee-dialog-close-button',
  title: 'louffee-dialog-title',
}

// MARK: - Styles
const DialogBackdrop = styled('div')({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.67)',
})

const DialogRoot = styled('div')(({ theme: { colors, radii, shadows, spacing } }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  backgroundColor: colors.white,
  borderRadius: radii.large,
  boxShadow: shadows.slight,

  minWidth: toRem(100),
  minHeight: toRem(100),

  padding: spacing.large,
}))

const DialogCloseButton = styled('button')({
  position: 'absolute',
  top: 12,
  right: 6,
})

// MARK: - JSX
const Dialog = <TElement extends HTMLElement = HTMLDivElement>({
  open,
  children,
  onClose,
  className,
  role = 'dialog',
  closeButton,
  ...props
}: DialogProps<TElement>): React.ReactElement => {
  const { handleBackdropClick } = useBackdropControls<TElement>({ onClose })
  const rootClasses = useClasses(classes.root, className)

  if (!open) {
    return
  }

  const closeButtonCastToComponent = closeButton as DialogProps<HTMLButtonElement>['closeButton']
  const onCloseCastToComponent = onClose as unknown as DialogCloseEventHandler<HTMLButtonElement>

  return (
    <>
      <DialogBackdrop
        className={classes.backdrop}
        onClick={handleBackdropClick as unknown as React.MouseEventHandler<HTMLDivElement>}
      />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DialogRoot role={role} className={rootClasses} {...props}>
        {children}

        <DialogCloseButton className={classes.closeButton}>
          <CloseButton closeButton={closeButtonCastToComponent} onClose={onCloseCastToComponent} />
        </DialogCloseButton>
      </DialogRoot>
    </>
  )
}

Dialog.Content = DialogContent
Dialog.Title = DialogTitle
Dialog.Footer = DialogFooter

export default Dialog
