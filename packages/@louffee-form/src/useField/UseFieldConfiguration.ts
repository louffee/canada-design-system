// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface UseFieldConfiguration<FieldValue, NativeInputValue = any> {
  afterSubmit?: () => void
  beforeSubmit?: () => boolean
  format?: (value: FieldValue, name: string) => NativeInputValue
  parse?: (value: NativeInputValue, name: string) => FieldValue
  type?: string
  multiple?: boolean
  initialValues?: FieldValue
}

export default UseFieldConfiguration
