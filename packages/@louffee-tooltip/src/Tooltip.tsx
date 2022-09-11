import * as React from 'react'
import { keyframes, styled } from '@louffee/canada-style-system'
import * as Primitives from '@radix-ui/react-tooltip'

import tooltipConstants from './tooltipConstants'
import renderTooltipChild from './renderTooltipChild'
import type TooltipProps from './TooltipProps'

//#region style
const slideDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const TooltipChild = styled('div')<Pick<TooltipProps, 'axis'>>(
  ({ theme: { radii, spacing, colors, shadows }, axis }) => ({
    animationDuration: tooltipConstants.CONTENT_ANIMATION_DURATION,
    animationTimingFunction: tooltipConstants.CONTENT_ANIMATION_TIMING_FUNCTION,

    ...(axis === 'top' && {
      animationName: slideUp,
    }),

    ...(axis === 'bottom' && {
      animationName: slideDown,
    }),

    borderRadius: radii.small,
    padding: `${spacing.medium} ${spacing.large}`,

    backgroundColor: tooltipConstants.BACKGROUND_COLOR,
    color: colors.white,

    boxShadow: shadows.slight,
  }),
)

//#endregion

//#region primitive components
const TooltipRoot = Primitives.Root
const TooltipTrigger = Primitives.Trigger
const TooltipContent = Primitives.Content
const TooltipProvider = Primitives.Provider
const TooltipArrow = Primitives.Arrow
//#endregion

const Tooltip = React.memo<TooltipProps>(
  ({ render, children, align, axis, alignOffset, axisOffset, open, defaultOpen, onOpen, arrow = false }) => {
    const handleOpenChange = React.useCallback(
      (openState: boolean) => {
        if (typeof onOpen !== 'function') {
          return
        }

        onOpen({ openTooltipState: openState, origin: undefined })
      },
      [onOpen],
    )

    return (
      <TooltipProvider>
        <TooltipRoot open={open} defaultOpen={defaultOpen} onOpenChange={handleOpenChange} delayDuration={300}>
          <TooltipTrigger asChild={true} className='louffee-tooltip-anchor'>
            {children}
          </TooltipTrigger>
          <TooltipContent
            side={axis}
            align={align}
            sideOffset={axisOffset}
            alignOffset={alignOffset}
            arrowPadding={1}
            className='louffee-tooltip'
            asChild={true}>
            <TooltipChild axis={axis}>
              <>
                {renderTooltipChild(render)}
                {arrow && <TooltipArrow width={11} height={8} fill={tooltipConstants.BACKGROUND_COLOR} />}
              </>
            </TooltipChild>
          </TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    )
  },
)

Tooltip.displayName = 'Tooltip'

export default Tooltip
