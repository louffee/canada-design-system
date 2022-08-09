import useEffect from '../useEffect/useEffect'

import type MountLifecycleFunction from './MountLifecycleFunction'

function useLifecycle(mount?: MountLifecycleFunction, unmount?: MountLifecycleFunction): void {
  useEffect(() => {
    if (typeof mount === 'function') {
      mount()
    }

    return () => {
      if (typeof unmount === 'function') {
        unmount()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useLifecycle
