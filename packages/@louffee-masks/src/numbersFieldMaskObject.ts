import type { FieldMaskObject } from '@louffee/canada-text-field'

const numbersFieldMaskObject: FieldMaskObject = {
  format(value) {
    if (!value) {
      return ''
    }

    const str = String(value).replace(/[^0-9]/g, '')

    return str
  },
  parse(value) {
    if (!value) {
      return ''
    }

    const str = String(value).replace(/[^0-9]/g, '')

    return str
  },
}

export default numbersFieldMaskObject
