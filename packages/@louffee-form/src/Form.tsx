import * as React from 'react'

import { useForm, DeepPartial } from 'react-hook-form'

import type FormProps from './FormProps'
import type FormErrorSchema from './FormErrorSchema'

const Form = <V extends object>({ children, handleSubmit, initialValues }: FormProps<V>): React.ReactElement | null => {
  const {
    getValues,
    handleSubmit: handleFormSubmit,
    formState: { errors: formErrors, isSubmitting, isValidating },
  } = useForm<V>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    criteriaMode: 'firstError',
    defaultValues: initialValues as DeepPartial<V>,
  })

  return (
    <form onSubmit={handleFormSubmit(handleSubmit)}>
      {children({
        values: getValues(),
        errors: formErrors as unknown as FormErrorSchema<V>,
        isSubmitting,
        isValidating,
      })}
    </form>
  )
}

export default Form
