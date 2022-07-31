import * as React from 'react'

import { ThemeProvider } from '@louffee/style-system'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import ButtonGroup from '../../packages/@louffee-button/src/ButtonGroup/ButtonGroup'
import SoftButton from '../../packages/@louffee-button/src/SoftButton/SoftButton'
import NeutralButton from '../../packages/@louffee-button/src/NeutralButton/NeutralButton'

export default {
  title: 'Components/Buttons/ButtonGroup',
  component: ButtonGroup,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = ({ column }) => (
  <ButtonGroup column={column}>
    <NeutralButton>Cancel</NeutralButton>
    <SoftButton>Submit</SoftButton>
  </ButtonGroup>
)

export const Default: ComponentStory<typeof ButtonGroup> = Template.bind({})
Default.storyName = 'Default behaviour'

export const Column: ComponentStory<typeof ButtonGroup> = Template.bind({})
Column.storyName = 'Column behaviour'
Column.args = { column: true }
