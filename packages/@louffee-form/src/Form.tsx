import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'

import { useDeveloperChecks } from '@louffee/canada-global-hooks'

import type FormProps from './FormProps'
import type FormErrorSchema from './FormErrorSchema'

const Form = <FormValues extends object>({
  children,
  onSubmit,
  initialValues = {},
  initialValuesDependencies = [],
  validate,
}: FormProps<FormValues>): React.ReactElement | null => {
  useDeveloperChecks({ children, onSubmit }, (componentProps) => {
    if (typeof componentProps.children !== 'function') {
      return {
        type: 'error',
        message: 'Form children prop must be a FaCC (function as component child).',
      }
    }

    if (typeof onSubmit !== 'function') {
      return {
        type: 'error',
        message: 'Form onSubmit function prop must be a function.',
      }
    }

    if (typeof initialValues !== 'object' || initialValues === null) {
      return {
        type: 'error',
        message: 'Form initialValues prop must be an object.',
      }
    }

    if (!Array.isArray(initialValuesDependencies)) {
      return {
        type: 'error',
        message: 'Form initialValuesDependencies prop must be an array.',
      }
    }
  })

  // We need to disable the exhaustive-deps lint rule because, depending on the render state of React,
  // the initialValues may be updated after the initial render, breaking the rule and possibly causing
  // the Form to render with an outdated initialValues or overriding the wanted initialValues.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedInitialValues = React.useMemo<typeof initialValues>(() => initialValues, [initialValuesDependencies])

  return (
    <FinalForm
      onSubmit={onSubmit}
      initialValues={memoizedInitialValues}
      validate={validate}
      render={({ errors, handleSubmit, validating, submitting, values }) =>
        children({
          values,
          errors: errors as unknown as FormErrorSchema<FormValues>,
          isSubmitting: submitting,
          isValidating: validating,
          handleSubmit,
        })
      }
    />
  )
}

export default Form
