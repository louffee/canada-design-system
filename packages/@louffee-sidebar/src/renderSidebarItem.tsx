import * as React from 'react'
import Typography from '@louffee/canada-typography'
import Tooltip from '@louffee/canada-tooltip'
import Icon, { type IconName, icons } from '@louffee/canada-icon'

import SidebarItem from './SidebarItem/SidebarItem'
import type SidebarContentItem from './SidebarContentItem'
import type SidebarProps from './SidebarProps'

function renderSidebarItem({
  selectedItem,
  index,
  onSelect,
  ...contentItem
}: SidebarContentItem & { index: number } & Pick<SidebarProps, 'selectedItem' | 'onSelect'>):
  | React.ReactElement
  | undefined {
  const { icon, label } = contentItem

  const renderKey = JSON.stringify(label)
  const selected = index === selectedItem

  return (
    <Tooltip render={selected ? <></> : false} align='center' axis='bottom'>
      <SidebarItem selected={selected} key={renderKey} contentItem={contentItem} onSelect={onSelect}>
        {__determineSidebarItemIcon({ icon, selected })}
        {__determineSidebarItemContent({ label, selected })}
      </SidebarItem>
    </Tooltip>
  )
}

type __DetermineSidebarItemIconProps = Pick<SidebarContentItem, 'icon'> & { selected: boolean }

function __determineSidebarItemIcon({
  icon,
  selected,
}: __DetermineSidebarItemIconProps): React.ReactElement | undefined {
  if (typeof icon === 'function') {
    const iconFunction = icon as (props: { selected: boolean }) => React.ReactElement
    const iconRendered = iconFunction({ selected })

    if (typeof iconRendered === 'string') {
      const iconExists = typeof icons[iconRendered as IconName] !== 'undefined'

      if (iconExists) {
        return <Icon name={iconRendered} />
      }

      return iconRendered
    }
  }

  return <>{icon}</>
}

type __DetermineSidebarItemContentProps = Pick<SidebarContentItem, 'label' | 'icon'> & { selected: boolean }

function __determineSidebarItemContent({
  label,
  selected,
}: __DetermineSidebarItemContentProps): React.ReactElement | undefined {
  if (typeof label === 'function') {
    const labelFunction = label as (props: { selected: boolean }) => React.ReactElement

    return labelFunction({ selected })
  }

  return <Typography variant='labelMedium'>{label}</Typography>
}

export default renderSidebarItem
