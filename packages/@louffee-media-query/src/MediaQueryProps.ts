import type * as React from 'react'

interface MediaQueryProps {
  when: `(${string}: ${string})` | `(${string})`
  children?: React.ReactNode
}

export default MediaQueryProps
