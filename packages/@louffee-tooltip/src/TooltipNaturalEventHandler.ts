import type TooltipNaturalEvent from './TooltipNaturalEvent'

type TooltipNaturalEventHandler<TVirtualEvent> = (event: TooltipNaturalEvent<TVirtualEvent>) => void

export default TooltipNaturalEventHandler
