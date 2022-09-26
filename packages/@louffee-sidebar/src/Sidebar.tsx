import * as React from 'react'
import Typography from '@louffee/canada-typography'
import { styled } from '@louffee/canada-style-system'
import { useDeveloperChecks, useClasses } from '@louffee/canada-global-hooks'

import renderSidebarItem from './renderSidebarItem'
import type SidebarProps from './SidebarProps'

// MARK: - Styles
const Column = styled('aside')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.extraSmall,

  padding: theme.spacing.small,
  borderRadius: theme.radii.medium,

  backgroundColor: theme.colors.grey[99],
}))

// MARK: - JSX
const Sidebar = ({ selectedItem, items, title, className, ...attributes }: SidebarProps): React.ReactElement => {
  useDeveloperChecks({ selectedItem, items }, (componentProps) => {
    if (!Array.isArray(componentProps.items)) {
      return {
        type: 'error',
        message: 'Sidebar: the "items" prop should be an array of SidebarContentItem.',
      }
    }

    if (typeof componentProps.selectedItem === 'number') {
      if (items.length === 0) {
        return {
          type: 'error',
          message: 'Sidebar: the "selectedItem" is defined but there is no elements in the items property array.',
        }
      }

      if (componentProps.items.length < componentProps.selectedItem) {
        return {
          type: 'error',
          message: [
            'Sidebar: The selectedItem is out of the range of the items property array.',
            `Meanwhile the items.length corresponds to ${componentProps.items.length}, the selectedItem index is ${componentProps.selectedItem}.`,
          ].join(' '),
        }
      }
    }
  })

  const rootClasses = useClasses('louffee-sidebar', className)

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Column className={rootClasses} {...attributes}>
      {typeof title === 'string' ? <Typography variant='titleSmall'>{title}</Typography> : title}
      {items.map(({ label }, index) => renderSidebarItem({ selectedItem, index, label }))}
    </Column>
  )
}

export default Sidebar
