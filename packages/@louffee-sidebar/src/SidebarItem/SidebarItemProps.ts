import type * as React from 'react'

import type SidebarProps from '../SidebarProps'
import type SidebarContentItem from '../SidebarContentItem'

type PickedSidebarProps = Pick<SidebarProps, 'onSelect'>

interface SidebarItemProps extends PickedSidebarProps {
  selected: boolean
  contentItem: SidebarContentItem

  children: React.ReactNode
}

export default SidebarItemProps
