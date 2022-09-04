import type * as React from 'react'

interface FieldMaskObject {
  parse: (value: any) => string
  format: (value: string) => any

  customKeyDownHandler?: React.KeyboardEventHandler<HTMLElement>
}

export default FieldMaskObject
