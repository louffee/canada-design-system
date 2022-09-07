import { type FieldMaskObject } from '@louffee/canada-text-field'

const BRAZIL_COUNTRY_CODE = '55'
const UNITED_STATES_COUNTRY_CODE = '1'
const GREAT_BRITAIN_COUNTRY_CODE = '44'

function phoneFieldMaskObject(phoneCountryCode: string): FieldMaskObject {
  const countryCode = phoneCountryCode?.replace('+', '').trim() ?? ''

  switch (countryCode) {
    case BRAZIL_COUNTRY_CODE: {
      return {
        format(value) {
          if (!value) {
            return ''
          }

          let formattedValue = value.replace(/\D/g, '')
          formattedValue = formattedValue.replace(/^0/, '')

          if (formattedValue.length > 11) {
            formattedValue = formattedValue.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3')
          } else if (formattedValue.length > 7) {
            formattedValue = formattedValue.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, '($1) $2-$3')
          } else if (formattedValue.length > 2) {
            formattedValue = formattedValue.replace(/^(\d\d)(\d{0,5})/, '($1) $2')
          } else if (value.trim() !== '') {
            formattedValue = formattedValue.replace(/^(\d*)/, '($1')
          }
          return formattedValue
        },
        parse(value) {
          return value ? String(value).substring(0, 15) : ''
        },
      }
    }
    case UNITED_STATES_COUNTRY_CODE:
    case GREAT_BRITAIN_COUNTRY_CODE:
    default: {
      return {
        format(value) {
          if (!value) {
            return ''
          }

          return String(value).replace(/[^\s0-9]/g, '')
        },
        parse(value) {
          return value ?? ''
        },
      }
    }
  }
}

export default phoneFieldMaskObject
