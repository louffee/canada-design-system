import type SupportedLocale from './SupportedLocale'

function fromLocationSearch(): SupportedLocale | undefined {
  let supportedLocale: SupportedLocale | undefined

  const params = new URLSearchParams(window.location.search)

  if (params.has('lang')) {
    const lang = params.get('lang')

    if (lang) {
      supportedLocale = lang.replace('-', '_') as SupportedLocale
    }
  }

  return supportedLocale
}

function fromNavigation(): SupportedLocale | undefined {
  if (typeof window.navigator?.language === 'string' && window.navigator.language.length >= 1) {
    return window.navigator.language.replace('-', '_') as SupportedLocale
  }

  if (
    Array.isArray(window.navigator?.languages) &&
    window.navigator.languages.length >= 1 &&
    typeof window.navigator.languages[0] === 'string'
  ) {
    return window.navigator.languages[0].replace('-', '_') as SupportedLocale
  }

  return undefined
}

function multiChannelLocaleSearch(): SupportedLocale | undefined {
  if (typeof window === 'undefined') {
    return undefined
  }

  if (typeof window.location?.search === 'string') {
    const supportedLocale = fromLocationSearch()

    if (supportedLocale) {
      return supportedLocale
    }
  }

  const navigationLocale = fromNavigation()

  return navigationLocale
}

export default multiChannelLocaleSearch
