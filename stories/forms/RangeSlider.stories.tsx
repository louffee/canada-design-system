import * as React from 'react'
import Form from '@louffee/canada-form'
import { ThemeProvider } from '@louffee/canada-style-system'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import RangeSlider from '../../packages/@louffee-range-slider/src/RangeSlider'

export default {
  title: 'Components/Forms/RangeSlider',
  component: RangeSlider,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Form onSubmit={console.table}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate={true}>
              <Story />
            </form>
          )}
        </Form>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof RangeSlider>

const Template: ComponentStory<typeof RangeSlider> = (args) => <RangeSlider {...args} />

export const Default: ComponentStory<typeof RangeSlider> = Template.bind({})
Default.args = {
  name: 'rangeSlider',
}

export const WithLegend: ComponentStory<typeof RangeSlider> = Template.bind({})
WithLegend.args = {
  name: 'rangeSlider',
  legend: true,
}

export const WithLabel: ComponentStory<typeof RangeSlider> = Template.bind({})
WithLabel.args = {
  name: 'rangeSlider',
  label: 'Please enter your height',
}

export const WithLegendAndLabel: ComponentStory<typeof RangeSlider> = Template.bind({})
WithLegendAndLabel.args = {
  name: 'rangeSlider',
  label: 'Please enter your height',
  legend: true,
}
