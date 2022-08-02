import * as React from 'react'

import { useField as useFormikField } from 'formik'

import type UseFieldReturnType from './UseFieldReturnType'
import type GeneratedFieldProps from './GeneratedFieldProps'
import type GeneratedFieldMeta from './GeneratedFieldMeta'

function useField<FieldValue>(
  fieldName: string,
  attributes:
    | React.InputHTMLAttributes<HTMLInputElement>
    | React.InputHTMLAttributes<HTMLTextAreaElement>
    | React.InputHTMLAttributes<HTMLSelectElement> = {}
): UseFieldReturnType<FieldValue> {
  const [field, meta] = useFormikField<FieldValue>({ name: fieldName, ...attributes })

  return {
    attributes: field as unknown as GeneratedFieldProps,
    meta: {
      touched: meta.touched,
      value: meta.value,
      error: meta.error,
      initialValue: meta.initialValue,
    } as GeneratedFieldMeta<FieldValue>,
  }
}

export default useField
