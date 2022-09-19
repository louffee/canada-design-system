import * as React from 'react'
import { isReactComponent, isReactElement } from '@louffee/canada-react-utils'

import type PopoverProps from './PopoverProps'

function renderPopoverChild(renderProperty: PopoverProps['render']): React.ReactElement | undefined {
  if (isReactComponent(renderProperty)) {
    const Component = renderProperty as React.ComponentType

    return <Component />
  }

  if (isReactElement(renderProperty)) {
    const element = renderProperty as React.ReactElement

    return <>{element}</>
  }

  if (typeof renderProperty === 'function') {
    const renderFunction = renderProperty as Function

    return renderFunction()
  }
}

export default renderPopoverChild
