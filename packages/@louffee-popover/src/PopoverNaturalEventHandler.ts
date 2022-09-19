import type PopoverNaturalEvent from './PopoverNaturalEvent'

type PopoverNaturalEventHandler<TVirtualEvent> = (event: PopoverNaturalEvent<TVirtualEvent>) => void

export default PopoverNaturalEventHandler
