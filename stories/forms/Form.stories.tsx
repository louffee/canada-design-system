import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import useField from '../../packages/@louffee-form/src/useField/useField'
import Form from '../../packages/@louffee-form/src/Form'

import type FormErrorSchema from '../../packages/@louffee-form/src/FormErrorSchema'

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

function validate(values: Values): FormErrorSchema<Values> {
  const errors: FormErrorSchema<Values> = {}

  if (!values.firstName) {
    errors.firstName = 'First name is required'
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is required'
  }

  return errors
}

export default {
  title: 'Components/Forms/Form',
  component: Form,
  decorators: [
    (Story) => (
      <Form onSubmit={handleSubmit} validate={validate}>
        {({ values }) => (
          <>
            <Story />
            <code>{JSON.stringify({ ...values })}</code>
          </>
        )}
      </Form>
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
