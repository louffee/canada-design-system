import * as React from 'react'

import type MediaQueryProps from './MediaQueryProps'

const MediaQuery: React.FC<MediaQueryProps> = ({ when, children }) => {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const mediaQueryList = window?.matchMedia(when)
    const handleChange = () => setMatches(!!mediaQueryList?.matches)

    mediaQueryList.addEventListener('change', handleChange)

    return () => mediaQueryList.removeEventListener('change', handleChange)
  }, [when])

  if (typeof window === 'undefined') {
    return
  }

  return <React.Fragment>{matches && children}</React.Fragment>
}

export default MediaQuery
