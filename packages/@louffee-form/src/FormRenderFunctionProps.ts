import type FormErrorSchema from './FormErrorSchema'

interface FormRenderFunctionProps<V extends object> {
  values: V
  errors?: FormErrorSchema<V>

  isSubmitting?: boolean
  isValidating?: boolean
}

export default FormRenderFunctionProps
