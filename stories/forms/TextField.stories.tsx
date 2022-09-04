import * as React from 'react'

import { ThemeProvider } from '@louffee/canada-style-system'
import Form from '@louffee/canada-form'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import TextField from '../../packages/@louffee-text-field/src/TextField'

export default {
  title: 'Components/Forms/TextField',
  component: TextField,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Form onSubmit={() => {}}>
          {({ values }) => (
            <>
              <Story />
              {JSON.stringify(values)}
            </>
          )}
        </Form>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof TextField>

export const Default: ComponentStory<typeof TextField> = () => (
  <TextField label='Enter here anything you want' name='textField' />
)
Default.storyName = 'Default behaviour'

export const NumbersFormat: ComponentStory<typeof TextField> = () => (
  <TextField
    label='Please enter some numbers and try some letters (they will not work)'
    name='numberFormat'
    format={(val) => {
      if (!val) {
        return ''
      }

      const str = String(val).replace(/[^0-9]/g, '')

      return str
    }}
    parse={(val) => (val ? String(val).replace(/[^0-9]/g, '') : '')}
  />
)
