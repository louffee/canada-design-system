import * as React from 'react'

const CopyrightFooter = (): React.ReactElement => (
  <>
    <br />
    <br />

    <small
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius: 6,
        width: '100vw',
        padding: '1rem',
        pointerEvents: 'none',
      }}>
      Copyright &copy; Louffee, {new Date().getFullYear()}. All rights reserved.
    </small>
  </>
)

export default CopyrightFooter
