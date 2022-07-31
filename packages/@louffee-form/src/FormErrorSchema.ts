type FormErrorSchema<V> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof V]?: V[K] extends any[]
    ? V[K][number] extends object
      ? FormErrorSchema<V[K][number]>[] | string | string[]
      : string | string[]
    : V[K] extends object
    ? FormErrorSchema<V[K]>
    : string
}

export default FormErrorSchema
