import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeProvider } from '@louffee/canada-style-system'

import SoftButton from '../../packages/@louffee-button/src/SoftButton/SoftButton'

export default {
  title: 'Components/Buttons/SoftButton',
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
} as ComponentMeta<typeof SoftButton>

const SoftTemplate: ComponentStory<typeof SoftButton> = ({
  children,
  type,
  disabled,
  size,
  color,
  startIcon,
  endIcon,
  onClick,
  isLoading,
}) => (
  <SoftButton
    type={type}
    disabled={disabled}
    size={size}
    color={color}
    startIcon={startIcon}
    endIcon={endIcon}
    onClick={onClick}
    isLoading={isLoading}>
    {children}
  </SoftButton>
)

export const SoftBehaviour: ComponentStory<typeof SoftButton> = SoftTemplate.bind({})
SoftBehaviour.storyName = 'Soft behaviour'

export const SoftBehaviourWithStartIcon: ComponentStory<typeof SoftButton> = SoftTemplate.bind({})
SoftBehaviourWithStartIcon.storyName = 'Soft behaviour with start icon'
SoftBehaviourWithStartIcon.args = {
  startIcon: '🔎',
}

export const SoftBehaviourWithEndIcon: ComponentStory<typeof SoftButton> = SoftTemplate.bind({})
SoftBehaviourWithEndIcon.storyName = 'Soft behaviour with end icon'
SoftBehaviourWithEndIcon.args = {
  endIcon: '🇨🇦',
}

export const SoftBehaviourWithBothStartAndEndIcons: ComponentStory<typeof SoftButton> = SoftTemplate.bind({})
SoftBehaviourWithBothStartAndEndIcons.storyName = 'Soft behaviour with both start and end icons'
SoftBehaviourWithBothStartAndEndIcons.args = {
  startIcon: '🔎',
  endIcon: '🇨🇦',
}

export const NonParentSoftBehaviour: ComponentStory<typeof SoftButton> = SoftTemplate.bind({})
NonParentSoftBehaviour.storyName = 'Soft behaviour without children'
NonParentSoftBehaviour.args = {
  children: undefined,
}

export const SoftBehaviourWithLoading: ComponentStory<typeof SoftButton> = SoftTemplate.bind({})
SoftBehaviourWithLoading.storyName = 'Soft behaviour with loading'
SoftBehaviourWithLoading.args = {
  isLoading: true,
}

export const SoftSecondaryColor: ComponentStory<typeof SoftButton> = SoftTemplate.bind({})
SoftSecondaryColor.storyName = 'Soft with secondary color'
SoftSecondaryColor.args = {
  color: 'secondary',
}
