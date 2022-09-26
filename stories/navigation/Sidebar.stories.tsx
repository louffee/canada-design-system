import * as React from 'react'

import { ThemeProvider } from '@louffee/canada-style-system'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import Sidebar from '../../packages/@louffee-sidebar/src/Sidebar'

export default {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar
    {...args}
    items={[
      {
        label: 'Item 1',
      },
      {
        label: 'Item 2',
      },
      {
        label: 'Item 3',
      },
    ]}
  />
)

export const Default: ComponentStory<typeof Sidebar> = Template.bind({})
Default.args = {
  selectedItem: 0,
}

export const WithTitle: ComponentStory<typeof Sidebar> = Template.bind({})
WithTitle.args = {
  selectedItem: 0,
  title: 'Lorem Ipsum',
}
