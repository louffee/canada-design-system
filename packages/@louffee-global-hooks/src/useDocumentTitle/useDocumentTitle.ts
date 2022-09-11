import useReference from '../useRef/useRef'
import useEffect from '../useEffect/useEffect'

import defaultUseDocumentTitleProps from './defaultUseDocumentTitleProps'
import type UseDocumentTitleProps from './UseDocumentTitleProps'

function useDocumentTitle(title: string, options: UseDocumentTitleProps = defaultUseDocumentTitleProps) {
  const previousTitleReference = useReference<string | undefined>(document.title)

  if (document.title !== title) {
    document.title = title
  }

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    return options && options.restoreOnUnmount
      ? /* eslint-disable indent */
        () => {
          document.title = previousTitleReference.current
        }
      : undefined
    /* eslint-enable indent */
  }, [])
  /* eslint-enable react-hooks/exhaustive-deps */
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default typeof document !== 'undefined' ? useDocumentTitle : (_title: string) => {}
