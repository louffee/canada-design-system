import type * as React from 'react'

interface TopBarProps {
  left?: React.ReactNode
  right?: React.ReactNode

  children: React.ReactNode

  className?: string
}

export default TopBarProps
