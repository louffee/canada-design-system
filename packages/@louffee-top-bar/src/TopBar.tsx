import * as React from 'react'

import { styled, toRem } from '@louffee/canada-style-system'
import { useDeveloperChecks } from '@louffee/canada-global-hooks'

import TopBarButton from './TopBarButton/TopBarButton'

import type TopBarProps from './TopBarProps'

const Container = styled('header')(({ theme: { colors, spacing, radii, shadows } }) => ({
  gap: spacing.medium,

  padding: toRem(20),
  backgroundColor: colors.white,

  borderRadius: radii.rounded,
  boxShadow: shadows.slight,

  height: 46,
}))

const $$TopBar: React.FC<TopBarProps> = ({ left, children, right }) => {
  useDeveloperChecks({ left, children, right }, (componentProps) => {
    if (!React.isValidElement(componentProps.children)) {
      return {
        type: 'error',
        message: `TopBar children must be a valid React element. Received ${componentProps.children}`,
      }
    }

    if (typeof componentProps.left === 'string') {
      return {
        type: 'warn',
        message: [
          'TopBar:',
          'It is recommended to use a React component for the left side of the TopBar instead of a string.',
          'If you are expecting to render an image, insert the element in the prop.',
        ].join(' '),
      }
    }
  })

  return (
    <Container className='louffee-top-bar flex justify-between align-center m-16'>
      <div className='louffee-top-bar-left-area flex align-center gap-8'>{left}</div>
      <div className='louffee-top-bar-center-area flex align-center gap-8'>{children}</div>
      <div className='louffee-top-bar-right-area flex align-center gap-8'>{right}</div>
    </Container>
  )
}

const TopBar = React.memo($$TopBar) as React.NamedExoticComponent<TopBarProps> & {
  Button: typeof TopBarButton
}

TopBar.displayName = 'TopBar'
TopBar.Button = TopBarButton

export default TopBar
