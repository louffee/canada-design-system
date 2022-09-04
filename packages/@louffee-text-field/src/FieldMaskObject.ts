interface FieldMaskObject {
  parse: (value: any) => string
  format: (value: string) => any
}

export default FieldMaskObject
