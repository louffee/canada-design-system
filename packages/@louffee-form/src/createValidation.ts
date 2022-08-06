import type FormErrorSchema from './FormErrorSchema'

function createValidation<FormValues extends object>(
  validate: (values: Partial<FormValues>) => FormErrorSchema<FormValues>
) {
  return validate
}

export default createValidation
