import type * as React from 'react'

import type SidebarContentItem from './SidebarContentItem'

interface SidebarSelectEvent<
  TElement extends HTMLElement,
  TNativeDOMEvent,
  TVirtualDOMEvent extends React.UIEvent<TElement, TNativeDOMEvent>,
> {
  selected: boolean
  item: SidebarContentItem

  virtualEvent?: TVirtualDOMEvent
}

export default SidebarSelectEvent
