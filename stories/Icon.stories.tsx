import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { styled, ThemeProvider } from '@louffee/style-system'

import Icon from '../packages/@louffee-icon/src/Icon'
import icons from '../packages/@louffee-icon/src/icons'

import type IconName from '../packages/@louffee-icon/src/IconName'

const CatalogueLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.medium,
  flexWrap: 'wrap',
}))

export default {
  title: 'Components/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <CatalogueLayout>
          <Story />
        </CatalogueLayout>
      </ThemeProvider>
    ),
  ],
  args: {
    size: 24,
    color: '#141414',
  },
} as ComponentMeta<typeof Icon>

export const Catalogue: ComponentStory<typeof Icon> = ({ size, color }) => (
  <>
    {Object.keys(icons).map((iconName) => (
      <i title={iconName} key={iconName}>
        <Icon name={iconName as IconName} size={size} color={color} />
      </i>
    ))}
  </>
)

Catalogue.storyName = 'Icons catalogue'
