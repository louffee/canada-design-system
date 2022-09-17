import * as React from 'react'
import Typography from '@louffee/canada-typography'
import { isReactComponent, isReactElement } from '@louffee/canada-react-utils'

import type TooltipProps from './TooltipProps'

function renderTooltipChild(renderProperty: TooltipProps['render']): React.ReactElement | undefined {
  if (typeof renderProperty === 'string') {
    return <Typography variant='bodyMedium'>{renderProperty}</Typography>
  }

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

export default renderTooltipChild
