import * as React from 'react'

import useEffect from '../useEffect/useEffect'
import useCallback from '../useCallback/useCallback'

import type UseWindowSizeReturnType from './UseWindowSizeReturnType'

function useWindowSize(): UseWindowSizeReturnType {
  const [size, setSize] = React.useState<UseWindowSizeReturnType>({ height: 0, width: 0 })

  const updateSize = useCallback(() => {
    setSize({ height: window.innerHeight, width: window.innerWidth })
  }, [setSize])

  useEffect(() => {
    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return size
}

export default useWindowSize
