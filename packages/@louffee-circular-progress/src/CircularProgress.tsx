import * as React from 'react'
import { styled, keyframes, LouTheme } from '@louffee/canada-style-system'

import type CircularProgressProps from './CircularProgressProps'

type Theme = typeof LouTheme

const rotateKeyframes = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dashKeyframes = keyframes`
  0%{
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50%{
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35;
  }
  100%{
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124;
  }
`

const colors = ({ colors: { primary } }: Theme) => keyframes`
  100%, 0% {
    stroke: ${primary.main};
  }
  40% {
    stroke: ${primary[50]};
  }
  66% {
    stroke: ${primary[70]};
  }
  80%, 90% {
    stroke: ${primary[60]};
  }
`

const Loader = styled('svg')<Required<Pick<CircularProgressProps, 'size'>>>(({ size }) => ({
  animation: `${rotateKeyframes} 2s linear infinite`,
  position: 'relative',

  width: size,
  height: size,
}))

const Circle = styled('circle')(({ theme }) => ({
  strokeDasharray: '1,200',
  strokeDashoffset: 0,
  stroke: theme.colors.primary.main,
  strokeLinecap: 'round',
  animation: `${dashKeyframes} 1.5s ease-in-out infinite, ${colors(theme)} 6s ease-in-out infinite`,
}))

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
