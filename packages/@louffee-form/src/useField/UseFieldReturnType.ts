import type GeneratedFieldProps from './GeneratedFieldProps'
import type GeneratedFieldMeta from './GeneratedFieldMeta'

interface UseFieldReturnType<FieldValue> {
  attributes: GeneratedFieldProps
  meta: GeneratedFieldMeta<FieldValue>
}

export default UseFieldReturnType
