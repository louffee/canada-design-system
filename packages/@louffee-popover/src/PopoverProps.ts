import type * as React from 'react'

import type PopoverAxis from './PopoverAxis'
import type PopoverAlign from './PopoverAlign'
import PopoverNaturalEventHandler from './PopoverNaturalEventHandler'

type HTMLDivAttributes = React.HTMLAttributes<HTMLDivElement>
type OmittedHTMLDivAttributes = Omit<
  HTMLDivAttributes,
  'onPointerEnter' | 'onPointerLeave' | 'onPointerOver' | 'onMouseEnter' | 'onMouseLeave' | 'onMouseOver' | 'open'
>

interface PopoverProps extends OmittedHTMLDivAttributes {
  children: React.ReactNode

  render: React.ComponentType | (() => React.ReactNode) | React.ReactNode

  axis: PopoverAxis
  align: PopoverAlign

  axisOffset?: number
  alignOffset?: number

  defaultOpen?: boolean
  open?: boolean

  onOpenStateChange?: (event?: PopoverNaturalEventHandler<null>) => void
}

export default PopoverProps
