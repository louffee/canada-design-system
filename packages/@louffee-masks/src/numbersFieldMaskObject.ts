import type { FieldMaskObject } from '@louffee/canada-text-field'

const numbersFieldMaskObject: FieldMaskObject = {
  format(value) {
    if (!value) {
      return ''
    }

    const string_ = String(value).replace(/\D/g, '')

    return string_
  },
  parse(value) {
    if (!value) {
      return ''
    }

    const string_ = String(value).replace(/\D/g, '')

    return string_
  },
}

export default numbersFieldMaskObject
