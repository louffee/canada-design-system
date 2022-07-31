import type FormRenderFunction from './FormRenderFunction'
import type FormHandleSubmitFunction from './FormHandleSubmitFunction'
import type FormValidateFunction from './FormValidateFunction'

interface FormProps<V extends object> {
  handleSubmit: FormHandleSubmitFunction<V>
  validate?: FormValidateFunction<V>

  children: FormRenderFunction<V>

  initialValues?: Partial<V>
}

export default FormProps
