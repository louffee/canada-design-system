import { toRem } from '@louffee/canada-style-system'

import type InputSize from './InputSize'

const HEIGHT_PER_SIZE: { [K in InputSize]: string } = {
  small: toRem(24),
  medium: toRem(28),
  large: toRem(32),
}

const inputConstants = {
  HEIGHT_PER_SIZE,
}

export default inputConstants
