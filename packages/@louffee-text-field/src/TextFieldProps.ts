import type { InputProps } from '@louffee/input'
import type { UseFieldConfiguration } from '@louffee/form'

interface TextFieldProps extends InputProps, Pick<UseFieldConfiguration<string>, 'format' | 'parse'> {}

export default TextFieldProps
