import type { InputProps } from '@louffee/canada-input'
import type { UseFieldConfiguration } from '@louffee/canada-form'
import FieldMaskObject from './FieldMaskObject'

interface TextFieldProps extends InputProps, Pick<UseFieldConfiguration<string>, 'format' | 'parse'> {
  mask?: FieldMaskObject
}

export default TextFieldProps
