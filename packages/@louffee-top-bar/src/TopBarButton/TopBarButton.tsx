import * as React from 'react'

import { styled } from '@louffee/canada-style-system'
import Typography from '@louffee/canada-typography'

import type TopBarButtonProps from './TopBarButtonProps'

const NativeButton = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',

  paddingBlock: theme.spacing.small,
  paddingInline: theme.spacing.extraLarge,

  borderRadius: theme.radii.large,
  borderWidth: 1,
  borderColor: theme.colors.grey[99],
  borderStyle: 'solid',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  whiteSpace: 'nowrap',

  transition: 'all 200ms',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.grey[99],
  },
}))

const TopBarButton = React.memo<TopBarButtonProps>(({ children, className, ...props }) => (
  <NativeButton {...props} className={['top-bar-button flex align-center', className].join(' ')}>
    <Typography variant='labelMedium' color='var(--primary-0)'>
      {children}
    </Typography>
  </NativeButton>
))

TopBarButton.displayName = 'TopBar.Button'

export default TopBarButton
