import { useField as useFinalField } from 'react-final-form'

import type UseFieldReturnType from './UseFieldReturnType'
import type GeneratedFieldProps from './GeneratedFieldProps'
import type GeneratedFieldMeta from './GeneratedFieldMeta'
import type UseFieldConfiguration from './UseFieldConfiguration'

function useField<FieldValue>(
  fieldName: string,
  configuration: UseFieldConfiguration<FieldValue> = {}
): UseFieldReturnType {
  const { input, meta } = useFinalField<FieldValue>(fieldName, configuration)

  return {
    attributes: input as unknown as GeneratedFieldProps,
    meta: {
      touched: meta.touched,
      error: meta.error,
    } as GeneratedFieldMeta,
  }
}

export default useField
