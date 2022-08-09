import useState from '../useState/useState'
import useEffect from '../useEffect/useEffect'

import getValue from './getValue'

function useSearchParam(param: string): string | null {
  const location = window?.location
  const [value, setValue] = useState<string | null>(() => getValue(location.search, param))

  useEffect(() => {
    const onChange = () => {
      setValue(getValue(location.search, param))
    }

    window.addEventListener('popstate', onChange)
    window.addEventListener('pushstate', onChange)
    window.addEventListener('replacestate', onChange)

    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener('pushstate', onChange)
      window.removeEventListener('replacestate', onChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return value
}

export default useSearchParam
