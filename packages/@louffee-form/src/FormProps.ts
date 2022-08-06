import type FormRenderFunction from './FormRenderFunction'
import type FormHandleSubmitFunction from './FormHandleSubmitFunction'
import type FormValidateFunction from './FormValidateFunction'

interface FormProps<V extends object> {
  onSubmit: FormHandleSubmitFunction<V>
  validate?: FormValidateFunction<V>

  children: FormRenderFunction<V>

  initialValues?: Partial<V>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValuesDependencies?: any[]
}

export default FormProps
