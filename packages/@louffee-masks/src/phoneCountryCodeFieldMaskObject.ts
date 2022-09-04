import { type FieldMaskObject } from '@louffee/canada-text-field'

import emojiFlagsByPhoneCountryCode from './emojiFlagsByPhoneCountryCode'

const phoneCountryCodeFieldMaskObject: FieldMaskObject = {
  parse(value) {
    return String(value).replace(/[^0-9]/g, '')
  },

  format(value) {
    if (!value) {
      return ''
    }

    let str = String(value)

    if (!str.startsWith('+')) {
      str = `+${str}`
    }

    const codeWithoutFlag = str.replace(/[^\+0-9]/g, '').trim()
    const result = `${str} ${emojiFlagsByPhoneCountryCode[codeWithoutFlag] || ''}`.trim()

    return result
  },
  customKeyDownHandler(event) {
    if (!event) {
      return
    }

    const inputEl = event.target as HTMLInputElement | undefined

    if (!inputEl.setSelectionRange) {
      return
    }

    const value = inputEl?.value

    if (!value) {
      return
    }

    const blankIndex = value.indexOf(' ')

    if (blankIndex === -1) {
      return
    }

    if (!value?.endsWith(' ')) {
      inputEl.setSelectionRange(blankIndex, blankIndex)
    }
  },
}

export default phoneCountryCodeFieldMaskObject
