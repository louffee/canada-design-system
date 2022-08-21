import * as React from 'react'

import type LouffeeProps from './LouffeeProps'

const Louffee: React.FC<LouffeeProps> = ({ color, label, size }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 130 130'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-label={label}>
    <circle cx='58.5' cy='70.5' r='36.5' stroke={color} strokeWidth='6' />
    <line x1='23.0211' y1='30.0486' x2='21.9994' y2='72.0486' stroke={color} strokeWidth='6' />
    <line x1='59.4142' y1='14.5858' x2='115.987' y2='71.1589' stroke={color} strokeWidth='6' />
    <line x1='59' y1='107' x2='97' y2='107' stroke={color} strokeWidth='6' />
  </svg>
)

export default Louffee
