import { type FieldMaskObject } from '@louffee/canada-text-field'

import emojiFlagsByPhoneCountryCode from './emojiFlagsByPhoneCountryCode'

const phoneCountryCodeFieldMaskObject: FieldMaskObject = {
  parse(value) {
    return String(value).replace(/\D/g, '')
  },

  format(value) {
    if (!value) {
      return ''
    }

    let string_ = String(value)

    if (!string_.startsWith('+')) {
      string_ = `+${string_}`
    }

    const codeWithoutFlag = string_.replace(/[^\d+]/g, '').trim()
    const result = `${string_} ${emojiFlagsByPhoneCountryCode[codeWithoutFlag] || ''}`.trim()

    return result
  },
  customKeyDownHandler(event) {
    if (!event) {
      return
    }

    const inputElement = event.target as HTMLInputElement | undefined

    if (!inputElement.setSelectionRange) {
      return
    }

    const value = inputElement?.value

    if (!value) {
      return
    }

    const blankIndex = value.indexOf(' ')

    if (blankIndex === -1) {
      return
    }

    if (!value?.endsWith(' ')) {
      inputElement.setSelectionRange(blankIndex, blankIndex)
    }
  },
}

export default phoneCountryCodeFieldMaskObject
