type FormErrorSchema<V> = {
  [InvalidField in keyof V]?: string
}

export default FormErrorSchema
