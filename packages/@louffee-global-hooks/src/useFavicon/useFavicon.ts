import useEffect from '../useEffect/useEffect'

// eslint-disable-next-line quotes
const LINK_REL_UNESCAPED_ICON = "link[rel*='icon']"

const useFavicon = (href: string) => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const link: HTMLLinkElement = document.querySelector(LINK_REL_UNESCAPED_ICON) || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = href
    document.querySelectorAll('head')[0].append(link)
  }, [href])
}

export default useFavicon
