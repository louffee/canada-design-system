import type * as React from 'react'

interface SidebarSelectEvent<
  TElement extends HTMLElement,
  TNativeDOMEvent,
  TVirtualDOMEvent extends React.UIEvent<TElement, TNativeDOMEvent>,
> {
  selected: boolean

  virtualEvent?: TVirtualDOMEvent
}

export default SidebarSelectEvent
