import * as React from 'react'
import { keyframes, styled } from '@louffee/canada-style-system'
import * as Primitives from '@radix-ui/react-popover'

import popoverConstants from './popoverConstants'
import renderPopoverChild from './renderPopoverChild'
import type PopoverProps from './PopoverProps'

// MARK: - Keyframes
const slideDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

// MARK: - Styles
const PopoverChild = styled('div')<Pick<PopoverProps, 'axis'>>(
  ({ theme: { radii, spacing, colors, shadows }, axis }) => ({
    animationDuration: popoverConstants.CONTENT_ANIMATION_DURATION,
    animationTimingFunction: popoverConstants.CONTENT_ANIMATION_TIMING_FUNCTION,

    backdropFilter: 'blur(6px)',

    ...(axis === 'top' && {
      animationName: slideUp,
    }),

    ...(axis === 'bottom' && {
      animationName: slideDown,
    }),

    borderRadius: radii.medium,
    paddingInline: spacing.extraLarge,
    paddingBlock: spacing.extraSmall,

    backgroundColor: popoverConstants.BACKGROUND_COLOR,
    color: colors.black,

    boxShadow: shadows.slight,
  }),
)

// MARK: - Primitives
const PopoverRoot = Primitives.Root
const PopoverTrigger = Primitives.Trigger
const PopoverContent = Primitives.Content

// MARK: - JSX
const Popover = React.memo(
  ({ align, axis, render, children, alignOffset, axisOffset, defaultOpen, open }: PopoverProps) => (
    <PopoverRoot open={open} defaultOpen={defaultOpen}>
      <PopoverTrigger asChild={true} className='louffee-popover-anchor'>
        {children}
      </PopoverTrigger>
      <PopoverContent
        side={axis}
        align={align}
        sideOffset={axisOffset}
        alignOffset={alignOffset}
        arrowPadding={1}
        className='louffee-popover'
        asChild={true}>
        <PopoverChild axis={axis}>{renderPopoverChild(render)}</PopoverChild>
      </PopoverContent>
    </PopoverRoot>
  ),
)

Popover.displayName = 'Popover'

export default Popover
