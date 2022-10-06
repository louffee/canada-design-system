import * as React from 'react'
import { styled, keyframes, type LouThemeSchema } from '@louffee/canada-style-system'

import type CircularProgressProps from './CircularProgressProps'

// MARK: - Styles
const rotateKeyframes = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
})

const dashKeyframes = keyframes({
  '0%': {
    strokeDasharray: '1,200',
    strokeDashoffset: 0,
  },
  '50%': {
    strokeDasharray: '89,200',
    strokeDashoffset: -35,
  },
  '100%': {
    strokeDasharray: '89,200',
    strokeDashoffset: -124,
  },
})

const colors = ({ colors: { primary } }: LouThemeSchema) =>
  keyframes({
    '100%, 0%': {
      stroke: primary.main,
    },
    '40%': {
      stroke: primary[50],
    },
    '66%': {
      stroke: primary[70],
    },
    '80%, 90%': {
      stroke: primary[60],
    },
  })

const Loader = styled('svg')<Required<Pick<CircularProgressProps, 'size'>>>(({ size }) => ({
  animation: `${rotateKeyframes} 2s linear infinite`,
  position: 'relative',

  width: size,
  height: size,

  cursor: 'wait',
}))

const Circle = styled('circle')(({ theme }) => {
  const colorsKeyframes = colors(theme)

  return {
    strokeDasharray: '1,200',
    strokeDashoffset: 0,
    stroke: theme.colors.primary.main,
    strokeLinecap: 'round',
    animation: `${dashKeyframes} 1.5s ease-in-out infinite, ${colorsKeyframes} 6s ease-in-out infinite`,
  }
})

// MARK: - JSX
const CircularProgress: React.FC<CircularProgressProps> = ({ thickness = 5, size = 100, radii = 20 }) => (
  <Loader size={size}>
    <Circle
      r={radii}
      cx={size / 2}
      cy={size / 2}
      fill='none'
      strokeWidth={thickness}
      strokeMiterlimit={thickness * 2}
    />
  </Loader>
)

export default CircularProgress
