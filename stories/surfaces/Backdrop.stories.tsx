import * as React from 'react'
import { ThemeProvider } from '@louffee/canada-style-system'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Backdrop from '../../packages/@louffee-backdrop/src/Backdrop'

const meta: ComponentMeta<typeof Backdrop> = {
  title: 'Components/Surfaces/Backdrop',
  component: Backdrop,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
        <div>You shouldn't be able to see me clearly :/</div>
      </ThemeProvider>
    ),
  ],
}

const Template: ComponentStory<typeof Backdrop> = (args) => <Backdrop {...args} />

export const Default: ComponentStory<typeof Backdrop> = Template.bind({})
Default.args = {
  isBlurry: false,
  zIndex: 'auto',
}

export default meta
