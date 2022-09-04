import type * as React from 'react'

type HTMLAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  'size'
>

interface InputProps extends HTMLAttributes {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode

  label?: React.ReactNode

  error?: React.ReactNode
}

export default InputProps
