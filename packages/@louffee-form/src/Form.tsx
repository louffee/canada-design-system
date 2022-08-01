import * as React from 'react'

import { useDeveloperChecks } from '@louffee/global-hooks'

import { Form as FormikForm, Formik as FormikRoot } from 'formik'

import type FormProps from './FormProps'

const Form = <V extends object>({
  children,
  onSubmit,
  initialValues = {},
  validate,
}: FormProps<V>): React.ReactElement | null => {
  useDeveloperChecks({ children }, (componentProps) => {
    if (typeof componentProps.children !== 'function') {
      return {
        type: 'error',
        message: 'Form children prop must be a FaCC (function as component child).',
      }
    }
  })

  return (
    <FormikRoot onSubmit={onSubmit} initialValues={initialValues} validate={validate}>
      {({ handleSubmit, values, errors, isSubmitting, isValidating }) => (
        <FormikForm onSubmit={handleSubmit}>{children({ values, errors, isSubmitting, isValidating })}</FormikForm>
      )}
    </FormikRoot>
  )
}

export default Form
