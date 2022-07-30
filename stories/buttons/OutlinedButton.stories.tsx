import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeProvider } from '@louffee/style-system'

import OutlinedButton from '../../packages/@louffee-button/src/OutlinedButton/OutlinedButton'

export default {
  title: 'Components/Buttons/OutlinedButton',
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    children: 'My Button',
    type: 'button',
    disabled: false,
    size: 'medium',
  },
} as ComponentMeta<typeof OutlinedButton>

const OutlinedTemplate: ComponentStory<typeof OutlinedButton> = ({
  children,
  type,
  disabled,
  size,
  startIcon,
  endIcon,
  onClick,
}) => (
  <OutlinedButton type={type} disabled={disabled} size={size} startIcon={startIcon} endIcon={endIcon} onClick={onClick}>
    {children}
  </OutlinedButton>
)

export const OutlinedBehaviour: ComponentStory<typeof OutlinedButton> = OutlinedTemplate.bind({})
OutlinedBehaviour.storyName = 'Outlined behaviour'
