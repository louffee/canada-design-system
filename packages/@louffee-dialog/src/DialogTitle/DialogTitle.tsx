import * as React from 'react'
import { styled } from '@louffee/canada-style-system'
import { useClasses } from '@louffee/canada-global-hooks'

import type DialogTitleProps from './DialogTitleProps'

const DialogTitleRoot = styled('div')(
  ({
    theme: {
      typography: {
        variants: {
          headlineSmall: { fontSize, fontWeight },
        },
      },
      spacing,
    },
  }) => ({
    fontSize,
    fontWeight,
    margin: spacing.medium,
  }),
)

const DialogTitle = React.memo<DialogTitleProps>(({ children, className, ...props }) => {
  const classes = useClasses('louffee-dialog-title', className)

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DialogTitleRoot className={classes} {...props}>
      {children}
    </DialogTitleRoot>
  )
})

DialogTitle.displayName = 'DialogTitle'

export default DialogTitle
