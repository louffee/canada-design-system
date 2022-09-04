import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeProvider } from '@louffee/canada-style-system'
import Icon from '@louffee/canada-icon'

import Input from '../../packages/@louffee-input/src/Input'

import '@louffee/canada-utility-classes'

export default {
  title: 'Components/Forms/Input',
  component: Input,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <main className='margin-x-auto max-width-800'>
          <Story />
        </main>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default: ComponentStory<typeof Input> = Template.bind({})

export const WithLabel: ComponentStory<typeof Input> = Template.bind({})
WithLabel.storyName = 'With label'
WithLabel.args = {
  label: 'Please enter your name',
}

export const WithStartAdornment: ComponentStory<typeof Input> = Template.bind({})
WithStartAdornment.storyName = 'With start adornment'
WithStartAdornment.args = {
  startAdornment: <Icon name='book' size={18} />,
}

export const WithEndAdornment: ComponentStory<typeof Input> = Template.bind({})
WithEndAdornment.storyName = 'With end adornment'
WithEndAdornment.args = {
  endAdornment: <Icon name='expand-more' size={18} />,
}

export const WithError: ComponentStory<typeof Input> = Template.bind({})
WithError.storyName = 'With error'
WithError.args = {
  error: 'This is an example of an error',
  label: 'Please enter your name',
}
