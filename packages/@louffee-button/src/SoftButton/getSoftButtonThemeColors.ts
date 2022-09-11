import { type CSSObject, type LouThemeSchema } from '@louffee/canada-style-system'

import type SoftButtonProps from './SoftButtonProps'

type GetSoftButtonThemeColorsReturnType = {
  [Color in SoftButtonProps['color']]: {
    [Stage in 'disabled' | 'enabled' | 'hover']: CSSObject
  }
}

const getSoftButtonThemeColors = ({ colors, shadows }: LouThemeSchema): GetSoftButtonThemeColorsReturnType => ({
  primary: {
    disabled: {
      color: colors.grey[80],
      backgroundColor: colors.grey[95],
      borderColor: colors.grey[95],
    },

    enabled: {
      color: colors.primary.main,
      backgroundColor: colors.primary[90],
      borderColor: colors.primary[90],
    },

    hover: {
      backgroundColor: colors.primary[100],
      borderColor: colors.primary[100],
      boxShadow: shadows.slight,
    },
  },
  secondary: {
    disabled: {
      color: colors.grey[30],
    },

    enabled: {
      color: colors.secondary[0],
      backgroundColor: colors.grey[95],
      borderColor: colors.grey[95],
    },

    hover: {
      backgroundColor: colors.grey[80],
      borderColor: colors.grey[80],
    },
  },
  error: {
    disabled: {
      color: colors.grey[80],
      backgroundColor: colors.grey[95],
      borderColor: colors.grey[95],
    },
    enabled: {
      color: colors.error.main,
      backgroundColor: colors.error.light,
      borderColor: colors.error.main,
    },
    hover: {
      backgroundColor: colors.error.main,
      borderColor: colors.error.main,
      boxShadow: shadows.slight,
    },
  },
})

export default getSoftButtonThemeColors
