import type * as React from 'react'

import type SidebarSelectEvent from './SidebarSelectEvent'

type SidebarSelectEventHandler = <
  TElement extends HTMLElement,
  TNativeDOMEvent,
  TVirtualDOMEvent extends React.UIEvent<TElement, TNativeDOMEvent>,
>(
  event: SidebarSelectEvent<TElement, TNativeDOMEvent, TVirtualDOMEvent>,
) => void

export default SidebarSelectEventHandler
