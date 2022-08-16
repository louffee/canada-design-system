import { isiOSSafari } from 'quebec'

import useCallback from '../useCallback/useCallback'

function useClipboard() {
  const copy = useCallback(async (textClipboardContent: string) => {
    if (typeof window === 'undefined') {
      return
    }

    if (isiOSSafari()) {
      const input = document.createElement('input')
      input.style.display = 'none'
      input.value = textClipboardContent
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    } else {
      await navigator.clipboard.writeText(textClipboardContent)
    }
  }, [])

  return [copy]
}

export default useClipboard
