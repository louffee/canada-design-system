import { css, toRem, LouTheme } from '@louffee/style-system'

import type ButtonSize from './ButtonSize'
import type ButtonProps from './ButtonProps'

const HEIGHT_PER_SIZE: { [K in ButtonSize]: string } = {
  small: toRem(24),
  medium: toRem(32),
  large: toRem(40),
}

type Theme = typeof LouTheme

function computeButtonGenericStyles(theme: Theme, { size, disabled }: Pick<ButtonProps, 'size' | 'disabled'>) {
  return css({
    borderWidth: 1,
    borderRadius: theme.radii.small,

    minWidth: '140px',

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
}

export default computeButtonGenericStyles
