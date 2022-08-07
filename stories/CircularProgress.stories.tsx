import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeProvider } from '@louffee/canada-style-system'

import CircularProgress from '../packages/@louffee-circular-progress/src/CircularProgress'

export default {
  title: 'Components/CircularProgress',
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    thickness: 5,
    size: 100,
    radii: 20,
  },
} as ComponentMeta<typeof CircularProgress>

const Template: ComponentStory<typeof CircularProgress> = ({ thickness, size, radii }) => (
  <CircularProgress thickness={thickness} size={size} radii={radii} />
)

export const Default: ComponentStory<typeof CircularProgress> = Template.bind({})
Default.storyName = 'Default behaviour'
