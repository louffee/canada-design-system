import * as React from 'react'

import type UseBackdropControlsProps from './UseBackdropControlsProps'

function useBackdropControls<TElement extends HTMLElement>({ onClose }: UseBackdropControlsProps<TElement>) {
  const handleBackdropClick = React.useCallback(
    (event?: React.MouseEvent<TElement>) => {
      event?.preventDefault()

      if (typeof onClose === 'function') {
        onClose(event)
      }
    },
    [onClose],
  )

  return { handleBackdropClick }
}

export default useBackdropControls
