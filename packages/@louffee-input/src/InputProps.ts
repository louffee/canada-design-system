import type * as React from 'react'

import type InputSize from './InputSize'

type HTMLAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  'size'
>

interface InputProps extends HTMLAttributes {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode

  label?: React.ReactNode
  size?: InputSize
}

export default InputProps
