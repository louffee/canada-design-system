import { toRem, LouTheme } from '@louffee/style-system'

import type ButtonSize from './ButtonSize'
import type ButtonProps from './ButtonProps'

const HEIGHT_PER_SIZE: { [K in ButtonSize]: string } = {
  small: toRem(24),
  medium: toRem(32),
  large: toRem(40),
}

type Theme = typeof LouTheme

const computeButtonGenericStyles = (
  theme: Theme,
  { size, disabled, fullWidth }: Pick<ButtonProps, 'size' | 'disabled' | 'fullWidth'>
) => ({
  borderWidth: 1,
  borderRadius: theme.radii.small,

  cursor: 'pointer',

  minWidth: '140px',

  ...(fullWidth && {
    width: '100%',
  }),

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all 300ms ease-in-out',

  paddingInline: toRem(16),
  paddingBlock: toRem(10),
  height: HEIGHT_PER_SIZE[size],

  ...(disabled && {
    cursor: 'not-allowed',
    pointerEvents: 'none',
  }),
})

export default computeButtonGenericStyles
