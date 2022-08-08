import useState from '../useState/useState'
import useMemo from '../useMemo/useMemo'

import multiChannelLocaleSearch from './multiChannelLocaleSearch'

import type SupportedLocale from './SupportedLocale'
import type UseLocaleProps from './UseLocaleProps'

function useLocale({ localeSearchAlgorithm }: UseLocaleProps = {}) {
  const [locale, setLocale] = useState<SupportedLocale>('en_CA')

  useMemo(() => {
    const result = (localeSearchAlgorithm ?? multiChannelLocaleSearch)()

    if (result) {
      setLocale(result)
    }
  }, [setLocale, localeSearchAlgorithm])

  return locale
}

export default useLocale
