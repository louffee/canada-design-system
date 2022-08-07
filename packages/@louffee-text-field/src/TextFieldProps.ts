import type { InputProps } from '@louffee/canada-input'
import type { UseFieldConfiguration } from '@louffee/canada-form'

interface TextFieldProps extends InputProps, Pick<UseFieldConfiguration<string>, 'format' | 'parse'> {}

export default TextFieldProps
