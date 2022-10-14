import * as React from 'react'
import { styled } from '@louffee/canada-style-system'
import { useClasses } from '@louffee/canada-global-hooks'

import type BackdropProps from './BackdropProps'

// MARK: - Styles
type BackdropRootProps = Required<Pick<BackdropProps, 'isBlurry' | 'zIndex' | 'blur'>>
const BackdropRoot = styled('div')<BackdropRootProps>(({ isBlurry, zIndex, blur }) => ({
  position: 'fixed',
  inset: 0,
  zIndex,

  backgroundColor: 'rgba(0, 0, 0, 0.5)',

  ...(isBlurry && {
    backdropFilter: `blur(${blur}px)`,
  }),
}))

// MARK: - JSX
const Backdrop = React.memo<BackdropProps>(({ isBlurry = false, zIndex = 'auto', blur = 2, className }) => {
  const classes = useClasses('louffee-backdrop', className)

  return <BackdropRoot isBlurry={isBlurry} zIndex={zIndex} blur={blur} className={classes} />
})

Backdrop.displayName = 'Backdrop'

export default Backdrop
