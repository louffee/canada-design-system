import * as React from 'react'

function useEvent<E, P>(handler: (event: E) => void | ((props: P) => (event: E) => void)) {
  const handleEvent = React.useCallback(handler, [handler])

  return handleEvent
}

export default useEvent
