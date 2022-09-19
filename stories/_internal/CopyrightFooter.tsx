import * as React from 'react'

import { styled } from '@louffee/canada-style-system'

const SmallText = styled('small')({
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  borderRadius: 6,
  width: '100vw',
  padding: '1rem',
  pointerEvents: 'none',
})

const CopyrightFooter = (): React.ReactElement => (
  <>
    <br />
    <br />

    <SmallText>Copyright &copy; Louffee, {new Date().getFullYear()}. All rights reserved.</SmallText>
  </>
)

export default CopyrightFooter
