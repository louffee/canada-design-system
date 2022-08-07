import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@louffee/canada-utility-classes'
import { ThemeProvider } from '@louffee/canada-style-system'

import useField from '../../packages/@louffee-form/src/useField/useField'
import createValidation from '../../packages/@louffee-form/src/createValidation'
import errorSchema from '../../packages/@louffee-form/src/errorSchema'
import Form from '../../packages/@louffee-form/src/Form'
import TextField from '../../packages/@louffee-text-field/src/TextField'

interface Values {
  firstName: string
  lastName: string
}

async function handleSubmit(values: Values) {
  return await new Promise<void>((resolve) => {
    console.log({ values })
    resolve()
  })
}

const validate = createValidation<Values>((values) => {
  const errors = errorSchema<Values>()

  if (!values.firstName) {
    errors.firstName = 'The first name is required'
  }

  if (!values.lastName) {
    errors.lastName = 'The last name is required'
  }

  return errors
})

export default {
  title: 'Components/Forms/Form',
  component: Form,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Form onSubmit={handleSubmit} validate={validate}>
          {({ values }) => (
            <>
              <Story />
              <code>{JSON.stringify({ ...values })}</code>
            </>
          )}
        </Form>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Form>

export const Default: ComponentStory<typeof Form> = () => {
  const firstNameField = useField('firstName')
  const lastNameField = useField('lastName')

  return (
    <div>
      <fieldset>
        <label>First name</label>
        <input {...firstNameField.attributes} value={firstNameField.attributes.value ?? ''} />
      </fieldset>
      <fieldset>
        <label>Last name</label>
        <input {...lastNameField.attributes} value={lastNameField.attributes.value ?? ''} />
      </fieldset>
    </div>
  )
}

export const PersonForm: ComponentStory<typeof Form> = () => (
  <div>
    <div>
      <TextField name="firstName" label="First name" placeholder="John e.g." />
    </div>
    <div>
      <TextField name="lastName" label="Last name" placeholder="Doe e.g." />
    </div>
  </div>
)
