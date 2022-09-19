import * as React from 'react'
import { ThemeProvider } from '@louffee/canada-style-system'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Divider from '../../packages/@louffee-divider/src/Divider'

import '@louffee/canada-utility-classes'

export default {
  title: 'Components/Miscellaneous/Divider',
  component: Divider,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => (
  <div className='width-300 height-300'>
    <Divider {...args} />
  </div>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: 'horizontal',
  weight: 1,
}

export const Vertical = Template.bind({})
Vertical.args = {
  direction: 'vertical',
  weight: 1,
}
