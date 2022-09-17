import * as React from 'react'
import Icon from '@louffee/canada-icon'
import { ThemeProvider } from '@louffee/canada-style-system'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import ContainedButton from '../../packages/@louffee-button/src/ContainedButton/ContainedButton'

export default {
  title: 'Components/Buttons/ContainedButton',
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
} as ComponentMeta<typeof ContainedButton>

const ContainedTemplate: ComponentStory<typeof ContainedButton> = ({
  children,
  type,
  disabled,
  size,
  startIcon,
  endIcon,
  onClick,
}) => (
  <ContainedButton
    type={type}
    disabled={disabled}
    size={size}
    startIcon={startIcon}
    endIcon={endIcon}
    onClick={onClick}>
    {children}
  </ContainedButton>
)

export const ContainedBehaviour: ComponentStory<typeof ContainedButton> = ContainedTemplate.bind({})
ContainedBehaviour.storyName = 'Contained behaviour'

export const ContainedBehaviourWithStartIcon: ComponentStory<typeof ContainedButton> = ContainedTemplate.bind({})
ContainedBehaviourWithStartIcon.storyName = 'Contained behaviour with start icon'
ContainedBehaviourWithStartIcon.args = {
  startIcon: <Icon name='add-shopping-cart' />,
}

export const ContainedBehaviourWithEndIcon: ComponentStory<typeof ContainedButton> = ContainedTemplate.bind({})
ContainedBehaviourWithEndIcon.storyName = 'Contained behaviour with end icon'
ContainedBehaviourWithEndIcon.args = {
  endIcon: <Icon name='backup' />,
}

export const ContainedBehaviourWithBothStartAndEndIcons: ComponentStory<typeof ContainedButton> =
  ContainedTemplate.bind({})
ContainedBehaviourWithBothStartAndEndIcons.storyName = 'Contained behaviour with both start and end icons'
ContainedBehaviourWithBothStartAndEndIcons.args = {
  startIcon: <Icon name='credit-card' />,
  endIcon: <Icon name='power' />,
}

export const NonParentContainedBehaviour: ComponentStory<typeof ContainedButton> = ContainedTemplate.bind({})
NonParentContainedBehaviour.storyName = 'Contained behaviour without children'
NonParentContainedBehaviour.args = {
  children: undefined,
}
