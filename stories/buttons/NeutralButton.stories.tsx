import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeProvider } from '@louffee/style-system'

import NeutralButton from '../../packages/@louffee-button/src/NeutralButton/NeutralButton'

export default {
  title: 'Components/Buttons/NeutralButton',
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
} as ComponentMeta<typeof NeutralButton>

const NeutralTemplate: ComponentStory<typeof NeutralButton> = ({
  children,
  type,
  disabled,
  size,
  startIcon,
  endIcon,
  onClick,
}) => (
  <NeutralButton type={type} disabled={disabled} size={size} startIcon={startIcon} endIcon={endIcon} onClick={onClick}>
    {children}
  </NeutralButton>
)

export const NeutralBehaviour: ComponentStory<typeof NeutralButton> = NeutralTemplate.bind({})
NeutralBehaviour.storyName = 'Neutral behaviour'
