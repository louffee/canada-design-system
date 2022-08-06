type FormErrorSchema<FormValues extends object> = {
  [FormRecordKey in keyof FormValues]?: string
}

export default FormErrorSchema
