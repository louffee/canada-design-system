import type * as React from 'react'

interface FieldMaskObject {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  parse: (value: any) => string
  format: (value: string) => any
  /* eslint-enable @typescript-eslint/no-explicit-any */

  customKeyDownHandler?: React.KeyboardEventHandler<HTMLElement>
}

export default FieldMaskObject
