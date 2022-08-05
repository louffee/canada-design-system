import useEffect from '../useEffect/useEffect'
import useCallback from '../useCallback/useCallback'
import useMemo from '../useMemo/useMemo'

import type DocumentEventListener from './DocumentEventListener'
import type UseDocumentEventOptions from './UseDocumentEventOptions'
import type DocumentEventName from './DocumentEventName'

function useDocumentEvent(
  eventName: DocumentEventName,
  eventListener: DocumentEventListener<typeof eventName>,
  options?: UseDocumentEventOptions
) {
  const memoizedEventName = useMemo(() => eventName, [eventName])
  const memoizedEventListener = useCallback(eventListener, [eventListener])
  const memoizedOptions = useMemo(() => options, [options])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.addEventListener(memoizedEventName, memoizedEventListener)

    return () => {
      if (!memoizedOptions?.detachListenerAtCleanup) {
        return
      }

      document.removeEventListener(memoizedEventName, memoizedEventListener)
    }
  }, [memoizedEventName, memoizedEventListener, memoizedOptions])
}

export default useDocumentEvent
