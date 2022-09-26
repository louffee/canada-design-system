import type * as React from 'react'
import type { IconName } from '@louffee/canada-icon'

type HTMLDivAttributes = React.HTMLAttributes<HTMLDivElement>
type OmittedHTMLDivAttributes = Omit<HTMLDivAttributes, 'children'>

interface SidebarContentItem extends OmittedHTMLDivAttributes {
  label: React.ReactNode | ((props: { selected: boolean }) => React.ReactNode)
  icon?: React.ReactNode | IconName | ((props: { selected: boolean }) => React.ReactNode | IconName)
}

export default SidebarContentItem
