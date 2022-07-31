import { useFormikContext } from 'formik'

import type UseFormStateReturnType from './UseFormStateReturnType'

function useFormState<V extends object>(): UseFormStateReturnType<V> {
  const { errors, values, isSubmitting, isValidating } = useFormikContext<V>()

  return {
    errors,
    values,
    isSubmitting,
    isValidating,
  }
}

export default useFormState
