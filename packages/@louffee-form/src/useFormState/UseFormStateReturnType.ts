import type FormErrorSchema from '../FormErrorSchema'

interface UseFormStateReturnType<FormValues extends object> {
  values: FormValues
  errors: FormErrorSchema<FormValues>
  isSubmitting: boolean
  isValidating: boolean
  modifiedSinceLastSubmit: boolean

  update: (fieldName: keyof FormValues, value: FormValues[keyof FormValues] | undefined) => void
  focus: (fieldName: keyof FormValues) => void
  blur: (fieldName: keyof FormValues) => void
  batchUpdatesNextRender(batchingFunction: () => void): void
  forceSubmit(): void
}

export default UseFormStateReturnType
