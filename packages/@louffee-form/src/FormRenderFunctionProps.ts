import type FormErrorSchema from './FormErrorSchema'

interface FormRenderFunctionProps<V extends object> {
  values: Partial<V>
  errors?: FormErrorSchema<V>

  isSubmitting?: boolean
  isValidating?: boolean
}

export default FormRenderFunctionProps
