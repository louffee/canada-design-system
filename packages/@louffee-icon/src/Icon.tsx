import * as React from 'react'
import { useDeveloperChecks } from '@louffee/canada-global-hooks'

import icons from './icons'
import type IconProps from './IconProps'

const Icon = React.memo<IconProps>(({ name, size, color }) => {
  const Component = React.useMemo(() => icons[name], [name])

  useDeveloperChecks({ name }, (componentProps) => {
    if (!Object.keys(icons).includes(componentProps.name)) {
      return {
        type: 'warn',
        message: `Icon "${componentProps.name}" does not exist. The component will not render anything.`,
      }
    }
  })

  if (!Component) {
    return
  }

  return <Component aria-label={name} color={color} size={size} />
})

Icon.displayName = 'Icon'

export default Icon
