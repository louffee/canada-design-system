import type FormErrorSchema from './FormErrorSchema'

type FormValidateFunction<V extends object> = (values: Partial<V>) => FormErrorSchema<V>

export default FormValidateFunction
