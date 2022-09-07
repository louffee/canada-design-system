import type * as React from 'react'

import type FormErrorSchema from './FormErrorSchema'

interface FormRenderFunctionProps<V extends object> {
  values: Partial<V>
  errors?: FormErrorSchema<V>

  isSubmitting?: boolean
  isValidating?: boolean

  handleSubmit: (event?: Partial<Pick<React.SyntheticEvent, 'preventDefault' | 'stopPropagation'>>) => void
}

export default FormRenderFunctionProps
