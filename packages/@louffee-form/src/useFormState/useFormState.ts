import {
  useFormState as useFormStateReactHookForm,
  useFormContext as useFormContextReactHookForm,
} from 'react-hook-form'

import type FormErrorSchema from '../FormErrorSchema'
import UseFormStateReturnType from './UseFormStateReturnType'

function useFormState<V extends object>(): UseFormStateReturnType<V> {
  const { errors, isSubmitting, isValidating } = useFormStateReactHookForm<V>()
  const { getValues } = useFormContextReactHookForm<V>()

  return {
    errors: errors as unknown as FormErrorSchema<V>,
    values: getValues(),
    isSubmitting,
    isValidating,
  }
}

export default useFormState
