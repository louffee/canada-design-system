import type * as React from 'react'

import type TooltipAlign from './TooltipAlign'
import type TooltipNaturalEventHandler from './TooltipNaturalEventHandler'
import type TooltipAxis from './TooltipAxis'

interface TooltipProps {
  children: React.ReactNode

  render: React.ComponentType | (() => React.ReactNode) | React.ReactNode

  axis: TooltipAxis
  align: TooltipAlign

  axisOffset?: number
  alignOffset?: number

  defaultOpen?: boolean
  open?: boolean

  arrow?: boolean

  onOpen?: TooltipNaturalEventHandler<null>
}

export default TooltipProps
