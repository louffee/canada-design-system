import { toRem, LouTheme, type CSSObject } from '@louffee/canada-style-system'

import buttonConstants from './buttonConstants'
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
  { size, disabled, fullWidth }: Pick<ButtonProps, 'size' | 'disabled' | 'fullWidth'>,
): CSSObject => ({
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

  transition: theme.transitions.smooth,

  paddingInline: toRem(16),
  paddingBlock: toRem(10),
  height: HEIGHT_PER_SIZE[size],

  ...(disabled && {
    color: theme.colors.grey[80],
    backgroundColor: theme.colors.grey[95],
    borderColor: theme.colors.grey[90],
    cursor: 'not-allowed',
    pointerEvents: 'none',
  }),

  [`.${buttonConstants.START_ICON_CLASS_NAME}, .${buttonConstants.END_ICON_CLASS_NAME}`]: {
    position: 'relative',
    top: 2,
  },

  [`.${buttonConstants.START_ICON_CLASS_NAME}`]: {
    marginRight: theme.spacing.extraSmall,
  },

  [`.${buttonConstants.END_ICON_CLASS_NAME}`]: {
    marginLeft: theme.spacing.extraSmall,
  },
})

export default computeButtonGenericStyles
