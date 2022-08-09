import useRef from '../useRef/useRef'
import useEffect from '../useEffect/useEffect'

import defaultUseDocumentTitleProps from './defaultUseDocumentTitleProps'

import type UseDocumentTitleProps from './UseDocumentTitleProps'

function useDocumentTitle(title: string, options: UseDocumentTitleProps = defaultUseDocumentTitleProps) {
  const previousTitleRef = useRef<string | undefined>(document.title)

  if (document.title !== title) {
    document.title = title
  }

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (options && options.restoreOnUnmount) {
      return () => {
        document.title = previousTitleRef.current
      }
    } else {
      return
    }
  }, [])
  /* eslint-enable react-hooks/exhaustive-deps */
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default typeof document !== 'undefined' ? useDocumentTitle : (_title: string) => {}
