import * as React from 'react'

import { isReactComponent, isReactElement } from '@louffee/canada-react-utils'

import type TooltipProps from './TooltipProps'

function renderTooltipChild(renderProp: TooltipProps['render']): React.ReactElement | null {
  if (isReactComponent(renderProp)) {
    const Component = renderProp as React.ComponentType

    return <Component />
  }

  if (isReactElement(renderProp)) {
    const element = renderProp as React.ReactElement

    return <>{element}</>
  }

  if (typeof renderProp === 'function') {
    const renderFunc = renderProp as Function

    return renderFunc()
  }

  return null
}

export default renderTooltipChild
