import type * as React from 'react'

import type ButtonSize from './ButtonSize'
import type ButtonType from './ButtonType'

type HTMLButtonElementAttributes = Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  'children' | 'type' | 'color' | 'radioGroup' | 'inputMode' | 'defaultChecked' | 'checked'
>

interface ButtonProps extends HTMLButtonElementAttributes {
  children?: React.ReactNode

  type?: ButtonType
  size?: ButtonSize

  disabled?: boolean

  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export default ButtonProps
