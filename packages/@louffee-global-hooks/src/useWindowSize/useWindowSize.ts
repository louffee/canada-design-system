import * as React from 'react'

import useEffect from '../useEffect/useEffect'

import type UseWindowSizeReturnType from './UseWindowSizeReturnType'

function useWindowSize(): UseWindowSizeReturnType {
  const [size, setSize] = React.useState<UseWindowSizeReturnType>({ height: 0, width: 0 })

  useEffect(() => {
    function updateSize() {
      setSize({ height: window.innerHeight, width: window.innerWidth })
    }

    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return size
}

export default useWindowSize
