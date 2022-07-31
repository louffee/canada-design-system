import type FormErrorSchema from '../FormErrorSchema'

interface UseFormStateReturnType<V extends object> {
  values: V
  errors: FormErrorSchema<V>
  isSubmitting: boolean
  isValidating: boolean
}

export default UseFormStateReturnType
