import type * as React from 'react'

import type SidebarContentItem from './SidebarContentItem'
import type SidebarSelectEventHandler from './SidebarSelectEventHandler'

type HTMLDivAttributes = React.HTMLAttributes<HTMLDivElement>
type OmittedHTMLDivAttributes = Omit<HTMLDivAttributes, 'children' | 'title' | 'onSelect' | 'onSelectCapture'>

interface SidebarProps extends OmittedHTMLDivAttributes {
  items: SidebarContentItem[]

  selectedItem?: number
  title?: React.ReactNode

  onSelect?: SidebarSelectEventHandler
}

export default SidebarProps
