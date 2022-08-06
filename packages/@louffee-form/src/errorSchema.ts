import type FormErrorSchema from './FormErrorSchema'

function errorSchema<FormValues extends object>() {
  const errors: FormErrorSchema<FormValues> = {}

  return errors
}

export default errorSchema
