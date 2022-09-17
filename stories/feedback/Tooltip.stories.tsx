import * as React from 'react'
import { ThemeProvider } from '@louffee/canada-style-system'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Tooltip from '../../packages/@louffee-tooltip/src/Tooltip'

import '@louffee/canada-utility-classes'

export default {
  title: 'Components/Feedback/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Tooltip>

export const Default: ComponentStory<typeof Tooltip> = () => (
  <Tooltip render='I am the content of this tooltip' axis='bottom' align='center'>
    <div>Hover me</div>
  </Tooltip>
)

export const WithArrow: ComponentStory<typeof Tooltip> = () => (
  <Tooltip render='I should render when you hover that guy 👆' axis='bottom' align='start' arrow={true}>
    <div>Hover me</div>
  </Tooltip>
)

WithArrow.storyName = 'With arrow'
