import type * as React from 'react'

import type SidebarContentItem from './SidebarContentItem'

type HTMLDivAttributes = React.HTMLAttributes<HTMLDivElement>
type OmittedHTMLDivAttributes = Omit<HTMLDivAttributes, 'children' | 'title'>

interface SidebarProps extends OmittedHTMLDivAttributes {
  items: SidebarContentItem[]

  selectedItem?: number
  title?: React.ReactNode
}

export default SidebarProps
