import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeProvider } from '@louffee/canada-style-system'
import { SoftButton } from '@louffee/canada-button'

import useFormState from '../../packages/@louffee-form/src/useFormState/useFormState'
import useField from '../../packages/@louffee-form/src/useField/useField'
import createValidation from '../../packages/@louffee-form/src/createValidation'
import errorSchema from '../../packages/@louffee-form/src/errorSchema'
import Form from '../../packages/@louffee-form/src/Form'
import TextField from '../../packages/@louffee-text-field/src/TextField'
import * as masks from '../../packages/@louffee-masks/src/index'

import '@louffee/canada-utility-classes'

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
      <TextField name='firstName' label='First name' placeholder='John e.g.' />
    </div>
    <div>
      <TextField name='lastName' label='Last name' placeholder='Doe e.g.' />
    </div>
  </div>
)

export const AddressForm: ComponentStory<typeof Form> = () => {
  type FormValues = {
    addressLine1?: string
    addressLine2?: string
    phoneCountryCode?: string
    phoneNumber?: string
  }

  const { values, forceSubmit } = useFormState<FormValues>()

  return (
    <div className='flex flex-col max-width-800 margin-x-auto gap-10'>
      <div className='flex align-center gap-10'>
        <div className='flex-2'>
          <TextField name='addressLine1' label='Please enter your address line' />
        </div>
        <div className='flex-1'>
          <TextField name='addressLine2' label='Please enter your address line (optional)' />
        </div>
      </div>

      <TextField name='city' label='Enter the name of the city where you live' />
      <div className='flex align-center gap-10'>
        <div>
          <TextField name='phoneCountryCode' mask={masks.phoneCountryCode} label='Phone country code' />
        </div>
        <div className='flex-1'>
          <TextField name='phone' mask={masks.phone(values.phoneCountryCode)} label='Enter your phone' />
        </div>
      </div>
      <div className='flex justify-end'>
        <SoftButton type='submit' onClick={forceSubmit}>
          Submit
        </SoftButton>
      </div>
    </div>
  )
}
