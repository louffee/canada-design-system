import * as React from 'react'
import { styled, toRem, keyframes, type LouThemeSchema, type CSSObject } from '@louffee/canada-style-system'

import type SidebarSelectEvent from '../SidebarSelectEvent'

import type SidebarItemProps from './SidebarItemProps'

const SIDEBAR_ITEM_WIDTH = 80

const fadeRightward = keyframes({
  '0%': {
    width: 0,
    opacity: 0,
  },
  '100%': {
    width: SIDEBAR_ITEM_WIDTH,
    opacity: 1,
  },
})

const createSidebarActiveIndication = (theme: LouThemeSchema): CSSObject => ({
  content: '""',

  position: 'absolute',
  top: 26,

  height: 2,
  width: SIDEBAR_ITEM_WIDTH,

  animation: `${fadeRightward} 0.3s ease-in-out`,

  backgroundColor: theme.colors.primary[30],

  borderTopRightRadius: theme.radii.small,
  borderBottomRightRadius: theme.radii.small,
})

interface ListItemProps {
  selected: boolean
}
const ListItem = styled('li')<ListItemProps>(({ theme, selected }) => ({
  padding: theme.spacing.medium,
  borderRadius: theme.radii.small,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',

  listStyle: 'none',

  color: theme.colors.black,

  cursor: selected ? 'default' : 'pointer',

  ...(selected
    ? /* eslint-disable indent */
      {
        backgroundColor: theme.colors.primary[40],
        color: theme.colors.white,

        cursor: 'default',

        position: 'relative',
        '&::before': {
          ...createSidebarActiveIndication(theme),
          backgroundColor: theme.colors.white,
        },
      }
    : {
        backgroundColor: theme.colors.grey[95],

        cursor: 'pointer',

        '&:hover': {
          position: 'relative',
          '&::before': createSidebarActiveIndication(theme),
        },
      }) /** eslint-enable indent */,

  minWidth: toRem(100),

  transition: theme.transitions.smooth,
}))

const SidebarItem = React.memo<SidebarItemProps>(({ selected, children, onSelect, contentItem }) => {
  const handleClick = React.useCallback(
    (event?: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (!event || typeof onSelect !== 'function') {
        return
      }

      const sidebarSelectEvent: SidebarSelectEvent<
        HTMLElement,
        MouseEvent,
        React.MouseEvent<HTMLElement, MouseEvent>
      > = {
        selected: !selected,
        item: contentItem,
        virtualEvent: event,
      }

      onSelect(sidebarSelectEvent)
    },
    [onSelect, contentItem, selected],
  )

  return (
    <ListItem className='louffee-sidebar-item' selected={selected} onClick={handleClick}>
      {children}
    </ListItem>
  )
})

export default SidebarItem
