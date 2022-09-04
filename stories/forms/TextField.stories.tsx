import * as React from 'react'

import { ThemeProvider } from '@louffee/canada-style-system'
import Form from '@louffee/canada-form'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import * as masks from '../../packages/@louffee-masks/src/index'
import TextField from '../../packages/@louffee-text-field/src/TextField'

export default {
  title: 'Components/Forms/TextField',
  component: TextField,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <main className='margin-x-auto max-width-800'>
          <Form onSubmit={() => {}}>
            {({ values }) => (
              <>
                <Story />
                {JSON.stringify(values)}
              </>
            )}
          </Form>
        </main>
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
    mask={masks.numbers}
  />
)

export const PhoneCountryCode: ComponentStory<typeof TextField> = () => (
  <TextField label='Please inform your phone country code' name='phoneCountryCode' mask={masks.phoneCountryCode} />
)

export const PhoneBrazilPattern: ComponentStory<typeof TextField> = () => (
  <TextField label='Please inform your phone number' name='phone' mask={masks.phone('+55')} />
)

export const Phone: ComponentStory<typeof TextField> = () => (
  <TextField label='Please inform your phone number' name='phone' mask={masks.phone('+1')} />
)
