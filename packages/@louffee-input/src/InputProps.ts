import type * as React from 'react'

type HTMLAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  'size'
>

interface InputProps extends HTMLAttributes {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode

  /**
   * A text or element which describes the input field.   As designed, it is
   * recommended to contain and display a small phrase or sentence such as
   * the one given in the example notation.
   *
   * The `aria-label` attribute is used to provide a label for screen readers,
   * respecting the WAI-ARIA specification.
   *
   * @see {@link https://www.w3.org/TR/wai-aria-practices-1.1/#label}
   *
   * @default undefined
   * @example 'Please enter your name'
   */
  label?: React.ReactNode

  /**
   * An error notation that is displayed below the input label tag.  It is
   * recommended to be used when a validation is necessary to be shown to the
   * end-user.
   *
   * @default undefined
   */
  error?: React.ReactNode
}

export default InputProps
